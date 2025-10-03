import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, BookOpen, Lightbulb, FileText } from "lucide-react";
import Link from "next/link";
import courseData from "@/data/course-content.json";
import type { CourseData } from "@/types/course";

const data = courseData as CourseData;

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const chapterId = parseInt(id);
  const chapter = data.chapters.find((ch) => ch.chapter === chapterId);

  if (!chapter) {
    return <div>Chapter not found</div>;
  }

  const part = data.parts.find((p) => p.chapters.includes(chapterId));

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="border-b bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Courses
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              {part && (
                <Badge style={{ backgroundColor: part.color }} className="text-white">
                  Part {part.part}
                </Badge>
              )}
              <Badge variant="outline">Chapter {chapter.chapter}</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Chapter Title */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="p-3 rounded-xl"
              style={{ backgroundColor: part?.color + "20" }}
            >
              <BookOpen className="h-8 w-8" style={{ color: part?.color }} />
            </div>
            <div>
              <h1 className="text-4xl font-bold">
                Chapter {chapter.chapter}: {chapter.title}
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                {chapter.totalPages} pages
              </p>
            </div>
          </div>

          {chapter.overview && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {chapter.overview}
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Key Takeaways */}
        <Card className="mb-8 border-2" style={{ borderColor: part?.color }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" style={{ color: part?.color }} />
              Key Takeaways
            </CardTitle>
            <CardDescription>
              {chapter.keyTakeaways.length} essential points from this chapter
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {chapter.keyTakeaways.map((takeaway, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: part?.color }}
                  >
                    {idx + 1}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed flex-1">
                    {takeaway}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sections */}
        {chapter.sections && chapter.sections.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Chapter Content</CardTitle>
              <CardDescription>
                Detailed sections and concepts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="multiple" className="w-full">
                {chapter.sections.map((section, idx) => (
                  <AccordionItem key={idx} value={`section-${idx}`}>
                    <AccordionTrigger className="text-left">
                      <div>
                        <h3 className="font-semibold">{section.title}</h3>
                        {section.content && (
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                            {section.content}
                          </p>
                        )}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pl-4">
                        {/* Concepts */}
                        {section.concepts && section.concepts.length > 0 && (
                          <div className="space-y-3">
                            {section.concepts.map((concept, cidx) => (
                              <Card key={cidx} className="bg-slate-50 dark:bg-slate-900/50">
                                <CardHeader className="pb-3">
                                  <CardTitle className="text-base">
                                    {concept.name}
                                  </CardTitle>
                                  <CardDescription>{concept.definition}</CardDescription>
                                </CardHeader>
                                {concept.examples && concept.examples.length > 0 && (
                                  <CardContent className="pt-0">
                                    <p className="text-sm font-semibold mb-2">Examples:</p>
                                    <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                      {concept.examples.map((example, eidx) => (
                                        <li key={eidx}>{example}</li>
                                      ))}
                                    </ul>
                                  </CardContent>
                                )}
                              </Card>
                            ))}
                          </div>
                        )}

                        {/* Subsections */}
                        {section.subsections && section.subsections.length > 0 && (
                          <div className="space-y-2 border-l-2 pl-4" style={{ borderColor: part?.color }}>
                            {section.subsections.map((subsection, sidx) => (
                              <div key={sidx}>
                                <h4 className="font-semibold text-sm mb-1">
                                  {subsection.title}
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                  {subsection.content}
                                </p>

                                {/* Subsection concepts */}
                                {subsection.concepts && subsection.concepts.length > 0 && (
                                  <div className="mt-3 space-y-2">
                                    {subsection.concepts.map((concept, cidx) => (
                                      <Card key={cidx} className="bg-white dark:bg-slate-950">
                                        <CardHeader className="py-2 px-3">
                                          <CardTitle className="text-sm">
                                            {concept.name}
                                          </CardTitle>
                                          <CardDescription className="text-xs">
                                            {concept.definition}
                                          </CardDescription>
                                        </CardHeader>
                                        {concept.examples && concept.examples.length > 0 && (
                                          <CardContent className="py-2 px-3">
                                            <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400">
                                              {concept.examples.map((example, eidx) => (
                                                <li key={eidx}>{example}</li>
                                              ))}
                                            </ul>
                                          </CardContent>
                                        )}
                                      </Card>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

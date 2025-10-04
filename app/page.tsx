import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Users, Brain, Download } from "lucide-react";
import Link from "next/link";
import courseData from "@/data/course-content.json";
import type { CourseData } from "@/types/course";

const data = courseData as CourseData;

const partIcons = {
  1: Brain,
  2: Users,
  3: Users,
  4: BookOpen,
};

const partGradients = {
  1: "from-blue-500/10 via-blue-500/5 to-transparent",
  2: "from-emerald-500/10 via-emerald-500/5 to-transparent",
  3: "from-orange-500/10 via-orange-500/5 to-transparent",
  4: "from-purple-500/10 via-purple-500/5 to-transparent",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <div className="border-b bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {data.courseTitle}
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                {data.courseLevel} • {data.university}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 items-center text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{data.instructor}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>{data.chapters.length} Chapters</span>
            </div>
            <Badge variant="secondary">{data.date}</Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Textbooks Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Course Textbooks</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Download the reference materials
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Konopaske Textbook */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  Organizational Behavior and Management
                </CardTitle>
                <CardDescription>
                  Konopaske, Ivancevich, and Matteson (2023) - 10th Edition
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="/books/Konopaske-OB-Management-2023.pdf"
                  download="Konopaske-OB-Management-2023.pdf"
                >
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF (27 MB)
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Robbins & Judge Textbook */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  Organizational Behavior, Global Edition
                </CardTitle>
                <CardDescription>
                  Robbins and Judge (2024) - Latest Edition
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="/books/Robbins-Judge-OB-2024.pdf"
                  download="Robbins-Judge-OB-2024.pdf"
                >
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF (64 MB)
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-12">
          {data.parts.map((part) => {
            const Icon = partIcons[part.part as keyof typeof partIcons];
            const gradient = partGradients[part.part as keyof typeof partGradients];
            const partChapters = data.chapters.filter((ch) =>
              part.chapters.includes(ch.chapter)
            );

            return (
              <div key={part.part} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: part.color + "20" }}
                  >
                    <Icon className="h-6 w-6" style={{ color: part.color }} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">
                      Part {part.part}: {part.title}
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {partChapters.length} chapters
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {partChapters.map((chapter) => (
                    <Link
                      key={chapter.chapter}
                      href={`/chapter/${chapter.chapter}`}
                    >
                      <Card className={`h-full hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02] bg-gradient-to-br ${gradient}`}>
                        <CardHeader>
                          <div className="flex items-start justify-between gap-2">
                            <Badge
                              style={{ backgroundColor: part.color }}
                              className="text-white"
                            >
                              Chapter {chapter.chapter}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {chapter.totalPages} pages
                            </Badge>
                          </div>
                          <CardTitle className="text-xl leading-tight mt-3">
                            {chapter.title}
                          </CardTitle>
                          {chapter.overview && (
                            <CardDescription className="line-clamp-3">
                              {chapter.overview}
                            </CardDescription>
                          )}
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                              Key Takeaways ({chapter.keyTakeaways.length})
                            </p>
                            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                              {chapter.keyTakeaways.slice(0, 3).map((takeaway, idx) => (
                                <li key={idx} className="line-clamp-1 flex gap-2">
                                  <span className="text-blue-500">•</span>
                                  <span className="flex-1">{takeaway}</span>
                                </li>
                              ))}
                            </ul>
                            {chapter.keyTakeaways.length > 3 && (
                              <p className="text-xs text-slate-500 italic">
                                +{chapter.keyTakeaways.length - 3} more...
                              </p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

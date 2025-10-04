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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-950 dark:via-blue-950/30 dark:to-purple-950/30">
      {/* Hero Section */}
      <div className="border-b bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 py-12 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-xl animate-in zoom-in duration-700 hover:scale-110 hover:rotate-6 transition-all hover:shadow-2xl hover:shadow-purple-500/50">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-in slide-in-from-left duration-1000">
                {data.courseTitle}
              </h1>
              <p className="text-slate-600 dark:text-slate-300 mt-2 text-lg animate-in slide-in-from-left duration-1000 delay-150">
                {data.courseLevel} • {data.university}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 items-center text-sm text-slate-600 dark:text-slate-400 animate-in fade-in duration-1000 delay-300">
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Users className="h-4 w-4" />
              <span>{data.instructor}</span>
            </div>
            <div className="flex items-center gap-2 hover:text-purple-600 transition-colors">
              <BookOpen className="h-4 w-4" />
              <span>{data.chapters.length} Chapters</span>
            </div>
            <Badge variant="secondary" className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all hover:scale-105">{data.date}</Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Textbooks Section */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-xl shadow-lg hover:scale-110 hover:rotate-3 transition-all hover:shadow-xl hover:shadow-orange-500/50 animate-pulse">
              <BookOpen className="h-7 w-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Course Textbooks</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Essential reading materials for the course
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Konopaske Textbook */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] border-2 hover:border-amber-400/50 bg-gradient-to-br from-white to-amber-50/30 dark:from-slate-900 dark:to-amber-950/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-amber-600 transition-colors">
                      Organizational Behavior and Management
                    </CardTitle>
                    <CardDescription className="mt-1">
                      Konopaske, Ivancevich, and Matteson (2023)
                    </CardDescription>
                  </div>
                  <Badge className="bg-amber-500 hover:bg-amber-600">10th Ed</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <a
                  href="/books/Konopaske-OB-Management-2023.pdf"
                  download="Konopaske-OB-Management-2023.pdf"
                >
                  <Button className="group/btn bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl hover:shadow-amber-500/50 transition-all hover:scale-105">
                    <Download className="h-4 w-4 mr-2 group-hover/btn:animate-bounce" />
                    <span>Download</span>
                    <span className="ml-2 text-xs opacity-75">27 MB</span>
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Robbins & Judge Textbook */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] border-2 hover:border-orange-400/50 bg-gradient-to-br from-white to-orange-50/30 dark:from-slate-900 dark:to-orange-950/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-orange-600 transition-colors">
                      Organizational Behavior, Global Edition
                    </CardTitle>
                    <CardDescription className="mt-1">
                      Robbins and Judge (2024)
                    </CardDescription>
                  </div>
                  <Badge className="bg-orange-500 hover:bg-orange-600">Latest</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <a
                  href="/books/Robbins-Judge-OB-2024.pdf"
                  download="Robbins-Judge-OB-2024.pdf"
                >
                  <Button className="group/btn bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 shadow-lg hover:shadow-xl hover:shadow-orange-500/50 transition-all hover:scale-105">
                    <Download className="h-4 w-4 mr-2 group-hover/btn:animate-bounce" />
                    <span>Download</span>
                    <span className="ml-2 text-xs opacity-75">64 MB</span>
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-16">
          {data.parts.map((part, partIdx) => {
            const Icon = partIcons[part.part as keyof typeof partIcons];
            const gradient = partGradients[part.part as keyof typeof partGradients];
            const partChapters = data.chapters.filter((ch) =>
              part.chapters.includes(ch.chapter)
            );

            // Skip parts with no chapters
            if (partChapters.length === 0) return null;

            return (
              <div key={part.part} className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: `${partIdx * 200}ms` }}>
                <div className="flex items-center gap-4 group">
                  <div
                    className="p-3 rounded-xl shadow-lg hover:scale-110 hover:rotate-6 transition-all duration-500 hover:shadow-2xl cursor-pointer"
                    style={{
                      backgroundColor: part.color + "20",
                      boxShadow: `0 10px 40px ${part.color}30`
                    }}
                  >
                    <Icon className="h-8 w-8 group-hover:scale-110 transition-transform" style={{ color: part.color }} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold group-hover:translate-x-2 transition-transform" style={{ color: part.color }}>
                      Part {part.part}: {part.title}
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {partChapters.length} chapters • Explore the content below
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {partChapters.map((chapter, chapterIdx) => (
                    <Link
                      key={chapter.chapter}
                      href={`/chapter/${chapter.chapter}`}
                      className="group/card animate-in fade-in zoom-in duration-700"
                      style={{ animationDelay: `${chapterIdx * 100}ms` }}
                    >
                      <Card className={`h-full hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105 hover:-translate-y-2 bg-gradient-to-br ${gradient} border-2 hover:border-opacity-100`}
                        style={{ borderColor: part.color + "00", '--hover-border': part.color } as React.CSSProperties}
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <Badge
                              style={{ backgroundColor: part.color }}
                              className="text-white shadow-lg group-hover/card:scale-110 transition-transform"
                            >
                              Chapter {chapter.chapter}
                            </Badge>
                            <Badge variant="outline" className="text-xs group-hover/card:bg-slate-100 dark:group-hover/card:bg-slate-800 transition-colors">
                              {chapter.totalPages} pages
                            </Badge>
                          </div>
                          <CardTitle className="text-xl leading-tight group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r transition-all"
                            style={{
                              '--tw-gradient-from': part.color,
                              '--tw-gradient-to': part.color + 'dd'
                            } as React.CSSProperties}>
                            {chapter.title}
                          </CardTitle>
                          {chapter.overview && (
                            <CardDescription className="line-clamp-3 group-hover/card:line-clamp-none transition-all">
                              {chapter.overview}
                            </CardDescription>
                          )}
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: part.color }}></span>
                              Key Takeaways ({chapter.keyTakeaways.length})
                            </p>
                            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                              {chapter.keyTakeaways.slice(0, 3).map((takeaway, idx) => (
                                <li key={idx} className="line-clamp-1 flex gap-2 group-hover/card:translate-x-1 transition-transform" style={{ transitionDelay: `${idx * 50}ms` }}>
                                  <span style={{ color: part.color }}>✦</span>
                                  <span className="flex-1">{takeaway}</span>
                                </li>
                              ))}
                            </ul>
                            {chapter.keyTakeaways.length > 3 && (
                              <p className="text-xs text-slate-500 italic group-hover/card:text-slate-700 dark:group-hover/card:text-slate-300 transition-colors">
                                +{chapter.keyTakeaways.length - 3} more inside →
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

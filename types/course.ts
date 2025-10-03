export interface CourseData {
  courseTitle: string;
  courseLevel: string;
  university: string;
  instructor: string;
  date: string;
  parts: Part[];
  chapters: Chapter[];
}

export interface Part {
  part: number;
  title: string;
  color: string;
  chapters: number[];
}

export interface Chapter {
  chapter: number;
  title: string;
  overview?: string;
  keyTakeaways: string[];
  sections?: Section[];
  totalPages: number;
}

export interface Section {
  title: string;
  level: number;
  content: string;
  subsections?: Subsection[];
  concepts?: Concept[];
}

export interface Subsection {
  title: string;
  level: number;
  content: string;
  concepts?: Concept[];
  subsections?: Subsection[];
}

export interface Concept {
  name: string;
  definition: string;
  examples: string[];
}

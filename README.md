# Organizational Behavior Study Platform

A modern, interactive study platform for the EMBA Organizational Behavior and Development course at Alexandria University. Built with Next.js 14, this platform provides a beautiful, card-based interface for exploring course content, chapters, and key concepts.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📚 Card-based chapter browsing organized by course parts
- 🔍 Detailed chapter pages with key takeaways and expandable sections
- 🎯 Color-coded parts for easy navigation
- ⚡ Fast, server-side rendered pages with Next.js 14
- 🌙 Dark mode support
- 📱 Mobile-friendly responsive layout

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ob-study-platform
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Project Structure

```
ob-study-platform/
├── app/
│   ├── page.tsx              # Homepage with course overview
│   ├── chapter/
│   │   └── [id]/
│   │       └── page.tsx      # Dynamic chapter detail pages
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   └── ui/                   # shadcn/ui components
├── data/
│   └── course-content.json   # Course data
├── types/
│   └── course.ts             # TypeScript type definitions
└── lib/
    └── utils.ts              # Utility functions
```

## Deployment

### Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account

3. Click "New Project" and import your repository

4. Vercel will automatically detect Next.js and configure the build settings

5. Click "Deploy"

Your site will be live at `https://your-project-name.vercel.app`

### Deploy to Other Platforms

You can also deploy to:
- **Netlify**: Connect your repo and deploy
- **AWS Amplify**: Use the Amplify Console
- **Railway**: One-click deploy from GitHub
- **Self-hosted**: Build with `npm run build` and serve with `npm start`

## Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run lint
```

## Course Content

The course data is stored in `data/course-content.json` and includes:
- Course metadata (title, instructor, university)
- 4 parts covering different aspects of Organizational Behavior
- 9 chapters with detailed content, key takeaways, and sections

## Customization

### Adding New Chapters

Edit `data/course-content.json` and add your chapter data following the existing structure:

```json
{
  "chapter": 14,
  "title": "Your Chapter Title",
  "overview": "Chapter overview text",
  "keyTakeaways": ["Takeaway 1", "Takeaway 2"],
  "totalPages": 25,
  "sections": []
}
```

### Changing Colors

Part colors are defined in `data/course-content.json`. Chapter detail page colors automatically match their part color.

### Adding Components

This project uses shadcn/ui. To add new components:

```bash
npx shadcn@latest add [component-name]
```

## License

Educational use for EMBA students at Alexandria University.

## Course Information

- **Course**: Organizational Behavior and Development
- **Level**: EMBA
- **University**: Alexandria University
- **Instructor**: Dr. Ghada Adel Atteya
- **Date**: October 2025

## Support

For questions or issues with the platform, please contact the course instructor or IT support.

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-r from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-slate-600 dark:text-slate-400 animate-pulse">
          Made by{" "}
          <span className="font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Ahmed Mohamed Sabri
          </span>{" "}
          with the help of AI
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
          © 2025 Alexandria University - EMBA Program
        </p>
      </div>
    </footer>
  );
}

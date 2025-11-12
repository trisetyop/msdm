import { useQuizStore } from '@/hooks/use-quiz-store';
import { WelcomeScreen } from '@/components/quiz/WelcomeScreen';
import { QuizScreen } from '@/components/quiz/QuizScreen';
import { ResultsScreen } from '@/components/quiz/ResultsScreen';
import { ThemeToggle } from '@/components/ThemeToggle';
import { AnimatePresence, motion } from 'framer-motion';
export function HomePage() {
  const gameStatus = useQuizStore((state) => state.gameStatus);
  const renderScreen = () => {
    switch (gameStatus) {
      case 'in_progress':
        return <QuizScreen />;
      case 'finished':
        return <ResultsScreen />;
      case 'welcome':
      default:
        return <WelcomeScreen />;
    }
  };
  return (
    <main className="min-h-screen w-full bg-slate-50 dark:bg-brand-dark text-slate-900 dark:text-slate-50 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_rgba(249,115,22,0.1)_1px,_transparent_0)] [background-size:20px_20px] pointer-events-none"></div>
      <ThemeToggle className="absolute top-4 right-4" />
      <div className="w-full max-w-7xl mx-auto py-12 md:py-16 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={gameStatus}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full flex justify-center"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </div>
      <footer className="absolute bottom-4 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>Built with ❤️ at Cloudflare</p>
      </footer>
    </main>
  );
}
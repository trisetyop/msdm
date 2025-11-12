import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { useQuizStore } from '@/hooks/use-quiz-store';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Repeat, Home } from 'lucide-react';
export function ResultsScreen() {
  const score = useQuizStore((state) => state.score);
  const questions = useQuizStore((state) => state.questions);
  const restart = useQuizStore((state) => state.restart);
  const startQuiz = useQuizStore((state) => state.startQuiz);
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const percentage = Math.round((score / questions.length) * 100);
  useEffect(() => {
    if (percentage >= 75) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [percentage]);
  const getFeedback = () => {
    if (percentage === 100) return { title: "Luar Biasa!", message: "Anda adalah seorang ahli Manajemen Sumber Daya Manusia sejati!", color: "text-green-500" };
    if (percentage >= 75) return { title: "Sangat Baik!", message: "Pengetahuan Anda tentang Manajemen Sumber Daya Manusia sangat kuat.", color: "text-blue-500" };
    if (percentage >= 50) return { title: "Cukup Baik!", message: "Anda memiliki dasar yang baik. Teruslah belajar!", color: "text-yellow-500" };
    return { title: "Perlu Belajar Lagi", message: "Jangan menyerah, coba lagi untuk meningkatkan skor Anda.", color: "text-red-500" };
  };
  const feedback = getFeedback();
  return (
    <>
      {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={300} />}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="w-full max-w-2xl"
      >
        <Card className="text-center bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 shadow-xl">
          <CardHeader>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
              className="mx-auto w-24 h-24 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center"
            >
              <Award className="w-12 h-12 text-orange-500" />
            </motion.div>
            <CardTitle className="text-3xl font-bold mt-4 text-slate-900 dark:text-slate-50">Kuis Selesai!</CardTitle>
            <CardDescription className={`text-xl font-semibold ${feedback.color}`}>{feedback.title}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-300">{feedback.message}</p>
            <div className="flex justify-around items-center bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">SKOR ANDA</p>
                <p className="text-4xl font-bold text-slate-900 dark:text-slate-100">{score} <span className="text-lg font-medium text-slate-500 dark:text-slate-400">/ {questions.length}</span></p>
              </div>
              <div className="border-l border-slate-200 dark:border-slate-700 h-16"></div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">PERSENTASE</p>
                <p className="text-4xl font-bold text-slate-900 dark:text-slate-100">{percentage}%</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button onClick={startQuiz} className="w-full sm:w-auto flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold transition-colors">
              <Repeat className="mr-2 h-4 w-4" /> Ulangi Kuis
            </Button>
            <Button onClick={restart} variant="outline" className="w-full sm:w-auto flex-1">
              <Home className="mr-2 h-4 w-4" /> Kembali ke Awal
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </>
  );
}
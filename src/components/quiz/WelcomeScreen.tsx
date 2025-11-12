import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpenCheck, ArrowRight } from 'lucide-react';
import { useQuizStore } from '@/hooks/use-quiz-store';
export function WelcomeScreen() {
  const startQuiz = useQuizStore((state) => state.startQuiz);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="w-full max-w-2xl"
    >
      <Card className="text-center bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden">
        <CardHeader className="p-8 bg-slate-50 dark:bg-slate-800">
           <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
              className="mx-auto w-24 h-24 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center"
            >
              <BookOpenCheck className="w-12 h-12 text-orange-500" />
            </motion.div>
          <CardTitle className="text-4xl font-bold mt-6 text-slate-900 dark:text-slate-50">
            Selamat Datang di Kuis Manajemen Sumber Daya Manusia
          </CardTitle>
          <CardDescription className="text-lg text-slate-600 dark:text-slate-300 mt-2 max-w-md mx-auto">
            Uji pengetahuan Anda tentang Manajemen Sumber Daya Manusia melalui 54 pertanyaan komprehensif.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          <p className="text-slate-700 dark:text-slate-300 text-base">
            Anda akan dihadapkan pada serangkaian pertanyaan pilihan ganda yang mencakup 9 area kompetensi utama dalam Manajemen Sumber Daya Manusia. Jawab setiap pertanyaan dengan teliti.
          </p>
          <p className="font-semibold text-orange-600 dark:text-orange-400 mt-4">
            Siap untuk memulai tantangan?
          </p>
        </CardContent>
        <CardFooter className="p-8 bg-slate-50 dark:bg-slate-800">
          <Button
            onClick={startQuiz}
            size="lg"
            className="w-full text-lg font-bold bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 transform hover:scale-105"
          >
            Mulai Kuis <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
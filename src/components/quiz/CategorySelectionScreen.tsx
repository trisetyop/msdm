import { motion } from 'framer-motion';
import { BookOpenCheck } from 'lucide-react';
import { quizData } from '@/data/quiz-data';
import { useQuizStore } from '@/hooks/use-quiz-store';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
export function CategorySelectionScreen() {
  const selectCategory = useQuizStore((state) => state.selectCategory);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };
  return (
    <div className="max-w-4xl w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50">
          Kuis Cerdas SDM
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          Pilih kategori untuk menguji pengetahuan Anda tentang Manajemen Sumber Daya Manusia.
        </p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {quizData.map((category, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="flex flex-col h-full bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
                    <BookOpenCheck className="w-6 h-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-800 dark:text-slate-100">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <CardDescription className="text-slate-600 dark:text-slate-400 mb-6">
                  {category.questions.length} pertanyaan untuk menguji pemahaman Anda.
                </CardDescription>
                <Button
                  onClick={() => selectCategory(category)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold transition-colors"
                >
                  Mulai Kuis
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
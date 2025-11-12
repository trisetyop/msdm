import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuizStore } from '@/hooks/use-quiz-store';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle } from 'lucide-react';
export function QuizScreen() {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);
  const answerQuestion = useQuizStore((state) => state.answerQuestion);
  const nextQuestion = useQuizStore((state) => state.nextQuestion);
  const userAnswers = useQuizStore((state) => state.userAnswers);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const currentQuestion = questions[currentQuestionIndex];
  const progressValue = ((currentQuestionIndex + 1) / questions.length) * 100;
  useEffect(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
  }, [currentQuestionIndex]);
  const handleAnswerClick = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    answerQuestion(index);
  };
  const getButtonClass = (index: number) => {
    if (!isAnswered) {
      return 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200';
    }
    const isCorrect = index === currentQuestion.correctAnswerIndex;
    const isSelected = index === selectedAnswer;
    if (isCorrect) {
      return 'bg-green-100 dark:bg-green-900/50 border-green-500 text-green-800 dark:text-green-300';
    }
    if (isSelected && !isCorrect) {
      return 'bg-red-100 dark:bg-red-900/50 border-red-500 text-red-800 dark:text-red-300';
    }
    return 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 opacity-70';
  };
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-center mb-4">
            <CardTitle className="text-lg font-medium text-orange-500">
              Pertanyaan {currentQuestionIndex + 1} dari {questions.length}
            </CardTitle>
          </div>
          <Progress value={progressValue} className="w-full [&>div]:bg-orange-500" />
        </CardHeader>
        <CardContent>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-2xl font-bold my-8 text-slate-900 dark:text-slate-50 min-h-[100px]">
                {currentQuestion.question}
              </p>
              <div className="space-y-4">
                {currentQuestion.options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    className={cn(
                      'w-full justify-start text-left h-auto py-4 px-5 text-base whitespace-normal border-2 border-transparent transition-all duration-300',
                      getButtonClass(index)
                    )}
                    disabled={isAnswered}
                  >
                    <span className="flex-1">{option}</span>
                    {isAnswered && index === currentQuestion.correctAnswerIndex && <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 ml-4" />}
                    {isAnswered && index === selectedAnswer && index !== currentQuestion.correctAnswerIndex && <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 ml-4" />}
                  </Button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 text-right">
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Button
                  onClick={nextQuestion}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 text-lg"
                >
                  {currentQuestionIndex < questions.length - 1 ? 'Lanjut' : 'Lihat Hasil'}
                </Button>
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
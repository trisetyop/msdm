import { create } from 'zustand';
import { allQuestions, Question } from '@/data/quiz-data';
type GameStatus = 'welcome' | 'in_progress' | 'finished';
interface QuizState {
  gameStatus: GameStatus;
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: (number | null)[];
  score: number;
}
interface QuizActions {
  startQuiz: () => void;
  answerQuestion: (answerIndex: number) => void;
  nextQuestion: () => void;
  restart: () => void;
}
const initialState: QuizState = {
  gameStatus: 'welcome',
  questions: [],
  currentQuestionIndex: 0,
  userAnswers: [],
  score: 0,
};
export const useQuizStore = create<QuizState & QuizActions>((set, get) => ({
  ...initialState,
  startQuiz: () => {
    // Optional: shuffle questions for variety each time
    const shuffledQuestions = [...allQuestions].sort(() => Math.random() - 0.5);
    set({
      questions: shuffledQuestions,
      gameStatus: 'in_progress',
      currentQuestionIndex: 0,
      userAnswers: Array(shuffledQuestions.length).fill(null),
      score: 0,
    });
  },
  answerQuestion: (answerIndex) => {
    const state = get();
    if (state.gameStatus !== 'in_progress') return;
    const currentQuestion = state.questions[state.currentQuestionIndex];
    const isCorrect = currentQuestion.correctAnswerIndex === answerIndex;
    const newUserAnswers = [...state.userAnswers];
    newUserAnswers[state.currentQuestionIndex] = answerIndex;
    set({
      userAnswers: newUserAnswers,
      score: isCorrect ? state.score + 1 : state.score,
    });
  },
  nextQuestion: () => {
    const state = get();
    if (state.currentQuestionIndex < state.questions.length - 1) {
      set({ currentQuestionIndex: state.currentQuestionIndex + 1 });
    } else {
      set({ gameStatus: 'finished' });
    }
  },
  restart: () => {
    set(initialState);
  },
}));
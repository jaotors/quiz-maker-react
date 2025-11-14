import { useQuizzesQuery } from '../../queries/useQuizzesQuery'

const QuizList = () => {
  const { data: quizzes, isLoading } = useQuizzesQuery()
}

import { useQuery } from '@tanstack/react-query'
import { getQuizzes } from '../api/quiz'

export const useQuizzesQuery = () => {
  return useQuery({
    queryKey: ['quizzes'],
    queryFn: getQuizzes,
  })
}

import fetchData from '../utils/fetchData'

export const getQuizzes = async () => {
  try {
    const quizzes = await fetchData('/quizzes')
    return quizzes
  } catch (error) {
    console.error('Failed to get quizzes data:', error)
  }
}

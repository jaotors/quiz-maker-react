import { useQuizzesQuery } from '../../queries/useQuizzesQuery'

const QuizList = () => {
  const { data: quizzes, isPending } = useQuizzesQuery()

  console.log('quizzes: ', quizzes)

  return (
    <div className='border border-gray-400 rounded-md p-4'>
      <table className='w-full'>
        <thead className='border-b'>
          <tr>
            <th className='p-2'>Id</th>
            <th className='p-2'>Title</th>
            <th className='p-2'>Description</th>
          </tr>
        </thead>
        <tbody>
          {quizzes?.map((q) => (
            <tr key={q.id}>
              <td className='p-2 text-center'>{q.id}</td>
              <td className='p-2 text-center'>{q.title}</td>
              <td className='p-2 text-center'>{q.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default QuizList

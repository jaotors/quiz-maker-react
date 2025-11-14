import { createFileRoute, Link } from '@tanstack/react-router'
import QuizList from '../../components/quiz/quiz-list'

export const Route = createFileRoute('/quiz-builder/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-center gap-4'>
        <h3 className='text-2xl'>Quizzes</h3>
        <Link to='/quiz-builder/create' className='btn-primary'>
          Add Quiz
        </Link>
      </div>
      <QuizList />
    </div>
  )
}

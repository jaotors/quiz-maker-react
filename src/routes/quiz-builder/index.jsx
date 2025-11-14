import { createFileRoute, Link } from '@tanstack/react-router'

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

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
  )
}

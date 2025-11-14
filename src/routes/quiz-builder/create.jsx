import { createFileRoute } from '@tanstack/react-router'
import QuizForm from '../../components/quiz/quiz-form'

export const Route = createFileRoute('/quiz-builder/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <QuizForm />
    </div>
  )
}

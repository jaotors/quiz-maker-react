import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex flex-col min-h-100 justify-center items-center'>
      <h1 className='text-black text-4xl'>Welcome to the Quiz Maker App!</h1>
    </div>
  )
}

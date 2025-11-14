import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({ component: RootLayout })

const queryClient = new QueryClient()
function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='container mx-auto'>
        <div className='p-4 flex gap-4'>
          <Link to='/' className='[&.active]:font-bold'>
            Home
          </Link>
          <Link to='/quiz-builder' className='[&.active]:font-bold'>
            Quiz Builder
          </Link>
          <Link to='/quiz-player' className='[&.active]:font-bold'>
            Quiz Player
          </Link>
        </div>
        <hr className='mb-4' />
        <div className='w-full p-4 border border-gray-400 rounded-md'>
          <Outlet />
        </div>
        <TanStackRouterDevtools />
      </div>
    </QueryClientProvider>
  )
}

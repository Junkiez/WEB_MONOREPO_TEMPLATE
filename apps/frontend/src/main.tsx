import { createRouter, RouterProvider } from '@tanstack/react-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import queryClient from './lib/queryClient'
import { StrictMode } from 'react'
import About from './routes/About'
import Home from './routes/Home'
import Root from './routes/Root'
import './index.css'


const router = createRouter({
  routeTree: Root.addChildren([
    Home,
    About,
  ])
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)

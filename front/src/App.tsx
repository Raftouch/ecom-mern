import { Outlet } from 'react-router-dom'
import Navbar from './pages/Navbar'

function App() {
  return (
    <div className='flex flex-col items-center min-h-screen bg-slate-100'>
      <Navbar />
      <Outlet />
      <main>
        
      </main>
      <footer className='text-center fixed bottom-2 text-sm'>All rights reserved</footer>
    </div>
  )
}

export default App

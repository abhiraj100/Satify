
/*eslint-disable*/
import Sidebar from './Sidebar'
import { useState } from 'react'
import { Menu } from 'lucide-react'

const AppLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className='relative flex h-dvh overflow-hidden'>

      {isSidebarOpen && (
        <div
          className='fixed  inset-0 bg-black/50 lg:hidden z-20'
          onClick={toggleSidebar}
        />
      )}

  
      <div className={`
        fixed lg:static w-60 h-dvh bg-sky-500 z-30
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar />
      </div>

    
      <div className='flex-1 h-full overflow-auto '>
        <div className='lg:hidden mb-4 absolute  top-10 left-10'>
          <button onClick={toggleSidebar} className='p-2 hover:bg-gray-100 rounded-lg'>
            <Menu size={24} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}


export default AppLayout
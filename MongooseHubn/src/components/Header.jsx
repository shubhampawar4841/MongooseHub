import { Menu } from 'lucide-react'

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
      <div className="flex items-center">
        <button onClick={() => setSidebarOpen(true)} className="text-gray-500 focus:outline-none lg:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Learn MongoDB</h1>
      </div>
    </header>
  )
}

export default Header


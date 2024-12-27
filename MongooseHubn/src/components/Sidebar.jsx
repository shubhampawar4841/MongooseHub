import { Link } from 'react-router-dom'
import { X } from 'lucide-react'

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex items-center justify-between h-16 px-6 bg-gray-800 text-white">
        <span className="text-2xl font-semibold">MongoDB Learn</span>
        <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="mt-8">
        <Link to="/" className="block py-2 px-6 text-gray-600 hover:bg-gray-100 hover:text-gray-900">Home</Link>
        <Link to="/collections" className="block py-2 px-6 text-gray-600 hover:bg-gray-100 hover:text-gray-900">Collections</Link>
        <Link to="/documents" className="block py-2 px-6 text-gray-600 hover:bg-gray-100 hover:text-gray-900">Documents</Link>
        <Link to="/queries" className="block py-2 px-6 text-gray-600 hover:bg-gray-100 hover:text-gray-900">Queries</Link>
        <Link to="/indexes" className="block py-2 px-6 text-gray-600 hover:bg-gray-100 hover:text-gray-900">Indexes</Link>
        <Link to="/aggregation" className="block py-2 px-6 text-gray-600 hover:bg-gray-100 hover:text-gray-900">Aggregation</Link>
      </nav>
    </div>
  )
}

export default Sidebar


import { Link } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'

const Navigation = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="bg-white shadow-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <FaTrash className="w-5 h-5 text-white" />
          </div>
          <span className="text-green-600 font-semibold text-lg">Nepal</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link 
              key={index}
              to={link.href} 
              className="text-gray-900 hover:text-green-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <Link 
          to="/login"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Log In
        </Link>
      </div>
    </nav>
  )
}

export default Navigation 
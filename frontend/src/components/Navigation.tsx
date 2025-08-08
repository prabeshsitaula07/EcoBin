import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

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
          <div className="w-16 h-16 rounded-lg flex items-center justify-center">
            <img src={logo} alt="logo" />
          </div>
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
          className="bg-[#00A72C] text-white px-6 py-2 rounded-lg hover:bg-[#00A72C]/90 transition-colors"
        >
          Log In
        </Link>
      </div>
    </nav>
  )
}

export default Navigation 
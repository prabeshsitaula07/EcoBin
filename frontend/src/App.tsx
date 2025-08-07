import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import ServiceSection from './pages/Service'
import ContactSection from './pages/Contact'
import AboutSection from './pages/About'
import Dashboard from './pages/Dashboard'
import UserProfile from './pages/UserProfile'
import ImageClassifier from './pages/ImageClassifier'
import EditProfile from './pages/EditProfile'
import TenantManagement from './pages/TenantManagement'
import ImageResultPage from './pages/ImageResultPage'

const WithNavAndFooter = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navigation />
    {children}
    <Footer />
  </>
)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WithNavAndFooter><HomePage /></WithNavAndFooter>} />
        <Route path="/services" element={<WithNavAndFooter><ServiceSection /></WithNavAndFooter>} />
        <Route path="/about" element={<WithNavAndFooter><AboutSection /></WithNavAndFooter>} />
        <Route path="/contact" element={<WithNavAndFooter><ContactSection /></WithNavAndFooter>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/image-classifier" element={<ImageClassifier />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/tenant-management" element={<TenantManagement />} />
        <Route path="/image-result" element={<ImageResultPage />} />
      </Routes>
    </Router>
  )
}

export default App
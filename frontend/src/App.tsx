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
import InvoiceClearance from './pages/InvoiceClearance'
import InvoiceDeclaration from './pages/InvoiceDeclaration'
import TransactionHistory from './pages/TransactionHistory'
import WasteTruckSchedule from './pages/WasteTruckSchedule'
import ManageNotifications from './pages/ManageNotifications'
import WasteDisposalHistory from './pages/WasteDisposalHistory'
import WasteClassification from './pages/WasteClassification'
import LiveTracking from './pages/LiveTracking'
import PaymentSystem from './pages/PaymentSystem'
import AiAssistant from './pages/AiAssistant'
import useScrollToTop from './hooks/useScrollToTop'


const WithNavAndFooter = ({ children }: { children: React.ReactNode }) => {
  useScrollToTop();
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

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
        <Route path="/waste/payment" element={<InvoiceClearance />} />
        <Route path="/waste/declaration" element={<InvoiceDeclaration />} />
        <Route path="/transaction-history" element={<TransactionHistory />} />
        <Route path="/notifier/schedule" element={<WasteTruckSchedule />} />
        <Route path="/notifier/notification-setting" element={<ManageNotifications />} />
        <Route path="/history/waste-disposal" element={<WasteDisposalHistory />} />
        <Route path="/features/waste-classification" element={<WithNavAndFooter><WasteClassification /></WithNavAndFooter>} />
        <Route path="/features/live-tracking" element={<WithNavAndFooter><LiveTracking /></WithNavAndFooter>} />
        <Route path="/features/payment-system" element={<WithNavAndFooter><PaymentSystem /></WithNavAndFooter>} />
        <Route path="/features/ai-assistant" element={<WithNavAndFooter><AiAssistant /></WithNavAndFooter>} />
      </Routes>
    </Router>
  )
}

export default App
import Navigation from './Navigation'
import HeroSection from './HeroSection'
import ProblemSection from './ProblemSection'
import SolutionSection from './SolutionSection'
import TestimonialSection from './TestimonialSection'

const HomePage = () => (
  <div className="min-h-screen bg-gray-50">
    <Navigation />
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <TestimonialSection />
  </div>
)

export default HomePage 
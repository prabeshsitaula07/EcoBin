import { motion } from 'framer-motion'
import Navigation from './Navigation'
import HeroSection from './HeroSection'
import ProblemSection from './ProblemSection'
import SolutionSection from './SolutionSection'
import TestimonialSection from './TestimonialSection'

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <motion.div 
      className="min-h-screen bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Navigation />
      
      <motion.div variants={sectionVariants}>
        <HeroSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <ProblemSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <SolutionSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <TestimonialSection />
      </motion.div>
    </motion.div>
  )
}

export default HomePage 
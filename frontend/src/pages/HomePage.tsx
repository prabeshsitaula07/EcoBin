import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import WhyChooseUs from '../components/WhyChooseUs'
import SolutionSection from '../components/SolutionSection'
import TestimonialSection from '../components/TestimonialSection'

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
      
      <motion.div variants={sectionVariants}>
        <HeroSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <WhyChooseUs />
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
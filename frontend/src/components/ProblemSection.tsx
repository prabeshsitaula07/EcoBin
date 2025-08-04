import { motion } from 'framer-motion'

const ProblemSection = () => {
  const problems = [
    'Citizens unaware of garbage truck timings',
    'Sudden schedule changes',
    'Public littering, without an easy reporting mechanism',
    'Mostly manual and time-consuming bill payments'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Problem
      </motion.h2>
      <motion.div 
        className="bg-white rounded-xl p-8 shadow-sm"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.ul 
          className="space-y-4 text-lg text-gray-700"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map((problem, index) => (
            <motion.li 
              key={index} 
              className="flex items-start"
              variants={itemVariants}
            >
              <motion.span 
                className="text-red-500 mr-3 mt-1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                •
              </motion.span>
              {problem}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  )
}

export default ProblemSection 
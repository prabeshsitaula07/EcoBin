import { motion } from 'framer-motion'
import { FaUser } from 'react-icons/fa'

const TestimonialSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <motion.div 
        className="bg-white rounded-xl p-8 shadow-sm"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
      >
        <div className="flex items-start space-x-6">
          <motion.div 
            className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              rotate: 360,
              transition: { duration: 0.6 }
            }}
          >
            <FaUser className="w-8 h-8 text-green-600" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-gray-700 text-lg mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              "A comprehensive platform that greatly improves waste handling in our city."
            </motion.p>
            <motion.p 
              className="font-semibold text-gray-900"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Salma M. Municipal Officer
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default TestimonialSection 
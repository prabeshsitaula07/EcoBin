import { motion } from 'framer-motion';
const stats = [
    { value: "3", label: "Cities Served" },
    { value: "99%", label: "Uptime" },
    { value: "24/7", label: "Support" },
    { value: "95%", label: "User Satisfaction" },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const AboutSection = () => (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-6 py-16 min-h-screen"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-2"
          variants={cardVariants}
        >
          About EcoBin
        </motion.h2>
        <motion.p
          className="text-center text-gray-700 mb-10 max-w-2xl mx-auto"
          variants={cardVariants}
        >
          Leading the revolution in smart waste management through innovative technology and community engagement.
        </motion.p>
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          <motion.div className="flex-1" variants={cardVariants}>
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-800 mb-4">
              We believe in creating cleaner, more sustainable cities through intelligent waste management solutions. Our platform connects citizens, waste collectors, and city administrators to create a seamless ecosystem that rewards responsible behavior while protecting our environment.
            </p>
            <p className="text-gray-800">
              By leveraging AI, IoT, and mobile technology, we’re transforming how cities handle waste collection, making it more efficient, transparent, and rewarding for everyone involved.
            </p>
          </motion.div>
          <div className="flex-1 grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow border border-gray-200 flex flex-col items-center justify-center py-8"
                variants={cardVariants}
              >
                <span className="text-3xl font-bold text-[#00A72C] mb-1">{stat.value}</span>
                <span className="text-gray-600">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
  
  export default AboutSection;
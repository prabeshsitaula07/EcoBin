import { FaMapMarkerAlt, FaBell, FaCreditCard, FaFileAlt } from 'react-icons/fa'

const SolutionSection = () => {
  const solutions = [
    {
      title: 'Real-Time Tracking',
      icon: <FaMapMarkerAlt className="w-10 h-10 text-blue-600" />,
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Instant Notifications',
      icon: <FaBell className="w-10 h-10 text-yellow-600" />,
      bgColor: 'bg-yellow-100'
    },
    {
      title: 'Digital Payments',
      icon: <FaCreditCard className="w-10 h-10 text-green-600" />,
      bgColor: 'bg-green-100'
    },
    {
      title: 'Littering Reports',
      icon: <FaFileAlt className="w-10 h-10 text-red-600" />,
      bgColor: 'bg-red-100'
    }
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-12">Solution</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {solutions.map((solution, index) => (
          <div key={index} className="text-center">
            <div className={`${solution.bgColor} rounded-lg p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center`}>
              {solution.icon}
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">{solution.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SolutionSection 
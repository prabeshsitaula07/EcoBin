import { FaUser } from 'react-icons/fa'

const TestimonialSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <div className="flex items-start space-x-6">
          <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0">
            <FaUser className="w-8 h-8 text-green-600" />
          </div>
          <div>
            <p className="text-gray-700 text-lg mb-4">
              "A comprehensive platform that greatly improves waste handling in our city."
            </p>
            <p className="font-semibold text-gray-900">Salma M. Municipal Officer</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection 
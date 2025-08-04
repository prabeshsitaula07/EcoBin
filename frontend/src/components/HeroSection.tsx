import { FaTruck, FaWifi } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Smart Waste Management System
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">Nepal</h2>
          <p className="text-gray-600 text-lg mb-8">
            Connecting citizens and municipalities for smarter waste solutions.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
        
        <div className="relative">
          <div className="bg-green-100 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-300 rounded-full -ml-12 -mb-12 opacity-50"></div>
            
            <div className="relative z-10 mb-8">
              <div className="bg-green-600 rounded-lg p-4 w-48 h-24 flex items-center justify-center">
                <FaTruck className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <FaWifi className="w-8 h-8 text-green-600" />
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="bg-white rounded-lg p-3 w-32 h-48 mx-auto shadow-lg">
                <div className="bg-blue-100 rounded p-2 h-full">
                  <div className="bg-blue-500 rounded w-full h-2 mb-2"></div>
                  <div className="bg-green-500 rounded-full w-3 h-3 mx-auto mb-2"></div>
                  <div className="bg-blue-300 rounded w-3/4 h-1 mb-1"></div>
                  <div className="bg-blue-300 rounded w-1/2 h-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 
import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Reduce environmental footprint",
  "Real-time truck tracking",
  "Community impact monitoring",
  "Gamified eco-achievements",
  "AI-Based Waste Segregation Insights",
  "Boost Your Community’s Green Score",
];

const WhyChooseUs = () => (
  <section className="max-w-7xl mx-auto px-6 py-16">
    <div className="bg-white rounded-2xl shadow border border-gray-200 p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-[#00A72C] mb-2 flex items-center">
        Why choose EcoBin? <span className="ml-2 text-xl">🤔</span>
      </h2>
      <p className="text-gray-600 mb-8">
        Join thousands of citizens making their cities cleaner
      </p>
      <ul className="space-y-3 pl-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <span className="mt-1 mr-2 text-[#00A72C]">
              <FaCheckCircle />
            </span>
            <span className="text-gray-800">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhyChooseUs;
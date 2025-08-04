const ProblemSection = () => {
  const problems = [
    'Citizens unaware of garbage truck timings',
    'Sudden schedule changes',
    'Public littering, without an easy reporting mechanism',
    'Mostly manual and time-consuming bill payments'
  ]

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-12">Problem</h2>
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <ul className="space-y-4 text-lg text-gray-700">
          {problems.map((problem, index) => (
            <li key={index} className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              {problem}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProblemSection 
export default function Solutions() {
  const solutions = [
    {
      title: 'For Schools',
      subtitle: 'K-12 Education',
      icon: '🏫',
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        'Parent Portal',
        'Attendance Tracking',
        'Report Cards',
        'School Bus Management',
      ],
    },
    {
      title: 'For Colleges',
      subtitle: 'Higher Education',
      icon: '🎓',
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'Course Management',
        'Semester Planning',
        'Elective Selection',
        'Exam Scheduling',
      ],
    },
    {
      title: 'For Universities',
      subtitle: 'Large Scale',
      icon: '🏛️',
      gradient: 'from-indigo-500 to-purple-500',
      features: [
        'Multi-Campus',
        'Research Management',
        'Department Coordination',
        'Alumni Network',
      ],
    },
    {
      title: 'For Training Centers',
      subtitle: 'Professional Development',
      icon: '💼',
      gradient: 'from-orange-500 to-red-500',
      features: [
        'Batch Management',
        'Certification',
        'Placement Tracking',
        'Trainer Scheduling',
      ],
    },
  ];

  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Solutions for Every Institution
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored solutions designed to meet the unique needs of different educational institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-[#0d9494] transition-all duration-300 hover:shadow-xl"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center text-3xl mb-6 shadow-lg`}>
                {solution.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
              <p className="text-[#0d9494] font-medium mb-6">{solution.subtitle}</p>
              <ul className="space-y-3">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#0d9494] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


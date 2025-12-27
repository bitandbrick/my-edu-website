export default function Products() {
  const products = [
    {
      name: 'UniFee',
      description: 'Fee Management',
      gradient: 'from-emerald-500 to-teal-600',
      icon: '💰',
    },
    {
      name: 'UniGen',
      description: 'Admissions',
      gradient: 'from-blue-500 to-indigo-600',
      icon: '🎓',
    },
    {
      name: 'UniLearn',
      description: 'LMS',
      gradient: 'from-purple-500 to-pink-600',
      icon: '📚',
    },
    {
      name: 'UniTeam',
      description: 'HR & Payroll',
      gradient: 'from-orange-500 to-red-600',
      icon: '👥',
    },
    {
      name: 'UniTime',
      description: 'Timetable',
      gradient: 'from-cyan-500 to-blue-600',
      icon: '⏰',
    },
    {
      name: 'UniPrint',
      description: 'Documents',
      gradient: 'from-violet-500 to-purple-600',
      icon: '🖨️',
    },
    {
      name: 'UniProc',
      description: 'Procurement',
      gradient: 'from-amber-500 to-orange-600',
      icon: '📦',
    },
  ];

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Product Suite
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive modules designed to streamline every aspect of educational institution management.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl border border-gray-200 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-3xl mb-4 shadow-lg`}>
                {product.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <a 
                href="#" 
                className="text-[#0d9494] font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center"
              >
                Learn more
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


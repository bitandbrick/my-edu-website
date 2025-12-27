export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0d9494]/10 via-white to-[#e68a00]/10 relative overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#0d9494]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#e68a00]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Trust Badge */}
          <div className="inline-flex items-center mb-6 px-4 py-2 bg-white rounded-full shadow-md border border-gray-200">
            <span className="text-sm font-medium text-gray-700">
              <span className="font-bold text-[#0d9494]">500+</span> Educational Institutions Trust Us
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to{' '}
            <span className="bg-gradient-to-r from-[#0d9494] to-[#0a7575] bg-clip-text text-transparent">
              Transform
            </span>{' '}
            Your Institution?
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Comprehensive education management platform that empowers schools, colleges, universities, and training centers worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button type="button" className="bg-[#0d9494] hover:bg-[#0a7575] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg">
              Schedule Demo
            </button>
            <button type="button" className="bg-[#e68a00] hover:bg-[#cc7700] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg">
              Contact Sales
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-[#0d9494] mb-2">500+</div>
              <div className="text-sm text-gray-600">Active Institutions</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-[#0d9494] mb-2">2M+</div>
              <div className="text-sm text-gray-600">Students Managed</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-[#0d9494] mb-2">50K+</div>
              <div className="text-sm text-gray-600">Teachers Empowered</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-[#0d9494] mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              🎓 Transform Your Learning Journey
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Quality Education
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Made Accessible
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl lg:max-w-none">
              Join thousands of students learning with expert tutors, interactive courses, and personalized learning paths designed for your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg">
                Start Learning Today
              </button>
              <button type="button" className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                Watch Demo
              </button>
            </div>
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-600">
              <div>
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div>Active Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div>Expert Tutors</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div>Courses</div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📚</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Interactive Learning</div>
                      <div className="text-sm text-gray-600">Engage with content</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👨‍🏫</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Expert Tutors</div>
                      <div className="text-sm text-gray-600">Learn from the best</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Track Progress</div>
                      <div className="text-sm text-gray-600">Monitor your growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


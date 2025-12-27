export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              About Our Platform
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              We are committed to providing high-quality education that is accessible to everyone. 
              Our platform connects students with expert tutors and offers a wide range of courses 
              designed to meet diverse learning needs.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With innovative teaching methods and cutting-edge technology, we create an engaging 
              learning environment that helps students achieve their academic and professional goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Expert Instructors</h3>
                  <p className="text-gray-600">Learn from industry professionals and experienced educators</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Flexible Learning</h3>
                  <p className="text-gray-600">Study at your own pace with 24/7 access to course materials</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Proven Results</h3>
                  <p className="text-gray-600">Join thousands of successful students achieving their goals</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-8 space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-gray-600">Student Satisfaction Rate</div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-gray-900">10K+</div>
                      <div className="text-sm text-gray-600 mt-1">Students</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">500+</div>
                      <div className="text-sm text-gray-600 mt-1">Tutors</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">100+</div>
                      <div className="text-sm text-gray-600 mt-1">Courses</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">50+</div>
                      <div className="text-sm text-gray-600 mt-1">Countries</div>
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


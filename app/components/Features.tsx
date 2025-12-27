export default function Features() {
  const features = [
    {
      icon: '🎯',
      title: 'Personalized Learning',
      description: 'Customized learning paths tailored to your goals and learning style.',
    },
    {
      icon: '👥',
      title: 'Expert Tutors',
      description: 'Learn from experienced educators and industry professionals.',
    },
    {
      icon: '📱',
      title: 'Learn Anywhere',
      description: 'Access your courses on any device, anytime, anywhere.',
    },
    {
      icon: '📈',
      title: 'Progress Tracking',
      description: 'Monitor your progress with detailed analytics and insights.',
    },
    {
      icon: '💬',
      title: 'Interactive Sessions',
      description: 'Engage in live sessions and real-time discussions.',
    },
    {
      icon: '🏆',
      title: 'Certificates',
      description: 'Earn recognized certificates upon course completion.',
    },
  ];

  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to succeed in your learning journey, all in one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-gray-50 hover:bg-white text-center sm:text-left"
            >
              <div className="text-4xl mb-4 flex justify-center sm:justify-start">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


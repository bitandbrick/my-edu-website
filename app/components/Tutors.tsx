export default function Tutors() {
  const tutors = [
    {
      name: 'Sarah Johnson',
      subject: 'Mathematics',
      rating: 4.9,
      students: 1200,
      image: '👩‍🏫',
    },
    {
      name: 'Michael Chen',
      subject: 'Computer Science',
      rating: 4.8,
      students: 950,
      image: '👨‍💻',
    },
    {
      name: 'Emily Rodriguez',
      subject: 'Languages',
      rating: 4.9,
      students: 1100,
      image: '👩‍🎓',
    },
    {
      name: 'David Kim',
      subject: 'Science',
      rating: 4.7,
      students: 800,
      image: '👨‍🔬',
    },
  ];

  return (
    <section id="tutors" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Tutors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from passionate educators dedicated to your success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tutors.map((tutor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="text-6xl mb-4 flex justify-center">{tutor.image}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{tutor.name}</h3>
              <p className="text-blue-600 mb-3 font-medium">{tutor.subject}</p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-yellow-400">⭐</span>
                <span className="font-semibold text-gray-900">{tutor.rating}</span>
              </div>
              <p className="text-sm text-gray-600">{tutor.students.toLocaleString()}+ Students</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


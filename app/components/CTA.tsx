export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0d9494] to-blue-600 relative overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)'
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Trust Badge */}
        <div className="inline-flex items-center mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
          <span className="text-sm font-medium text-white">
            Join <span className="font-bold">500+</span> Leading Institutions
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Institution?
        </h2>

        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Get started today and see how Unity Education Platform can streamline your operations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button type="button" className="bg-white text-[#0d9494] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-xl">
            Schedule Demo
          </button>
          <button type="button" className="bg-[#e68a00] hover:bg-[#cc7700] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-xl">
            Contact Sales
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">⭐</span>
            <span className="font-semibold">4.9/5 Rating</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🔒</span>
            <span className="font-semibold">ISO 27001 Certified</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">⚡</span>
            <span className="font-semibold">99.9% Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
}


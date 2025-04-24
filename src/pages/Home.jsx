import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full font-sans text-gray-800 bg-gradient-to-b from-sky-200 via-cyan-100 to-yellow-50">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white/70 shadow-md sticky top-0 z-50 backdrop-blur-md">
        <h1 className="text-2xl md:text-3xl font-bold text-teal-800">Coastal Awareness</h1>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-teal-800 focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>
        <nav className="hidden md:flex space-x-6 text-teal-700 text-sm md:text-base">
          <a href="#hero" className="hover:text-teal-900 transition">Home</a>
          <a href="#mission" className="hover:text-teal-900 transition">Our Mission</a>
          <a href="#impact" className="hover:text-teal-900 transition">Why It Matters</a>
          <a href="#get-involved" className="hover:text-teal-900 transition">Get Involved</a>
        </nav>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg text-teal-700 text-center py-4 space-y-4">
          <a href="#hero" className="block hover:text-teal-900" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#mission" className="block hover:text-teal-900" onClick={() => setMenuOpen(false)}>Our Mission</a>
          <a href="#impact" className="block hover:text-teal-900" onClick={() => setMenuOpen(false)}>Why It Matters</a>
          <a href="#get-involved" className="block hover:text-teal-900" onClick={() => setMenuOpen(false)}>Get Involved</a>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center text-center px-6 py-24 bg-[url('/ocean-bg.jpg')] bg-cover bg-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-md">Protect Our Coastlines,<br /> Preserve Our Future</h2>
        <p className="mt-4 max-w-xl text-lg md:text-xl drop-shadow-sm">
          Climate change, pollution, and rising seas threaten the beauty of our coasts. Together, we can protect The Bahamas.
        </p>

      </section>

      {/* Mission Section */}
      <section id="mission" className="px-6 py-16 text-center bg-white">
        <h3 className="text-3xl font-semibold text-teal-800 mb-6">Our Mission</h3>
        <p className="max-w-3xl mx-auto text-teal-700 text-md md:text-lg">
          Coastal Awareness is a community-led initiative committed to educating the public on the importance of preserving our coastlines, supporting sustainable tourism, and empowering the next generation to advocate for ocean health.
        </p>
      </section>

      {/* Impact Section */}
      <section id="impact" className="px-6 py-16 bg-gradient-to-t from-white to-teal-50 rounded-t-[3rem] shadow-inner">
        <h3 className="text-3xl font-semibold text-teal-800 mb-8 text-center">Why It Matters</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="font-bold text-teal-700 mb-2">🌊 Coral Reefs</h4>
            <p className="text-sm text-gray-700">Rapid temperature changes are bleaching our reefs, disrupting marine ecosystems and tourism.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="font-bold text-teal-700 mb-2">🐢 Marine Life</h4>
            <p className="text-sm text-gray-700">Plastic pollution and chemical runoff endanger turtles, fish, and birds across our waters.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="font-bold text-teal-700 mb-2">🏝️ Erosion</h4>
            <p className="text-sm text-gray-700">Rising tides are shrinking our beaches and threatening homes and livelihoods.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="font-bold text-teal-700 mb-2">🌴 Education</h4>
            <p className="text-sm text-gray-700">Awareness is the first step. We aim to engage students, tourists, and locals alike in sustainable practices.</p>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section id="get-involved" className="px-6 py-16 bg-white text-center">
        <h3 className="text-3xl font-semibold text-teal-800 mb-6">How You Can Help</h3>
        <p className="max-w-2xl mx-auto text-md md:text-lg text-teal-700 mb-8">
          Whether you're a local, visitor, student, or business, you can contribute to coastal conservation. Here are a few ways to get started:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-teal-50 rounded-xl shadow">
            <h4 className="font-bold text-teal-700 mb-2">🧤 Volunteer</h4>
            <p className="text-sm text-gray-700">Join local beach clean-ups and support environmental groups across The Bahamas.</p>
          </div>
          <div className="p-6 bg-teal-50 rounded-xl shadow">
            <h4 className="font-bold text-teal-700 mb-2">📣 Educate Others</h4>
            <p className="text-sm text-gray-700">Host workshops, share content online, and teach future generations the value of preservation.</p>
          </div>
          <div className="p-6 bg-teal-50 rounded-xl shadow">
            <h4 className="font-bold text-teal-700 mb-2">🌱 Support Sustainable Brands</h4>
            <p className="text-sm text-gray-700">Choose eco-friendly companies that minimize harm to marine life and support clean oceans.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-800 text-white text-center text-sm py-6">
        © 2025 Coastal Awareness • Made with 🌊 from The Bahamas
      </footer>
    </div>
  );
}

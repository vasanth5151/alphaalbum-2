import React from 'react';
import { FiMusic, FiLayers, FiEye, FiCheckCircle, FiAward, FiGrid } from 'react-icons/fi';

const DesignInfo = () => {
  const designSteps = [
    {
      number: '01',
      title: 'Analysis the Design',
      description: 'We analyze your design waveforms to create visuals that move to your creative',
      icon: <FiMusic className="text-2xl" />
    },
    {
      number: '02',
      title: 'Dimension Crafting',
      description: 'Building 3D mockups that bring your album cover to life before printing',
      icon: <FiLayers className="text-2xl" />
    },
    {
      number: '03',
      title: 'Art Direction',
      description: 'Curating photographer/videographer teams for your supplemental content',
      icon: <FiEye className="text-2xl" />
    },
    {
      number: '04',
      title: 'Quality Assurance',
      description: 'Triple-checking color accuracy and print specifications',
      icon: <FiCheckCircle className="text-2xl" />
    }
  ];

  const designFeatures = [
    {
      title: "Neon Grid System",
      description: "Our proprietary layout framework for maximum visual impact",
      icon: <FiGrid className="text-3xl text-pink-500" />
    },
    {
      title: "Holographic Options",
      description: "Special foil treatments that react to light and movement",
      icon: <FiAward className="text-3xl text-purple-500" />
    },
    {
      title: "Let's Get Designing",
      description: "design the reality elements that unlock bonus content",
      icon: <FiEye className="text-3xl text-blue-500" />
    }
  ];

  return (
    <div className="bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-900 to-purple-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-200">Alpha Design</span> Philosophy
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Where algorithmic precision meets artistic rebellion to create iconic album identities
          </p>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-pink-600 bg-pink-50 rounded-full mb-4">
            CREATIVE WORKFLOW
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">4D Design</span> Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A multi-sensory approach that considers how your album looks, feels, and even sounds when touched
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {designSteps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100 text-pink-600 rounded-xl font-bold text-xl mr-4">
                  {step.number}
                </div>
                <div className="text-pink-500">{step.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Break */}
      <div className="py-12 bg-gradient-to-r from-amber-50 to-pink-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-8">
            <h3 className="text-2xl font-medium text-gray-900 mb-2">
              "We don't just make covers - we create"
            </h3>
            <p className="text-lg text-gray-600">
              tactile experiences that fans want to collect and display
            </p>
          </div>
        </div>
      </div>

      {/* Design Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {designFeatures.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-white h-full p-8 rounded-lg shadow-md border border-gray-100">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-pink-400">Signature</span> Design Elements
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our proprietary techniques that make Alpha covers instantly recognizable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-700 transition-all duration-500">
              <div className="text-amber-400 text-4xl mb-4">〰️</div>
              <h3 className="text-xl font-semibold mb-3">Kinetic Typography</h3>
              <p className="text-gray-300">Letterforms that appear to move when the album is tilted</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-700 transition-all duration-500">
              <div className="text-pink-400 text-4xl mb-4">✧</div>
              <h3 className="text-xl font-semibold mb-3">Lenticular Effects</h3>
              <p className="text-gray-300">Images that transform as the viewer changes perspective</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-700 transition-all duration-500">
              <div className="text-purple-400 text-4xl mb-4">⊛</div>
              <h3 className="text-xl font-semibold mb-3">Scented Inks</h3>
              <p className="text-gray-300">Custom fragrances embedded in the printing process</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Signature Album Design?
          </h2>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto mb-8">
            Our design team is standing by to transform your music into visual art
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-pink-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105">
              Start Your Project
            </button>
            <button className="bg-transparent border-2 border-white text-white  hover:bg-opacity-10 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignInfo;
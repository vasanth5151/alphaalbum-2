import React from 'react';
import aboutImage1 from '/images/album6.jpg'; // Update with your image paths
import aboutImage2 from '/images/album8.jpg';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-200">Albums by Zerogravity</span>
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Where music meets visual artistry in perfect harmony
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <img 
              src={aboutImage1} 
              alt="Alpha Albums Recording Studio" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our <span className="text-pink-600">Origin</span> Story
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Founded in 2015, Alpha Albums began as a passion project between a graphic designer and a music producer who believed album artwork deserved the same creative attention as the music itself.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              What started in a small Brooklyn studio has grown into a collective of 30+ artists, photographers, and designers dedicated to creating iconic visual identities for groundbreaking music.
            </p>
            <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
              <p className="text-pink-700 font-medium">
                "We don't just make covers - we create visual companions that amplify your music's emotional impact."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src={aboutImage2} 
                alt="Alpha Albums Creative Team" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The <span className="text-purple-600">Collective</span>
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Our team brings together diverse talents from the worlds of graphic design, photography, 3D animation, and music production.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span className="text-gray-700">15 award-winning designers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span className="text-gray-700">7 specialized photographers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span className="text-gray-700">5 AR/VR specialists</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span className="text-gray-700">3 Grammy-nominated art directors</span>
                </li>
              </ul>
              <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300 inline-flex items-center">
                Meet The Team
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            By The <span className="text-pink-600">Numbers</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">250+</p>
              <p className="text-gray-600">Albums Designed</p>
            </div>
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">47</p>
              <p className="text-gray-600">Industry Awards</p>
            </div>
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">100%</p>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">1M+</p>
              <p className="text-gray-600">Physical Copies Sold</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
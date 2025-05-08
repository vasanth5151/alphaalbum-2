import React, { useRef, useEffect, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const VideoHeroWithFAQ = () => {
  const videoRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to create a custom wedding album?",
      answer: "Our premium albums typically take 4-6 weeks from design approval to delivery. Rush services are available for an additional fee."
    },
    {
      question: "Can we include photos from multiple photographers?",
      answer: "Absolutely! We can combine images from different sources into one cohesive album design."
    },
    {
      question: "What's included in your premium album package?",
      answer: "Each package includes album design consultation, 30+ pages, premium cover materials, and a keepsake presentation box."
    },
    {
      question: "Do you offer digital copies of the album?",
      answer: "Yes, all our albums come with a high-resolution digital version you can share with family and friends."
    },
    {
      question: "Can we include photos from multiple photographers?",
      answer: "Absolutely! We can combine images from different sources into one cohesive album design."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="relative">
      {/* Video Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://combo.staticflickr.com/66a031f9fc343c5e42d965ca/67b7593e11fff715b31b8492_video%20left-poster-00001.jpg"
          >
            <source 
              src="/images/albumvedio.webm" 
              type="video/webm" 
            />
          </video>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="text-pink-200">AlphaAlbums</span> Presents
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mb-8">
            Immortalize your precious moments with our premium wedding albums.
            Handcrafted perfection that tells your unique love story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="cursor-pointer bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
              View Collections
            </button>
            <button className="cursor-pointer bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-gray-200 pb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <h3 className="text-lg md:text-xl font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <span className="text-pink-600">
                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                
                <div 
                  className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="pb-2">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Didn't find your answer? We're happy to help.
            </p>
            <Link
            to="/contact"
            className="cursor-pointer bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-medium transition-colors inline-block" >
            Contact Our Team
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoHeroWithFAQ;
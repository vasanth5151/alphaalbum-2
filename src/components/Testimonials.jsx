import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Wedding Photographer",
      content: "Alpha Albums transformed our wedding photos into timeless art. The quality is unmatched and their team's attention to detail made all the difference.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Professional Photographer",
      content: "The premium albums are worth every penny. My clients are consistently blown away by the luxurious feel and stunning print quality.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Bride",
      content: "Our wedding album arrived faster than expected and exceeded all our expectations. It's now our most treasured family heirloom.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6
      }
    })
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-pink-600 font-semibold tracking-wider">CLIENT LOVE</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 font-display text-gray-900">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <img 
                      className="h-14 w-14 rounded-full object-cover border-2 border-pink-200"
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <FaQuoteLeft className="absolute -top-2 -left-2 text-pink-100 text-3xl" />
                  <p className="text-gray-700 relative z-10 pl-6">{testimonial.content}</p>
                </div>
                
                <div className="mt-6 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Testimonials;
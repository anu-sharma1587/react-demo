import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CTO, TechCorp',
    content: 'Working with this team has transformed our digital infrastructure. Their IT outsourcing services are top-notch.',
    image: '/placeholder-avatar-1.jpg'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'CEO, HotelChain',
    content: 'The hotel management system has streamlined our operations significantly. Excellent support and features.',
    image: '/placeholder-avatar-2.jpg'
  },
  {
    id: 3,
    name: 'Mike Wilson',
    role: 'Director, TravelCo',
    content: 'Their travel booking solutions have helped us scale our business efficiently. Highly recommended!',
    image: '/placeholder-avatar-3.jpg'
  }
]

const clientLogos = [
  '/client-logo-1.png',
  '/client-logo-2.png',
  '/client-logo-3.png',
  '/client-logo-4.png',
  '/client-logo-5.png',
  '/client-logo-6.png'
]

export function ClientsSection() {
  return (
    <section className="py-16">
      <div className="container">
        {/* Client Logos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted By</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={`/client-logo-${index + 1}.svg`}
                  alt={`Client Logo ${index + 1}`}
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={`/placeholder-avatar-${testimonial.id}.svg`}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

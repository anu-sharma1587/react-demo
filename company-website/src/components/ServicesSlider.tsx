import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'it-outsourcing',
    title: 'IT Outsourcing',
    description: 'End-to-end IT services and dedicated teams for your projects.',
    icon: '💻'
  },
  {
    id: 'payment-app',
    title: 'Online Payment App',
    description: 'Secure and scalable payment solutions for modern businesses.',
    icon: '💳'
  },
  {
    id: 'hotel-management',
    title: 'Hotel Management',
    description: 'Comprehensive hotel management systems and booking platforms.',
    icon: '🏨'
  },
  {
    id: 'bus-booking',
    title: 'Bus Booking',
    description: 'Efficient bus reservation and fleet management solutions.',
    icon: '🚌'
  },
  {
    id: 'flight-booking',
    title: 'Flight Booking',
    description: 'Advanced airline ticketing and reservation systems.',
    icon: '✈️'
  },
  {
    id: 'tour-travel',
    title: 'Tour & Travel',
    description: 'Complete travel management and booking solutions.',
    icon: '🌍'
  }
]

export function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((current) =>
      current === services.length - 3 ? 0 : current + 1
    )
  }

  const prev = () => {
    setCurrentIndex((current) =>
      current === 0 ? services.length - 3 : current - 1
    )
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        
        <div className="relative">
          {/* Previous button */}
          <button
            onClick={prev}
            aria-label="Previous services"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Services grid */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: -currentIndex * (100 / 3) + '%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex gap-6"
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex-none w-[calc(33.333%-1rem)] bg-white p-6 rounded-xl shadow-sm"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-block mt-4 text-primary hover:underline"
                  >
                    Learn more →
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Next services"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

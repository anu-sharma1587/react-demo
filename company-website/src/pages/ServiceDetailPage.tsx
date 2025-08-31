import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const services = {
  'it-outsourcing': {
    title: 'IT Outsourcing',
    description: 'End-to-end IT services and dedicated teams for your projects.',
    features: [
      'Dedicated Development Teams',
      'Cloud Infrastructure Management',
      'DevOps Services',
      'Quality Assurance & Testing',
      '24/7 Support & Maintenance'
    ],
    benefits: [
      'Cost Optimization',
      'Access to Global Talent Pool',
      'Scalable Resources',
      'Focus on Core Business',
      'Faster Time to Market'
    ]
  },
  'payment-app': {
    title: 'Online Payment App',
    description: 'Secure and scalable payment solutions for modern businesses.',
    features: [
      'Multiple Payment Methods',
      'Fraud Detection',
      'Real-time Transaction Processing',
      'Payment Analytics',
      'Automated Reconciliation'
    ],
    benefits: [
      'Increased Sales',
      'Reduced Transaction Costs',
      'Better Customer Experience',
      'Enhanced Security',
      'Global Payment Support'
    ]
  },
  'hotel-management': {
    title: 'Hotel Management',
    description: 'Comprehensive hotel property management system designed to streamline operations and enhance guest experience.',
    features: [
      'Real-time Reservation System',
      'Guest Profile Management',
      'Room Inventory & Pricing',
      'Housekeeping Management',
      'Point of Sale Integration',
      'Mobile Check-in/Check-out',
      'Revenue Management System'
    ],
    benefits: [
      'Increased Operational Efficiency',
      'Enhanced Guest Experience',
      'Maximized Revenue',
      'Reduced Manual Errors',
      'Better Staff Coordination',
      'Real-time Performance Insights'
    ]
  },
  'bus-booking': {
    title: 'Bus Booking',
    description: 'Modern bus reservation and fleet management system for transport companies.',
    features: [
      'Online Ticket Booking',
      'Seat Selection System',
      'Route Management',
      'Fleet Tracking',
      'Automated Scheduling'
    ],
    benefits: [
      'Increased Booking Efficiency',
      'Reduced Operating Costs',
      'Better Fleet Utilization',
      'Enhanced Customer Service',
      'Real-time Analytics'
    ]
  },
  'flight-booking': {
    title: 'Flight Booking',
    description: 'Advanced airline reservation system with comprehensive travel management capabilities.',
    features: [
      'Multi-airline Integration',
      'Real-time Seat Availability',
      'Fare Management',
      'Passenger Management',
      'Booking Analytics'
    ],
    benefits: [
      'Streamlined Booking Process',
      'Higher Conversion Rates',
      'Reduced Operational Costs',
      'Better Customer Experience',
      'Data-driven Insights'
    ]
  },
  'tour-travel': {
    title: 'Tour & Travel',
    description: 'Complete travel management solution for tour operators and travel agencies.',
    features: [
      'Package Tour Management',
      'Itinerary Planning',
      'Vendor Management',
      'Customer CRM',
      'Travel Documentation'
    ],
    benefits: [
      'Efficient Tour Planning',
      'Better Resource Management',
      'Enhanced Customer Service',
      'Increased Profitability',
      'Streamlined Operations'
    ]
  }
}

export function ServiceDetailPage() {
  const { id } = useParams()
  const service = services[id as keyof typeof services]

  if (!service) {
    return <div className="container py-16">Service not found</div>
  }

  return (
    <div className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl text-gray-600 mb-12">{service.description}</p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <svg
                        className="h-6 w-6 text-primary mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <svg
                        className="h-6 w-6 text-green-500 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {benefit}
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started with {service.title}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

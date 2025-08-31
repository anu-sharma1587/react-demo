import { motion } from 'framer-motion'
import { getImagePath } from '../lib/utils'

interface Client {
  name: string;
  industry: string;
  logo: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const clientCompanies: Client[] = [
  {
    name: "NexusHotels International",
    industry: "Hospitality",
    logo: "logos/nexushotels-logo.svg"
  },
  {
    name: "SkyCruise Airways",
    industry: "Aviation & Travel",
    logo: "logos/skycruise-logo.svg"
  },
  {
    name: "GlobalTech Solutions",
    industry: "Technology",
    logo: "logos/globaltech-logo.svg"
  },
  {
    name: "PrimePeak Financial",
    industry: "Finance",
    logo: "logos/primepeak-logo.svg"
  },
  {
    name: "VirtualVista Systems",
    industry: "Software",
    logo: "logos/virtualvista-logo.svg"
  },
  {
    name: "EcoTravel Group",
    industry: "Travel & Tourism",
    logo: "logos/ecotravel-logo.svg"
  }
]

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Robert Chen",
    role: "CTO, NexusHotels International",
    content: "Implementing HotelPro has been transformative for our 32-hotel chain. The system's ability to handle complex multi-property management while providing real-time analytics has increased our operational efficiency by 40%. The dedicated support team's responsiveness is exceptional.",
    image: "avatars/robert-chen.svg"
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    role: "Director of Digital, SkyCruise Airways",
    content: "TravelCore's integration capabilities are outstanding. We've successfully connected our reservation system with over 200 travel partners, and the automated scheduling features have reduced our booking processing time by 60%. A game-changer for our operations.",
    image: "avatars/elena-rodriguez.svg"
  },
  {
    id: 3,
    name: "Michael Chang",
    role: "CEO, VirtualVista Systems",
    content: "The cloud migration service exceeded our expectations. The team's expertise in handling complex enterprise systems while ensuring zero downtime was impressive. Our infrastructure costs have reduced by 35% since the migration.",
    image: "avatars/michael-chang.svg"
  }
]

export function ClientsSection() {
  return (
    <section className="py-16">
      <div className="container">
        {/* Client Logos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted By Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {clientCompanies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <img
                  src={getImagePath(company.logo)}
                  alt={`${company.name} Logo`}
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {company.name}
                </div>
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
                    src={getImagePath(testimonial.image)}
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

import { Hero } from '@/components/Hero'
import { ServicesSlider } from '@/components/ServicesSlider'
import { ClientsSection } from '@/components/ClientsSection'
import { motion } from 'framer-motion'

export function HomePage() {
  return (
    <div>
      <Hero />
      <ServicesSlider />
      <ClientsSection />
      
      {/* About Section Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">About TechSolutions Inc.</h2>
              <p className="text-gray-600 mb-4">
                We are a leading IT solutions provider with over a decade of experience in delivering cutting-edge technology solutions to businesses worldwide.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of experts specializes in IT outsourcing, custom software development, and innovative product solutions that help businesses thrive in the digital age.
              </p>
              <a
                href="/about"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Learn More About Us
              </a>
            </div>
            <div className="relative">
              <img
                src="/react-demo/about-preview.svg"
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

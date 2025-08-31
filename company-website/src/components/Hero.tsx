import { motion } from 'framer-motion'

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 h-[600px] flex items-center">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-5xl font-bold mb-6">
            Transform Your Business with Expert IT Solutions
          </h1>
          <p className="text-xl mb-8">
            Reliable IT Solutions & In-House Products for Modern Enterprises
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-block"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
      {/* Background pattern/overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
    </div>
  )
}

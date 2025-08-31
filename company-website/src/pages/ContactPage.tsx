import { useState } from 'react'
import { motion } from 'framer-motion'

interface ContactForm {
  name: string
  email: string
  message: string
}

export function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      // Simulated API call
      console.log('Form submitted:', formData)
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
          <div className="bg-white rounded-xl shadow-sm p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full bg-primary text-white py-3 rounded-lg font-medium
                  ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90'}
                  transition-colors`}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-600 text-center"
                >
                  Thank you for your message! We'll get back to you soon.
                </motion.p>
              )}

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-600 text-center"
                >
                  There was an error sending your message. Please try again.
                </motion.p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-primary text-2xl mb-3">📍</div>
              <h3 className="font-medium mb-2">Address</h3>
              <p className="text-gray-600">
                123 Tech Street<br />
                Silicon Valley, CA 94025
              </p>
            </div>
            <div>
              <div className="text-primary text-2xl mb-3">📧</div>
              <h3 className="font-medium mb-2">Email</h3>
              <p className="text-gray-600">contact@techsolutions.com</p>
            </div>
            <div>
              <div className="text-primary text-2xl mb-3">📱</div>
              <h3 className="font-medium mb-2">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

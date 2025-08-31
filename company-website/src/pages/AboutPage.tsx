export function AboutPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2023 by industry veterans David Chen and Sarah Martinez, TechSolutions emerged from a shared vision to transform how businesses leverage technology. With over 40 years of combined experience at leading tech companies, we saw an opportunity to bring enterprise-grade solutions to growing businesses.
          </p>
          <p className="text-gray-600 mb-4">
            Our journey began with a simple question: "How can we make powerful technology solutions more accessible to businesses of all sizes?" Today, we're proud to say we've helped over 50 companies modernize their operations and achieve digital excellence.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Leadership</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">David Chen</h3>
              <p className="text-gray-600">
                Former Technical Director at Microsoft with 20+ years of experience in cloud computing and enterprise software. David leads our product development and technical strategy.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Sarah Martinez</h3>
              <p className="text-gray-600">
                Previously VP of Engineering at Oracle, Sarah brings 18 years of expertise in systems architecture and digital transformation. She oversees our client solutions and IT consulting services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Innovation First</h3>
            <p className="text-gray-600">
              We constantly push the boundaries of what's possible, bringing cutting-edge solutions to our clients before they even know they need them.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Client Success</h3>
            <p className="text-gray-600">
              Your success is our success. We measure our achievements through the tangible results we deliver to our clients.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Technical Excellence</h3>
            <p className="text-gray-600">
              We maintain the highest standards in our work, ensuring our solutions are robust, scalable, and future-proof.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Our Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-3">Products</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>HotelPro: Complete hotel management system</li>
              <li>TravelCore: Advanced travel booking platform</li>
              <li>CloudGuard: Enterprise security solution</li>
              <li>DataSync: Real-time data synchronization tool</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">Services</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Digital Transformation Consulting</li>
              <li>Custom Software Development</li>
              <li>Cloud Migration & Management</li>
              <li>24/7 IT Support & Maintenance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'

export function ServicesPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      
      {/* Products Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Our Products</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-medium mb-4">HotelPro</h3>
            <p className="text-gray-600 mb-4">
              A comprehensive hotel management system designed for modern hospitality businesses. From reservation management to guest services, HotelPro streamlines every aspect of hotel operations.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Smart Reservation System</li>
              <li>Integrated Payment Processing</li>
              <li>Real-time Room Management</li>
              <li>Guest Service Portal</li>
              <li>Analytics Dashboard</li>
            </ul>
            <Link to="/services/hotel-management" className="text-blue-600 font-medium hover:underline">Learn more →</Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-medium mb-4">TravelCore</h3>
            <p className="text-gray-600 mb-4">
              An advanced travel booking platform that helps travel agencies and tour operators manage their operations efficiently. Built with modern technology to handle complex travel arrangements.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Multi-vendor Integration</li>
              <li>Dynamic Package Builder</li>
              <li>Automated Itinerary Planning</li>
              <li>Commission Management</li>
              <li>Booking Analytics</li>
            </ul>
            <Link to="/services/tour-travel" className="text-blue-600 font-medium hover:underline">Learn more →</Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div>
        <h2 className="text-3xl font-semibold mb-8">IT Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Digital Transformation</h3>
            <p className="text-gray-600 mb-4">
              We help businesses modernize their operations through strategic digital transformation. Our approach combines technical expertise with business acumen to deliver measurable results.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Technology Assessment</li>
              <li>Digital Strategy Development</li>
              <li>Process Automation</li>
              <li>Change Management</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Custom Development</h3>
            <p className="text-gray-600 mb-4">
              From concept to deployment, we build custom software solutions that address your specific business challenges using cutting-edge technologies and best practices.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Web Applications</li>
              <li>Mobile Solutions</li>
              <li>Enterprise Software</li>
              <li>API Integration</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Cloud Solutions</h3>
            <p className="text-gray-600 mb-4">
              Leverage the power of cloud computing with our comprehensive cloud migration and management services. We ensure smooth transitions and optimal performance.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Cloud Migration</li>
              <li>Infrastructure Management</li>
              <li>Security Implementation</li>
              <li>24/7 Monitoring</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

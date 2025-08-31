import { getImagePath } from '../lib/utils'

interface ClientSuccess {
  name: string;
  industry: string;
  logo: string;
  description: string;
  achievedResults: string[];
}

const successStories: ClientSuccess[] = [
  {
    name: "NexusHotels International",
    industry: "Hospitality",
    logo: "logos/nexushotels-logo.svg",
    description: "A leading luxury hotel chain managing 32 premium properties across Asia and Europe. We revolutionized their operations with our comprehensive HotelPro management system.",
    achievedResults: [
      "40% increase in operational efficiency across all properties",
      "90% faster check-in/check-out process with digital keys",
      "28% increase in guest satisfaction scores",
      "Seamless integration with 15+ booking platforms"
    ]
  },
  {
    name: "SkyCruise Airways",
    industry: "Aviation & Travel",
    logo: "logos/skycruise-logo.svg",
    description: "A rapidly expanding airline serving 12 countries with a modern fleet of 50+ aircraft. Our TravelCore solution transformed their booking and operations management.",
    achievedResults: [
      "Connected with 200+ global travel partners",
      "55% reduction in flight scheduling complexity",
      "32% decrease in operational overhead",
      "Real-time inventory and pricing optimization"
    ]
  },
  {
    name: "GlobalTech Solutions",
    industry: "Technology",
    logo: "logos/globaltech-logo.svg",
    description: "An enterprise technology provider serving Fortune 500 clients. We engineered their complete cloud transformation while ensuring business continuity.",
    achievedResults: [
      "Zero-downtime migration of 500+ applications",
      "35% reduction in infrastructure costs",
      "99.99% system availability maintained",
      "Advanced security compliance achieved"
    ]
  }
];

export function ClientsPage() {
  return (
    <div className="container py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-6">Success Stories</h1>
        <p className="text-xl text-gray-600">
          Discover how we've helped leading companies transform their businesses with our innovative solutions.
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl -z-10" />
        <div className="space-y-16 relative z-10">
        {successStories.map((story, index) => (
          <div 
            key={story.name} 
            className="group grid md:grid-cols-2 gap-8 items-center hover:bg-gray-50 rounded-xl transition-colors duration-300 p-8"
          >
            <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className="flex items-center gap-4">
                <img
                  src={getImagePath(story.logo)}
                  alt={`${story.name} logo`}
                  className="h-16 w-auto"
                />
                <div>
                  <h2 className="text-2xl font-bold">{story.name}</h2>
                  <p className="text-gray-600">{story.industry}</p>
                </div>
              </div>
              <p className="text-lg text-gray-700">
                {story.description}
              </p>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Key Achievements:</h3>
                <ul className="space-y-2">
                  {story.achievedResults.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={`bg-white p-8 rounded-xl shadow-lg ${index % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className="aspect-video relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src={getImagePath(`projects/${story.name.toLowerCase().replace(/\s+/g, '-')}-${
                    story.industry === 'Hospitality' ? 'system' :
                    story.industry === 'Aviation & Travel' ? 'booking' :
                    'cloud'
                  }.svg`)}
                  alt={`${story.name} project screenshot`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute right-4">
                  <img
                   // src={getImagePath(`logos/${story.name.toLowerCase().replace(/\s+/g, '-')}-logo.svg`)}
                    src={getImagePath(story.logo)}
                    alt={`${story.name} logo`}
                    className="h-12 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

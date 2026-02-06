import { ExternalLink, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const caseStudies = [
  {
    title: "Tech Startup Website",
    category: "Web Development",
    description:
      "Complete website redesign and development for a growing tech startup, resulting in 200% increase in conversions.",
    image:
      "https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njk1NjYyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    results: [
      { label: "Conversion Rate", value: "+200%" },
      { label: "Page Load Time", value: "-60%" },
    ],
  },
  {
    title: "E-Commerce Platform",
    category: "Full Stack Development",
    description:
      "Built a scalable e-commerce platform with advanced features, handling 10,000+ daily transactions.",
    image:
      "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzY5NTgzODQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    results: [
      { label: "Daily Transactions", value: "10K+" },
      { label: "Revenue Growth", value: "+350%" },
    ],
  },
  {
    title: "Mobile Banking App",
    category: "Mobile App Development",
    description:
      "Designed and developed a secure mobile banking application with seamless UX and advanced security features.",
    image:
      "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY5NDc3NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    results: [
      { label: "App Downloads", value: "50K+" },
      { label: "User Rating", value: "4.8/5" },
    ],
  },
];

const clients = [
  { name: "TechCorp", logo: "T" },
  { name: "StartupHub", logo: "S" },
  { name: "DigitalWave", logo: "D" },
  { name: "InnovateLab", logo: "I" },
  { name: "GrowthCo", logo: "G" },
  { name: "FutureTech", logo: "F" },
];

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-brand-light text-brand-hover rounded-full text-sm mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Case Studies
          </h2>
          <p className="text-lg text-brand-dark max-w-3xl mx-auto">
            Real results for real businesses. See how we've helped companies
            transform their digital presence.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-900">
                  {study.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {study.title}
                </h3>
                <p className="text-brand-dark mb-4 line-clamp-3">
                  {study.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t border-gray-200">
                  {study.results.map((result, i) => (
                    <div key={i}>
                      <div className="text-2xl font-bold text-brand-primary flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {result.value}
                      </div>
                      <div className="text-xs text-brand-dark">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* View Case Study Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-brand-primary font-medium hover:gap-2 transition-all"
                >
                  View Case Study
                  <ExternalLink className="ml-1 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted By Section */}
        <div className="bg-white rounded-2xl p-12 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Trusted by Leading Brands
          </h3>

          {/* Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-brand-light2 to-brand-light flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-3xl font-bold text-brand-hover">
                    {client.logo}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-brand-dark">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-brand-dark">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-brand-dark">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-brand-dark">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

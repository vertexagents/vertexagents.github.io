import {
  Globe,
  Search,
  BarChart3,
  Smartphone,
  Palette,
  Target,
  Code2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Custom, responsive websites that drive results and deliver exceptional user experiences.",
    features: ["Responsive Design", "CMS Integration", "E-commerce Solutions"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Rank higher on search engines and attract quality traffic with our proven SEO strategies.",
    features: ["On-Page SEO", "Technical SEO", "Local SEO"],
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description:
      "Data-driven marketing campaigns that connect with your audience and maximize ROI.",
    features: ["Social Media", "Email Marketing", "Content Strategy"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that engage users on any device.",
    features: ["iOS & Android", "React Native", "App Store Optimization"],
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    description:
      "Create a memorable brand identity that resonates with your target audience.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity"],
  },
  {
    icon: Target,
    title: "Performance Marketing",
    description:
      "Results-focused campaigns with measurable outcomes and optimized ad spend.",
    features: [
      "PPC Campaigns",
      "Conversion Optimization",
      "Analytics & Reporting",
    ],
  },
  {
    icon: Code2,
    title: "Full-Stack Tech Solutions",
    description:
      "End-to-end software development from concept to deployment and beyond.",
    features: ["Custom Software", "API Development", "Cloud Solutions"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-brand-light font-bold text-brand-hover rounded-full text-sm mb-4">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg text-brand-dark max-w-3xl mx-auto">
            From strategy to execution, we provide everything you need to
            succeed in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-brand-primary hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-brand-light rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-hover transition-colors">
                  <Icon className="w-7 h-7 text-brand-hover group-hover:text-white transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-brand-dark mb-4">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-brand-dark"
                    >
                      <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-brand-primary font-medium group-hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-primary to-brand-hover rounded-2xl p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-brand-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive digital solutions can help
              your business grow and succeed.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-brand-hover rounded-lg hover:bg-brand-light transition-colors font-medium"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

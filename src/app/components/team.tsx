import { Award, Users, Lightbulb, Target } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTU4MzY2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "15+ years leading digital transformation projects",
  },
  {
    name: "Priya Menon",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1764408721535-2dcb912db83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjB0ZWFtfGVufDF8fHx8MTc2OTU5MDI1MXww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Award-winning designer with expertise in branding",
  },
  {
    name: "Arun Sharma",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1581094482523-8555833e6aba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwdGVhbSUyMHdvcmtpbmd8ZW58MXx8fHwxNzY5NDk5MjU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Full-stack expert specializing in scalable solutions",
  },
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We focus on measurable outcomes that drive your business forward.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "Cutting-edge solutions using the latest technologies and best practices.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We work alongside you as a trusted partner in your success.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description:
      "Premium quality in every project, backed by our 98% satisfaction rate.",
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-brand-light text-brand-hover rounded-full text-sm mb-4">
            Our Team
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet the Experts Behind Your Success
          </h2>
          <p className="text-lg text-brand-dark max-w-3xl mx-auto">
            A talented team of designers, developers, and digital strategists
            passionate about delivering excellence.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div key={index} className="group text-center">
              {/* Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <div className="text-brand-primary font-medium mb-3">
                {member.role}
              </div>
              <p className="text-brand-dark text-sm">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Kerala Digital?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-brand-dark text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>

          {/* Experience Highlights */}
          <div className="mt-12 pt-12 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-primary mb-2">
                10+
              </div>
              <div className="text-brand-dark">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-primary mb-2">
                25+
              </div>
              <div className="text-brand-dark">Expert Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-primary mb-2">
                150+
              </div>
              <div className="text-brand-dark">Successful Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-primary mb-2">
                15+
              </div>
              <div className="text-brand-dark">Industry Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

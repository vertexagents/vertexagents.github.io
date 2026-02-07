import { ArrowRight } from "lucide-react";
import FrostedGlassHero from "./ui/FrostedGlassHero";

export function Hero() {
  return (
    <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-[#FFE5DF] text-brand-dark rounded-full text-sm mb-6">
              Built for Sustainable Digital Growth
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-primary mb-6 leading-tight">
              Digital Solutions.{" "}
              <span className="text-brand-dark">
                Strategically Built to Perform.
              </span>
            </h1>

            <p className="text-lg text-brand-dark mb-8 max-w-2xl mx-auto lg:mx-0">
              We help businesses build and maintain a strong, competitive
              digital presence by aligning strategy, design, and technology with
              real business objectives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white rounded-lg hover:bg-brand-hover transition-colors group"
              >
                Start a Conversation
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-dark border-2 border-brand-dark rounded-lg hover:border-brand-primary hover:text-brand-hover transition-colors"
              >
                View Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto lg:mx-0">
              <div>
                <div className="text-3xl font-bold text-brand-primary">
                  150+
                </div>
                <div className="text-sm text-brand-dark">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">98%</div>
                <div className="text-sm text-brand-dark">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">10+</div>
                <div className="text-sm text-brand-dark">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Visual — BREAKOUT */}
          <div className="relative hidden lg:flex items-center overflow-visible">
            <div
              className="
      relative
      h-[580px]
      w-[calc(50vw+80px)]
      max-w-[calc(100vw-3rem)]
      ml-auto
      rounded-3xl
      overflow-hidden
    "
            >
              <FrostedGlassHero />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

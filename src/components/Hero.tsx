import { ArrowRight, Users, Target, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroImage from "@/assets/twagit-hero.jpg"

export function Hero() {
  const scrollToSection = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Women in Transport" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-twagit-navy/90 via-twagit-navy/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="slide-in-up">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-heading">
                Empowering Women in{" "}
                <span className="text-primary">Transport</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
                Building a Zimbabwe where women are equally represented and empowered in the transport sector through training, mentorship, and advocacy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                onClick={() => scrollToSection("#get-involved")}
                className="btn-hero text-lg"
              >
                Join Our Network
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection("#about")}
                className="btn-secondary text-lg"
              >
                Learn More
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="h-8 w-8 text-primary mr-2" />
                </div>
                <div className="stat-number">500+</div>
                <p className="text-gray-300 text-sm">Women to Train</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Target className="h-8 w-8 text-primary mr-2" />
                </div>
                <div className="stat-number">100+</div>
                <p className="text-gray-300 text-sm">Network Goal</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Award className="h-8 w-8 text-primary mr-2" />
                </div>
                <div className="stat-number">2</div>
                <p className="text-gray-300 text-sm">Year Mission</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60 float-animation">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
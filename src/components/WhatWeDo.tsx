import { GraduationCap, Users, Megaphone, Network } from "lucide-react"

const services = [
  {
    name: "Training & Capacity Building",
    description: "Comprehensive programs designed to build technical skills, leadership capabilities, and industry knowledge for women in transport.",
    icon: GraduationCap,
    features: ["Technical Skills Development", "Leadership Training", "Industry Certifications", "Professional Development"],
  },
  {
    name: "Mentorship & Coaching",
    description: "Personalized guidance from experienced professionals to support career growth and personal development in the transport sector.",
    icon: Users,
    features: ["One-on-one Mentoring", "Peer Support Groups", "Career Guidance", "Personal Development"],
  },
  {
    name: "Policy Advocacy",
    description: "Working with government and industry stakeholders to create policies that support women's participation in transport.",
    icon: Megaphone,
    features: ["Policy Research", "Stakeholder Engagement", "Legislative Advocacy", "Industry Standards"],
  },
  {
    name: "Community Building",
    description: "Creating strong networks and communities where women can connect, collaborate, and support each other's success.",
    icon: Network,
    features: ["Professional Networks", "Industry Events", "Online Communities", "Resource Sharing"],
  },
]

export function WhatWeDo() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
            What We <span className="text-primary">Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive approach combines training, mentorship, advocacy, and community building 
            to create lasting change in the transport sector.
          </p>
          <div className="road-divider mx-auto w-24 mt-8"></div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={service.name} className={`empowerment-card ${index % 2 === 0 ? 'slide-in-up' : ''}`}>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-xl shadow-orange">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="text-2xl font-bold text-card-foreground mb-4 font-heading">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4 font-heading">Ready to Get Started?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join our community of empowered women transforming Zimbabwe's transport sector
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                Explore Programs
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import { Eye, Target, Heart, Users, Lightbulb, Shield } from "lucide-react"

const values = [
  {
    name: "Inclusivity",
    description: "Creating spaces where all women feel welcome and valued",
    icon: Users,
  },
  {
    name: "Empowerment",
    description: "Building confidence and providing tools for success",
    icon: Shield,
  },
  {
    name: "Equality",
    description: "Advocating for fair representation and opportunities",
    icon: Heart,
  },
  {
    name: "Support",
    description: "Providing mentorship and community connections",
    icon: Users,
  },
  {
    name: "Innovation",
    description: "Embracing new approaches to transform the industry",
    icon: Lightbulb,
  },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
            About <span className="text-primary">TWAGIT</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tamiranashe Women in Transport (TWAGIT) is a pioneering organization dedicated to transforming 
            Zimbabwe's transport sector through women's empowerment and leadership.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="empowerment-card">
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-primary mr-4" />
              <h3 className="text-2xl font-bold text-card-foreground font-heading">Our Vision</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Zimbabwe where women are equally represented and empowered in the transport sector, 
              driving innovation and progress across all levels of the industry.
            </p>
          </div>

          <div className="empowerment-card">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-primary mr-4" />
              <h3 className="text-2xl font-bold text-card-foreground font-heading">Our Mission</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To promote women's participation and leadership in the transport industry, providing them 
              with the necessary skills, support, and opportunities to succeed and excel.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4 font-heading">Our Core Values</h3>
          <div className="road-divider mx-auto w-24 mb-12"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {values.map((value) => (
            <div key={value.name} className="text-center empowerment-card">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-card-foreground mb-3 font-heading">
                {value.name}
              </h4>
              <p className="text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Join us in building a more inclusive and empowered transport sector in Zimbabwe
          </p>
          <div className="road-divider mx-auto w-48"></div>
        </div>
      </div>
    </section>
  )
}
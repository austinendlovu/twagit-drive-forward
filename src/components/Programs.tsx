import { Calendar, MapPin, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import mentorshipImage from "@/assets/mentorship-icon.jpg"
import trainingImage from "@/assets/training-program.jpg"

const programs = [
  {
    name: "Mentorship Program",
    description: "Connect with experienced professionals who will guide your career journey in the transport sector.",
    image: mentorshipImage,
    duration: "6 months",
    participants: "20 women per cohort",
    schedule: "Monthly 1-on-1 sessions",
    location: "Virtual & In-person",
    features: [
      "Personal career development plan",
      "Industry networking opportunities",
      "Skills assessment and gap analysis",
      "Ongoing support and guidance"
    ],
    status: "Accepting Applications"
  },
  {
    name: "Training Program",
    description: "Comprehensive training covering technical skills, leadership, and industry knowledge essential for transport careers.",
    image: trainingImage,
    duration: "3 months",
    participants: "30 women per cohort",
    schedule: "Weekly workshops",
    location: "Training Centers across Zimbabwe",
    features: [
      "Technical skills certification",
      "Leadership development modules",
      "Industry-specific knowledge",
      "Hands-on practical experience"
    ],
    status: "Starting February 2024"
  }
]

const upcomingEvents = [
  {
    name: "Women in Transport Summit",
    date: "March 15, 2024",
    location: "Harare International Conference Centre",
    type: "Conference",
    description: "Annual gathering of women leaders in Zimbabwe's transport sector"
  },
  {
    name: "Logistics Skills Workshop",
    date: "April 8, 2024",
    location: "Bulawayo Training Center",
    type: "Workshop",
    description: "Hands-on training in modern logistics and supply chain management"
  },
  {
    name: "Policy Advocacy Roundtable",
    date: "May 20, 2024",
    location: "Virtual Event",
    type: "Roundtable",
    description: "Discussing policy changes to support women in transport"
  }
]

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our flagship programs designed to empower women at every stage of their transport career journey.
          </p>
          <div className="road-divider mx-auto w-24 mt-8"></div>
        </div>

        {/* Main Programs */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {programs.map((program, index) => (
            <div key={program.name} className="empowerment-card">
              <div className="aspect-video rounded-lg overflow-hidden mb-6">
                <img 
                  src={program.image} 
                  alt={program.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-card-foreground font-heading">
                  {program.name}
                </h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  program.status === "Accepting Applications" 
                    ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                    : "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                }`}>
                  {program.status}
                </span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {program.description}
              </p>

              {/* Program Details */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-primary mr-2" />
                  <span className="text-muted-foreground">{program.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-primary mr-2" />
                  <span className="text-muted-foreground">{program.participants}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-primary mr-2" />
                  <span className="text-muted-foreground">{program.schedule}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-primary mr-2" />
                  <span className="text-muted-foreground">{program.location}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-card-foreground mb-3">Program Features:</h4>
                <ul className="space-y-2">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="btn-hero w-full">
                {program.status === "Accepting Applications" ? "Apply Now" : "Get Notified"}
              </Button>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4 font-heading">Upcoming Events</h3>
            <p className="text-lg text-muted-foreground">Join us at these exciting events and networking opportunities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.name} className="empowerment-card text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-card-foreground mb-2 font-heading">
                  {event.name}
                </h4>
                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <p className="flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </p>
                  <p className="flex items-center justify-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </p>
                </div>
                <p className="text-muted-foreground mb-4">
                  {event.description}
                </p>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {event.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
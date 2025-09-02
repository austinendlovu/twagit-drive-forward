import { useState } from "react"
import { UserPlus, Heart, Handshake, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const ways = [
  {
    name: "Become a Member",
    description: "Join our network of empowered women in transport and access exclusive resources, training, and networking opportunities.",
    icon: UserPlus,
    action: "Join Network",
    benefits: [
      "Access to mentorship programs",
      "Priority workshop registration",
      "Industry networking events",
      "Career development resources"
    ]
  },
  {
    name: "Volunteer with Us",
    description: "Share your expertise and experience by volunteering as a mentor, trainer, or event organizer in our programs.",
    icon: Handshake,
    action: "Start Volunteering",
    benefits: [
      "Mentor emerging professionals",
      "Lead training workshops",
      "Support event organization",
      "Policy advocacy initiatives"
    ]
  },
  {
    name: "Support Our Mission",
    description: "Help us expand our reach and impact by supporting our programs through donations or corporate partnerships.",
    icon: Heart,
    action: "Make a Donation",
    benefits: [
      "Fund training programs",
      "Support scholarship recipients",
      "Expand program reach",
      "Enable policy research"
    ]
  }
]

export function GetInvolved() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: ""
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate form submission
    toast({
      title: "Thank you for your interest!",
      description: "We'll get back to you within 48 hours to discuss how you can get involved with TWAGIT.",
    })
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      interest: "",
      message: ""
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="get-involved" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
            Get <span className="text-primary">Involved</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            There are many ways to join our mission of empowering women in Zimbabwe's transport sector. 
            Find the path that's right for you.
          </p>
          <div className="road-divider mx-auto w-24 mt-8"></div>
        </div>

        {/* Ways to Get Involved */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {ways.map((way) => (
            <div key={way.name} className="empowerment-card text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-hero rounded-full mb-6 shadow-orange">
                <way.icon className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-card-foreground mb-4 font-heading">
                {way.name}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {way.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-card-foreground mb-3">Benefits:</h4>
                <ul className="space-y-2 text-left">
                  {way.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="btn-hero w-full">
                {way.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-section rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-foreground mb-4 font-heading">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get in touch to discuss how you can join our mission.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">
                  I'm interested in *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="">Select your interest</option>
                  <option value="membership">Becoming a member</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="mentorship">Mentorship program</option>
                  <option value="training">Training programs</option>
                  <option value="partnership">Corporate partnership</option>
                  <option value="donation">Making a donation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your interest or ask any questions you might have..."
                  className="w-full"
                />
              </div>

              <div className="text-center">
                <Button type="submit" className="btn-hero">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
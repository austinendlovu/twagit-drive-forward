import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"

const contactInfo = [
  {
    name: "Email",
    value: "nancymbauranashe@gmail.com",
    icon: Mail,
    href: "mailto:nancymbauranashe@gmail.com"
  },
  {
    name: "Phone",
    value: "+263 772 355 070",
    icon: Phone,
    href: "tel:+263772355070"
  },
  {
    name: "Location",
    value: "Zimbabwe",
    icon: MapPin,
    href: "#"
  }
]

const socialMedia = [
  {
    name: "Twitter",
    username: "@TWAGIT",
    icon: Twitter,
    href: "https://twitter.com/TWAGIT"
  },
  {
    name: "Facebook",
    username: "@TamiranasheWomenInTransport",
    icon: Facebook,
    href: "https://facebook.com/TamiranasheWomenInTransport"
  },
  {
    name: "LinkedIn",
    username: "Tamiranashe Women in Transport",
    icon: Linkedin,
    href: "https://linkedin.com/company/tamiranashe-women-in-transport"
  }
]

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Contact <span className="text-white/90">Us</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to join our mission? Have questions about our programs? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 font-heading">Get in Touch</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((item) => (
                <div key={item.name} className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">{item.name}</h4>
                    {item.href !== "#" ? (
                      <a
                        href={item.href}
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white/80">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 font-heading">Follow Us</h4>
              <div className="flex space-x-4">
                {socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors group"
                  >
                    <social.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>
              <div className="mt-4 space-y-2">
                {socialMedia.map((social) => (
                  <div key={social.name} className="text-sm text-white/70">
                    <span className="font-medium">{social.name}:</span> {social.username}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 font-heading">
              Join the Movement
            </h3>
            <p className="text-white/80 mb-8 leading-relaxed">
              Be part of the change that's transforming Zimbabwe's transport sector. Whether you're looking to 
              advance your career, share your expertise, or support our mission, there's a place for you in 
              the TWAGIT community.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-white/80">Join our mentorship programs and training initiatives</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-white/80">Connect with like-minded professionals in your industry</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-white/80">Access exclusive resources and career development opportunities</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-white/80">Contribute to policy advocacy and industry transformation</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <h4 className="text-lg font-semibold text-white mb-4">Office Hours</h4>
              <div className="space-y-2 text-white/80">
                <p><span className="font-medium">Monday - Friday:</span> 8:00 AM - 5:00 PM</p>
                <p><span className="font-medium">Weekend:</span> By appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
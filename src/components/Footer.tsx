import { Heart, Mail, Phone } from "lucide-react"

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Get Involved", href: "#get-involved" },
  { name: "Contact", href: "#contact" },
]

const programs = [
  { name: "Mentorship Program", href: "#programs" },
  { name: "Training Program", href: "#programs" },
  { name: "Policy Advocacy", href: "#programs" },
  { name: "Community Building", href: "#programs" },
]

export function Footer() {
  const scrollToSection = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-twagit-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-heading">TWAGIT</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Empowering women in Zimbabwe's transport sector through training, mentorship, and advocacy.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <a href="mailto:nancymbauranashe@gmail.com" className="text-white/80 hover:text-white transition-colors text-sm">
                  nancymbauranashe@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <a href="tel:+263772355070" className="text-white/80 hover:text-white transition-colors text-sm">
                  +263 772 355 070
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Our Programs</h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <button
                    onClick={() => scrollToSection(program.href)}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {program.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Our Mission</h4>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              To promote women's participation and leadership in the transport industry, providing them with the necessary skills, support, and opportunities to succeed.
            </p>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-sm font-medium mb-2">Vision 2026</p>
              <p className="text-white/80 text-xs">
                A Zimbabwe where women are equally represented and empowered in the transport sector.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm">
              © 2024 Tamiranashe Women in Transport (TWAGIT). All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-white/80 text-sm mr-2">Made with</span>
              <Heart className="h-4 w-4 text-primary fill-current" />
              <span className="text-white/80 text-sm ml-2">for women in transport</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
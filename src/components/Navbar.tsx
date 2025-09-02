import { useState } from "react"
import { Menu, X, House, Info, BookOpen, Users, Newspaper, Mail } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "#home", icon: House },
  { name: "About", href: "#about", icon: Info },
  { name: "Programs", href: "#programs", icon: BookOpen },
  { name: "Get Involved", href: "#get-involved", icon: Users },
  { name: "News", href: "#news", icon: Newspaper },
  { name: "Contact", href: "#contact", icon: Mail },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 items-center">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-3">
            <img 
              src="/lovable-uploads/f42027b0-23c8-4996-8ec9-d259111bead5.png" 
              alt="TWAGIT Logo" 
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary font-heading">TWAGIT</span>
              <span className="text-xs text-muted-foreground font-medium hidden sm:block">Tamiranashe Women in Transport</span>
            </div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground ml-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center gap-2 text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors group"
              >
                <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                {item.name}
              </button>
            );
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <ThemeToggle />
          <Button
            onClick={() => scrollToSection("#get-involved")}
            className="btn-hero"
          >
            Join Us
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src="/lovable-uploads/f42027b0-23c8-4996-8ec9-d259111bead5.png" 
                  alt="TWAGIT Logo" 
                  className="h-8 w-auto"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-primary font-heading">TWAGIT</span>
                  <span className="text-xs text-muted-foreground font-medium">Tamiranashe Women in Transport</span>
                </div>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="-mx-3 flex items-center gap-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted w-full text-left"
                      >
                        <Icon className="h-5 w-5" />
                        {item.name}
                      </button>
                    );
                  })}
                </div>
                <div className="py-6">
                  <Button
                    onClick={() => scrollToSection("#get-involved")}
                    className="btn-hero w-full"
                  >
                    Join Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
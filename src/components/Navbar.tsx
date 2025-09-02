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
    <header className="fixed inset-x-0 top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
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
        <div className="flex md:hidden">
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
        <div className="hidden md:flex md:gap-x-6 lg:gap-x-8">
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
        <div className="hidden md:flex md:flex-1 md:justify-end md:items-center md:gap-4">
          <ThemeToggle />
          <Button
            onClick={() => scrollToSection("#get-involved")}
            className="btn-hero"
          >
            Join Us
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          
          {/* Menu panel */}
          <div className="fixed right-4 top-4 z-50 max-w-sm w-[90%] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border border-border shadow-lg rounded-xl">
            <div className="px-6 py-6">
              <div className="flex items-center justify-between mb-6">
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
                  className="-m-2.5 rounded-md p-2.5 text-foreground hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
              <div className="space-y-3">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-semibold text-foreground hover:bg-muted w-full text-left transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                      {item.name}
                    </button>
                  );
                })}
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
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
      )}
    </header>
  )
}
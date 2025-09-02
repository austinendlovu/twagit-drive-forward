import { useEffect, useState } from "react"
import { Users, Target, Calendar, Award } from "lucide-react"

const stats = [
  {
    id: "women-trained",
    name: "Women to Train",
    value: 500,
    suffix: "+",
    icon: Users,
    description: "Our goal for the next 2 years"
  },
  {
    id: "network-size",
    name: "Network Members",
    value: 100,
    suffix: "+",
    icon: Target,
    description: "Building our community in 1 year"
  },
  {
    id: "years-mission",
    name: "Year Mission",
    value: 2,
    suffix: "",
    icon: Calendar,
    description: "Timeline for our impact goals"
  },
  {
    id: "programs",
    name: "Active Programs",
    value: 4,
    suffix: "",
    icon: Award,
    description: "Comprehensive support initiatives"
  }
]

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(end * easeOutCubic))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, hasStarted])

  return { count, startCounting: () => setHasStarted(true) }
}

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [isVisible])

  return (
    <section id="stats-section" className="py-24 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Our Goals & <span className="text-white/90">Objectives</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ambitious targets that drive our mission to transform Zimbabwe's transport sector
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const { count, startCounting } = useCountUp(stat.value)
            
            // Start counting when component becomes visible
            useEffect(() => {
              if (isVisible) {
                startCounting()
              }
            }, [isVisible, startCounting])

            return (
              <div key={stat.id} className="text-center">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="stat-number text-white mb-2">
                    {count}{stat.suffix}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-heading">
                    {stat.name}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Context */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">
              Making a Measurable Impact
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">
              These ambitious targets represent our commitment to creating lasting change in Zimbabwe's transport sector. 
              Through structured programs, strategic partnerships, and community building, we're working towards a future 
              where women are not just participants, but leaders driving innovation and progress in transport.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
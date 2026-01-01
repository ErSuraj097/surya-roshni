"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Lightbulb,
  Users,
  Globe,
  Award,
  TrendingUp,
  Shield,
  Heart,
  Target,
  Eye,
  ChevronRight,
  CheckCircle,
  Star,
  Calendar,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false)
  const [activeValue, setActiveValue] = useState(0)

  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % valuePillars.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      if (heroRef.current) {
        gsap.from(heroRef.current.querySelectorAll(".hero-content > *"), {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        })
      }

      // Stats counter animation
      if (statsRef.current) {
        gsap.from(statsRef.current.querySelectorAll(".stat-card"), {
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
          opacity: 0,
          scale: 0.8,
          y: 30,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
        })
      }

      // Values animation
      if (valuesRef.current) {
        gsap.from(valuesRef.current.querySelectorAll(".value-card"), {
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 70%",
          },
          opacity: 0,
          y: 60,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        })
      }

      // Timeline animation
      if (timelineRef.current) {
        gsap.from(timelineRef.current.querySelectorAll(".timeline-item"), {
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
          },
          opacity: 0,
          x: -50,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        })
      }
    })

    return () => ctx.revert()
  }, [])

  const companyStats = [
    { value: "₹7,435.22 Cr", label: "Turnover FY 2024-25", icon: TrendingUp },
    { value: "50+", label: "Countries Operating", icon: Globe },
    { value: "1973", label: "Founded", icon: Calendar },
    { value: "50,000+", label: "Projects Completed", icon: Award },
  ]

  const valuePillars = [
    {
      title: "Customer Satisfaction",
      description: "At Surya, we are driven by the philosophy that whatever we are today or whatever we will be tomorrow is the result of the effort we put into manufacture our products services that we offer. Our passion towards customer satisfaction through our effective exceptional products and services is our core motto towards the success.",
      icon: Heart,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Social Responsibility",
      description: "We try hard to help Mother Nature and contributing to economic development while improving the quality of life of the work force as well as of the local community and society at large. We strive to create eco-friendly products such as LED lighting products.",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Integrity",
      description: "Adhering to moral principles, we share an undivided spirit. This integrity is a virtue that is reflected in our personal lives, financial transactions and business deals.",
      icon: Shield,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Surya Parivar Philosophy",
      description: "A principle-centric, close knit family which stands high on the pillars of trust, team spirit and mutual respect for one another.",
      icon: Users,
      color: "from-purple-500 to-indigo-500",
    },
  ]

  const timeline = [
    {
      year: "1973",
      title: "Foundation",
      description: "Surya Roshni started with making Steel Tubes",
      icon: Lightbulb,
    },
    {
      year: "1984",
      title: "Lighting Division",
      description: "Started lighting division with the dream of 'Lighting Every City Every Home'",
      icon: Lightbulb,
    },
    {
      year: "2000s",
      title: "LED Revolution",
      description: "Embraced LED technology as the future of lighting",
      icon: TrendingUp,
    },
    {
      year: "2020s",
      title: "Smart Lighting",
      description: "Leading the smart and connected lighting revolution",
      icon: Target,
    },
  ]

  const achievements = [
    "One of the largest Steel Pipes and Lighting companies in India",
    "Exports to over 50 countries around the world",
    "Leading brand in the Lighting industry",
    "Energy efficient products with significantly lower maintenance costs",
    "Much longer life span compared to traditional lighting",
    "International sustainability standards compliance",
  ]

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <Navigation scrolled={scrolled} activePage="about" />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-accent-subtle/20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="hero-content max-w-4xl mx-auto text-center space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <Badge className="text-sm px-6 py-3 border-0 bg-gradient-to-r from-primary to-accent-glow text-white shadow-lg">
                Since 1973 - Lighting Excellence
              </Badge>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Committed to Excellence and a{" "}
              <span className="text-gradient bg-gradient-to-r from-accent-glow to-accent-warm bg-clip-text text-transparent">
                Brighter Tomorrow
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              To be the largest global enterprise which delivers optimized solutions to its consumers and value to its stakeholders.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="bg-accent-glow hover:bg-accent-glow/90 text-white px-10 py-6 text-lg shadow-xl">
                  Our Story
                  <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="outline" className="border-accent-glow px-10 py-6 text-lg hover:bg-accent-subtle">
                  Company Profile
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </section>

      {/* Company Stats */}
      <section ref={statsRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Where We Stand</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Surya Roshni has grown by leaps and bounds to become one of the largest conglomerates in India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="stat-card text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-xl bg-accent-subtle flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-accent-glow" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-accent-glow">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Committed to excellence and a brighter tomorrow. To be the largest global enterprise which delivers optimized solutions to its consumers and value to its stakeholders. To provide the best steel pipe, lighting & consumer durable products and technology for markets across the world.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Energizing lives and beyond. To be a global leader by consistently exceeding the consumer demands, upgrading technology, making quality products, building long-term relationships with all our customers, partners, associates, and employees.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/modern-corporate-office-led-lighting-interior-glas.jpg"
                alt="Modern Office"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="bg-background/90 text-foreground">Excellence in Every Project</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Ideology */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Brand Ideology</h2>
            <p className="text-2xl font-semibold text-accent-glow">Brilliance at Everything</p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              The above written are not just words, these are the values upon which Surya's ideology is based while emphasizing on respect for the people, creation of new values and contribution towards the society.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              These values are the inspiration that has brought us this far inspiring us to fulfill our responsibilities in every realm of excellence. It is our endeavor to integrate the capabilities to realize a vibrant Surya Group in which every individual brings their potential into full play and contributes to the achievement of growth through creativity and innovation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              At Surya, we are not just committed towards optimum quality or durability in products. We are aiming towards an overall growth and the fulfillment of the glorious Indian Dream.
            </p>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section ref={valuesRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">The Four Value Pillars of Rising Surya</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {valuePillars.map((pillar, index) => (
              <Card
                key={index}
                className={`value-card p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card border-border relative overflow-hidden group ${
                  index === activeValue ? "ring-2 ring-accent-glow" : ""
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center`}
                    >
                      <pillar.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{pillar.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section ref={timelineRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Revolutionising the industry since 1973
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-glow/30" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="timeline-item relative flex items-start gap-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-glow to-accent-warm flex items-center justify-center shadow-lg relative z-10">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="text-2xl font-bold text-accent-glow">{item.year}</div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Our Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Leading the way in lighting innovation and excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-accent-subtle/50 transition-colors"
              >
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground leading-relaxed">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent-glow to-accent-warm text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-balance leading-tight">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg md:text-xl opacity-90 text-pretty leading-relaxed">
              Join thousands of satisfied customers who trust Suryaroshni for their lighting needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="secondary" className="bg-white text-accent-glow hover:bg-white/90 px-8">
                  Contact Us
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
                >
                  Company Profile
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-accent-glow" />
                <span className="text-lg font-bold">Surya Roshni</span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Professional lighting solutions for a better tomorrow.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/products" className="hover:text-foreground transition-colors">
                    Commercial Lighting
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-foreground transition-colors">
                    Industrial Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-foreground transition-colors">
                    Smart Lighting
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-foreground transition-colors">
                    Outdoor Lighting
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-foreground transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  1800-102-5657
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  consumercare@surya.in
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  New Delhi, India
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Surya Roshni Professional Lighting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

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
  ChevronDown,
  Menu,
  X,
  Building2,
  Factory,
  Zap,
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
import Navigation from "@/components/navigation"

gsap.registerPlugin(ScrollTrigger)

export default function CompanyPage() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const [activeValue, setActiveValue] = useState(0)

  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
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
          y: 30,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
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
          scale: 0.95,
          y: 20,
          duration: 0.4,
          stagger: 0.08,
          ease: "back.out(1.2)",
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
          y: 30,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
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
          x: -30,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
        })
      }
    })

    return () => ctx.revert()
  }, [])

  // Navigation menu structure
  const navigationMenus = {
    company: [
      { name: "About Us", href: "/company/about" },
      { name: "Our Story", href: "/company/story" },
      { name: "Leadership", href: "/company/leadership" },
      { name: "Careers", href: "/company/careers" },
      { name: "CSR", href: "/company/csr" },
    ],
    products: [
      { name: "LED Lighting", href: "/products/led-lighting" },
      { name: "Commercial Lighting", href: "/products/commercial" },
      { name: "Industrial Lighting", href: "/products/industrial" },
      { name: "Street Lighting", href: "/products/street" },
      { name: "Home Lighting", href: "/products/home" },
      { name: "Decorative Lighting", href: "/products/decorative" },
    ],
    applicationAreas: [
      { name: "Offices & Commercial", href: "/applications/commercial" },
      { name: "Industrial & Warehouses", href: "/applications/industrial" },
      { name: "Retail & Hospitality", href: "/applications/retail" },
      { name: "Outdoor & Street", href: "/applications/outdoor" },
      { name: "Residential", href: "/applications/residential" },
      { name: "Healthcare", href: "/applications/healthcare" },
    ],
    smartSolutions: [
      { name: "IoT Lighting", href: "/smart/iot" },
      { name: "Smart Controls", href: "/smart/controls" },
      { name: "Energy Management", href: "/smart/energy" },
      { name: "Automation Systems", href: "/smart/automation" },
      { name: "Sensors & Monitoring", href: "/smart/sensors" },
    ],
  }

  const companyStats = [
    { value: "₹8,002 Cr", label: "Revenue FY23", icon: TrendingUp },
    { value: "44+", label: "Countries Served", icon: Globe },
    { value: "1973", label: "Founded", icon: Calendar },
    { value: "50,000+", label: "Projects Completed", icon: Award },
  ]

  const valuePillars = [
    {
      title: "Customer Satisfaction",
      description: "At Surya Roshni, we are driven by the philosophy that our success is built on the trust and satisfaction of our customers. Our passion for delivering exceptional products and services is our core commitment.",
      icon: Heart,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Innovation & Quality",
      description: "We continuously invest in research and development to bring cutting-edge lighting solutions. Our commitment to quality ensures that every product meets the highest international standards.",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Sustainability",
      description: "We are committed to environmental responsibility through energy-efficient LED products and sustainable manufacturing practices that reduce our carbon footprint.",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Integrity & Trust",
      description: "Our business is built on the foundation of integrity, transparency, and trust. We maintain the highest ethical standards in all our business dealings and relationships.",
      icon: Shield,
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const timeline = [
    {
      year: "1973",
      title: "Foundation",
      description: "Surya Roshni Limited was founded by B.D. Agarwal with a vision to light up India",
      icon: Building2,
    },
    {
      year: "1984",
      title: "Lighting Division Launch",
      description: "Started lighting division with the mission 'Lighting Every City Every Home'",
      icon: Lightbulb,
    },
    {
      year: "1990s",
      title: "Market Expansion",
      description: "Expanded operations across India and began international exports",
      icon: Globe,
    },
    {
      year: "2000s",
      title: "LED Revolution",
      description: "Pioneered LED technology adoption in India with innovative products",
      icon: Zap,
    },
    {
      year: "2010s",
      title: "Smart Solutions",
      description: "Introduced IoT-enabled smart lighting solutions and energy management systems",
      icon: Target,
    },
    {
      year: "2020s",
      title: "Digital Transformation",
      description: "Leading the industry with AI-powered lighting solutions and sustainable practices",
      icon: Award,
    },
  ]

  const achievements = [
    "One of India's largest lighting manufacturers",
    "Exports to 44+ countries worldwide",
    "Leading brand in LED lighting solutions",
    "₹8,002 crore revenue in FY23",
    "50+ years of lighting excellence",
    "Trusted by millions of customers",
  ]

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
         <Navigation scrolled={scrolled} activePage="story" />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-accent-subtle/20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="hero-content max-w-4xl mx-auto text-center space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="text-sm px-6 py-3 border-0 bg-gradient-to-r from-primary to-accent-glow text-white shadow-lg">
                Since 1973 - Lighting India's Future
              </Badge>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Illuminating India with{" "}
              <span className="text-gradient bg-gradient-to-r from-accent-glow to-accent-warm bg-clip-text text-transparent">
                Excellence & Innovation
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              For over five decades, Surya Roshni has been India's trusted lighting partner, transforming spaces and lives with innovative, energy-efficient solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button size="lg" className="professional-button px-10 py-6 text-lg group shadow-xl">
                Our Story
                <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="professional-border-gradient px-10 py-6 text-lg hover:bg-accent-subtle">
                Company Profile
              </Button>
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
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Five decades of lighting excellence across India and beyond
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
                  To be the most trusted and innovative lighting company in India, illuminating every city and every home with sustainable, energy-efficient solutions that enhance quality of life.
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
                  To deliver world-class lighting solutions through continuous innovation, superior quality, and exceptional customer service while contributing to India's sustainable development goals.
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

      {/* Value Pillars */}
      <section ref={valuesRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              The principles that guide everything we do
            </p>
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
      <section ref={timelineRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Five decades of innovation and growth
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Our Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Milestones that define our success
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

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent-glow to-accent-warm text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-balance leading-tight">
              Join Our Journey of Excellence
            </h2>
            <p className="text-lg md:text-xl opacity-90 text-pretty leading-relaxed">
              Be part of India's lighting revolution. Explore career opportunities and partnership possibilities with Surya Roshni.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-accent-glow hover:bg-white/90 px-8">
                Explore Careers
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
              >
                Partner With Us
              </Button>
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
                Lighting every city, every home since 1973.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/products/commercial" className="hover:text-foreground transition-colors">
                    Commercial Lighting
                  </Link>
                </li>
                <li>
                  <Link href="/products/industrial" className="hover:text-foreground transition-colors">
                    Industrial Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/smart" className="hover:text-foreground transition-colors">
                    Smart Lighting
                  </Link>
                </li>
                <li>
                  <Link href="/products/outdoor" className="hover:text-foreground transition-colors">
                    Outdoor Lighting
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/company" className="hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-foreground transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/company/careers" className="hover:text-foreground transition-colors">
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
            <p>&copy; 2025 Surya Roshni Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
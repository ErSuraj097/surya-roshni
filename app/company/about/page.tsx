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
  Leaf,
  Recycle,
  Sun,
} from "lucide-react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const sustainabilityRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.from(heroRef.current.querySelectorAll(".hero-content > *"), {
          opacity: 0,
          y: 30,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
        })
      }

      if (aboutRef.current) {
        gsap.from(aboutRef.current.querySelectorAll(".about-item"), {
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
          },
          opacity: 0,
          y: 30,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
        })
      }

      if (valuesRef.current) {
        gsap.from(valuesRef.current.querySelectorAll(".value-card"), {
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 70%",
          },
          opacity: 0,
          scale: 0.95,
          duration: 0.4,
          stagger: 0.06,
          ease: "back.out(1.2)",
        })
      }

      if (sustainabilityRef.current) {
        gsap.from(sustainabilityRef.current.querySelectorAll(".sustainability-item"), {
          scrollTrigger: {
            trigger: sustainabilityRef.current,
            start: "top 70%",
          },
          opacity: 0,
          x: -20,
          duration: 0.4,
          stagger: 0.06,
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

  const companyValues = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make is centered around delivering exceptional value to our customers",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously pushing boundaries to create cutting-edge lighting solutions",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Quality",
      description: "Uncompromising commitment to the highest standards in every product",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Building a greener future through energy-efficient and eco-friendly solutions",
      color: "from-green-500 to-emerald-500",
    },
  ]

  const sustainabilityInitiatives = [
    {
      icon: Leaf,
      title: "Green Manufacturing",
      description: "Zero-waste manufacturing processes with renewable energy integration",
      impact: "50% reduction in carbon footprint",
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Product lifecycle management with recycling and refurbishment programs",
      impact: "85% material recovery rate",
    },
    {
      icon: Sun,
      title: "Energy Efficiency",
      description: "LED products that consume 80% less energy than traditional lighting",
      impact: "1 million tons CO2 saved annually",
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Rural electrification and education programs across India",
      impact: "500+ villages illuminated",
    },
  ]

  const milestones = [
    { year: "1973", achievement: "Founded Surya Roshni Limited" },
    { year: "1984", achievement: "Launched lighting division" },
    { year: "1995", achievement: "Became India's largest GLS manufacturer" },
    { year: "2005", achievement: "Introduced CFL technology" },
    { year: "2010", achievement: "LED product line launch" },
    { year: "2015", achievement: "Smart lighting solutions" },
    { year: "2020", achievement: "IoT and connected lighting" },
    { year: "2024", achievement: "AI-powered lighting systems" },
  ]

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Lightbulb className="h-8 w-8 text-accent-glow" />
            <span className="text-xl font-bold text-foreground">Surya Roshni</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {/* Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen('company')}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="text-sm font-medium text-accent-glow border-b-2 border-accent-glow pb-1 flex items-center gap-1">
                Company
                <ChevronDown className="h-4 w-4" />
              </button>
              {dropdownOpen === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2">
                  {navigationMenus.company.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        item.href === '/company/about' 
                          ? 'text-accent-glow bg-accent-subtle' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent-subtle'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other navigation items */}
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen('products')}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                Products
                <ChevronDown className="h-4 w-4" />
              </button>
              {dropdownOpen === 'products' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2">
                  {navigationMenus.products.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent-subtle transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen('applications')}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                Application Areas
                <ChevronDown className="h-4 w-4" />
              </button>
              {dropdownOpen === 'applications' && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-background border border-border rounded-lg shadow-lg py-2">
                  {navigationMenus.applicationAreas.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent-subtle transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen('smart')}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                Smart Solutions
                <ChevronDown className="h-4 w-4" />
              </button>
              {dropdownOpen === 'smart' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2">
                  {navigationMenus.smartSolutions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent-subtle transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/gallery"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Us
            </Link>
            <Button size="sm" className="bg-accent-glow hover:bg-accent-glow/90 text-white">
              Get Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <Link
                href="/company"
                className="text-sm font-medium text-accent-glow"
                onClick={() => setMobileMenuOpen(false)}
              >
                Company
              </Link>
              <Link
                href="/products"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/applications"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Application Areas
              </Link>
              <Link
                href="/smart"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Smart Solutions
              </Link>
              <Link
                href="/gallery"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Button size="sm" className="bg-accent-glow hover:bg-accent-glow/90 text-white w-full">
                Get Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-accent-subtle/20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="hero-content max-w-4xl mx-auto text-center space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="text-sm px-6 py-3 border-0 bg-gradient-to-r from-primary to-accent-glow text-white shadow-lg">
                About Surya Roshni
              </Badge>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Lighting India's{" "}
              <span className="text-gradient bg-gradient-to-r from-accent-glow to-accent-warm bg-clip-text text-transparent">
                Bright Future
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              For over five decades, we have been at the forefront of India's lighting revolution, transforming spaces and lives with innovative, sustainable solutions.
            </p>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </section>

      {/* About Content */}
      <section ref={aboutRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="about-item space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                Pioneering India's Lighting Revolution
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since our inception in 1973, Surya Roshni has grown from a small steel tube manufacturer to become one of India's most trusted lighting companies. Our journey reflects the story of modern India - one of innovation, growth, and unwavering commitment to excellence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we illuminate millions of homes, offices, and public spaces across India and 44+ countries worldwide. Our comprehensive portfolio spans from traditional lighting to cutting-edge LED solutions and smart lighting systems.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-glow">₹8,002 Cr</div>
                  <div className="text-sm text-muted-foreground">Annual Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-glow">44+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>

            <div className="about-item relative">
              <img
                src="/modern-corporate-office-led-lighting-interior-glas.jpg"
                alt="Surya Roshni Office"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="bg-background/90 text-foreground">Innovation at Every Step</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section ref={valuesRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              The principles that guide our every decision and action
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="value-card"
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-border relative overflow-hidden group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <div className="relative z-10 space-y-4 text-center">
                    <div
                      className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center`}
                    >
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section ref={sustainabilityRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Sustainability Commitment</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Building a greener future through responsible innovation and environmental stewardship
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sustainabilityInitiatives.map((initiative, index) => (
              <Card
                key={index}
                className="sustainability-item p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-border"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <initiative.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{initiative.title}</h3>
                      <p className="text-sm text-accent-glow font-medium">{initiative.impact}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{initiative.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Key Milestones</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Celebrating 50+ years of innovation and growth
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center space-y-3"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-accent-glow to-accent-warm flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">{milestone.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{milestone.achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent-glow to-accent-warm text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-balance leading-tight">
              Join Our Mission
            </h2>
            <p className="text-lg md:text-xl opacity-90 text-pretty leading-relaxed">
              Be part of India's lighting revolution. Explore opportunities to work with us or partner with our growing network.
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
                  <Link href="/company/about" className="hover:text-foreground transition-colors">
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
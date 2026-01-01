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
  Building2,
  Factory,
  Zap,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Star,
  Target,
  Eye,
  Heart,
} from "lucide-react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"

gsap.registerPlugin(ScrollTrigger)

export default function StoryPage() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  const heroRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const chaptersRef = useRef<HTMLDivElement>(null)

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

      if (chaptersRef.current) {
        gsap.from(chaptersRef.current.querySelectorAll(".chapter-card"), {
          scrollTrigger: {
            trigger: chaptersRef.current,
            start: "top 70%",
          },
          opacity: 0,
          y: 30,
          duration: 0.4,
          stagger: 0.08,
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

  const timeline = [
    {
      year: "1973",
      title: "The Beginning",
      description: "B.D. Agarwal founded Surya Roshni Limited with a vision to manufacture quality steel tubes. The company started with a small facility and big dreams.",
      icon: Building2,
      image: "/industrial-manufacturing-warehouse-led-high-bay-li.jpg",
    },
    {
      year: "1984",
      title: "Lighting Division Launch",
      description: "Recognizing the potential in lighting, we launched our lighting division with the mission 'Lighting Every City Every Home'. This marked our entry into the lighting industry.",
      icon: Lightbulb,
      image: "/modern-office-led-panel-lights-ceiling-commercial-.jpg",
    },
    {
      year: "1990s",
      title: "Market Leadership",
      description: "Through innovation and quality, we became one of India's largest manufacturers of GLS bulbs and fluorescent tubes, establishing our market leadership.",
      icon: Award,
      image: "/shopping-mall-led-retail-lighting-modern-interior-.jpg",
    },
    {
      year: "2000s",
      title: "Technology Revolution",
      description: "We embraced new technologies, introducing CFL and early LED products. Our focus shifted towards energy-efficient lighting solutions.",
      icon: Zap,
      image: "/smart-connected-iot-led-lighting-control-system.jpg",
    },
    {
      year: "2010s",
      title: "LED Innovation",
      description: "Leading India's LED revolution, we launched comprehensive LED product lines and became one of the country's largest LED manufacturers.",
      icon: Star,
      image: "/outdoor-street-led-lights-architectural-pathway-li.jpg",
    },
    {
      year: "2020s",
      title: "Smart Future",
      description: "Today, we're pioneering smart lighting solutions with IoT integration, AI-powered systems, and sustainable practices for a brighter tomorrow.",
      icon: Globe,
      image: "/smart-city-led-street-lights-night-urban-road-ligh.jpg",
    },
  ]

  const storyChapters = [
    {
      title: "The Visionary Beginning",
      period: "1973-1980",
      description: "Our founder B.D. Agarwal's vision was simple yet powerful - to create products that would improve lives. Starting with steel tubes, he laid the foundation for what would become India's lighting giant.",
      highlights: ["Founded with ₹10 lakhs capital", "First manufacturing unit in Haryana", "Focus on quality and innovation"],
      icon: Eye,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Lighting the Path",
      period: "1984-1995",
      description: "The launch of our lighting division marked a turning point. We introduced the slogan 'Lighting Every City Every Home' and began our journey to illuminate India.",
      highlights: ["Lighting division established", "First GLS bulb production", "National distribution network"],
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Market Dominance",
      period: "1995-2005",
      description: "Through relentless focus on quality and innovation, we became India's second-largest lighting company, earning the trust of millions of customers.",
      highlights: ["Market leadership achieved", "Export operations began", "Technology partnerships"],
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "The LED Revolution",
      period: "2005-2015",
      description: "Recognizing the future of lighting, we invested heavily in LED technology, becoming pioneers in India's transition to energy-efficient lighting.",
      highlights: ["LED product line launch", "Energy efficiency focus", "Government partnerships"],
      icon: Zap,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Smart Innovation",
      period: "2015-Present",
      description: "Today, we're leading the smart lighting revolution with IoT-enabled products, AI-powered systems, and sustainable solutions for the digital age.",
      highlights: ["Smart lighting solutions", "IoT integration", "Sustainability initiatives"],
      icon: Target,
      color: "from-indigo-500 to-purple-500",
    },
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
                        item.href === '/company/story' 
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
                Our Story - 50+ Years of Excellence
              </Badge>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              From Vision to{" "}
              <span className="text-gradient bg-gradient-to-r from-accent-glow to-accent-warm bg-clip-text text-transparent">
                Reality
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              The remarkable journey of how a small steel tube company became India's lighting giant, illuminating millions of lives across the nation.
            </p>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </section>

      {/* Story Chapters */}
      <section ref={chaptersRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Chapters of Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Each chapter tells a story of innovation, growth, and unwavering commitment to excellence
            </p>
          </div>

          <div className="space-y-12">
            {storyChapters.map((chapter, index) => (
              <Card
                key={index}
                className="chapter-card overflow-hidden bg-card border-border hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 space-y-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${chapter.color} flex items-center justify-center`}
                      >
                        <chapter.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{chapter.title}</h3>
                        <p className="text-accent-glow font-medium">{chapter.period}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">{chapter.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {chapter.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 rounded-full bg-accent-glow" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative h-64 lg:h-auto">
                    <div className={`absolute inset-0 bg-gradient-to-br ${chapter.color} opacity-20`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <chapter.icon className="h-24 w-24 text-accent-glow/30" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Timeline of Innovation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Key milestones that shaped our journey
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 lg:left-1/2 lg:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-accent-glow/30" />
              
              <div className="space-y-16">
                {timeline.map((item, index) => (
                  <div key={index} className={`timeline-item relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}>
                    {/* Timeline node */}
                    <div className="absolute left-8 lg:left-1/2 lg:-translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-accent-glow to-accent-warm flex items-center justify-center shadow-lg z-10">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className={`flex-1 ml-24 lg:ml-0 ${
                      index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'
                    }`}>
                      <Card className="p-8 bg-card border-border hover:shadow-xl transition-all duration-500">
                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <div className="text-2xl font-bold text-accent-glow">{item.year}</div>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Our Legacy Continues</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, as we look towards the future, we remain committed to our founding vision of lighting every city and every home. With cutting-edge technology, sustainable practices, and unwavering quality, we continue to illuminate India's path to progress.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our story is far from over. As we embrace new technologies like AI, IoT, and smart automation, we're writing the next chapter of India's lighting revolution. Join us as we continue to light the way forward.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button size="lg" className="professional-button px-10 py-6 text-lg group shadow-xl">
                Join Our Journey
                <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="professional-border-gradient px-10 py-6 text-lg hover:bg-accent-subtle">
                Explore Careers
              </Button>
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
              Be Part of Our Story
            </h2>
            <p className="text-lg md:text-xl opacity-90 text-pretty leading-relaxed">
              Every great story needs great people. Discover how you can contribute to India's lighting revolution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-accent-glow hover:bg-white/90 px-8">
                Explore Opportunities
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
              >
                Contact Us
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
                  <Link href="/company/story" className="hover:text-foreground transition-colors">
                    Our Story
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
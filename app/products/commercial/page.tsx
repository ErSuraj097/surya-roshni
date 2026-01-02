"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Lightbulb,
  Building2,
  Users,
  Zap,
  Shield,
  Award,
  TrendingUp,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  CheckCircle,
  Star,
  Download,
  Eye,
  Phone,
  Mail,
  MapPin,
  Clock,
  Thermometer,
  Sun,
  Moon,
 
} from "lucide-react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"

gsap.registerPlugin(ScrollTrigger)

export default function CommercialLightingPage() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const [activeProduct, setActiveProduct] = useState(0)

  const heroRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const applicationsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % commercialProducts.length)
    }, 5000)
    return () => clearInterval(interval)
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

      if (productsRef.current) {
        gsap.from(productsRef.current.querySelectorAll(".product-card"), {
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top 70%",
          },
          opacity: 0,
          y: 30,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
        })
      }

      if (featuresRef.current) {
        gsap.from(featuresRef.current.querySelectorAll(".feature-item"), {
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 70%",
          },
          opacity: 0,
          x: -20,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
        })
      }

      if (applicationsRef.current) {
        gsap.from(applicationsRef.current.querySelectorAll(".application-card"), {
          scrollTrigger: {
            trigger: applicationsRef.current,
            start: "top 70%",
          },
          opacity: 0,
          scale: 0.95,
          duration: 0.4,
          stagger: 0.05,
          ease: "back.out(1.2)",
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

  const commercialProducts = [
    {
      id: 1,
      name: "LED Panel Lights",
      category: "Ceiling Lighting",
      description: "Ultra-slim LED panels providing uniform illumination for modern office spaces",
      image: "/modern-office-led-panel-lights-ceiling-commercial-.jpg",
      features: ["Uniform Light Distribution", "Glare-Free Design", "Energy Efficient", "Easy Installation"],
      specifications: {
        power: "18W - 72W",
        lumens: "1800 - 7200 lm",
        efficiency: "100 lm/W",
        lifespan: "50,000 hours",
        colorTemp: "3000K - 6500K",
        cri: ">80",
      },
      applications: ["Corporate Offices", "Conference Rooms", "Reception Areas", "Open Workspaces"],
    },
    {
      id: 2,
      name: "Troffer Lights",
      category: "Grid Ceiling",
      description: "Professional troffer lights designed for suspended ceiling applications",
      image: "/modern-corporate-office-led-lighting-interior-glas.jpg",
      features: ["Grid Ceiling Compatible", "High Efficiency", "Maintenance Free", "Professional Design"],
      specifications: {
        power: "24W - 48W",
        lumens: "2400 - 4800 lm",
        efficiency: "100 lm/W",
        lifespan: "50,000 hours",
        colorTemp: "4000K - 5000K",
        cri: ">80",
      },
      applications: ["Office Buildings", "Educational Institutions", "Healthcare Facilities", "Government Buildings"],
    },
    {
      id: 3,
      name: "Linear LED Systems",
      category: "Architectural",
      description: "Continuous linear lighting systems for modern architectural applications",
      image: "/smart-connected-iot-led-lighting-control-system.jpg",
      features: ["Continuous Lighting", "Modular Design", "Dimming Compatible", "Architectural Appeal"],
      specifications: {
        power: "20W/m - 40W/m",
        lumens: "2000 - 4000 lm/m",
        efficiency: "100 lm/W",
        lifespan: "50,000 hours",
        colorTemp: "3000K - 6500K",
        cri: ">90",
      },
      applications: ["Modern Offices", "Retail Spaces", "Hospitality", "Commercial Corridors"],
    },
    {
      id: 4,
      name: "Downlights",
      category: "Recessed Lighting",
      description: "Recessed LED downlights for accent and general lighting applications",
      image: "/airport-terminal-led-lighting-modern-architecture-.jpg",
      features: ["Recessed Design", "Adjustable Beam", "Anti-Glare", "Multiple Sizes"],
      specifications: {
        power: "7W - 30W",
        lumens: "700 - 3000 lm",
        efficiency: "100 lm/W",
        lifespan: "50,000 hours",
        colorTemp: "3000K - 6500K",
        cri: ">80",
      },
      applications: ["Lobbies", "Corridors", "Meeting Rooms", "Display Areas"],
    },
  ]

  const keyFeatures = [
    {
      icon: Zap,
      title: "Energy Efficiency",
      description: "Up to 80% energy savings compared to traditional fluorescent lighting",
      benefit: "Reduced operational costs",
    },
    {
      icon: Sun,
      title: "Optimal Illumination",
      description: "Uniform light distribution with minimal glare for comfortable working",
      benefit: "Enhanced productivity",
    },
    {
      icon: Shield,
      title: "Long Lifespan",
      description: "50,000+ hours of reliable operation with minimal maintenance",
      benefit: "Lower maintenance costs",
    },
    {
      icon: Thermometer,
      title: "Cool Operation",
      description: "Low heat generation maintains comfortable ambient temperature",
      benefit: "Reduced HVAC costs",
    },
    {
      icon: Award,
      title: "Quality Certified",
      description: "International standards compliance with comprehensive warranties",
      benefit: "Peace of mind",
    },
    {
      icon: Moon,
      title: "Dimming Control",
      description: "Compatible with various dimming systems for flexible lighting control",
      benefit: "Customizable ambiance",
    },
  ]

  const applications = [
    {
      title: "Corporate Offices",
      description: "Professional lighting solutions for modern workspaces",
      image: "/modern-corporate-office-led-lighting-interior-glas.jpg",
      features: ["Task Lighting", "Ambient Lighting", "Energy Management", "Smart Controls"],
    },
    {
      title: "Retail Spaces",
      description: "Enhance product visibility and customer experience",
      image: "/shopping-mall-led-retail-lighting-modern-interior-.jpg",
      features: ["High CRI", "Accent Lighting", "Track Systems", "Color Rendering"],
    },
    {
      title: "Educational Institutions",
      description: "Optimal lighting for learning environments",
      image: "/modern-office-led-panel-lights-ceiling-commercial-.jpg",
      features: ["Uniform Distribution", "Glare Control", "Energy Efficient", "Maintenance Free"],
    },
    {
      title: "Healthcare Facilities",
      description: "Specialized lighting for medical environments",
      image: "/airport-terminal-led-lighting-modern-architecture-.jpg",
      features: ["High Quality Light", "Infection Control", "24/7 Operation", "Emergency Backup"],
    },
  ]

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
         <Navigation scrolled={scrolled} activePage="contact" />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-accent-subtle/20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="hero-content max-w-4xl mx-auto text-center space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="text-sm px-6 py-3 border-0 bg-gradient-to-r from-primary to-accent-glow text-white shadow-lg">
                Commercial Lighting Solutions
              </Badge>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Professional{" "}
              <span className="text-gradient bg-gradient-to-r from-accent-glow to-accent-warm bg-clip-text text-transparent">
                Office Lighting
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Transform your commercial spaces with our comprehensive range of energy-efficient LED lighting solutions designed for modern workplaces.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button size="lg" className="professional-button px-10 py-6 text-lg group shadow-xl">
                Explore Products
                <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="professional-border-gradient px-10 py-6 text-lg hover:bg-accent-subtle">
                Download Catalog
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </section>

      {/* Featured Product Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Featured Product</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover our latest commercial lighting innovation
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden bg-card border-border shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-96 lg:h-auto overflow-hidden">
                  <img
                    src={commercialProducts[activeProduct].image || "/placeholder.svg"}
                    alt={commercialProducts[activeProduct].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-background/90 text-foreground">{commercialProducts[activeProduct].category}</Badge>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold">{commercialProducts[activeProduct].name}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {commercialProducts[activeProduct].description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {commercialProducts[activeProduct].features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Specifications:</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      {Object.entries(commercialProducts[activeProduct].specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button className="bg-accent-glow hover:bg-accent-glow/90 text-white">
                      Get Quote
                    </Button>
                    <Button variant="outline" className="hover:bg-accent-subtle">
                      <Download className="h-4 w-4 mr-2" />
                      Datasheet
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Product Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {commercialProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProduct(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeProduct ? "bg-accent-glow w-8" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section ref={featuresRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Why Choose Our Commercial Lighting?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Advanced features designed for modern commercial environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="feature-item"
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-border">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-accent-subtle flex items-center justify-center">
                      <feature.icon className="h-7 w-7 text-accent-glow" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    <div className="text-xs text-accent-glow font-medium">{feature.benefit}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section ref={applicationsRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Applications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Perfect lighting solutions for various commercial environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <Card
                key={index}
                className="application-card overflow-hidden bg-card border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={application.image || "/placeholder.svg"}
                    alt={application.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{application.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{application.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {application.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full hover:bg-accent-subtle"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Solutions
                  </Button>
                </CardContent>
              </Card>
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
              Ready to Transform Your Workspace?
            </h2>
            <p className="text-lg md:text-xl opacity-90 text-pretty leading-relaxed">
              Get expert consultation for your commercial lighting project and discover how our solutions can enhance your workspace.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-accent-glow hover:bg-white/90 px-8">
                Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
              >
                Download Catalog
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
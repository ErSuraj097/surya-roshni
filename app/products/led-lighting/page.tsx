"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Lightbulb,
  Zap,
  Leaf,
  Award,
  TrendingUp,
  Shield,
  Clock,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  CheckCircle,
  Star,
  Download,
  Eye,
  Thermometer,
  Sun,
  Moon,
  Settings,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"

gsap.registerPlugin(ScrollTrigger)

export default function LEDLightingPage() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const [activeProduct, setActiveProduct] = useState(0)

  const heroRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const specificationsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % ledProducts.length)
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

      if (specificationsRef.current) {
        gsap.from(specificationsRef.current.querySelectorAll(".spec-card"), {
          scrollTrigger: {
            trigger: specificationsRef.current,
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

  const ledProducts = [
    {
      id: 1,
      name: "LED Panel Lights",
      category: "Indoor Lighting",
      description: "Ultra-slim LED panels with uniform light distribution for modern offices and commercial spaces",
      image: "/modern-office-led-panel-lights-ceiling-commercial-.jpg",
      features: ["Uniform Light Distribution", "Flicker-Free Operation", "Dimmable Options", "Easy Installation"],
      specifications: {
        wattage: "18W - 72W",
        lumens: "1800 - 7200 lm",
        efficiency: "100 lm/W",
        cct: "3000K - 6500K",
        cri: ">80",
        lifespan: "50,000 hours",
      },
      applications: ["Offices", "Hospitals", "Schools", "Retail Stores"],
    },
    {
      id: 2,
      name: "LED High Bay Lights",
      category: "Industrial Lighting",
      description: "High-performance LED high bay lights for warehouses, factories, and industrial applications",
      image: "/industrial-high-bay-led-warehouse-factory-lighting.jpg",
      features: ["High Lumen Output", "Heat Dissipation", "Motion Sensor Compatible", "IP65 Rating"],
      specifications: {
        wattage: "100W - 300W",
        lumens: "13000 - 39000 lm",
        efficiency: "130 lm/W",
        cct: "4000K - 5700K",
        cri: ">70",
        lifespan: "50,000 hours",
      },
      applications: ["Warehouses", "Factories", "Gymnasiums", "Hangars"],
    },
    {
      id: 3,
      name: "LED Street Lights",
      category: "Outdoor Lighting",
      description: "Energy-efficient LED street lights with smart controls for urban and highway lighting",
      image: "/smart-city-led-street-lights-night-urban-road-ligh.jpg",
      features: ["Smart Controls", "Photocell Integration", "Surge Protection", "Weather Resistant"],
      specifications: {
        wattage: "30W - 200W",
        lumens: "4000 - 26000 lm",
        efficiency: "130 lm/W",
        cct: "4000K - 5700K",
        cri: ">70",
        lifespan: "50,000 hours",
      },
      applications: ["Streets", "Highways", "Parking Lots", "Pathways"],
    },
    {
      id: 4,
      name: "LED Flood Lights",
      category: "Sports & Area Lighting",
      description: "High-intensity LED flood lights for sports facilities, stadiums, and large area illumination",
      image: "/sports-stadium-led-floodlights-night-football-aren.jpg",
      features: ["High Intensity", "Precise Beam Control", "Anti-Glare Design", "Robust Construction"],
      specifications: {
        wattage: "50W - 500W",
        lumens: "6500 - 65000 lm",
        efficiency: "130 lm/W",
        cct: "4000K - 5700K",
        cri: ">80",
        lifespan: "50,000 hours",
      },
      applications: ["Sports Stadiums", "Airports", "Ports", "Construction Sites"],
    },
  ]

  const ledAdvantages = [
    {
      icon: Zap,
      title: "Energy Efficiency",
      description: "Up to 80% energy savings compared to traditional lighting",
      metric: "80%",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      title: "Long Lifespan",
      description: "50,000+ hours of reliable operation",
      metric: "50,000h",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Mercury-free and recyclable components",
      metric: "100%",
      color: "from-green-600 to-green-400",
    },
    {
      icon: Thermometer,
      title: "Low Heat Generation",
      description: "Minimal heat output reduces cooling costs",
      metric: "90%",
      color: "from-orange-500 to-red-500",
    },
  ]

  const keyFeatures = [
    {
      icon: Sun,
      title: "Instant On/Off",
      description: "No warm-up time required, instant full brightness",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Settings,
      title: "Dimmable Options",
      description: "Smooth dimming from 0-100% for optimal ambiance",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Durability",
      description: "Shock and vibration resistant for harsh environments",
      color: "from-gray-500 to-gray-700",
    },
    {
      icon: BarChart3,
      title: "Smart Integration",
      description: "Compatible with IoT and building management systems",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Award,
      title: "Quality Certified",
      description: "BIS, CE, and international quality certifications",
      color: "from-amber-500 to-yellow-500",
    },
    {
      icon: Moon,
      title: "Color Temperature",
      description: "Wide range from warm white to cool daylight",
      color: "from-blue-600 to-indigo-600",
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
                LED Lighting Solutions
              </Badge>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Advanced{" "}
              <span className="text-gradient bg-gradient-to-r from-accent-glow to-accent-warm bg-clip-text text-transparent">
                LED Technology
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Experience the future of lighting with our comprehensive range of energy-efficient LED solutions designed for every application.
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

      {/* LED Advantages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Why Choose LED?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover the superior benefits of LED lighting technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ledAdvantages.map((advantage, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-border relative overflow-hidden group text-center"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <div className="relative z-10 space-y-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${advantage.color} flex items-center justify-center`}
                  >
                    <advantage.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-accent-glow">{advantage.metric}</div>
                  <h3 className="text-xl font-semibold">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{advantage.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product Showcase */}
      <section ref={productsRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Featured LED Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore our comprehensive range of LED lighting solutions
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden bg-card border-border shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-96 lg:h-auto overflow-hidden">
                  <img
                    src={ledProducts[activeProduct].image || "/placeholder.svg"}
                    alt={ledProducts[activeProduct].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-background/90 text-foreground">{ledProducts[activeProduct].category}</Badge>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold">{ledProducts[activeProduct].name}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {ledProducts[activeProduct].description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {ledProducts[activeProduct].features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Specifications:</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Wattage:</span>
                        <div className="font-medium">{ledProducts[activeProduct].specifications.wattage}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Lumens:</span>
                        <div className="font-medium">{ledProducts[activeProduct].specifications.lumens}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Efficiency:</span>
                        <div className="font-medium">{ledProducts[activeProduct].specifications.efficiency}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Lifespan:</span>
                        <div className="font-medium">{ledProducts[activeProduct].specifications.lifespan}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button className="bg-accent-glow hover:bg-accent-glow/90 text-white">
                      Request Quote
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
              {ledProducts.map((_, index) => (
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
      <section ref={featuresRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">LED Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Advanced features that make our LED solutions superior
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
                <Card className="p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-border relative overflow-hidden group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <div className="relative z-10 space-y-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}
                    >
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
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
              Ready to Switch to LED?
            </h2>
            <p className="text-lg md:text-xl opacity-90 text-pretty leading-relaxed">
              Join thousands of satisfied customers who have made the smart choice with Surya Roshni LED lighting solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-accent-glow hover:bg-white/90 px-8">
                Get Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
              >
                Calculate Savings
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
                Leading the LED revolution in India since 1973.
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
                  <Link href="/products/street" className="hover:text-foreground transition-colors">
                    Street Lighting
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
                  <Lightbulb className="h-4 w-4" />
                  1800-102-5657
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  consumercare@surya.in
                </li>
                <li className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
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
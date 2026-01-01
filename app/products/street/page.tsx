"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Lightbulb,
  Sun,
  Moon,
  Zap,
  Shield,
  Wifi,
  Clock,
  Award,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  CheckCircle,
  Star,
  Download,
  Eye,
  MapPin,
  Gauge,
  Sensor,
  Settings,
  TreePine,
  Car,
} from "lucide-react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"

gsap.registerPlugin(ScrollTrigger)

export default function StreetLightingPage() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const [activeProduct, setActiveProduct] = useState(0)

  const heroRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const smartFeaturesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % streetProducts.length)
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

      if (smartFeaturesRef.current) {
        gsap.from(smartFeaturesRef.current.querySelectorAll(".smart-feature"), {
          scrollTrigger: {
            trigger: smartFeaturesRef.current,
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

  const streetProducts = [
    {
      id: 1,
      name: "Smart LED Street Lights",
      category: "Smart City Solutions",
      description: "IoT-enabled LED street lights with remote monitoring, dimming controls, and energy management for smart city infrastructure",
      image: "/smart-city-led-street-lights-night-urban-road-ligh.jpg",
      features: ["IoT Connectivity", "Remote Monitoring", "Adaptive Dimming", "Energy Analytics"],
      specifications: {
        wattage: "30W - 200W",
        lumens: "4,000 - 26,000 lm",
        efficiency: "130 lm/W",
        connectivity: "WiFi, LoRaWAN, NB-IoT",
        protection: "IP66",
        lifespan: "50,000 hours",
      },
      applications: ["Smart Cities", "Urban Roads", "Highways", "Public Spaces"],
    },
    {
      id: 2,
      name: "Solar LED Street Lights",
      category: "Renewable Energy",
      description: "Self-sufficient solar-powered LED street lights with battery backup for off-grid and sustainable lighting solutions",
      image: "/outdoor-street-led-lights-architectural-pathway-li.jpg",
      features: ["Solar Powered", "Battery Backup", "Motion Sensor", "Weather Resistant"],
      specifications: {
        wattage: "20W - 100W",
        lumens: "2,600 - 13,000 lm",
        solar: "80W - 400W Panel",
        battery: "12V - 24V LiFePO4",
        protection: "IP65",
        lifespan: "50,000 hours",
      },
      applications: ["Rural Areas", "Parks", "Pathways", "Remote Locations"],
    },
    {
      id: 3,
      name: "Highway LED Lights",
      category: "Highway Infrastructure",
      description: "High-performance LED lights designed for highway and expressway lighting with superior visibility and safety",
      image: "/sports-stadium-led-floodlights-night-football-aren.jpg",
      features: ["High Intensity", "Anti-Glare Design", "Wind Resistant", "Long Throw"],
      specifications: {
        wattage: "100W - 300W",
        lumens: "13,000 - 39,000 lm",
        efficiency: "130 lm/W",
        mounting: "8m - 15m height",
        protection: "IP66",
        lifespan: "60,000 hours",
      },
      applications: ["Highways", "Expressways", "Flyovers", "Toll Plazas"],
    },
    {
      id: 4,
      name: "Decorative Street Lights",
      category: "Architectural Lighting",
      description: "Aesthetically designed LED street lights that combine functionality with architectural beauty for urban landscapes",
      image: "/modern-corporate-office-led-lighting-interior-glas.jpg",
      features: ["Aesthetic Design", "Customizable", "Heritage Style", "Modern Finish"],
      specifications: {
        wattage: "40W - 150W",
        lumens: "5,200 - 19,500 lm",
        efficiency: "130 lm/W",
        styles: "Classical, Modern, Heritage",
        protection: "IP65",
        lifespan: "50,000 hours",
      },
      applications: ["City Centers", "Heritage Areas", "Parks", "Commercial Districts"],
    },
  ]

  const streetFeatures = [
    {
      icon: Sun,
      title: "Daylight Sensor",
      description: "Automatic on/off based on ambient light levels",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Moon,
      title: "Adaptive Dimming",
      description: "Intelligent dimming based on traffic and time",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: Shield,
      title: "Weather Protection",
      description: "IP66 rating for all weather conditions",
      color: "from-gray-500 to-gray-700",
    },
    {
      icon: Zap,
      title: "Energy Efficient",
      description: "Up to 70% energy savings vs traditional lighting",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      title: "Long Lifespan",
      description: "50,000+ hours of reliable operation",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Settings,
      title: "Easy Maintenance",
      description: "Modular design for quick servicing",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  const smartFeatures = [
    {
      title: "Remote Monitoring",
      description: "Real-time monitoring of all street lights from central control room",
      icon: Eye,
      benefits: ["24/7 monitoring", "Fault detection", "Performance analytics", "Maintenance alerts"],
    },
    {
      title: "Energy Management",
      description: "Intelligent energy optimization and consumption tracking",
      icon: Gauge,
      benefits: ["Energy savings", "Cost reduction", "Carbon footprint", "Usage reports"],
    },
    {
      title: "Smart Controls",
      description: "Automated and manual control of lighting based on various parameters",
      icon: Settings,
      benefits: ["Scheduled dimming", "Motion detection", "Weather adaptation", "Traffic-based control"],
    },
    {
      title: "Predictive Maintenance",
      description: "AI-powered maintenance scheduling to prevent failures",
      icon: Sensor,
      benefits: ["Reduced downtime", "Lower maintenance costs", "Extended lifespan", "Improved reliability"],
    },
  ]

  const applications = [
    {
      title: "Urban Streets",
      description: "Comprehensive lighting for city roads and residential areas",
      image: "/smart-city-led-street-lights-night-urban-road-ligh.jpg",
      features: ["Smart controls", "Energy efficient", "Uniform distribution"],
    },
    {
      title: "Highways & Expressways",
      description: "High-performance lighting for high-speed traffic safety",
      image: "/sports-stadium-led-floodlights-night-football-aren.jpg",
      features: ["High intensity", "Anti-glare", "Long visibility"],
    },
    {
      title: "Parks & Pathways",
      description: "Safe and comfortable lighting for pedestrian areas",
      image: "/outdoor-street-led-lights-architectural-pathway-li.jpg",
      features: ["Motion sensors", "Decorative design", "Energy saving"],
    },
    {
      title: "Industrial Areas",
      description: "Robust lighting solutions for industrial zones",
      image: "/industrial-high-bay-led-warehouse-factory-lighting.jpg",
      features: ["Heavy-duty construction", "High efficiency", "Low maintenance"],
    },
  ]

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Left Side */}
            <Link href="/" className="flex items-center gap-2">
              <Lightbulb className="h-8 w-8 text-accent-glow" />
              <span className="text-xl font-bold text-foreground">Surya Roshni</span>
            </Link>

            {/* Navigation Menu - Center */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center gap-8">
                {/* Company Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setDropdownOpen('company')}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                    Company
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {dropdownOpen === 'company' && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                      {navigationMenus.company.map((item) => (
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

                {/* Products Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setDropdownOpen('products')}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <button className="text-sm font-medium text-accent-glow border-b-2 border-accent-glow pb-1 flex items-center gap-1">
                    Products
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {dropdownOpen === 'products' && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
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

                {/* Application Areas Dropdown */}
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
                    <div className="absolute top-full left-0 mt-2 w-52 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
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

                {/* Smart Solutions Dropdown */}
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
                    <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
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
              </div>
            </div>

            {/* Get Quote Button - Right Side */}
            <div className="hidden lg:block">
              <Button size="sm" className="bg-accent-glow hover:bg-accent-glow/90 text-white">
                Get Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <Link
                href="/company"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Company
              </Link>
              <Link
                href="/products"
                className="text-sm font-medium text-accent-glow"
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
                Street & Outdoor Lighting
              </Badge>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Smart{" "}
              <span className="text-gradient bg-gradient-to-r from-accent-glow to-accent-warm bg-clip-text text-transparent">
                Street Lighting
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Illuminate your city with intelligent LED street lighting solutions that enhance safety, reduce energy consumption, and enable smart city infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button size="lg" className="professional-button px-10 py-6 text-lg group shadow-xl">
                Explore Solutions
                <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="professional-border-gradient px-10 py-6 text-lg hover:bg-accent-subtle">
                Smart City Guide
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </section>

      {/* Featured Product Showcase */}
      <section ref={productsRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Street Lighting Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive range of LED street lights for every urban need
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden bg-card border-border shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-96 lg:h-auto overflow-hidden">
                  <img
                    src={streetProducts[activeProduct].image || "/placeholder.svg"}
                    alt={streetProducts[activeProduct].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-background/90 text-foreground">{streetProducts[activeProduct].category}</Badge>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold">{streetProducts[activeProduct].name}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {streetProducts[activeProduct].description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {streetProducts[activeProduct].features.map((feature, idx) => (
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
                        <div className="font-medium">{streetProducts[activeProduct].specifications.wattage}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Lumens:</span>
                        <div className="font-medium">{streetProducts[activeProduct].specifications.lumens}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Protection:</span>
                        <div className="font-medium">{streetProducts[activeProduct].specifications.protection}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Lifespan:</span>
                        <div className="font-medium">{streetProducts[activeProduct].specifications.lifespan}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button className="bg-accent-glow hover:bg-accent-glow/90 text-white">
                      Request Quote
                    </Button>
                    <Button variant="outline" className="hover:bg-accent-subtle">
                      <Download className="h-4 w-4 mr-2" />
                      Brochure
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Product Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {streetProducts.map((_, index) => (
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

      {/* Street Lighting Features */}
      <section ref={featuresRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Advanced Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Cutting-edge technology for modern street lighting
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {streetFeatures.map((feature, index) => (
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

      {/* Smart Features */}
      <section ref={smartFeaturesRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Smart City Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Intelligent features for next-generation urban infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {smartFeatures.map((feature, index) => (
              <Card
                key={index}
                className="smart-feature p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-border"
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-glow to-accent-warm flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Benefits:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Applications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Versatile lighting solutions for diverse outdoor environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
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
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Features:</h4>
                    <div className="space-y-1">
                      {application.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
              Light Up Your City
            </h2>
            <p className="text-lg md:text-xl opacity-90 text-pretty leading-relaxed">
              Transform your urban landscape with smart, efficient, and sustainable street lighting solutions. Contact our experts for a customized lighting plan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-accent-glow hover:bg-white/90 px-8">
                Plan Your Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
              >
                Smart City Solutions
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
                Illuminating India's streets with smart, sustainable lighting solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/products/led-lighting" className="hover:text-foreground transition-colors">
                    LED Lighting
                  </Link>
                </li>
                <li>
                  <Link href="/products/commercial" className="hover:text-foreground transition-colors">
                    Commercial Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/products/industrial" className="hover:text-foreground transition-colors">
                    Industrial Lighting
                  </Link>
                </li>
                <li>
                  <Link href="/smart" className="hover:text-foreground transition-colors">
                    Smart Solutions
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
                  <Sun className="h-4 w-4" />
                  1800-102-5657
                </li>
                <li className="flex items-center gap-2">
                  <Moon className="h-4 w-4" />
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
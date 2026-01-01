"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Lightbulb,
  Cpu,
  Wifi,
  Smartphone,
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
  Radio,
  Sensor,
  Globe,
  BarChart3,
  Settings,
  Timer,
} from "lucide-react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"

gsap.registerPlugin(ScrollTrigger)

export default function SmartSolutionsPage() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const [activeSolution, setActiveSolution] = useState(0)

  const heroRef = useRef<HTMLDivElement>(null)
  const solutionsRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSolution((prev) => (prev + 1) % smartSolutions.length)
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

      if (solutionsRef.current) {
        gsap.from(solutionsRef.current.querySelectorAll(".solution-card"), {
          scrollTrigger: {
            trigger: solutionsRef.current,
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

      if (benefitsRef.current) {
        gsap.from(benefitsRef.current.querySelectorAll(".benefit-card"), {
          scrollTrigger: {
            trigger: benefitsRef.current,
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

  const smartSolutions = [
    {
      id: 1,
      name: "IoT Lighting Control",
      category: "Connected Systems",
      description: "Intelligent lighting systems with IoT connectivity for remote monitoring and control",
      image: "/smart-connected-iot-led-lighting-control-system.jpg",
      features: ["Remote Control", "Real-time Monitoring", "Predictive Maintenance", "Energy Analytics"],
      specifications: {
        connectivity: "WiFi, Zigbee, LoRaWAN",
        protocol: "MQTT, CoAP",
        compatibility: "iOS, Android, Web",
        range: "Up to 1km",
        battery: "10+ years",
        sensors: "Motion, Light, Temperature",
      },
      benefits: ["60% Energy Savings", "Reduced Maintenance", "Enhanced Security", "Data Insights"],
    },
    {
      id: 2,
      name: "Smart Controls & Dimming",
      category: "Control Systems",
      description: "Advanced dimming and control systems with scene management and scheduling",
      image: "/modern-office-led-panel-lights-ceiling-commercial-.jpg",
      features: ["Scene Control", "Scheduling", "Daylight Harvesting", "Occupancy Detection"],
      specifications: {
        dimming: "0-100% smooth dimming",
        scenes: "Unlimited scenes",
        scheduling: "Daily/Weekly/Monthly",
        sensors: "PIR, Daylight, Temperature",
        interface: "Touch Panel, Mobile App",
        zones: "Up to 1000 zones",
      },
      benefits: ["Improved Comfort", "Energy Efficiency", "Easy Management", "Flexible Control"],
    },
    {
      id: 3,
      name: "Energy Management System",
      category: "Analytics Platform",
      description: "Comprehensive energy monitoring and management platform with AI-powered insights",
      image: "/smart-city-led-street-lights-night-urban-road-ligh.jpg",
      features: ["Energy Monitoring", "AI Analytics", "Cost Optimization", "Carbon Tracking"],
      specifications: {
        monitoring: "Real-time energy data",
        analytics: "AI-powered insights",
        reporting: "Automated reports",
        integration: "ERP, BMS systems",
        dashboard: "Web & Mobile",
        alerts: "Email, SMS, Push",
      },
      benefits: ["Cost Reduction", "Sustainability Goals", "Compliance Reporting", "Predictive Analytics"],
    },
    {
      id: 4,
      name: "Sensor Networks",
      category: "Sensing Technology",
      description: "Advanced sensor networks for occupancy detection, daylight harvesting, and environmental monitoring",
      image: "/airport-terminal-led-lighting-modern-architecture-.jpg",
      features: ["Multi-sensor Integration", "Wireless Mesh", "Edge Computing", "Cloud Analytics"],
      specifications: {
        sensors: "PIR, Daylight, CO2, Temperature",
        wireless: "Zigbee 3.0, Thread",
        range: "100m indoor, 1km outdoor",
        battery: "5-10 years",
        accuracy: "±2% light, ±0.5°C temp",
        response: "<100ms",
      },
      benefits: ["Automated Control", "Energy Optimization", "Comfort Enhancement", "Data-driven Decisions"],
    },
  ]

  const keyFeatures = [
    {
      icon: Wifi,
      title: "Wireless Connectivity",
      description: "Seamless wireless communication using latest IoT protocols",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Control",
      description: "Control your lighting from anywhere using our mobile app",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: BarChart3,
      title: "Energy Analytics",
      description: "Real-time energy monitoring and consumption analytics",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Settings,
      title: "Automated Control",
      description: "Intelligent automation based on occupancy and daylight",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime reliability",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Timer,
      title: "Scheduling",
      description: "Advanced scheduling with scene management capabilities",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  const benefits = [
    {
      title: "Energy Savings",
      description: "Reduce energy consumption by up to 60% with intelligent controls",
      icon: Zap,
      metric: "60%",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Operational Efficiency",
      description: "Streamline operations with automated lighting management",
      icon: TrendingUp,
      metric: "40%",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Maintenance Reduction",
      description: "Predictive maintenance reduces service calls and costs",
      icon: Settings,
      metric: "50%",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Enhanced Security",
      description: "Improved security with intelligent lighting and monitoring",
      icon: Shield,
      metric: "80%",
      color: "from-orange-500 to-red-500",
    },
  ]

  const useCases = [
    {
      title: "Smart Buildings",
      description: "Intelligent lighting for modern commercial buildings",
      applications: ["Office Buildings", "Shopping Malls", "Hotels", "Hospitals"],
      image: "/modern-corporate-office-led-lighting-interior-glas.jpg",
    },
    {
      title: "Smart Cities",
      description: "Connected street lighting for urban infrastructure",
      applications: ["Street Lighting", "Public Spaces", "Parks", "Transportation"],
      image: "/smart-city-led-street-lights-night-urban-road-ligh.jpg",
    },
    {
      title: "Industrial IoT",
      description: "Smart lighting solutions for industrial facilities",
      applications: ["Manufacturing", "Warehouses", "Logistics", "Mining"],
      image: "/industrial-high-bay-led-warehouse-factory-lighting.jpg",
    },
    {
      title: "Smart Homes",
      description: "Connected lighting for residential applications",
      applications: ["Home Automation", "Security", "Energy Management", "Comfort"],
      image: "/outdoor-street-led-lights-architectural-pathway-li.jpg",
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
                  <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
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
                  <button className="text-sm font-medium text-accent-glow border-b-2 border-accent-glow pb-1 flex items-center gap-1">
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
                className="text-sm font-medium text-accent-glow"
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
                Smart Lighting Solutions
              </Badge>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              The Future of{" "}
              <span className="text-gradient bg-gradient-to-r from-accent-glow to-accent-warm bg-clip-text text-transparent">
                Intelligent Lighting
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Transform your spaces with IoT-enabled smart lighting solutions that adapt, learn, and optimize for maximum efficiency and comfort.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button size="lg" className="professional-button px-10 py-6 text-lg group shadow-xl">
                Explore Solutions
                <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="professional-border-gradient px-10 py-6 text-lg hover:bg-accent-subtle">
                Request Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </section>

      {/* Featured Solution Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Featured Smart Solution</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover our latest intelligent lighting innovation
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden bg-card border-border shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-96 lg:h-auto overflow-hidden">
                  <img
                    src={smartSolutions[activeSolution].image || "/placeholder.svg"}
                    alt={smartSolutions[activeSolution].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-background/90 text-foreground">{smartSolutions[activeSolution].category}</Badge>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold">{smartSolutions[activeSolution].name}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {smartSolutions[activeSolution].description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {smartSolutions[activeSolution].features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Benefits:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {smartSolutions[activeSolution].benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-accent-glow">
                          <Star className="h-4 w-4 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button className="bg-accent-glow hover:bg-accent-glow/90 text-white">
                      Request Demo
                    </Button>
                    <Button variant="outline" className="hover:bg-accent-subtle">
                      <Download className="h-4 w-4 mr-2" />
                      Brochure
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Solution Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {smartSolutions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSolution(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeSolution ? "bg-accent-glow w-8" : "bg-muted-foreground/30"
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
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Smart Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Advanced capabilities that make our smart lighting solutions stand out
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

      {/* Benefits */}
      <section ref={benefitsRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Smart Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Measurable improvements for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="benefit-card p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-border relative overflow-hidden group text-center"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <div className="relative z-10 space-y-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center`}
                  >
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-accent-glow">{benefit.metric}</div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Use Cases</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Smart lighting solutions for every environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={useCase.image || "/placeholder.svg"}
                    alt={useCase.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.applications.map((app, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full hover:bg-accent-subtle"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Learn More
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
              Ready to Go Smart?
            </h2>
            <p className="text-lg md:text-xl opacity-90 text-pretty leading-relaxed">
              Experience the future of lighting with our intelligent solutions. Get a personalized demo and see how smart lighting can transform your space.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-accent-glow hover:bg-white/90 px-8">
                Request Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
              >
                Contact Expert
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
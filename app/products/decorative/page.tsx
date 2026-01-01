"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Lightbulb,
  Sparkles,
  Palette,
  Crown,
  Star,
  Heart,
  Award,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  CheckCircle,
  Download,
  Eye,
  Gem,
  Wand2,
  Zap,
  Sun,
  Moon,
  Settings,
} from "lucide-react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"

gsap.registerPlugin(ScrollTrigger)

export default function DecorativeLightingPage() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const [activeProduct, setActiveProduct] = useState(0)

  const heroRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)
  const stylesRef = useRef<HTMLDivElement>(null)
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
      setActiveProduct((prev) => (prev + 1) % decorativeProducts.length)
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

      if (stylesRef.current) {
        gsap.from(stylesRef.current.querySelectorAll(".style-item"), {
          scrollTrigger: {
            trigger: stylesRef.current,
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

  const decorativeProducts = [
    {
      id: 1,
      name: "Crystal LED Chandeliers",
      category: "Luxury Lighting",
      description: "Exquisite crystal chandeliers with integrated LED technology, combining timeless elegance with modern efficiency",
      image: "/shopping-mall-led-retail-lighting-modern-interior-.jpg",
      features: ["Crystal Elements", "LED Technology", "Dimmable", "Remote Control"],
      specifications: {
        wattage: "36W - 180W",
        lumens: "3,600 - 18,000 lm",
        materials: "K9 Crystal, Stainless Steel",
        control: "Remote, Wall Switch, App",
        styles: "Traditional, Modern, Contemporary",
        lifespan: "50,000 hours",
      },
      applications: ["Dining Rooms", "Living Rooms", "Hotels", "Restaurants"],
    },
    {
      id: 2,
      name: "Architectural Wall Lights",
      category: "Accent Lighting",
      description: "Sophisticated wall-mounted LED fixtures that create stunning visual effects and enhance architectural features",
      image: "/modern-corporate-office-led-lighting-interior-glas.jpg",
      features: ["Architectural Design", "Color Changing", "Weather Resistant", "Smart Controls"],
      specifications: {
        wattage: "12W - 72W",
        lumens: "1,200 - 7,200 lm",
        colors: "RGB + White",
        mounting: "Surface, Recessed",
        protection: "IP65 (Outdoor models)",
        lifespan: "50,000 hours",
      },
      applications: ["Building Facades", "Lobbies", "Corridors", "Outdoor Walls"],
    },
    {
      id: 3,
      name: "Designer Pendant Lights",
      category: "Statement Lighting",
      description: "Artistic pendant lights that serve as focal points while providing excellent illumination for various spaces",
      image: "/airport-terminal-led-lighting-modern-architecture-.jpg",
      features: ["Artistic Design", "Adjustable Height", "Multiple Finishes", "Energy Efficient"],
      specifications: {
        wattage: "18W - 96W",
        lumens: "1,800 - 9,600 lm",
        materials: "Metal, Glass, Fabric",
        suspension: "Adjustable Cable/Rod",
        finishes: "Bronze, Chrome, Gold, Black",
        lifespan: "50,000 hours",
      },
      applications: ["Kitchen Islands", "Dining Tables", "Reception Areas", "Cafes"],
    },
    {
      id: 4,
      name: "Decorative Strip Lights",
      category: "Ambient Lighting",
      description: "Flexible LED strip lights for creating ambient lighting effects, cove lighting, and decorative accents",
      image: "/outdoor-street-led-lights-architectural-pathway-li.jpg",
      features: ["Flexible Design", "Cuttable", "Color Changing", "Easy Installation"],
      specifications: {
        wattage: "4.8W - 14.4W per meter",
        lumens: "480 - 1,440 lm/m",
        colors: "Single Color, RGB, RGBW",
        length: "5m rolls, Custom lengths",
        protection: "IP20, IP65, IP67",
        lifespan: "50,000 hours",
      },
      applications: ["Cove Lighting", "Under Cabinet", "Stair Lighting", "Accent Features"],
    },
  ]

  const decorativeStyles = [
    {
      icon: Crown,
      title: "Traditional Elegance",
      description: "Classic designs with ornate details and rich finishes",
      color: "from-amber-500 to-yellow-600",
    },
    {
      icon: Sparkles,
      title: "Modern Minimalist",
      description: "Clean lines and contemporary aesthetics",
      color: "from-gray-500 to-gray-700",
    },
    {
      icon: Gem,
      title: "Luxury Crystal",
      description: "Premium crystal elements for sophisticated spaces",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Wand2,
      title: "Artistic Statement",
      description: "Unique designs that serve as art pieces",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Heart,
      title: "Romantic Ambiance",
      description: "Soft, warm lighting for intimate settings",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: Star,
      title: "Dramatic Effects",
      description: "Bold lighting that creates visual impact",
      color: "from-orange-500 to-red-500",
    },
  ]

  const applications = [
    {
      title: "Hospitality & Hotels",
      description: "Create memorable experiences with stunning decorative lighting",
      features: ["Grand chandeliers", "Accent lighting", "Mood setting", "Energy efficiency"],
      image: "/shopping-mall-led-retail-lighting-modern-interior-.jpg",
      spaces: ["Lobbies", "Restaurants", "Ballrooms", "Guest Rooms"],
    },
    {
      title: "Retail & Commercial",
      description: "Attract customers and enhance brand image with decorative elements",
      features: ["Brand enhancement", "Customer attraction", "Product highlighting", "Ambiance creation"],
      image: "/modern-corporate-office-led-lighting-interior-glas.jpg",
      spaces: ["Showrooms", "Boutiques", "Malls", "Offices"],
    },
    {
      title: "Residential Luxury",
      description: "Transform homes into elegant living spaces with designer lighting",
      features: ["Personal style", "Comfort enhancement", "Value addition", "Smart controls"],
      image: "/modern-office-led-panel-lights-ceiling-commercial-.jpg",
      spaces: ["Living Rooms", "Dining Areas", "Bedrooms", "Foyers"],
    },
    {
      title: "Event & Wedding Venues",
      description: "Create magical atmospheres for special occasions and celebrations",
      features: ["Customizable scenes", "Color changing", "Romantic ambiance", "Memorable experiences"],
      image: "/airport-terminal-led-lighting-modern-architecture-.jpg",
      spaces: ["Banquet Halls", "Gardens", "Reception Areas", "Dance Floors"],
    },
  ]

  const features = [
    {
      title: "Artistic Design",
      description: "Each fixture is carefully designed to be a work of art",
      icon: Palette,
      metric: "100+",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Premium Materials",
      description: "High-quality crystals, metals, and glass components",
      icon: Gem,
      metric: "Premium",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Smart Controls",
      description: "App-controlled dimming and color changing capabilities",
      icon: Settings,
      metric: "Smart",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Energy Efficient",
      description: "LED technology for maximum efficiency and longevity",
      icon: Zap,
      metric: "80%",
      color: "from-yellow-500 to-orange-500",
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
                Decorative & Artistic Lighting
              </Badge>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Illuminate with{" "}
              <span className="text-gradient bg-gradient-to-r from-accent-glow to-accent-warm bg-clip-text text-transparent">
                Artistic Elegance
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Transform your spaces into works of art with our exquisite collection of decorative LED lighting that combines beauty, functionality, and energy efficiency.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button size="lg" className="professional-button px-10 py-6 text-lg group shadow-xl">
                Explore Collection
                <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="professional-border-gradient px-10 py-6 text-lg hover:bg-accent-subtle">
                Design Catalog
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Why Choose Decorative LED?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              The perfect blend of artistry and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-border relative overflow-hidden group text-center"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <div className="relative z-10 space-y-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-accent-glow">{feature.metric}</div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
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
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Decorative Collection</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Exquisite lighting fixtures that serve as functional art pieces
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden bg-card border-border shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-96 lg:h-auto overflow-hidden">
                  <img
                    src={decorativeProducts[activeProduct].image || "/placeholder.svg"}
                    alt={decorativeProducts[activeProduct].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-background/90 text-foreground">{decorativeProducts[activeProduct].category}</Badge>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold">{decorativeProducts[activeProduct].name}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {decorativeProducts[activeProduct].description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {decorativeProducts[activeProduct].features.map((feature, idx) => (
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
                        <div className="font-medium">{decorativeProducts[activeProduct].specifications.wattage}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Lumens:</span>
                        <div className="font-medium">{decorativeProducts[activeProduct].specifications.lumens}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Materials:</span>
                        <div className="font-medium">{decorativeProducts[activeProduct].specifications.materials}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Lifespan:</span>
                        <div className="font-medium">{decorativeProducts[activeProduct].specifications.lifespan}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button className="bg-accent-glow hover:bg-accent-glow/90 text-white">
                      View Collection
                    </Button>
                    <Button variant="outline" className="hover:bg-accent-subtle">
                      <Download className="h-4 w-4 mr-2" />
                      Catalog
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Product Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {decorativeProducts.map((_, index) => (
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

      {/* Design Styles */}
      <section ref={stylesRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Design Styles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Diverse styles to match every aesthetic preference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {decorativeStyles.map((style, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="style-item"
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-border relative overflow-hidden group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${style.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <div className="relative z-10 space-y-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${style.color} flex items-center justify-center`}
                    >
                      <style.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{style.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{style.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section ref={applicationsRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Applications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Perfect decorative lighting solutions for every space
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
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Benefits:</h4>
                    <div className="space-y-1">
                      {application.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Ideal Spaces:</h4>
                    <div className="flex flex-wrap gap-1">
                      {application.spaces.map((space, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {space}
                        </Badge>
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
              Create Your Masterpiece
            </h2>
            <p className="text-lg md:text-xl opacity-90 text-pretty leading-relaxed">
              Let our design experts help you create stunning lighting installations that reflect your unique style and vision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-accent-glow hover:bg-white/90 px-8">
                Consult Designer
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
              >
                Custom Solutions
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
                Creating artistic lighting experiences that inspire and delight.
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
                  <Link href="/products/home" className="hover:text-foreground transition-colors">
                    Home Lighting
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
                  <Sparkles className="h-4 w-4" />
                  1800-102-5657
                </li>
                <li className="flex items-center gap-2">
                  <Crown className="h-4 w-4" />
                  consumercare@surya.in
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
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
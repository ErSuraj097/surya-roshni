"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Lightbulb,
  Home,
  Heart,
  Zap,
  Palette,
  Sun,
  Moon,
  Award,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  CheckCircle,
  Star,
  Download,
  Eye,
  Smartphone,
  Wifi,
  Settings,
  Timer,
  Thermometer,
} from "lucide-react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"

gsap.registerPlugin(ScrollTrigger)

export default function HomeLightingPage() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const [activeProduct, setActiveProduct] = useState(0)

  const heroRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const roomsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % homeProducts.length)
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

      if (roomsRef.current) {
        gsap.from(roomsRef.current.querySelectorAll(".room-card"), {
          scrollTrigger: {
            trigger: roomsRef.current,
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

  const homeProducts = [
    {
      id: 1,
      name: "Smart LED Bulbs",
      category: "Smart Home Lighting",
      description: "WiFi-enabled smart LED bulbs with app control, voice commands, and customizable lighting scenes for modern homes",
      image: "/modern-corporate-office-led-lighting-interior-glas.jpg",
      features: ["App Control", "Voice Commands", "Color Changing", "Energy Efficient"],
      specifications: {
        wattage: "9W - 15W",
        lumens: "800 - 1500 lm",
        colors: "16 million colors",
        connectivity: "WiFi, Bluetooth",
        compatibility: "Alexa, Google, Siri",
        lifespan: "25,000 hours",
      },
      applications: ["Living Room", "Bedroom", "Kitchen", "Study Room"],
    },
    {
      id: 2,
      name: "LED Panel Lights",
      category: "Ceiling Lighting",
      description: "Ultra-slim LED panel lights with uniform illumination perfect for modern home interiors and false ceilings",
      image: "/modern-office-led-panel-lights-ceiling-commercial-.jpg",
      features: ["Ultra Slim", "Uniform Light", "Easy Installation", "Dimmable"],
      specifications: {
        wattage: "12W - 48W",
        lumens: "1200 - 4800 lm",
        thickness: "12mm",
        cct: "3000K - 6500K",
        cri: ">80",
        lifespan: "50,000 hours",
      },
      applications: ["Living Room", "Dining Room", "Bedroom", "Kitchen"],
    },
    {
      id: 3,
      name: "Decorative Chandeliers",
      category: "Decorative Lighting",
      description: "Elegant LED chandeliers combining traditional aesthetics with modern LED technology for luxurious home lighting",
      image: "/shopping-mall-led-retail-lighting-modern-interior-.jpg",
      features: ["Elegant Design", "LED Technology", "Dimmable", "Remote Control"],
      specifications: {
        wattage: "24W - 120W",
        lumens: "2400 - 12000 lm",
        materials: "Crystal, Metal, Glass",
        control: "Remote, Wall Switch",
        styles: "Modern, Classic, Contemporary",
        lifespan: "50,000 hours",
      },
      applications: ["Dining Room", "Living Room", "Foyer", "Bedroom"],
    },
    {
      id: 4,
      name: "Under Cabinet Lights",
      category: "Task Lighting",
      description: "Sleek under-cabinet LED strips and puck lights for kitchen task lighting and ambient illumination",
      image: "/outdoor-street-led-lights-architectural-pathway-li.jpg",
      features: ["Motion Sensor", "Touch Control", "Linkable", "Battery Option"],
      specifications: {
        wattage: "3W - 18W per unit",
        lumens: "300 - 1800 lm",
        mounting: "Adhesive, Screw",
        power: "Plug-in, Battery, Hardwired",
        sensor: "Motion, Touch",
        lifespan: "50,000 hours",
      },
      applications: ["Kitchen", "Closets", "Cabinets", "Workspaces"],
    },
  ]

  const homeFeatures = [
    {
      icon: Smartphone,
      title: "Smart Control",
      description: "Control your lights from anywhere with smartphone apps",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Color Changing",
      description: "16 million colors to match any mood or occasion",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Energy Saving",
      description: "Up to 80% energy savings compared to traditional bulbs",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Timer,
      title: "Scheduling",
      description: "Set schedules and timers for automated lighting",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Sun,
      title: "Circadian Rhythm",
      description: "Automatic color temperature adjustment throughout the day",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Wifi,
      title: "Voice Control",
      description: "Compatible with Alexa, Google Assistant, and Siri",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  const roomSolutions = [
    {
      room: "Living Room",
      description: "Create the perfect ambiance for relaxation and entertainment",
      lighting: ["Ceiling Lights", "Floor Lamps", "Wall Sconces", "Smart Bulbs"],
      features: ["Dimmable controls", "Color temperature adjustment", "Scene presets", "Voice control"],
      image: "/modern-corporate-office-led-lighting-interior-glas.jpg",
      mood: "Warm and welcoming",
    },
    {
      room: "Kitchen",
      description: "Bright, functional lighting for cooking and dining",
      lighting: ["Under Cabinet", "Pendant Lights", "Recessed Lights", "Island Lighting"],
      features: ["Task lighting", "Motion sensors", "Bright white light", "Easy controls"],
      image: "/modern-office-led-panel-lights-ceiling-commercial-.jpg",
      mood: "Bright and functional",
    },
    {
      room: "Bedroom",
      description: "Soft, relaxing lighting for rest and comfort",
      lighting: ["Bedside Lamps", "Ceiling Fans", "Strip Lights", "Night Lights"],
      features: ["Warm light", "Dimming options", "Sleep mode", "Gentle wake-up"],
      image: "/shopping-mall-led-retail-lighting-modern-interior-.jpg",
      mood: "Calm and restful",
    },
    {
      room: "Study Room",
      description: "Focused lighting for productivity and concentration",
      lighting: ["Desk Lamps", "Ceiling Lights", "Reading Lights", "Panel Lights"],
      features: ["Bright white light", "Adjustable brightness", "Eye-care technology", "Focus modes"],
      image: "/airport-terminal-led-lighting-modern-architecture-.jpg",
      mood: "Bright and focused",
    },
  ]

  const benefits = [
    {
      title: "Energy Efficiency",
      description: "Reduce electricity bills by up to 80%",
      icon: Zap,
      metric: "80%",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Long Lifespan",
      description: "25,000+ hours of reliable operation",
      icon: Award,
      metric: "25,000h",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Smart Features",
      description: "App control and voice commands",
      icon: Smartphone,
      metric: "100%",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Comfort & Health",
      description: "Circadian rhythm support for better sleep",
      icon: Heart,
      metric: "24/7",
      color: "from-red-500 to-pink-500",
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
                Smart Home Lighting
              </Badge>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Illuminate Your{" "}
              <span className="text-gradient bg-gradient-to-r from-accent-glow to-accent-warm bg-clip-text text-transparent">
                Smart Home
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Transform your living spaces with intelligent LED lighting solutions that adapt to your lifestyle, save energy, and enhance your home's ambiance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button size="lg" className="professional-button px-10 py-6 text-lg group shadow-xl">
                Explore Products
                <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="professional-border-gradient px-10 py-6 text-lg hover:bg-accent-subtle">
                Smart Home Guide
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Why Choose Smart Home Lighting?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Experience the benefits of modern LED technology in your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-border relative overflow-hidden group text-center"
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

      {/* Featured Product Showcase */}
      <section ref={productsRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Home Lighting Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Complete range of smart LED lighting for every room in your home
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden bg-card border-border shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-96 lg:h-auto overflow-hidden">
                  <img
                    src={homeProducts[activeProduct].image || "/placeholder.svg"}
                    alt={homeProducts[activeProduct].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-background/90 text-foreground">{homeProducts[activeProduct].category}</Badge>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold">{homeProducts[activeProduct].name}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {homeProducts[activeProduct].description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {homeProducts[activeProduct].features.map((feature, idx) => (
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
                        <div className="font-medium">{homeProducts[activeProduct].specifications.wattage}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Lumens:</span>
                        <div className="font-medium">{homeProducts[activeProduct].specifications.lumens}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Lifespan:</span>
                        <div className="font-medium">{homeProducts[activeProduct].specifications.lifespan}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Control:</span>
                        <div className="font-medium">{homeProducts[activeProduct].specifications.connectivity || homeProducts[activeProduct].specifications.control || "Standard"}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button className="bg-accent-glow hover:bg-accent-glow/90 text-white">
                      Shop Now
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
              {homeProducts.map((_, index) => (
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

      {/* Smart Features */}
      <section ref={featuresRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Smart Home Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Advanced features that make your home lighting intelligent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeFeatures.map((feature, index) => (
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

      {/* Room Solutions */}
      <section ref={roomsRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Room-by-Room Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Tailored lighting solutions for every space in your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {roomSolutions.map((room, index) => (
              <Card
                key={index}
                className="room-card overflow-hidden bg-card border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={room.image || "/placeholder.svg"}
                    alt={room.room}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-background/90 text-foreground">{room.mood}</Badge>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{room.room}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{room.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Lighting Types:</h4>
                    <div className="flex flex-wrap gap-1">
                      {room.lighting.map((light, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {light}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Features:</h4>
                    <div className="space-y-1">
                      {room.features.map((feature, idx) => (
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
              Transform Your Home Today
            </h2>
            <p className="text-lg md:text-xl opacity-90 text-pretty leading-relaxed">
              Start your smart home journey with Surya Roshni's intelligent lighting solutions. Get personalized recommendations for your space.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-accent-glow hover:bg-white/90 px-8">
                Design My Home
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
              >
                Find Retailers
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
                Bringing smart, beautiful lighting to every Indian home.
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
                  <Home className="h-4 w-4" />
                  1800-102-5657
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  consumercare@surya.in
                </li>
                <li className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
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
"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Lightbulb,
  Building2,
  Factory,
  Store,
  Sun,
  Zap,
  TreePine,
  Radio,
  ChevronRight,
  CheckCircle,
  Wrench,
  HeadphonesIcon,
  Cpu,
  Target,
  Users,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"

export default function SolutionsPage() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSolution, setActiveSolution] = useState(0)

  const heroRef = useRef<HTMLDivElement>(null)
  const solutionsRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSolution((prev) => (prev + 1) % solutions.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const solutions = [
    {
      id: 1,
      name: "Indoor Commercial Lighting",
      category: "Commercial",
      description: "Our indoor product range fulfills the requirement of offices, commercial space, etc. Complete lighting solutions for modern workspaces.",
      features: ["Energy Efficient LED Panels", "Uniform Light Distribution", "Glare-Free Design", "Easy Installation", "Smart Controls Integration"],
      applications: ["Corporate Offices", "Coworking Spaces", "Conference Rooms", "Reception Areas", "Open Workspaces"],
      benefits: ["70% Energy Savings", "Improved Productivity", "Reduced Eye Strain", "Lower Maintenance", "Enhanced Aesthetics"],
      image: "/modern-office-led-panel-lights-ceiling-commercial-.jpg",
      icon: Building2,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Retail Lighting Solutions",
      category: "Retail",
      description: "Maintains best visual in every spot in the showroom, real colour rendering in supermarts. Specialized lighting for retail environments.",
      features: ["High CRI Lighting", "Accent & Track Systems", "Color Temperature Control", "Dimming Capabilities", "Display Lighting"],
      applications: ["Shopping Malls", "Retail Stores", "Showrooms", "Supermarkets", "Boutiques"],
      benefits: ["Enhanced Product Appeal", "Improved Sales", "Customer Comfort", "Brand Enhancement", "Flexible Design"],
      image: "/shopping-mall-led-retail-lighting-modern-interior-.jpg",
      icon: Store,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Industrial Lighting Systems",
      category: "Industrial",
      description: "LED industrial lighting is a popular choice for industrial settings due to its exceptional performance and efficiency.",
      features: ["High Bay LED Fixtures", "Explosion Proof Options", "Motion Sensors", "Emergency Backup", "Robust Construction"],
      applications: ["Manufacturing Plants", "Warehouses", "Factories", "Assembly Lines", "Storage Facilities"],
      benefits: ["Maximum Safety", "Reduced Downtime", "Energy Efficiency", "Long Lifespan", "Low Maintenance"],
      image: "/industrial-high-bay-led-warehouse-factory-lighting.jpg",
      icon: Factory,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      name: "Smart Street Lighting",
      category: "Outdoor",
      description: "Various LED luminaries for our street and saves wastage of energy. Intelligent street lighting with IoT integration.",
      features: ["Smart Controls", "Motion Detection", "Remote Monitoring", "Energy Management", "Weather Resistance"],
      applications: ["City Streets", "Highways", "Residential Areas", "Parks", "Parking Lots"],
      benefits: ["80% Energy Savings", "Reduced Crime", "Smart City Integration", "Predictive Maintenance", "Environmental Impact"],
      image: "/smart-city-led-street-lights-night-urban-road-ligh.jpg",
      icon: Sun,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      name: "Sports & Stadium Lighting",
      category: "Sports",
      description: "High lumen package for every detail while game or at open warehouse, port and airport areas. Professional sports lighting solutions.",
      features: ["High Lumen Output", "Anti-Glare Design", "Instant On/Off", "Broadcast Quality", "Weather Resistant"],
      applications: ["Football Stadiums", "Cricket Grounds", "Tennis Courts", "Basketball Courts", "Athletic Tracks"],
      benefits: ["Broadcast Quality", "Player Safety", "Spectator Comfort", "Energy Efficiency", "Uniform Illumination"],
      image: "/sports-stadium-led-floodlights-night-football-aren.jpg",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 6,
      name: "Architectural Facade Lighting",
      category: "Architectural",
      description: "Creates an exciting look and feel of your building with every detail. Dynamic facade lighting for architectural enhancement.",
      features: ["RGB Color Changing", "DMX Control", "Weather Proof", "Programmable Scenes", "Energy Efficient"],
      applications: ["Corporate Buildings", "Hotels", "Shopping Centers", "Monuments", "Bridges"],
      benefits: ["Brand Enhancement", "Aesthetic Appeal", "Tourist Attraction", "Energy Savings", "Customizable Effects"],
      image: "/modern-corporate-office-led-lighting-interior-glas.jpg",
      icon: Building2,
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 7,
      name: "Landscape & Garden Lighting",
      category: "Landscape",
      description: "The use of outdoor illumination for private gardens, landscape area or road scapes. Beautiful outdoor lighting solutions.",
      features: ["Path Lighting", "Accent Lighting", "Garden Spots", "Timer Controls", "Weather Resistant"],
      applications: ["Private Gardens", "Public Parks", "Pathways", "Water Features", "Architectural Elements"],
      benefits: ["Enhanced Beauty", "Safety & Security", "Property Value", "Energy Efficiency", "Easy Maintenance"],
      image: "/outdoor-street-led-lights-architectural-pathway-li.jpg",
      icon: TreePine,
      color: "from-green-400 to-blue-500",
    },
    {
      id: 8,
      name: "Smart IoT Lighting",
      category: "Smart",
      description: "We don't just think of what is trending at the time, but rather look to the future of the lighting industry with connected solutions.",
      features: ["IoT Connectivity", "Mobile App Control", "Voice Integration", "Energy Monitoring", "Predictive Maintenance"],
      applications: ["Smart Buildings", "Smart Cities", "Industrial IoT", "Home Automation", "Office Buildings"],
      benefits: ["Remote Control", "Energy Optimization", "Predictive Analytics", "Cost Savings", "Future Ready"],
      image: "/smart-connected-iot-led-lighting-control-system.jpg",
      icon: Cpu,
      color: "from-cyan-500 to-blue-600",
    },
  ]

  const services = [
    {
      icon: Target,
      title: "Lighting Design & Consultation",
      description: "Expert lighting design services tailored to your specific requirements and space characteristics.",
      features: ["3D Visualization", "Photometric Analysis", "Energy Calculations", "Compliance Check"],
    },
    {
      icon: Wrench,
      title: "Installation & Commissioning",
      description: "Professional installation services with certified technicians and quality assurance.",
      features: ["Certified Installers", "Quality Testing", "System Integration", "Documentation"],
    },
    {
      icon: HeadphonesIcon,
      title: "Maintenance & Support",
      description: "Comprehensive maintenance programs to ensure optimal performance and longevity.",
      features: ["Preventive Maintenance", "24/7 Support", "Spare Parts", "Performance Monitoring"],
    },
    {
      icon: Cpu,
      title: "Smart Controls Integration",
      description: "Advanced control systems for intelligent lighting management and automation.",
      features: ["IoT Integration", "Mobile Apps", "Energy Management", "Automated Scheduling"],
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Understanding your requirements and site assessment",
      icon: Users,
    },
    {
      step: "02",
      title: "Design",
      description: "Custom lighting design with 3D visualization",
      icon: Target,
    },
    {
      step: "03",
      title: "Installation",
      description: "Professional installation by certified technicians",
      icon: Wrench,
    },
    {
      step: "04",
      title: "Support",
      description: "Ongoing maintenance and technical support",
      icon: HeadphonesIcon,
    },
  ]

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <Navigation scrolled={scrolled} activePage="solutions" />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-accent-subtle/20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <Badge className="text-sm px-6 py-3 border-0 bg-gradient-to-r from-primary to-accent-glow text-white shadow-lg">
              Complete Lighting Solutions
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Tailored{" "}
              <span className="text-gradient bg-gradient-to-r from-accent-glow to-accent-warm bg-clip-text text-transparent">
                Lighting Solutions
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              From design to installation and maintenance, we provide comprehensive lighting solutions for every application and industry.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="bg-accent-glow hover:bg-accent-glow/90 text-white px-10 py-6 text-lg shadow-xl">
                  Explore Solutions
                  <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="outline" className="border-accent-glow px-10 py-6 text-lg hover:bg-accent-subtle">
                  Free Consultation
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div 
          className="absolute top-1/4 left-10 w-24 h-24 bg-primary/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent-glow/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </section>

      {/* Featured Solution Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Featured Solution</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover our comprehensive lighting solutions designed for your specific needs
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden bg-card border-border shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-auto overflow-hidden">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                  >
                    <img
                      src={solutions[activeSolution].image || "/placeholder.svg"}
                      alt={solutions[activeSolution].name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-background/90 text-foreground">{solutions[activeSolution].category}</Badge>
                  </div>
                </div>
                
                <div className="p-8 md:p-12 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solutions[activeSolution].color} flex items-center justify-center`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                       
                      </motion.div>
                      <h3 className="text-2xl md:text-3xl font-bold">{solutions[activeSolution].name}</h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {solutions[activeSolution].description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {solutions[activeSolution].features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button className="bg-accent-glow hover:bg-accent-glow/90 text-white">
                      Learn More
                    </Button>
                    <Button variant="outline" className="hover:bg-accent-subtle">
                      Get Quote
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Solution Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {solutions.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveSolution(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeSolution ? "bg-accent-glow w-8" : "bg-muted-foreground/30"
                  }`}
                  whileHover={{ scale: 1.5 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Solutions Grid */}
      <section ref={solutionsRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Complete Solution Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive lighting solutions for every industry and application
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card border-border overflow-hidden">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent-subtle to-muted">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    >
                      <img
                        src={solution.image || "/placeholder.svg"}
                        alt={solution.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-background/90 text-foreground">{solution.category}</Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
                          whileHover={{ scale: 1.1 }}
                        >
                          <solution.icon className="h-6 w-6 text-white" />
                        </motion.div>
                        <h3 className="text-lg font-semibold group-hover:text-accent-glow transition-colors">
                          {solution.name}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {solution.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-sm">Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {solution.applications.slice(0, 3).map((app, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                        {solution.applications.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{solution.applications.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                        <Button
                          size="sm"
                          className="w-full bg-accent-glow hover:bg-accent-glow/90 text-white"
                        >
                          Learn More
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          size="sm"
                          variant="outline"
                          className="hover:bg-accent-subtle"
                        >
                          Quote
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              End-to-end lighting services from consultation to maintenance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-border text-center">
                  <div className="space-y-4">
                    <motion.div
                      className="w-16 h-16 mx-auto rounded-xl bg-accent-subtle flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon className="h-8 w-8 text-accent-glow" />
                    </motion.div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A systematic approach to deliver exceptional lighting solutions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center space-y-4"
                >
                  <div className="relative">
                    <motion.div
                      className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-accent-glow to-accent-warm flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <step.icon className="h-10 w-10 text-white" />
                    </motion.div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-accent-glow rounded-full flex items-center justify-center text-xs font-bold text-accent-glow">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
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
          <motion.div 
            className="max-w-3xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-balance leading-tight">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg md:text-xl opacity-90 text-pretty leading-relaxed">
              Get a free consultation with our lighting experts and discover the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="secondary" className="bg-white text-accent-glow hover:bg-white/90 px-8">
                  Free Consultation
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
                >
                  Download Brochure
                </Button>
              </motion.div>
            </div>
          </motion.div>
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

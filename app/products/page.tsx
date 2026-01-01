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
  Sun,
  Zap,
  Store,
  Warehouse,
  TreePine,
  Radio,
  ChevronRight,
  CheckCircle,
  Cpu,
  Shield,
  Award,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"

export default function ProductsPage() {
  const [scrolled, setScrolled] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")

  const heroRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const productCategories = [
    { id: "all", name: "All Products", count: 10 },
    { id: "commercial", name: "Commercial", count: 3 },
    { id: "industrial", name: "Industrial", count: 2 },
    { id: "outdoor", name: "Outdoor", count: 3 },
    { id: "smart", name: "Smart & IoT", count: 2 },
  ]

  const products = [
    {
      id: 1,
      name: "Indoor Commercial Lighting",
      category: "commercial",
      description: "Our indoor product range fulfills the requirement of offices, commercial space, etc.",
      features: ["Energy Efficient", "Long Lifespan", "Uniform Distribution", "Easy Installation"],
      image: "/modern-office-led-panel-lights-ceiling-commercial-.jpg",
      icon: Building2,
      specs: {
        power: "18W - 72W",
        lumens: "1800 - 7200 lm",
        efficiency: "100 lm/W",
        lifespan: "50,000 hours",
      },
    },
    {
      id: 2,
      name: "Retail Lighting",
      category: "commercial",
      description: "Maintains best visual in every spot in the showroom, real colour rendering in supermarts",
      features: ["High CRI", "Accent Lighting", "Track Systems", "Dimming Control"],
      image: "/shopping-mall-led-retail-lighting-modern-interior-.jpg",
      icon: Store,
      specs: {
        power: "12W - 50W",
        lumens: "1200 - 5000 lm",
        cri: ">90",
        lifespan: "50,000 hours",
      },
    },
    {
      id: 3,
      name: "Industrial Lighting",
      category: "industrial",
      description: "LED industrial lighting is a popular choice for industrial settings due to its exceptional performance and efficiency",
      features: ["High Bay Design", "Dust Resistant", "Vibration Proof", "Wide Beam Angle"],
      image: "/industrial-high-bay-led-warehouse-factory-lighting.jpg",
      icon: Factory,
      specs: {
        power: "100W - 300W",
        lumens: "13000 - 39000 lm",
        efficiency: "130 lm/W",
        lifespan: "60,000 hours",
      },
    },
    {
      id: 4,
      name: "Street Lighting",
      category: "outdoor",
      description: "Various LED luminaries for our street and saves wastage of energy",
      features: ["Weather Resistant", "Smart Controls", "Motion Sensors", "Energy Saving"],
      image: "/smart-city-led-street-lights-night-urban-road-ligh.jpg",
      icon: Sun,
      specs: {
        power: "30W - 150W",
        lumens: "3900 - 19500 lm",
        efficiency: "130 lm/W",
        lifespan: "50,000 hours",
      },
    },
    {
      id: 5,
      name: "Flood Lighting",
      category: "outdoor",
      description: "High lumen package for every detail while game or at open warehouse, port and airport areas",
      features: ["High Lumen Output", "Wide Coverage", "Adjustable Mounting", "Thermal Management"],
      image: "/sports-stadium-led-floodlights-night-football-aren.jpg",
      icon: Zap,
      specs: {
        power: "50W - 500W",
        lumens: "6500 - 65000 lm",
        efficiency: "130 lm/W",
        lifespan: "50,000 hours",
      },
    },
    {
      id: 6,
      name: "Facade Lighting",
      category: "outdoor",
      description: "Creates an exciting look and feel of your building with every detail",
      features: ["RGB Color", "DMX Control", "Architectural Design", "Weather Proof"],
      image: "/modern-corporate-office-led-lighting-interior-glas.jpg",
      icon: Building2,
      specs: {
        power: "6W - 36W",
        lumens: "600 - 3600 lm",
        colors: "RGB + White",
        lifespan: "50,000 hours",
      },
    },
    {
      id: 7,
      name: "Landscape Lighting",
      category: "outdoor",
      description: "The use of outdoor illumination for private gardens, landscape area or road scapes",
      features: ["Garden Friendly", "Path Lighting", "Accent Features", "Timer Control"],
      image: "/outdoor-street-led-lights-architectural-pathway-li.jpg",
      icon: TreePine,
      specs: {
        power: "3W - 18W",
        lumens: "300 - 1800 lm",
        efficiency: "100 lm/W",
        lifespan: "50,000 hours",
      },
    },
    {
      id: 8,
      name: "Solar Lighting",
      category: "smart",
      description: "Solar lighting are ecological, energy efficient lighting system",
      features: ["Solar Powered", "Battery Backup", "Auto On/Off", "Zero Operating Cost"],
      image: "/smart-connected-iot-led-lighting-control-system.jpg",
      icon: Radio,
      specs: {
        power: "10W - 60W",
        lumens: "1000 - 6000 lm",
        battery: "LiFePO4",
        backup: "3-5 days",
      },
    },
    {
      id: 9,
      name: "High Mast Lighting",
      category: "industrial",
      description: "High mast lighting is a type of site light fixture that is commonly used to illuminate large areas from a very high mounting height for storage",
      features: ["High Mounting", "Large Area Coverage", "Winch Operation", "Maintenance Friendly"],
      image: "/industrial-manufacturing-warehouse-led-high-bay-li.jpg",
      icon: Warehouse,
      specs: {
        power: "200W - 1000W",
        lumens: "26000 - 130000 lm",
        height: "15m - 40m",
        lifespan: "60,000 hours",
      },
    },
    {
      id: 10,
      name: "Smart Sensors",
      category: "smart",
      description: "We don't just think of what is trending at the time, but rather look to the future of the lighting industry",
      features: ["Motion Detection", "Daylight Harvesting", "Wireless Control", "Energy Monitoring"],
      image: "/smart-connected-iot-led-lighting-control-system.jpg",
      icon: Cpu,
      specs: {
        detection: "360° PIR",
        range: "2m - 12m",
        wireless: "Zigbee/WiFi",
        battery: "10 years",
      },
    },
  ]

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory)

  const keyFeatures = [
    {
      icon: Zap,
      title: "Energy Efficiency",
      description: "Up to 80% energy savings compared to traditional lighting",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Durability",
      description: "Built to withstand harsh conditions with IP65+ ratings",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Cpu,
      title: "Smart Controls",
      description: "IoT-enabled lighting with intelligent automation",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Quality Certified",
      description: "International standards compliance and certifications",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <Navigation scrolled={scrolled} activePage="products" />

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
              Professional{" "}
              <span className="text-gradient bg-gradient-to-r from-accent-glow to-accent-warm bg-clip-text text-transparent">
                Lighting Products
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Discover our comprehensive range of energy-efficient LED lighting solutions designed for commercial, industrial, and outdoor applications.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="bg-accent-glow hover:bg-accent-glow/90 text-white px-10 py-6 text-lg shadow-xl">
                  Browse Catalog
                  <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="outline" className="border-accent-glow px-10 py-6 text-lg hover:bg-accent-subtle">
                  Technical Specs
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

      {/* Key Features */}
      <section ref={featuresRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Why Choose Our Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Advanced technology meets superior design in every lighting solution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-border relative overflow-hidden group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <div className="relative z-10 space-y-4">
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className="h-7 w-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {productCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-accent-glow text-white shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-accent-subtle hover:text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={productsRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card border-border overflow-hidden">
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-accent-subtle to-muted">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    >
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-background/90 text-foreground capitalize">{product.category}</Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <motion.div 
                          className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center group-hover:bg-accent-glow group-hover:scale-110 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <product.icon className="h-6 w-6 text-accent-glow group-hover:text-white transition-colors" />
                        </motion.div>
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-sm">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-border">
                      <h4 className="font-medium text-sm">Specifications:</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {Object.entries(product.specs).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-muted-foreground capitalize">{key}:</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                        <Button
                          size="sm"
                          className="w-full bg-accent-glow hover:bg-accent-glow/90 text-white"
                        >
                          Get Quote
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full hover:bg-accent-subtle"
                        >
                          Learn More
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
              Need Custom Lighting Solutions?
            </h2>
            <p className="text-lg md:text-xl opacity-90 text-pretty leading-relaxed">
              Our lighting experts are ready to help you find the perfect solution for your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="secondary" className="bg-white text-accent-glow hover:bg-white/90 px-8">
                  Contact Expert
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
                >
                  Download Catalog
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

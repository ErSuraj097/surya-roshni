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
  Plane,
  ShoppingBag,
  Zap,
  MapPin,
  Calendar,
  Star,
  ChevronRight,
  Search,
  Eye,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Globe,
  Phone,
  Mail,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"

export default function ProjectsPage() {
  const [scrolled, setScrolled] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const heroRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projectCategories = [
    { id: "all", name: "All Projects", count: 12 },
    { id: "commercial", name: "Commercial", count: 4 },
    { id: "industrial", name: "Industrial", count: 3 },
    { id: "infrastructure", name: "Infrastructure", count: 2 },
    { id: "retail", name: "Retail", count: 2 },
    { id: "outdoor", name: "Outdoor", count: 1 },
  ]

  const projects = [
    {
      id: 1,
      title: "Corporate Office Complex",
      category: "commercial",
      location: "Mumbai, Maharashtra",
      year: "2024",
      client: "Tech Corp India",
      description: "Complete LED lighting transformation for a 50-floor corporate complex with smart controls and energy monitoring systems.",
      image: "/modern-corporate-office-led-lighting-interior-glas.jpg",
      features: ["Smart Controls", "Energy Monitoring", "Daylight Harvesting", "Emergency Lighting"],
      stats: {
        area: "2.5M sq ft",
        fixtures: "15,000+",
        savings: "70%",
        investment: "₹12 Cr",
      },
      icon: Building2,
      status: "Completed",
      rating: 5,
    },
    {
      id: 2,
      title: "International Airport Terminal",
      category: "infrastructure",
      location: "Delhi, NCR",
      year: "2023",
      client: "Airport Authority of India",
      description: "High-performance LED lighting solution for airport terminal with 24/7 operations and stringent safety requirements.",
      image: "/airport-terminal-led-lighting-modern-architecture-.jpg",
      features: ["24/7 Operation", "Safety Compliance", "High CRI", "Maintenance-Free"],
      stats: {
        area: "5M sq ft",
        fixtures: "25,000+",
        savings: "65%",
        investment: "₹25 Cr",
      },
      icon: Plane,
      status: "Completed",
      rating: 5,
    },
    {
      id: 3,
      title: "Sports Stadium Complex",
      category: "outdoor",
      location: "Bangalore, Karnataka",
      year: "2024",
      client: "Sports Authority of Karnataka",
      description: "Professional sports lighting with broadcast-quality illumination for international cricket and football matches.",
      image: "/sports-stadium-led-floodlights-night-football-aren.jpg",
      features: ["Broadcast Quality", "Anti-Glare", "Instant On/Off", "Weather Resistant"],
      stats: {
        area: "15 acres",
        fixtures: "500+",
        lumens: "2000 lux",
        investment: "₹18 Cr",
      },
      icon: Zap,
      status: "Completed",
      rating: 5,
    },
    {
      id: 4,
      title: "Manufacturing Facility",
      category: "industrial",
      location: "Pune, Maharashtra",
      year: "2023",
      client: "Auto Components Ltd",
      description: "Industrial high-bay LED lighting for automotive manufacturing with precision task lighting and safety compliance.",
      image: "/industrial-manufacturing-warehouse-led-high-bay-li.jpg",
      features: ["High Bay Design", "Precision Lighting", "Safety Compliance", "Vibration Resistant"],
      stats: {
        area: "800K sq ft",
        fixtures: "3,000+",
        savings: "75%",
        investment: "₹8 Cr",
      },
      icon: Factory,
      status: "Completed",
      rating: 5,
    },
    {
      id: 5,
      title: "Premium Shopping Mall",
      category: "retail",
      location: "Hyderabad, Telangana",
      year: "2024",
      client: "Retail Spaces Pvt Ltd",
      description: "Comprehensive retail lighting solution with accent lighting, track systems, and dynamic color-changing features.",
      image: "/shopping-mall-led-retail-lighting-modern-interior-.jpg",
      features: ["Accent Lighting", "Track Systems", "Color Changing", "High CRI"],
      stats: {
        area: "1.2M sq ft",
        fixtures: "8,000+",
        savings: "68%",
        investment: "₹15 Cr",
      },
      icon: ShoppingBag,
      status: "Completed",
      rating: 5,
    },
    {
      id: 6,
      title: "Smart City Street Lighting",
      category: "infrastructure",
      location: "Ahmedabad, Gujarat",
      year: "2023",
      client: "Ahmedabad Municipal Corporation",
      description: "Smart street lighting project with IoT sensors, adaptive controls, and remote monitoring for 500+ streets.",
      image: "/smart-city-led-street-lights-night-urban-road-ligh.jpg",
      features: ["IoT Sensors", "Adaptive Controls", "Remote Monitoring", "Energy Efficient"],
      stats: {
        streets: "500+",
        fixtures: "12,000+",
        savings: "80%",
        investment: "₹22 Cr",
      },
      icon: Globe,
      status: "Completed",
      rating: 5,
    },
    {
      id: 7,
      title: "Warehouse Distribution Center",
      category: "industrial",
      location: "Chennai, Tamil Nadu",
      year: "2024",
      client: "Logistics Solutions India",
      description: "High-efficiency warehouse lighting with motion sensors and automated controls for 24/7 operations.",
      image: "/industrial-high-bay-led-warehouse-factory-lighting.jpg",
      features: ["Motion Sensors", "Automated Controls", "High Efficiency", "24/7 Operations"],
      stats: {
        area: "1.5M sq ft",
        fixtures: "5,000+",
        savings: "72%",
        investment: "₹10 Cr",
      },
      icon: Factory,
      status: "Ongoing",
      rating: 4,
    },
    {
      id: 8,
      title: "Premium Office Towers",
      category: "commercial",
      location: "Gurgaon, Haryana",
      year: "2024",
      client: "Corporate Realty Group",
      description: "Luxury office lighting with circadian rhythm support and wellness-focused illumination design.",
      image: "/modern-office-led-panel-lights-ceiling-commercial-.jpg",
      features: ["Circadian Lighting", "Wellness Design", "Premium Quality", "Smart Integration"],
      stats: {
        area: "3M sq ft",
        fixtures: "18,000+",
        savings: "69%",
        investment: "₹20 Cr",
      },
      icon: Building2,
      status: "Ongoing",
      rating: 4,
    },
  ]

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === "all" || project.category === activeFilter
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const projectStats = [
    { value: "500+", label: "Projects Completed", icon: CheckCircle },
    { value: "50+", label: "Cities Covered", icon: MapPin },
    { value: "98%", label: "Client Satisfaction", icon: Star },
    { value: "₹500+ Cr", label: "Project Value", icon: TrendingUp },
  ]

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <Navigation scrolled={scrolled} activePage="projects" />

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
              Lighting The World
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Our{" "}
              <span className="text-gradient bg-gradient-to-r from-accent-glow to-accent-warm bg-clip-text text-transparent">
                Project Portfolio
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Discover our prestigious projects across architectural, infrastructure, and commercial spaces that showcase our lighting excellence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="bg-accent-glow hover:bg-accent-glow/90 text-white px-10 py-6 text-lg shadow-xl">
                  View All Projects
                  <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="outline" className="border-accent-glow px-10 py-6 text-lg hover:bg-accent-subtle">
                  Case Studies
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

      {/* Project Stats */}
      <section ref={statsRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <motion.div 
                  className="w-16 h-16 mx-auto rounded-xl bg-accent-subtle flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="h-8 w-8 text-accent-glow" />
                </motion.div>
                <div className="text-2xl md:text-3xl font-bold text-accent-glow">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {projectCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category.id
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

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-glow focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
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
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className={`${
                        project.status === "Completed" 
                          ? "bg-green-500/90 text-white" 
                          : "bg-yellow-500/90 text-white"
                      }`}>
                        {project.status}
                      </Badge>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-background/90 text-foreground capitalize">{project.category}</Badge>
                    </div>

                    {/* Rating */}
                    <div className="absolute bottom-4 right-4 flex gap-1">
                      {Array.from({ length: project.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <motion.div 
                          className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center group-hover:bg-accent-glow group-hover:scale-110 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <project.icon className="h-5 w-5 text-accent-glow group-hover:text-white transition-colors" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold group-hover:text-accent-glow transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{project.client}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {project.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {project.year}
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {project.features.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="space-y-3 pt-4 border-t border-border">
                      <h4 className="font-medium text-sm">Project Stats:</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {Object.entries(project.stats).slice(0, 4).map(([key, value]) => (
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
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          size="sm"
                          variant="outline"
                          className="hover:bg-accent-subtle"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center mb-6">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl opacity-90 text-pretty leading-relaxed">
              Let our expert team help you create a lighting solution that transforms your space and exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="secondary" className="bg-white text-accent-glow hover:bg-white/90 px-8">
                  Start Your Project
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
                >
                  Download Portfolio
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

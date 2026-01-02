"use client"

import { useState, useEffect, useRef, Suspense } from "react"
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
  Award,
  Users,
  Shield,
  TrendingUp,
  ChevronRight,
  Star,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Cpu,
  Globe,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion, useInView, useAnimation, Variants } from "framer-motion"
import dynamic from "next/dynamic"
import { AIChatWidget } from "@/components/ai-chat-widget"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"


// import { Button } from "@/components/ui/button";
// import { ChevronRight } from "lucide-react";

const slides = [
  {
    badge: "Lighting Every City, Every Home",
    heading: "Illuminating India's Bright Future",
    paragraph: "Surya Roshni is a trusted leader in lighting solutions, delivering excellence through LED innovation and smart lighting systems."
  },
  {
    badge: "Innovation in Every Corner",
    heading: "Smart LED & Architectural Lighting",
    paragraph: "Transforming spaces with cutting-edge technology and energy-efficient solutions for homes, offices, and public areas."
  },
  {
    badge: "Lighting Excellence",
    heading: "Bright Ideas for Every Space",
    paragraph: "From LED innovations to smart lighting systems, we ensure brilliance and reliability in every installation."
  }
];


const ThreeDScene = dynamic(() => import("@/components/three-d-scene").then((mod) => ({ default: mod.ThreeDScene })), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-accent-glow/20 to-accent-warm/20" />
  ),
})

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  const heroRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const threeDRef = useRef<HTMLDivElement>(null)

  const controls = useAnimation()
  const isInView = useInView(productsRef, { once: true, margin: "-100px" })

  // Enhanced animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -20, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const heroVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  const zoomVariants: Variants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  }

  const slideLeftVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  // Navigation menu structure
  const navigationMenus = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/about" },
      { name: "Leadership", href: "/about" },
      { name: "Careers", href: "/about" },
    ],
    products: [
      { name: "Commercial Lighting", href: "/products" },
      { name: "Industrial Lighting", href: "/products" },
      { name: "Smart & IoT", href: "/products" },
      { name: "Outdoor Lighting", href: "/products" },
    ],
    solutions: [
      { name: "Indoor Solutions", href: "/solutions" },
      { name: "Outdoor Solutions", href: "/solutions" },
      { name: "Smart Solutions", href: "/solutions" },
      { name: "Custom Projects", href: "/solutions" },
    ],
  }

  const products = [
    {
      name: "Commercial Lighting",
      icon: Building2,
      desc: "Professional lighting solutions for offices and commercial spaces",
      image: "/modern-office-led-panel-lights-ceiling-commercial-.jpg",
      href: "/products",
    },
    {
      name: "Industrial Solutions",
      icon: Factory,
      desc: "Heavy-duty lighting for manufacturing and industrial facilities",
      image: "/industrial-high-bay-led-warehouse-factory-lighting.jpg",
      href: "/products",
    },
    {
      name: "Smart & Connected",
      icon: Zap,
      desc: "Heavy-duty lighting for manufacturing and industrial facilities",
      image: "/smart-connected-iot-led-lighting-control-system.jpg",
      href: "/solutions",
    },
    {
      name: "Outdoor Lighting",
      icon: Sun,
      desc: "Weather-resistant solutions for streets and outdoor areas",
      image: "/outdoor-street-led-lights-architectural-pathway-li.jpg",
      href: "/products",
    },
  ]

  const features = [
    { icon: Award, title: "Premium Quality", desc: "Industry-leading standards" },
    { icon: Zap, title: "Energy Efficient", desc: "Reduce consumption by 70%" },
    { icon: Shield, title: "Certified Products", desc: "International compliance" },
    { icon: TrendingUp, title: "Innovation First", desc: "Cutting-edge technology" },
  ]

  const stats = [
    { value: "50,000+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Years Experience" },
    { value: "500+", label: "Enterprise Clients" },
  ]

  const testimonials = [
    {
      text: "Surya Roshni has completely transformed our workspace with cutting-edge, energy-efficient lighting systems. Their expertise and professionalism are truly impressive.",
      author: "Rajesh Kumar",
      position: "Facility Manager, Tech Corp",
      rating: 5,
    },
    {
      text: "We are highly impressed with the excellent service provided. Their prompt response and commitment to quality has left a positive impression on us.",
      author: "Priya Sharma",
      position: "Project Director, BuildMax",
      rating: 5,
    },
    {
      text: "The quality of sales and service is outstanding. Their team's dedication to meeting our needs with professionalism is truly commendable.",
      author: "Amit Patel",
      position: "Operations Head, IndusLight",
      rating: 5,
    },
  ]

  const projectImages = [
    {
      title: "Ahmedabad Airport",
      category: "Ahmedabad Airport",
      location: "Ahmedabad Airport",
      image: "/36_20250528163036011.jpg",
    },
    {
      title: "Mahalok Temple ",
      category: "Mahalok Temple",
      location: "Mahalok Temple",
      image: "/43_20250528163321271.jpeg",
    },
    {
      title: "Atal Setu Bridge",
      category: "Atal Setu Bridge",
      location: "Atal Setu Bridge",
      image: "/46_20250528163401058.jpg",
    },
    {
      title: "Shri Sanwariya Seth Temple",
      category: "Shri Sanwariya Seth Temple",
      location: "Shri Sanwariya Seth Temple",
      image: "/sawalia.jpeg",
    },
    {
      title: "Bharat Darshan Park",
      category: "Bharat Darshan Park",
      location: "Bharat Darshan Park",
      image: "/Bharat Darshan Park.jpg",
    },
    {
      title: "Shri Kedarnath Temple",
      category: "Shri Kedarnath Temple",
      location: "Shri Kedarnath Temple",
      image: "/Kedarnath.jpg",
    },
  ]

  const partners = ["Tata Group", "Reliance", "L&T", "Wipro", "Mahindra", "Adani", "JSW", "Godrej"]

  const aiFeatures = [
    {
      icon: Sparkles,
      title: "AI-Powered Design",
      desc: "Intelligent lighting recommendations based on your space",
      color: "from-accent-glow to-accent-warm",
    },
    {
      icon: Cpu,
      title: "Smart Automation",
      desc: "Adaptive lighting that learns your preferences",
      color: "from-primary to-secondary",
    },
    {
      icon: Globe,
      title: "IoT Integration",
      desc: "Connected ecosystem for seamless control",
      color: "from-secondary to-accent-glow",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // 4000ms = 4 seconds
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  const badgeVariants = { hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1 } };
  const headingVariants = { hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 } };
  const paragraphVariants = { hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1 } };
  const buttonVariants = { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <Navigation scrolled={scrolled} activePage="home" />

      {/* Hero Section with Background Video */}
<motion.section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video autoPlay loop muted playsInline preload="auto" className="w-full h-full object-cover">
          <source src="/hero2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/60 to-accent-subtle/50" />
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-10" />

      <div className="container mx-auto px-4 relative z-20">
        <motion.div className="hero-content mt-20 max-w-4xl mx-auto text-center space-y-8">
          
          <motion.div
            key={currentSlide + "-badge"}
            initial="hidden"
            animate="visible"
            variants={badgeVariants}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm px-6 py-3 border-0 bg-gradient-to-r from-primary to-accent-glow text-white shadow-lg">
              {slide.badge}
            </span>
          </motion.div>

          <motion.h1
            key={currentSlide + "-heading"}
            initial="hidden"
            animate="visible"
            variants={headingVariants}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl text-red-700 md:text-6xl lg:text-7xl font-bold text-balance leading-tight"
          >
            {slide.heading}
          </motion.h1>

          <motion.p
            key={currentSlide + "-paragraph"}
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground text-shadow-amber-200 shadow-2xl font-bold max-w-2xl mx-auto text-pretty leading-relaxed"
          >
            {slide.paragraph}
          </motion.p>

          <motion.div
            key={currentSlide + "-buttons"}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <Button size="lg" className="bg-accent-glow hover:bg-accent-glow/90 px-10 py-6 text-lg group shadow-xl">
              Explore Products
              <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-accent-glow px-10 py-6 text-lg hover:bg-accent-subtle">
              View Projects
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>


      {/* Stats Section */}
      <motion.section 
        ref={statsRef} 
        className="py-16 bg-muted/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="stat-card text-center space-y-2"
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-accent-glow"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Products Section */}
      <section id="products" ref={productsRef} className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div className="text-center space-y-4 mb-16" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Our Lighting Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Innovative lights for inspired living across all application areas
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group cursor-pointer"
              >
                <Card className="product-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card border-border overflow-hidden">
                  <motion.div 
                    className="relative h-48 overflow-hidden bg-gradient-to-br from-accent-subtle to-muted"
                    variants={zoomVariants}
                    whileHover="hover"
                  >
                    <motion.img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </motion.div>
                  <CardContent className="p-6 space-y-4">
                    <motion.div 
                      className="w-16 h-16 rounded-xl bg-accent-subtle flex items-center justify-center group-hover:bg-accent-glow group-hover:scale-110 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <product.icon className="h-8 w-8 text-accent-glow group-hover:text-white transition-colors" />
                    </motion.div>
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
                    <motion.div
                      whileHover={{ x: 5 }}
                    >
                      <Link
                        href={product.href}
                        className="inline-flex items-center font-medium text-accent-glow hover:text-accent-warm transition-colors"
                      >
                        Learn More
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        ref={aboutRef} 
        className="py-20 md:py-32 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="about-content space-y-6" variants={itemVariants}>
              <Badge variant="outline" className="text-sm px-4 py-2 border-accent-glow text-accent-glow">
                About Surya Roshni
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-balance leading-tight">
                Leading the Way in Professional Lighting
              </h2>
              <p className="text-lg  justify text-justify text-muted-foreground leading-relaxed">
                With over 50 years of experience, Surya Roshni Professional Lighting delivers tailored, technology-driven
                solutions that redefine lighting standards excellence. Our expert team, backed by in-house
                manufacturing, excels in creating innovative LED lighting products and smart lighting systems that are
                energy-efficient and adaptable.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through our vision, 'Light is our life', we understand our responsibility to get more light with fewer
                resources. We strive to reduce environmental impact in production and product operations while adhering
                to international sustainability standards.
              </p>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Link href="/about">
                  <Button className="bg-accent-glow hover:bg-accent-glow/90 text-white group">
                    Discover More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-6" variants={containerVariants}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                  className="feature-card p-6 hover:shadow-lg transition-all duration-500 bg-card border-border"
                >
                  <div className="space-y-3">
                    <motion.div 
                      className="w-12 h-12 rounded-lg bg-accent-subtle flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="h-6 w-6 text-accent-glow" />
                    </motion.div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section 
        id="projects" 
        ref={projectsRef} 
        className="py-20 md:py-32"
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center space-y-4 mb-16" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Lighting The World</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover our prestigious projects across architectural, infrastructure, and commercial spaces
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projectImages.map((project, index) => (
              <motion.div
                key={index}
                variants={slideLeftVariants}
                className="group cursor-pointer"
              >
                <Card className="project-card overflow-hidden hover:shadow-2xl transition-all duration-500 bg-card border-border">
                  <motion.div 
                    className="aspect-video relative overflow-hidden"
                    variants={zoomVariants}
                    whileHover="hover"
                  >
                    <motion.img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-background/90 text-foreground mb-2">{project.category}</Badge>
                    </div>
                  </motion.div>
                  <CardContent className="p-6 space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-accent-glow transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="text-center mt-12">
            <Link href="/projects">
              <Button size="lg" className="bg-accent-glow hover:bg-accent-glow/90 text-white">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        className="py-20  md:py-32 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center space-y-4 mb-16" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-7xl mx-auto text-pretty">
              Transforming workspaces with innovation and quality
            </p>
          </motion.div>

          <motion.div 
            className="max-w-7xl mx-auto"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 md:p-12 bg-card border-border">
              <motion.div 
                className="space-y-6"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    >
                      <Star className="h-5 w-5 fill-accent-warm text-accent-warm" />
                    </motion.div>
                  ))}
                </div>
                <motion.p 
                  className="text-lg md:text-xl leading-relaxed text-muted-foreground italic"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  "{testimonials[activeTestimonial].text}"
                </motion.p>
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-accent-subtle flex items-center justify-center"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Users className="h-6 w-6 text-accent-glow" />
                  </motion.div>
                  <div>
                    <div className="font-semibold">{testimonials[activeTestimonial].author}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[activeTestimonial].position}</div>
                  </div>
                </div>
              </motion.div>
            </Card>

            <motion.div className="flex justify-center gap-2 mt-8" initial="hidden" whileInView="visible" variants={containerVariants}>
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeTestimonial ? "bg-accent-glow w-8" : "bg-muted-foreground/30"
                  }`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.5 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section 
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center space-y-4 mb-12" initial={{ y: 20 }} whileInView={{ y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl md:text-3xl font-bold">Trusted By Industry Leaders</h2>
          </motion.div>
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={slideLeftVariants}
                className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {partner}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 md:py-32 bg-gradient-to-br from-accent-glow to-accent-warm text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center space-y-8"
            variants={heroVariants}
            initial="hidden"
            whileInView="visible"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-balance leading-tight">
              Transform Your Space With Professional Lighting
            </h2>
            <p className="text-lg md:text-xl opacity-90 text-pretty leading-relaxed">
              Get in touch with our lighting experts to discuss your project requirements and discover how we can
              illuminate your vision.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.02 }}>
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="bg-white text-accent-glow hover:bg-white/90 px-8">
                    Request Consultation
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
                >
                  Download Catalog
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <AIChatWidget />
    </div>
  )
}


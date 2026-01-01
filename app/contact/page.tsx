"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  Building,
  MessageSquare,
  ChevronRight,
  CheckCircle,
  HeadphonesIcon,
  FileText,
  Calendar,
  Zap,
  Shield,
  Award,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
// import { Footer } from "react-day-picker"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    projectType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
      projectType: "",
    })
    setIsSubmitting(false)
    
    // Show success message
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our experts",
      contact: "1800-102-5657",
      subtext: "Toll Free Number",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your requirements",
      contact: "consumercare@surya.in",
      subtext: "Response within 24 hours",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant support",
      contact: "Chat Now",
      subtext: "Available 9 AM - 6 PM",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a consultation",
      contact: "Book Now",
      subtext: "Free consultation",
      color: "from-orange-500 to-red-500",
    },
  ]

  const offices = [
    {
      city: "New Delhi",
      type: "Corporate Office",
      address: "Padma Tower - 1, Rajendra Place, New Delhi – 110008",
      phone: "+91-11-47108000",
      email: "consumercare@surya.in",
      isHeadquarters: true,
    },
    {
      city: "Mumbai",
      type: "Regional Office",
      address: "Business Hub, Andheri East, Mumbai – 400069",
      phone: "+91-22-28234567",
      email: "mumbai@surya.in",
      isHeadquarters: false,
    },
    {
      city: "Bangalore",
      type: "Regional Office",
      address: "Tech Park, Electronic City, Bangalore – 560100",
      phone: "+91-80-41234567",
      email: "bangalore@surya.in",
      isHeadquarters: false,
    },
    {
      city: "Chennai",
      type: "Regional Office",
      address: "IT Corridor, OMR, Chennai – 600096",
      phone: "+91-44-42345678",
      email: "chennai@surya.in",
      isHeadquarters: false,
    },
  ]

  const projectTypes = [
    "Commercial Lighting",
    "Industrial Lighting",
    "Retail Lighting",
    "Outdoor Lighting",
    "Smart Lighting",
    "Architectural Lighting",
    "Sports Lighting",
    "Solar Lighting",
    "Other",
  ]

  const supportFeatures = [
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance",
    },
    {
      icon: Zap,
      title: "Quick Response",
      description: "Response within 2 hours for urgent issues",
    },
    {
      icon: Shield,
      title: "Warranty Support",
      description: "Comprehensive warranty coverage",
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Certified lighting professionals",
    },
  ]

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <Navigation scrolled={scrolled} activePage="contact" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-accent-subtle/20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <Badge className="text-sm px-6 py-3 border-0 bg-gradient-to-r from-primary to-accent-glow text-white shadow-lg">
              Get In Touch
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Let's Illuminate Your{" "}
              <span className="text-gradient bg-gradient-to-r from-accent-glow to-accent-warm bg-clip-text text-transparent">
                Vision Together
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Ready to transform your space with professional lighting? Our experts are here to help you every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="bg-accent-glow hover:bg-accent-glow/90 text-white px-10 py-6 text-lg shadow-xl">
                  Start Your Project
                  <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="outline" className="border-accent-glow px-10 py-6 text-lg hover:bg-accent-subtle">
                  Schedule Call
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

      {/* Contact Methods */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-balance">How Can We Help?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choose the best way to reach us and get the support you need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-border text-center relative overflow-hidden group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <div className="relative z-10 space-y-4">
                    <motion.div
                      className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <method.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold">{method.title}</h3>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                    <div className="space-y-1">
                      <p className="font-medium text-accent-glow">{method.contact}</p>
                      <p className="text-xs text-muted-foreground">{method.subtext}</p>
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-accent-glow hover:bg-accent-glow/90 text-white"
                    >
                      Contact Now
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">

        <div className="flex flex-row justify-center">  
          <div className="ml-20  w-[50vh]">

              <motion.div 
              className="text-left space-y-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-balance">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Fill out the form below and our team will get back to you within 24 hours
              </p>
            </motion.div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi quia, repellat a rerum qui accusantium. Neque, magni tempora error ex hic nemo ea, similique praesentium totam, culpa sunt at delectus?

          </div>
          
          
          
          <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
          

            <Card className="p-8 md:p-12 bg-card border-border shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-glow focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </motion.div>

                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-glow focus:border-transparent transition-all"
                      placeholder="Enter your email address"
                    />
                  </motion.div>
                </div>

                {/* <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    <label htmlFor="company" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-glow focus:border-transparent transition-all"
                      placeholder="Enter your company name"
                    />
                  </motion.div>

                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    <label htmlFor="phone" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-glow focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </motion.div>
                </div> */}

                <div className="grid md:grid-cols-2 gap-6">
                <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    <label htmlFor="phone" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-glow focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </motion.div>

                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <label htmlFor="subject" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-glow focus:border-transparent transition-all"
                      placeholder="Enter message subject"
                    />
                  </motion.div>
                </div>

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full h-16 px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-glow focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </motion.div>

                <motion.div 
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-accent-glow hover:bg-accent-glow/90 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Card>
          </div>
        </div>
        
        </div>
      
      </section>

      {/* Support Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Why Choose Our Support?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We're committed to providing exceptional service and support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-border text-center">
                  <motion.div
                    className="w-16 h-16 mx-auto rounded-xl bg-accent-subtle flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="h-8 w-8 text-accent-glow" />
                  </motion.div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Our Offices</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Visit us at any of our locations across India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className={`p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-border relative overflow-hidden ${
                  office.isHeadquarters ? "ring-2 ring-accent-glow" : ""
                }`}>
                  {office.isHeadquarters && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-accent-glow text-white">HQ</Badge>
                    </div>
                  )}
                  
                  <motion.div 
                    className="space-y-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{office.city}</h3>
                      <p className="text-sm text-accent-glow font-medium">{office.type}</p>
                    </div>
                    
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 flex-shrink-0" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 flex-shrink-0" />
                        <span>{office.email}</span>
                      </div>
                    </div>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full hover:bg-accent-subtle"
                    >
                      Get Directions
                    </Button>
                  </motion.div>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl opacity-90 text-pretty leading-relaxed">
              Don't wait - reach out to us today and let's discuss how we can illuminate your next project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="secondary" className="bg-white text-accent-glow hover:bg-white/90 px-8">
                  Call Now: 1800-102-5657
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
                >
                  Schedule Consultation
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      {/* <footer className="bg-muted/50 py-12 md:py-16 border-t border-border">
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
      </footer> */}
    </div>
  )
}

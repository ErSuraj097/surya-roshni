"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Lightbulb,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface FooterProps {
  variant?: "default" | "minimal" | "with-newsletter"
  className?: string
}

// Footer link configurations
const PRODUCT_LINKS = [
  { name: "LED Lighting", href: "/products/led-lighting" },
  { name: "Commercial Lighting", href: "/products/commercial" },
  { name: "Industrial Lighting", href: "/products/industrial" },
  { name: "Street Lighting", href: "/products/street" },
  { name: "Home Lighting", href: "/products/home" },
  { name: "Decorative Lighting", href: "/products/decorative" },
]

const COMPANY_LINKS = [
  { name: "About Us", href: "/about" },
  { name: "Our Story", href: "/company/story" },
  { name: "Leadership", href: "/company/leadership" },
  { name: "Careers", href: "/company/careers" },
  { name: "CSR", href: "/company/csr" },
  { name: "Projects", href: "/projects" },
]

const SOLUTIONS_LINKS = [
  { name: "Smart Lighting", href: "/solutions/smart" },
  { name: "Energy Management", href: "/solutions/energy" },
  { name: "Automation Systems", href: "/solutions/automation" },
  { name: "Consulting Services", href: "/solutions/consulting" },
  { name: "Consulting Services", href: "/solutions/consulting" },
  { name: "Consulting Services", href: "/solutions/consulting" },
]

const APPLICATIONS_LINKS = [
  { name: "Offices & Commercial", href: "/applications/commercial" },
  { name: "Industrial & Warehouses", href: "/applications/industrial" },
  { name: "Retail & Hospitality", href: "/applications/retail" },
  { name: "Outdoor & Street", href: "/applications/outdoor" },
  { name: "Healthcare", href: "/applications/healthcare" },
  { name: "Healthcare", href: "/applications/healthcare" },
]

const SOCIAL_LINKS = [
  { icon: Facebook, href: "https://facebook.com/suryaroshni", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/suryaroshni", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/suryaroshni", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/suryaroshni", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/suryaroshni", label: "YouTube" },
]

export function Footer({ variant = "default", className }: FooterProps) {
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      // Implement newsletter subscription
      console.log("Subscribing:", email)
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  // Minimal footer variant (just copyright)
  if (variant === "minimal") {
    return (
      <footer className={cn("bg-muted/30 py-6 border-t border-border", className)}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Surya Roshni Professional Lighting. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className={cn("bg-muted/50 pt-16 md:pt-20 border-t border-border", className)}>
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Link href="/" className="flex items-center gap-2">
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Lightbulb className="h-8 w-8 text-accent-glow" />
                  {mounted && (
                    <motion.div
                      className="absolute inset-0 bg-accent-glow/20 rounded-full blur-lg"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
                <span className="text-xl font-bold">Surya </span> <p className="text-red-900 text-xl font-bold font-sans ">
Roshni
                </p>
              </Link>

              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
Surya Professional Lighting offers a wide range of outdoor architectural lighting products with diverse features, enabling lighting designers, architects, and engineers to meet both customer needs and their creative vision.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-accent-subtle flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent-glow/20 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>

              {/* Newsletter Subscription */}
              {variant === "with-newsletter" && (
                <div className="pt-4">
                  <h4 className="text-sm font-semibold mb-3">Subscribe to our newsletter</h4>
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 bg-background"
                    />
                    <Button
                      type="submit"
                      size="sm"
                      className="bg-accent-glow hover:bg-accent-glow/90 text-white"
                    >
                      {subscribed ? (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                          ✓
                        </motion.div>
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>

          {/* Products Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              {SOLUTIONS_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Applications Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Applications</h3>
            <ul className="space-y-3">
              {APPLICATIONS_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-accent-subtle/30 rounded-xl p-6 mb-12"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="tel:18004251969"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-accent-glow/10 flex items-center justify-center">
                <Phone className="h-5 w-5 text-accent-glow" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Toll Free</div>
                <div className="font-semibold">1800-425-1969</div>
              </div>
            </a>
            <a
              href="mailto:info@suryaroshni.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-accent-glow/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-accent-glow" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Email Us</div>
                <div className="font-semibold">info@suryaroshni.com</div>
              </div>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 rounded-full bg-accent-glow/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-accent-glow" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Headquarters</div>
                <div className="font-semibold">Mumbai, Maharashtra, India</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 pb-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Surya Roshni Professional Lighting. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Use
              </Link>
              <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

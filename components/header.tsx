"use client"

import { useState, useEffect, useRef, ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navigation, NAV_ITEMS } from "./navigation"
import { ChevronDown, ArrowRight, Phone, Mail, MapPin, Clock, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface HeaderProps {
  children?: ReactNode
  showTopBar?: boolean
  showNavigation?: boolean
  transparentOnTop?: boolean
  activePage?: string
  customHero?: ReactNode
  breadcrumbs?: { label: string; href?: string }[]
  title?: string
  subtitle?: string
  backgroundImage?: string
  overlay?: boolean
  variant?: "default" | "landing" | "minimal" | "with-hero"
  className?: string
}

interface TopBarProps {
  variant?: "default" | "compact" | "minimal"
}

export function TopBar({ variant = "default" }: TopBarProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (variant === "minimal") return null

  const contactItems = variant === "compact" 
    ? [
        { icon: Phone, text: "1800-425-1969", href: "tel:18004251969" },
      ]
    : [
        { icon: Phone, text: "1800-425-1969", href: "tel:18004251969" },
        { icon: Mail, text: "info@suryaroshni.com", href: "mailto:info@suryaroshni.com" },
        { icon: MapPin, text: "Mumbai, Maharashtra, India", href: null },
        { icon: Clock, text: "Mon - Sat: 9:00 AM - 6:00 PM", href: null },
      ]

  return (
    <div className={cn(
      "bg-muted/50 border-b border-border",
      variant === "compact" ? "py-1.5 text-xs" : "py-2 text-sm"
    )}>
      <div className="container mx-auto px-4">
        <div className={cn(
          "flex items-center justify-between",
          variant === "compact" ? "flex-row" : "flex-wrap gap-2"
        )}>
          {/* Contact Info */}
          <div className={cn(
            "flex items-center gap-4",
            variant === "compact" ? "gap-3" : "flex-wrap gap-x-6 gap-y-1"
          )}>
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href || undefined}
                className={cn(
                  "flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors",
                  !item.href && "cursor-default"
                )}
                whileHover={{ scale: 1.02 }}
              >
                {mounted && <item.icon className={cn("flex-shrink-0", variant === "compact" ? "h-3 w-3" : "h-4 w-4")} />}
                <span className={variant === "compact" ? "text-xs" : "text-sm"}>{item.text}</span>
              </motion.a>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-4">
            <Link 
              href="/careers" 
              className="text-muted-foreground hover:text-accent-glow transition-colors text-sm"
            >
              Careers
            </Link>
            <Link 
              href="/contact" 
              className="text-muted-foreground hover:text-accent-glow transition-colors text-sm"
            >
              Support
            </Link>
            <Link 
              href="/media" 
              className="text-muted-foreground hover:text-accent-glow transition-colors text-sm"
            >
              Media
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Header({
  children,
  showTopBar = true,
  showNavigation = true,
  transparentOnTop = true,
  activePage,
  customHero,
  breadcrumbs,
  title,
  subtitle,
  backgroundImage,
  overlay = true,
  variant = "default",
  className,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!transparentOnTop) {
      setScrolled(true)
      return
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [transparentOnTop])

  // Determine if header should be transparent
  const isTransparent = transparentOnTop && !scrolled && variant !== "minimal"

  // Get background style for hero sections
  const getHeroBackground = () => {
    if (!backgroundImage) return {}
    
    return {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }
  }

  // Render breadcrumbs
  const renderBreadcrumbs = () => {
    if (!breadcrumbs || breadcrumbs.length === 0) return null

    return (
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
          </li>
          {breadcrumbs.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-muted-foreground">/</span>
              {item.href ? (
                <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    )
  }

  // Variant-specific header styles
  const getHeaderContainerClass = () => {
    switch (variant) {
      case "landing":
        return cn(
          "relative min-h-screen flex flex-col",
          isTransparent ? "bg-transparent" : "bg-background"
        )
      case "with-hero":
        return cn(
          "relative min-h-[60vh] flex flex-col",
          isTransparent ? "bg-transparent" : "bg-background"
        )
      case "minimal":
        return cn("bg-background", className)
      default:
        return cn("bg-background", className)
    }
  }

  // Render custom or default hero
  const renderHero = () => {
    if (customHero) return customHero
    if (variant === "minimal" || !title) return null

    return (
      <div 
        className={cn(
          "relative flex-1 flex items-center justify-center",
          variant === "landing" ? "min-h-screen pt-20" : "pt-24 pb-16"
        )}
        style={getHeroBackground()}
      >
        {/* Overlay */}
        {overlay && backgroundImage && (
          <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/60 to-accent-subtle/50" />
        )}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumbs */}
            {renderBreadcrumbs()}

            {/* Title */}
            <motion.h1 
              className={cn(
                "font-bold text-balance leading-tight",
                variant === "landing" ? "text-4xl md:text-6xl lg:text-7xl" : "text-3xl md:text-5xl"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {title}
              <span className="block bg-gradient-to-r from-accent-glow to-accent-warm bg-clip-text text-transparent">
                Excellence
              </span>
            </motion.h1>

            {/* Subtitle */}
            {subtitle && (
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {subtitle}
              </motion.p>
            )}

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="bg-accent-glow hover:bg-accent-glow/90 text-white px-8">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="outline" className="border-accent-glow px-8">
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className={getHeaderContainerClass()}>
      {/* Top Bar */}
      {showTopBar && variant !== "minimal" && <TopBar />}

      {/* Navigation */}
      {showNavigation && (
        <Navigation 
          scrolled={scrolled} 
          activePage={activePage}
          variant={isTransparent ? "transparent" : "default"}
        />
      )}

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 z-40 lg:hidden"
          >
            <div className="container mx-auto px-4 py-20">
              <button
                className="absolute top-4 right-4 p-2"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <X className="h-6 w-6" />
              </button>
              <nav className="space-y-4">
                {NAV_ITEMS.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <>
                        <button className="text-xl font-medium py-2 flex items-center justify-between w-full">
                          {item.name}
                          <ChevronDown className="h-5 w-5" />
                        </button>
                        <div className="pl-4 space-y-2 mt-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block py-2 text-muted-foreground hover:text-foreground"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        className="text-xl font-medium block py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      {renderHero()}

      {/* Page Content */}
      {children && (
        <div className={cn(
          variant === "landing" ? "" : "bg-background"
        )}>
          {children}
        </div>
      )}
    </div>
  )
}

export default Header

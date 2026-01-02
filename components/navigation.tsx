"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Lightbulb,
  ChevronDown,
  Menu,
  X,
  Search,
  Moon,
  Sun,
  Globe,
  Phone,
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface NavigationProps {
  scrolled?: boolean
  activePage?: string
  theme?: "light" | "dark"
  onThemeChange?: (theme: "light" | "dark") => void
  showSearch?: boolean
  showThemeToggle?: boolean
  showLanguageSwitcher?: boolean
  variant?: "default" | "transparent" | "solid"
}

interface NavItem {
  name: string
  href?: string
  children?: { name: string; href: string; description?: string }[]
  badge?: string
}

export const NAV_ITEMS: NavItem[] = [
  {
    name: "Company",
    children: [
      { name: "About Us", href: "/company/about", description: "Learn about our history and mission" },
      { name: "Our Story", href: "/company/story", description: "The journey of Surya Roshni" },
      { name: "Leadership", href: "/company/leadership", description: "Meet our leadership team" },
      { name: "Careers", href: "/company/careers", description: "Join our growing team" },
      { name: "CSR", href: "/company/csr", description: "Corporate social responsibility" },
    ],
  },
  {
    name: "Products",
    children: [
      { name: "LED Lighting", href: "/products/led-lighting", description: "Energy-efficient LED solutions" },
      { name: "Commercial Lighting", href: "/products/commercial", description: "Professional office lighting" },
      { name: "Industrial Lighting", href: "/products/industrial", description: "Heavy-duty industrial solutions" },
      { name: "Street Lighting", href: "/products/street", description: "Outdoor and street lighting" },
      { name: "Home Lighting", href: "/products/home", description: "Residential lighting solutions" },
      { name: "Decorative Lighting", href: "/products/decorative", description: "Aesthetic lighting designs" },
    ],
  },
  {
    name: "Solutions",
    children: [
      { name: "Smart Lighting", href: "/solutions/smart", description: "IoT-enabled smart systems" },
      { name: "Energy Management", href: "/solutions/energy", description: "Optimize energy consumption" },
      { name: "Automation Systems", href: "/solutions/automation", description: "Automated lighting control" },
      { name: "Consulting Services", href: "/solutions/consulting", description: "Expert lighting consultation" },
    ],
  },
  {
    name: "Applications",
    children: [
      { name: "Offices & Commercial", href: "/applications/commercial", description: "Corporate workspace lighting" },
      { name: "Industrial & Warehouses", href: "/applications/industrial", description: "Industrial facility lighting" },
      { name: "Retail & Hospitality", href: "/applications/retail", description: "Retail and hotel lighting" },
      { name: "Outdoor & Street", href: "/applications/outdoor", description: "Public space lighting" },
      { name: "Healthcare", href: "/applications/healthcare", description: "Hospital and clinic lighting" },
      { name: "Education", href: "/applications/education", description: "School and university lighting" },
    ],
  },
  {
    name: "Projects",
    href: "/projects",
    badge: "New",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Contact",
    href: "/contact",
  },
]

export function Navigation({
  scrolled: externalScrolled,
  activePage,
  theme = "light",
  onThemeChange,
  showSearch = true,
  showThemeToggle = true,
  showLanguageSwitcher = false,
  variant = "default",
}: NavigationProps) {
  const [internalScrolled, setInternalScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // Use external scrolled state if provided, otherwise use internal
  const scrolled = externalScrolled !== undefined ? externalScrolled : internalScrolled

  const dropdownRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)

  // Handle scroll
  useEffect(() => {
    if (externalScrolled !== undefined) return

    const handleScroll = () => {
      setInternalScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [externalScrolled])

  // Handle click outside to close dropdowns
  useEffect(() => {
    setMounted(true)

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(null)
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDropdownOpen(null)
        setSearchOpen(false)
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  // Get navigation link class based on active state
  const getNavLinkClass = useCallback((page: string) => {
    const baseClass = "text-sm font-medium transition-colors duration-200"
    const activeClass = "text-accent-glow"
    const inactiveClass = "text-muted-foreground hover:text-foreground"
    return cn(baseClass, activePage === page ? activeClass : inactiveClass)
  }, [activePage])

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log("Searching for:", searchQuery)
      setSearchOpen(false)
      setSearchQuery("")
    }
  }

  // Get header background class based on variant and scroll state
  const getHeaderClass = () => {
    const baseClass = "fixed top-0 w-full z-50 transition-all duration-300"
    
    if (variant === "transparent") {
      return cn(baseClass, !scrolled ? "bg-transparent" : "bg-background/95 backdrop-blur-md shadow-md")
    }
    
    return cn(
      baseClass,
      scrolled 
        ? "bg-background/95 backdrop-blur-md shadow-md" 
        : "bg-background/80 backdrop-blur-sm"
    )
  }

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeIn" }
    }
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  }

  return (
    <header className={getHeaderClass()}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group"
            aria-label="Surya Roshni Home"
          >
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
          
              
            </motion.div>
            
            <img src="/logo1.svg" alt="" className="w-[60%]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-1" ref={dropdownRef}>
              {NAV_ITEMS.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setDropdownOpen(item.name)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  {item.children ? (
                    <>
                      <button
                        className={cn(
                          "px-4 py-2 flex items-center gap-1 rounded-lg transition-colors",
                          getNavLinkClass(item.name.toLowerCase()),
                          dropdownOpen === item.name && "bg-accent-subtle/50"
                        )}
                        aria-expanded={dropdownOpen === item.name ? "true" : "false"}
                        aria-haspopup="true"
                        aria-label={`${item.name} menu`}
                      >
                        {item.name}
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            dropdownOpen === item.name && "rotate-180"
                          )} 
                        />
                        {item.badge && (
                          <span className="ml-1 text-xs bg-accent-glow text-white px-1.5 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </button>

                      <AnimatePresence>
                        {dropdownOpen === item.name && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute top-full left-0 mt-2 w-72 bg-background border border-border rounded-xl shadow-xl py-3 z-50"
                          >
                            <div className="absolute top-0 left-8 -translate-y-1/2 w-4 h-4 bg-background border-t border-l border-border rotate-45" />
                            <div className="relative space-y-1">
                              {item.children.map((child, index) => (
                                <motion.div
                                  key={child.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                >
                                  <Link
                                    href={child.href}
                                    className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent-subtle/50 transition-all group"
                                  >
                                    <div className="font-medium">{child.name}</div>
                                    {child.description && (
                                      <div className="text-xs text-muted-foreground/70 mt-0.5 group-hover:text-muted-foreground transition-colors">
                                        {child.description}
                                      </div>
                                    )}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className={cn(
                        "px-4 py-2 rounded-lg transition-colors",
                        getNavLinkClass(item.name.toLowerCase()),
                        item.badge && "flex items-center gap-1"
                      )}
                    >
                      {item.name}
                      {item.badge && (
                        <span className="text-xs bg-accent-glow text-white px-1.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search */}
            {showSearch && (
              <div className="relative" ref={searchRef}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent-subtle/50 transition-colors"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </motion.button>

                <AnimatePresence>
                  {searchOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute right-0 top-full mt-2 w-80 bg-background border border-border rounded-xl shadow-xl p-4 z-50"
                    >
                      <form onSubmit={handleSearch} className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type="search"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search products, solutions..."
                          className="w-full pl-10 pr-4 py-2 bg-accent-subtle/30 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent-glow/50"
                          autoFocus
                        />
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Theme Toggle */}
            {showThemeToggle && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onThemeChange?.(theme === "light" ? "dark" : "light")}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent-subtle/50 transition-colors"
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                {mounted && theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.button>
            )}

            {/* Language Switcher */}
            {showLanguageSwitcher && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent-subtle/50 transition-colors"
                aria-label="Switch language"
              >
                <Globe className="h-5 w-5" />
              </motion.button>
            )}

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="sm" 
                className="bg-accent-glow hover:bg-accent-glow/90 text-white shadow-lg shadow-accent-glow/25"
              >
                Get Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent-subtle/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.children ? (
                    <div className="space-y-2">
                      <button
                        className="w-full flex items-center justify-between py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setDropdownOpen(dropdownOpen === item.name ? null : item.name)}
                      >
                        {item.name}
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 transition-transform",
                            dropdownOpen === item.name && "rotate-180"
                          )} 
                        />
                      </button>
                      <AnimatePresence>
                        {dropdownOpen === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1 border-l-2 border-accent-glow/30 ml-2"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => {
                                  setMobileMenuOpen(false)
                                  setDropdownOpen(null)
                                }}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className={cn(
                        "block py-3 text-sm font-medium transition-colors",
                        activePage === item.name.toLowerCase() 
                          ? "text-accent-glow" 
                          : "text-muted-foreground hover:text-foreground"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                      {item.badge && (
                        <span className="ml-2 text-xs bg-accent-glow text-white px-1.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Mobile Actions */}
              <div className="pt-4 mt-4 border-t border-border space-y-3">
                <Button 
                  className="w-full bg-accent-glow hover:bg-accent-glow/90 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <div className="flex items-center justify-center gap-4">
                  {showSearch && (
                    <button
                      className="p-2 text-muted-foreground hover:text-foreground"
                      onClick={() => setSearchOpen(!searchOpen)}
                    >
                      <Search className="h-5 w-5" />
                    </button>
                  )}
                  {showThemeToggle && (
                    <button
                      className="p-2 text-muted-foreground hover:text-foreground"
                      onClick={() => onThemeChange?.(theme === "light" ? "dark" : "light")}
                    >
                      {theme === "dark" ? (
                        <Sun className="h-5 w-5" />
                      ) : (
                        <Moon className="h-5 w-5" />
                      )}
                    </button>
                  )}
                  <a
                    href="tel:18004251969"
                    className="p-2 text-muted-foreground hover:text-foreground"
                  >
                    <Phone className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navigation

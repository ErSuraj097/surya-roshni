"use client"

import { useState, useEffect, useRef } from "react"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  MessageCircle, 
  X, 
  Send, 
  Sparkles, 
  User, 
  Bot, 
  Clock,
  Lightbulb,
  Loader2,
  RefreshCcw,
  Maximize2,
  Check
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const SAMPLE_QUESTIONS = [
  "What types of LED lighting do you offer?",
  "How energy-efficient are your smart bulbs?",
  "Can you recommend lighting for a home office?",
  "What's the warranty on your fixtures?",
  "How do I install recessed lighting?"
]

const STATIC_QA = new Map([
  ["What types of LED lighting do you offer?", "We offer a wide range of LED solutions including recessed lights, track lighting, pendant fixtures, and smart bulbs. All are energy-efficient and dimmable for versatile use."],
  ["How energy-efficient are your smart bulbs?", "Our smart bulbs use up to 80% less energy than traditional bulbs, with an average lifespan of 25,000 hours. They integrate seamlessly with Alexa, Google Home, and Apple HomeKit."],
  ["Can you recommend lighting for a home office?", "For a home office, we recommend our adjustable desk lamps with 4000K daylight LEDs for focus, paired with under-cabinet strips to reduce eye strain."],
  ["What's the warranty on your fixtures?", "All our lighting fixtures come with a 5-year limited warranty covering defects in materials and workmanship. Extended warranties are available."],
  ["How do I install recessed lighting?", "Installation is straightforward: Cut holes in the ceiling per the template, connect wires, and secure the housing. We offer video tutorials and professional installation services."]
])

function getRandomQuestion(usedQuestions: Set<string>): string {
  const available = SAMPLE_QUESTIONS.filter(q => !usedQuestions.has(q))
  return available[Math.floor(Math.random() * available.length)] || SAMPLE_QUESTIONS[0]
}

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [usedQuestions, setUsedQuestions] = useState<Set<string>>(new Set())
  const [currentRandomQuestion, setCurrentRandomQuestion] = useState(getRandomQuestion(new Set()))
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading, append, setMessages } = useChat({
    api: "/api/chat",
  })

  const handleSampleQuestion = (question: string) => {
    const staticAnswer = STATIC_QA.get(question)
    if (staticAnswer) {
      append({
        role: "user",
        content: question,
      }, {
        role: "assistant",
        content: staticAnswer,
      })
    } else {
      append({
        role: "user",
        content: question,
      })
    }
    setUsedQuestions(prev => new Set([...prev, question]))
    setCurrentRandomQuestion(getRandomQuestion(usedQuestions))
  }

  const handleNewChat = () => {
    setMessages([])
    setUsedQuestions(new Set())
    setCurrentRandomQuestion(getRandomQuestion(new Set()))
  }

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].role === "assistant") {
      setIsTyping(false)
    }
  }, [messages])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const formatTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 t0 left-4 right-4 md:left-auto md:right-8 md:w-[620px] lg:w-[650px] max-w-[calc(100vw-2rem)] z-50  "
          >
            <Card className="border-0 overflow-hidden shadow-2xl  bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl">
              {/* Header with gradient */}
              <CardHeader className="bg-gradient-to-r from-[#002877] via-[#1a3a8f] to-[#002877] text-white p-4 relative overflow-hidden">
                {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" /> */}
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-yellow-400/30 blur-lg rounded-full animate-pulse" />
                      <div className="relative bg-white/20 backdrop-blur-sm rounded-xl p-2">
                        <Sparkles className="h-5 w-5 text-yellow-300" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold">Lighting Assistant</h2>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs opacity-90">Online • Ready to help</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {messages.length > 0 && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={handleNewChat}
                        className="h-8 w-8 p-0 text-white/80 hover:bg-white/20 rounded-lg transition-all"
                        title="New Chat"
                      >
                        <RefreshCcw className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setIsOpen(false)}
                      className="h-8 w-8 p-0 text-white/80 hover:bg-white/20 rounded-lg transition-all"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <ScrollArea 
                  ref={scrollRef}
                  className="h-[400px] pr-4 bg-gray-50/50 dark:bg-gray-800/50"
                >
                  <div className="space-y-4 p-4">
                    {messages.length === 0 ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                      >
                        <div className="relative inline-block mb-4">
                          <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
                          <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-4 inline-block">
                            <Lightbulb className="h-10 w-10 text-white" />
                          </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                          How can we light up your space?
                        </h3>
                        <p className="text-sm text-muted-foreground mb-6 max-w-xs mx-auto">
                          Ask about our products, installation, or get personalized recommendations
                        </p>
                        
                        {/* Suggestion Chips */}
                        <div className="space-y-2 max-w-sm mx-auto">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleSampleQuestion(currentRandomQuestion)}
                            className="w-full justify-start text-left h-auto py-2.5 px-4 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all"
                          >
                            <Sparkles className="h-3.5 w-3.5 mr-2 text-blue-500 flex-shrink-0" />
                            <span className="text-xs">{currentRandomQuestion}</span>
                          </Button>
                          
                          <div className="flex flex-wrap gap-2 justify-center pt-2">
                            {SAMPLE_QUESTIONS.slice(0, 3).map((q) => (
                              <Button
                                key={q}
                                variant="secondary"
                                size="sm"
                                onClick={() => handleSampleQuestion(q)}
                                className="text-xs h-8 px-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all border-0"
                              >
                                {q.length > 35 ? `${q.substring(0, 32)}...` : q}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <AnimatePresence mode="popLayout">
                        {messages.map((message, index) => (
                          <motion.div
                            key={message.id}
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.2, delay: index * 0.03 }}
                            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div className={`flex items-end gap-2 max-w-[85%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                              {/* Avatar */}
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                                message.role === "user"
                                  ? "bg-gradient-to-br from-blue-500 to-indigo-600"
                                  : "bg-gradient-to-br from-amber-400 to-orange-500"
                              }`}>
                                {message.role === "user" ? (
                                  <User className="h-4 w-4 text-white" />
                                ) : (
                                  <Bot className="h-4 w-4 text-white" />
                                )}
                              </div>
                              
                              {/* Message Bubble */}
                              <div className={`relative ${
                                message.role === "user"
                                  ? "order-first"
                                  : ""
                              }`}>
                                <div className={`px-4 py-3 shadow-sm ${
                                  message.role === "user"
                                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl rounded-br-md"
                                    : "bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 text-gray-800 dark:text-gray-100 rounded-2xl rounded-bl-md"
                                }`}>
                                  {/* Message Header */}
                                  <div className={`flex items-center gap-1.5 mb-1 ${
                                    message.role === "user" ? "text-white/70" : "text-muted-foreground"
                                  }`}>
                                    <span className="text-xs font-medium">
                                      {message.role === "user" ? "You" : "Assistant"}
                                    </span>
                                    <span className="text-xs opacity-60">•</span>
                                    <span className="text-xs opacity-60">{formatTime()}</span>
                                  </div>
                                  
                                  {/* Message Content */}
                                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                                    {message.content}
                                  </p>
                                </div>
                                
                                {/* Status indicator for user messages */}
                                {message.role === "user" && index === messages.length - 1 && (
                                  <div className="absolute -right-1 -bottom-1 bg-blue-500 rounded-full p-0.5">
                                    <Check className="h-2.5 w-2.5 text-white" />
                                  </div>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    )}
                    
                    {/* Typing Indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="flex items-end gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                          <div className="bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                            <div className="flex gap-1">
                              <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                              <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                              <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="p-4 border-t bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
                  <form onSubmit={handleSubmit} className="relative">
                    <Input
                      value={input}
                      onChange={(e) => {
                        handleInputChange(e)
                        if (e.target.value.length > 0) {
                          setIsTyping(true)
                        }
                      }}
                      placeholder="Ask about lighting solutions..."
                      className="pr-24 pl-4 py-6 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 text-sm rounded-xl transition-all"
                      disabled={isLoading}
                      onFocus={() => messages.length > 0 && setIsTyping(true)}
                    />
                    
                    {/* Character count and send button */}
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                      {input.length > 0 && (
                        <span className="text-xs text-muted-foreground mr-1">
                          {input.length}/500
                        </span>
                      )}
                      <Button
                        type="submit"
                        size="sm"
                        disabled={isLoading || !input.trim()}
                        className="h-9 w-9 p-0 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-md transition-all disabled:opacity-50"
                      >
                        {isLoading ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Send className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </form>
                  
                  {/* Footer text */}
                  {messages.length > 0 && (
                    <p className="text-center text-xs text-muted-foreground mt-3 flex items-center justify-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      AI-powered lighting assistance
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-[#002877] to-[#1a3a8f] text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center z-50 border-2 border-white/20"
        aria-label="Toggle AI Chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, ease: "backOut" }}
            >
              <X className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, ease: "backIn" }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Notification badge */}
        {!isOpen && messages.length > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-[10px] font-bold flex items-center justify-center text-white">
            {messages.length > 9 ? "9+" : messages.length}
          </span>
        )}
      </motion.button>
    </>
  )
}


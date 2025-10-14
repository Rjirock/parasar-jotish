"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Paritosh Narayan",
    role: "Bangalore",
    content:
      "They helped me gain clarity during a difficult time in my life. The astrologer was insightful and compassionate.",
  },
  {
    name: "Subham Shaurya",
    role: "Delhi",
    content:
      "I was skeptical at first, but my reading was surprisingly accurate. I've booked multiple sessions since then.",
  },
  {
    name: "Ashok Kumar",
    role: "Gandhinagar",
    content:
      "The convenience of chatting with an astrologer from home is amazing. He has become my go-to for spiritual guidance.",
  },
  {
    name: "Rajkumar Mehta",
    role: "Puducherry",
    content:
      "They helped me gain clarity during a difficult time in my life. The astrologer was insightful and compassionate.",
  },
  {
    name: "Dr Chandra Shekhar Azad",
    role: "Patna",
    content:
      "I was skeptical at first, but my reading was surprisingly accurate. I've booked multiple sessions since then.",
  },
  {
    name: "Sanjay Sinha",
    role: "Mumbai",
    content:
      "The convenience of chatting with an astrologer from home is amazing. He has become my go-to for spiritual guidance.",
  },
  {
    name: "G Verma",
    role: "Kolkata",
    content:
      "They helped me gain clarity during a difficult time in my life. The astrologer was insightful and compassionate.",
  },
]

export default function HomePageTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // Auto scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from people who have found guidance and clarity through <span className="font-semibold text-orange-600">Dr D Mahto</span>.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg rounded-2xl p-10 md:p-14 border border-gray-100 text-center"
          >
            <p className="text-2xl md:text-3xl font-medium italic text-gray-700 mb-8 leading-relaxed">
              “{testimonials[activeTestimonial].content}”
            </p>
            <div>
              <h4 className="text-xl md:text-2xl font-semibold text-gray-900">
                {testimonials[activeTestimonial].name}
              </h4>
              <p className="text-lg text-gray-500">{testimonials[activeTestimonial].role}</p>
            </div>
          </motion.div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeTestimonial ? "bg-orange-500 scale-110" : "bg-gray-300"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

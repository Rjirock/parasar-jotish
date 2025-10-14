"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "@mui/icons-material"
import { toast, toastTypes } from "@/components/ui/toaster"

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast("MESSAGE SENT SUCCESSFULLY! WE'LL GET BACK TO YOU SOON.", toastTypes.SUCCESS)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
      toast("FAILED TO SEND MESSAGE. PLEASE TRY AGAIN.", toastTypes.ERROR)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-10">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
              SEND US A MESSAGE
            </h2>
            <p className="text-center text-gray-500 mb-10">
              HAVE QUESTIONS OR FEEDBACK? FILL OUT THE FORM BELOW — WE’D LOVE TO HEAR FROM YOU.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">
                  FULL NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-400 shadow-sm transition uppercase placeholder:uppercase"
                  placeholder="ENTER YOUR FULL NAME"
                  required
                />
              </div>

              {/* EMAIL */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-400 shadow-sm transition uppercase placeholder:uppercase"
                  placeholder="YOU@EXAMPLE.COM"
                  required
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-700">
                  SUBJECT
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-400 shadow-sm transition uppercase"
                  required
                >
                  <option value="">SELECT A SUBJECT</option>
                  <option value="general">GENERAL INQUIRY</option>
                  <option value="technical">TECHNICAL SUPPORT</option>
                  <option value="billing">BILLING QUESTION</option>
                  <option value="astrologer">ASTROLOGER APPLICATION</option>
                  <option value="feedback">FEEDBACK</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-400 shadow-sm transition uppercase placeholder:uppercase"
                  placeholder="WRITE YOUR MESSAGE HERE..."
                  required
                />
              </div>

              {/* SUBMIT */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3.5 font-semibold shadow-md hover:shadow-lg hover:from-indigo-500 hover:to-purple-500 transition-all uppercase"
              >
                {isLoading ? "SENDING..." : "SEND MESSAGE"}
                <Send className="h-5 w-5" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

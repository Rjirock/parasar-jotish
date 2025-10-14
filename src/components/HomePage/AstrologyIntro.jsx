"use client"

import { motion } from "framer-motion"

export default function AstrologyIntro() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-amber-50 text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
          Discover the Power of Astrology
        </h2>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          Astrology isn’t just about predicting the future — it’s about understanding yourself.
          Our experts help you uncover your strengths, overcome challenges, and recognize the
          opportunities written in your birth chart. Whether you’re facing confusion in your
          career, relationships, or personal growth, the universe always has an answer.
        </p>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          With years of experience and authentic Vedic knowledge, our astrologers provide practical,
          positive, and spiritually guided insights. Let the wisdom of the stars illuminate your path
          and bring balance to your life journey.
        </p>
      </motion.div>
    </section>
  )
}

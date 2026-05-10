"use client"

import { motion } from "framer-motion"
import { Email, Phone, LocationOn, Schedule } from "@mui/icons-material"

const contactInfo = [
  {
    icon: <Email className="h-6 w-6" />,
    title: "EMAIL US",
    details: ["MAHTODINESHWAR5@GMAIL.COM"],
    description: "SEND US AN EMAIL ANYTIME",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "CALL US",
    details: ["+91 9934338395"],
    description: "AVAILABLE DURING BUSINESS HOURS",
  },
  {
    icon: <LocationOn className="h-6 w-6" />,
    title: "VISIT US",
    details: [
      "DR. D MAHTO",
      "CO-OPERATIVE COLONY, DIPUGARHA",
      "HAZARIBAGH, JHARKHAND - 825301",
    ],
    description: "COME SAY HELLO AT OUR OFFICE",
  },
  {
    icon: <Schedule className="h-6 w-6" />,
    title: "BUSINESS HOURS",
    details: ["MONDAY - SATURDAY: 6:00 PM - 10:00 PM"],
    description: "SUNDAY: 9:00 AM - 9:00 PM",
  },
]

export default function ContactUsInfo() {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6 uppercase">CONTACT INFORMATION</h2>
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-border uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{info.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground mb-1">
                        {detail}
                      </p>
                    ))}
                    <p className="text-sm text-muted-foreground mt-2">{info.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

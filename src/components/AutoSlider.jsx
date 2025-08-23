// src/components/AutoSlider.jsx
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    title: "Fresh Organic Vegetables",
    description: "Straight from farms to your kitchen",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    title: "Organic Dairy Products",
    description: "Pure, fresh & chemical-free dairy",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    title: "Healthy Organic Fruits",
    description: "Natural sweetness with no chemicals",
  },
]

export default function AutoSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 4000) // Slide every 4s
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[90vh] overflow-hidden shadow-lg">
      <AnimatePresence>
        <motion.img
          key={slides[current].id}
          src={slides[current].image}
          alt={slides[current].title}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-6">
        <motion.h2
          key={slides[current].title}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          {slides[current].title}
        </motion.h2>
        <motion.p
          key={slides[current].description}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-4 text-lg md:text-2xl"
        >
          {slides[current].description}
        </motion.p>
      </div>
    </div>
  )
}

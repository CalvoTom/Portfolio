"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface SkillBarProps {
  name: string
  percentage: number
}

export default function SkillBar({ name, percentage }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-800 font-medium">{name}</span>
        <span className="text-gray-600 text-sm">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-600 rounded-full"
          initial={{ width: 0 }}
          animate={{
            width: isVisible ? `${percentage}%` : 0,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

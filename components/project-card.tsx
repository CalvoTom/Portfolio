"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  id: string
  title: string
  category: string
  description: string
  image: string
  technologies: string[]
}

export default function ProjectCard({ id, title, category, description, image, technologies }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/projects/${id}`}>
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col"
        whileHover={{ y: -5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-600 dark:bg-blue-700 text-white rounded-full mb-2">
              {category}
            </span>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded">
                +{technologies.length - 3}
              </span>
            )}
          </div>
          <div className="flex justify-end">
            <span className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium">
              Voir détails <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

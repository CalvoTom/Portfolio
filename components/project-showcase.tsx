"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Github, ArrowRight } from "lucide-react"
import { projects } from "@/lib/projects"

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(0)
  const [direction, setDirection] = useState(0)
  const constraintsRef = useRef(null)

  const handleNext = () => {
    setDirection(1)
    setActiveProject((prev) => (prev + 1) % projects.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const currentProject = projects[activeProject]

  return (
    <div
      className="relative w-full overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900 rounded-xl"
      role="region"
      aria-label="Carrousel de projets"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
        <div className="grid grid-cols-10 grid-rows-10 w-full h-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white/5"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Project Image */}
          <div
            className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] overflow-hidden rounded-lg"
            aria-hidden="true" // Les images sont décoratives, le contenu important est dans le texte
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeProject}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">
                  <Image src={currentProject.image || "/placeholder.svg"} alt="" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
              aria-label="Projet précédent"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
              aria-label="Projet suivant"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>

            {/* Project indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10" role="tablist">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeProject ? 1 : -1)
                    setActiveProject(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeProject ? "bg-white" : "bg-white/40"
                  }`}
                  aria-selected={index === activeProject}
                  aria-label={`Voir le projet ${project.title}`}
                  role="tab"
                  tabIndex={index === activeProject ? 0 : -1}
                />
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="w-full lg:w-1/2 text-white" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                role="tabpanel"
                aria-labelledby={`project-${currentProject.id}`}
              >
                <h3 id={`project-${currentProject.id}`} className="text-2xl md:text-3xl font-bold mb-3">
                  {currentProject.title}
                </h3>
                <p className="text-lg text-blue-200 mb-4">{currentProject.description}</p>
                <p className="text-gray-300 mb-6">{currentProject.longDescription}</p>

                <div className="flex flex-wrap gap-2 mb-6" aria-label="Technologies utilisées">
                  {currentProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium bg-blue-900/50 text-blue-200 rounded-full border border-blue-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/projects/${currentProject.id}`}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                    aria-label={`Voir plus de détails sur ${currentProject.title}`}
                  >
                    <ArrowRight size={16} aria-hidden="true" />
                    Voir plus de détails
                  </Link>
                  {currentProject.links.live && (
                    <a
                      href={currentProject.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                      aria-label={`Voir le projet ${currentProject.title} en ligne`}
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      Voir le projet
                    </a>
                  )}
                  {currentProject.links.github && (
                    <a
                      href={currentProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-300 hover:bg-blue-900/30 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-900"
                      aria-label={`Voir le code source de ${currentProject.title} sur GitHub`}
                    >
                      <Github size={16} aria-hidden="true" />
                      Code source
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

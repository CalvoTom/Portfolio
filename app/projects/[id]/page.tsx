"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { notFound } from "next/navigation"
import { getProjectById } from "@/lib/projects"
import Navbar from "@/components/navbar"
import { useEffect } from "react"
import SkipToContent from "@/components/skip-to-content"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id)

  if (!project) {
    notFound()
  }

  // Utiliser un effet côté client pour s'assurer que la page commence en haut
  useEffect(() => {
    // Réinitialiser immédiatement la position de défilement
    if (typeof window !== "undefined") {
      window.document.documentElement.scrollTop = 0
      window.document.body.scrollTop = 0 // Pour Safari
    }
  }, [])

  return (
    <>
      <SkipToContent />
      <main id="main-content" className="min-h-screen bg-white">
        <Navbar />

        <div className="pt-24 pb-16 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <Link
              href="/#projects"
              className="inline-flex items-center text-blue-700 hover:underline mb-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
              aria-label="Retour à la liste des projets"
            >
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Retour aux projets
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
                <p className="text-xl text-blue-700 mb-6">{project.description}</p>

                <div className="prose max-w-none mb-8">
                  <p className="text-gray-700">{project.detailedDescription}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8" aria-label="Technologies utilisées">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      aria-label={`Voir le projet ${project.title} en ligne`}
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      Voir le projet
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      aria-label={`Voir le code source de ${project.title} sur GitHub`}
                    >
                      <Github size={16} aria-hidden="true" />
                      Code source
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-8">
                <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`Capture d'écran du projet ${project.title}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Sections */}
        {project.sections && project.sections.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6 md:px-12">
              {project.sections.map((section, index) => (
                <div
                  key={index}
                  className={`mb-16 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex flex-col lg:flex-row gap-8 items-center`}
                >
                  <div className="lg:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4" id={`section-${index}`}>
                      {section.title}
                    </h2>
                    <div className="prose max-w-none">
                      <p className="text-gray-700">{section.content}</p>
                    </div>
                  </div>
                  {section.image && (
                    <div className="lg:w-1/2">
                      <div className="relative h-[250px] md:h-[350px] w-full rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={section.image || "/placeholder.svg"}
                          alt={`Illustration pour ${section.title}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Additional Images */}
        {project.additionalImages && project.additionalImages.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8" id="gallery">
                Galerie
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-labelledby="gallery">
                {project.additionalImages.map((img, index) => (
                  <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`Capture d'écran supplémentaire ${index + 1} du projet ${project.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {project.challenges && (
          <section className="py-16 bg-white" aria-labelledby="challenges-heading">
            <div className="container mx-auto px-6 md:px-12">
              <h2 id="challenges-heading" className="text-2xl font-bold text-gray-900 mb-8">
                Défis et Solutions
              </h2>
              <div className="prose max-w-none">
                <p className="text-gray-700">{project.challenges}</p>
              </div>
            </div>
          </section>
        )}

        {project.results && (
          <section className="py-16 bg-gray-50" aria-labelledby="results-heading">
            <div className="container mx-auto px-6 md:px-12">
              <h2 id="results-heading" className="text-2xl font-bold text-gray-900 mb-8">
                Résultats
              </h2>
              <div className="prose max-w-none">
                <p className="text-gray-700">{project.results}</p>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  )
}

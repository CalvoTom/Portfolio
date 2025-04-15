"use client"

import Image from "next/image"
import { Mail, Phone, Linkedin, Github, Download, Calendar, GraduationCap, Briefcase } from "lucide-react"
import ProjectShowcase from "@/components/project-showcase"
import Navbar from "@/components/navbar"
import SkipToContent from "@/components/skip-to-content"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <>
      <SkipToContent />
      <main id="main-content" className="min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
          <div className="absolute inset-0 z-0 opacity-5" aria-hidden="true">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500 blur-3xl"></div>
          </div>
          <div className="container mx-auto px-6 md:px-12 z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="w-full md:w-1/2 space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
                  Tom <span className="text-blue-600">CALVO</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium text-gray-700">DATA SCIENTIST</h2>
                <p className="text-lg text-gray-600 max-w-lg">
                  Ancien skieur de compétition et sauveteur aquatique, passionné par la data science et à la recherche
                  d'une alternance pour développer mes compétences.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label="Voir mes projets"
                  >
                    Voir mes projets
                  </a>
                  <a
                    href="#parcours"
                    className="px-6 py-3 border-2 border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label="Mon parcours"
                  >
                    Mon parcours
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
                  <Image
                    src="/images/tom-calvo-portrait.png"
                    alt="Portrait de Tom Calvo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#projects" className="text-blue-700 p-2 block" aria-label="Défiler vers la section projets">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50" aria-labelledby="projects-heading">
          <div className="container mx-auto px-6 md:px-12">
            <h2 id="projects-heading" className="text-3xl font-bold text-center mb-16 relative" tabIndex={0}>
              <span className="relative z-10 text-gray-900">PROJETS</span>
              <span
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-700"
                aria-hidden="true"
              ></span>
            </h2>
            <ProjectShowcase />
          </div>
        </section>

        {/* Parcours Section (Combined Experience & Education) */}
        <section id="parcours" className="py-20 bg-white" aria-labelledby="parcours-heading">
          <div className="container mx-auto px-6 md:px-12">
            <h2 id="parcours-heading" className="text-3xl font-bold text-center mb-16 relative" tabIndex={0}>
              <span className="relative z-10 text-gray-900">PARCOURS</span>
              <span
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-700"
                aria-hidden="true"
              ></span>
            </h2>
            <div className="space-y-8 max-w-3xl mx-auto">
              {/* Timeline */}
              <div className="relative border-l-2 border-blue-700 pl-8 space-y-8">
                {/* Data Scientist */}
                <div
                  className="relative focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                  tabIndex={0}
                  role="region"
                  aria-labelledby="job-data-scientist"
                >
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-blue-700" aria-hidden="true"></div>
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="text-blue-700" size={18} aria-hidden="true" />
                      <h3 id="job-data-scientist" className="text-lg font-semibold text-gray-900">
                        Data Scientist
                      </h3>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-blue-700 font-medium">Seenexa</span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="mr-1 h-4 w-4" aria-hidden="true" />
                        <span>2023 - En cours</span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Développement de modèles d'analyse vidéo avec TensorFlow, gestion de flux vidéo et visualisation
                      de données via Unity.
                    </p>
                  </div>
                </div>

                {/* Bachelor */}
                <div
                  className="relative focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                  tabIndex={0}
                  role="region"
                  aria-labelledby="education-bachelor"
                >
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-blue-700" aria-hidden="true"></div>
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap className="text-blue-700" size={18} aria-hidden="true" />
                      <h3 id="education-bachelor" className="text-lg font-semibold text-gray-900">
                        Bachelor Informatique
                      </h3>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-blue-700 font-medium">Lyon Ynov Campus</span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="mr-1 h-4 w-4" aria-hidden="true" />
                        <span>2023 - En cours</span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">Spécialité IA & Data en vue d'un Mastère en Data Science.</p>
                  </div>
                </div>

                {/* Java Developer */}
                <div
                  className="relative focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                  tabIndex={0}
                  role="region"
                  aria-labelledby="job-java-dev"
                >
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-blue-700" aria-hidden="true"></div>
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="text-blue-700" size={18} aria-hidden="true" />
                      <h3 id="job-java-dev" className="text-lg font-semibold text-gray-900">
                        Développeur Java
                      </h3>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-blue-700 font-medium">Endarium</span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="mr-1 h-4 w-4" aria-hidden="true" />
                        <span>2021 - 2023</span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Conception de plugins et gestion de base de données pour serveurs Minecraft.
                    </p>
                  </div>
                </div>

                {/* Baccalauréat */}
                <div
                  className="relative focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                  tabIndex={0}
                  role="region"
                  aria-labelledby="education-bac"
                >
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-blue-700" aria-hidden="true"></div>
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap className="text-blue-700" size={18} aria-hidden="true" />
                      <h3 id="education-bac" className="text-lg font-semibold text-gray-900">
                        Baccalauréat général
                      </h3>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-blue-700 font-medium">Lycée Charles Poncet</span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="mr-1 h-4 w-4" aria-hidden="true" />
                        <span>2019 - 2023</span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Spécialités: Mathématiques, Numérique et sciences informatiques, Mathématique expert. Mention Très
                      Bien.
                    </p>
                  </div>
                </div>

                {/* Sauveteur */}
                <div
                  className="relative focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                  tabIndex={0}
                  role="region"
                  aria-labelledby="job-sauveteur"
                >
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-blue-700" aria-hidden="true"></div>
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="text-blue-700" size={18} aria-hidden="true" />
                      <h3 id="job-sauveteur" className="text-lg font-semibold text-gray-900">
                        Sauveteur aquatique
                      </h3>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-500 text-sm">2021 - 2023</span>
                    </div>
                    <p className="text-gray-700 text-sm">Gestion d'équipe et de matériels.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50" aria-labelledby="contact-heading">
          <div className="container mx-auto px-6 md:px-12">
            <h2 id="contact-heading" className="text-3xl font-bold text-center mb-16 relative" tabIndex={0}>
              <span className="relative z-10 text-gray-900">CONTACT</span>
              <span
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-700"
                aria-hidden="true"
              ></span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Intéressé par mon profil ?</h3>
                <p className="text-lg text-gray-700 mb-8">
                  N'hésitez pas à me contacter pour discuter de vos projets ou opportunités en data science.
                </p>
              </div>

              {/* Contact Form */}
              <ContactForm />

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-700 mt-12">
                <div className="flex items-center gap-2">
                  <Phone className="text-blue-700" size={20} aria-hidden="true" />
                  <span>06 52 93 64 84</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-blue-700" size={20} aria-hidden="true" />
                  <span>tom.calvo74@gmail.com</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
                <a
                  href="https://linkedin.com/in/calvo-tom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border-2 border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Contacter Tom Calvo sur LinkedIn"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                  Me contacter sur LinkedIn
                </a>
                <a
                  href="/documents/CV_Tom_CALVO_2025.pdf"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  aria-label="Télécharger le CV de Tom Calvo"
                  download
                >
                  <Download className="h-5 w-5" aria-hidden="true" />
                  Télécharger mon CV
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-900 text-white" role="contentinfo">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold">
                  Tom <span className="text-blue-400">CALVO</span>
                </h2>
                <p className="text-gray-400">Data Scientist</p>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/calvo-tom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-full"
                  aria-label="LinkedIn de Tom Calvo"
                >
                  <Linkedin size={20} aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/CalvoTom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-full"
                  aria-label="GitHub de Tom Calvo"
                >
                  <Github size={20} aria-hidden="true" />
                </a>
                <a
                  href="mailto:tom.calvo74@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-full"
                  aria-label="Envoyer un email à Tom Calvo"
                >
                  <Mail size={20} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="mt-6 text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Tom Calvo. Tous droits réservés.
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

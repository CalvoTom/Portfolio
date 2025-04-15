"use client"

import type React from "react"
import { useState } from "react"
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    message: "",
    consent: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Réinitialiser les états
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage("")
    
    try {
      // Envoyer les données à l'API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // Analyser la réponse
      const data = await response.json();
      
      // Vérifier si la requête a réussi
      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue lors de l\'envoi du message');
      }
      
      // Succès
      setSubmitStatus("success");
      
      // Réinitialiser le formulaire
      setFormData({
        name: "",
        email: "",
        location: "",
        message: "",
        consent: false,
      });
      
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire:', error);
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'envoi du message');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nom Prénom"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-required="true"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="votre@email.com"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-required="true"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Localisation <span className="text-red-500">*</span>
          </label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-required="true"
            disabled={isSubmitting}
          >
            <option value="" disabled>
              Sélectionnez votre pays
            </option>
            <option value="france">France</option>
            <option value="suisse">Suisse</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message..."
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-required="true"
            disabled={isSubmitting}
          ></textarea>
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              checked={formData.consent}
              onChange={handleCheckboxChange}
              required
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              aria-required="true"
              disabled={isSubmitting}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="consent" className="font-medium text-gray-700">
              J'accepte d'être contacté(e) concernant ma demande <span className="text-red-500">*</span>
            </label>
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Envoi en cours...
            </span>
          ) : (
            <span className="flex items-center">
              <Send className="mr-2 h-5 w-5" aria-hidden="true" />
              Envoyer le message
            </span>
          )}
        </button>
      </div>

      {/* Messages de statut */}
      {submitStatus === "success" && (
        <div className="p-4 bg-green-100 text-green-800 rounded-md" role="alert">
          <p className="font-medium">Message envoyé avec succès !</p>
          <p>Merci pour votre message. Je vous répondrai dans les plus brefs délais.</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-100 text-red-800 rounded-md" role="alert">
          <p className="font-medium">Erreur lors de l'envoi du message</p>
          <p>{errorMessage || "Une erreur s'est produite. Veuillez réessayer plus tard."}</p>
        </div>
      )}
    </form>
  )
}
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Resend } from 'resend';

// Initialiser Resend avec votre clé API
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Récupérer les données du formulaire
    const formData = await request.json();
    const { name, email, location, message, consent } = formData;
    
    // Validation basique
    if (!name || !email || !message || !consent) {
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      );
    }
    
    // Vérifier le format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }
    
    // Préparer le contenu de l'email
    const emailContent = `
      <h2>Nouveau message de votre portfolio</h2>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Localisation:</strong> ${location}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;
    
    // Envoyer l'email avec Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // Utilisez votre domaine vérifié si disponible
      to: 'tom.calvo74@gmail.com', // Votre adresse email
      subject: `Nouveau message de ${name} via votre portfolio`,
      html: emailContent,
      // Vous pouvez aussi ajouter une version texte pour les clients email qui ne supportent pas HTML
      text: `
        Nouveau message de votre portfolio
        
        Nom: ${name}
        Email: ${email}
        Localisation: ${location}
        
        Message:
        ${message}
      `,
    });
    
    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      );
    }
    
    console.log('Email envoyé avec succès:', data);
    
    return NextResponse.json(
      { success: true, message: 'Votre message a été envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de la soumission du formulaire:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors du traitement de votre demande' },
      { status: 500 }
    );
  }
}
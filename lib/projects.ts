export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  detailedDescription?: string
  image: string
  additionalImages?: string[]
  technologies: string[]
  sections?: {
    title: string
    content: string
    image?: string
  }[]
  challenges?: string
  results?: string
  links: {
    live?: string
    github?: string
  }
}

export const projects: Project[] = [
  {
    id: "ai-watchers",
    title: "AI Watchers",
    description: "Analyse de flux vidéo pour optimiser l'agencement des espaces",
    longDescription:
      "Projet qui utilise la vision par ordinateur pour analyser les flux vidéo et optimiser l'agencement et l'efficacité des espaces.",
    detailedDescription:
      "AI Watchers est un projet visant à optimiser les espaces des restaurants et commerces grâce à la vision par ordinateur. L'objectif est d'analyser les flux humains pour améliorer l'agencement, la sécurité et l'expérience client. Conçu sur deux ans, le projet se concentre d'abord sur la création d'un modèle d'intelligence artificielle performant, puis sur son industrialisation et sa commercialisation.",
    image: "/images/ai-watchers-hero.png",
    additionalImages: [
      "/images/ai-watchers-model1.png",
      "/images/ai-watchers-model2.png",
      "/images/ai-watchers-unity.png",
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "CUDA", "Unity", "C#"],
    sections: [
      {
        title: "Approche Technique",
        content:
          "Le projet repose sur le modèle RAPiD, capable de détecter les personnes dans des environnements à 360 degrés. En parallèle, un autre modèle de comptage est utilisé pour suivre les entrées et sorties des individus à des points stratégiques du commerce, permettant ainsi une analyse précise des flux humains dans des zones spécifiques. Les données sont traitées avec CUDA pour accélérer les calculs. Un soin particulier est apporté à la protection des données personnelles, en conformité avec le RGPD.",
        image: "/images/ai-watchers-model1.png",
      },
      {
        title: "Visualisation des Données via Unity",
        content:
          "Unity est utilisé pour convertir les sorties des modèles en représentations visuelles dynamiques. Les données, transmises via des sockets TCP, sont traitées par des scripts en C# pour générer des cartes interactives et des heatmaps, permettant de suivre les trajectoires des individus et d'afficher les zones de forte densité de personnes. Cette approche permet une analyse visuelle claire et intuitive des flux humains en temps réel, facilitant l'interprétation des résultats.",
        image: "/images/ai-watchers-unity.png",
      },
    ],
    challenges:
      "Le principal défi était de développer un modèle suffisamment précis pour fonctionner dans des environnements variés et souvent encombrés, tout en respectant les contraintes de confidentialité des données. L'optimisation des performances pour permettre une analyse en temps réel a également nécessité un travail important sur l'architecture du système.",
    results:
      "Le système permet désormais d'analyser efficacement les flux de personnes dans différents types d'espaces commerciaux, offrant des insights précieux pour l'optimisation de l'agencement. Les tests en conditions réelles ont montré une amélioration significative de l'expérience client et une augmentation de l'efficacité opérationnelle dans les établissements équipés.",
    links: {
      github: "https://github.com/lucas04200/Ai_watcher.git",
    },
  },
  {
    id: "cashbank",
    title: "CashBank",
    description: "Casino en ligne créé en 96 heures lors d'un hackathon",
    longDescription:
      "CashBank est un casino en ligne créé en 96 heures lors d'un hackathon, avec une direction artistique immersive et cohérente. Le projet s'appuie sur HTML, CSS, JavaScript, Node.js et une base SQL pour gérer les utilisateurs et les coins fictifs.",
    detailedDescription:
      "CashBank est un casino en ligne créé en 96 heures lors d'un hackathon, avec une direction artistique immersive et cohérente. Le projet s'appuie sur HTML, CSS, JavaScript, Node.js et une base SQL pour gérer les utilisateurs et les coins fictifs. Des avertissements sur les risques des jeux d'argent sont intégrés aux règles pour encourager une pratique responsable.",
    image: "/images/cashbank-hero.png",
    additionalImages: ["/images/cashbank-plinko.png", "/images/cashbank-dolphins.png", "/images/cashbank-slots.png"],
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "SQL", "Express"],
    sections: [
      {
        title: "Plinko",
        content:
          "Le Plinko de CashBank est conçu pour offrir une expérience réaliste grâce à un système de physique avancé. Chaque lancer de balle utilise des calculs vectoriels pour simuler les rebonds sur les obstacles de manière fluide et réaliste. Les trajectoires de la balle sont influencées par des forces telles que la gravité et les angles de collision, ce qui ajoute un degré de complexité et d'imprévisibilité au jeu. Le joueur peut ajuster la position de lancement pour tenter d'optimiser les chances de gagner des coins en fonction des zones de récompense.",
        image: "/images/cashbank-plinko.png",
      },
      {
        title: "Course de Dauphins",
        content:
          "Inspirée des courses de chevaux, la course de dauphins est un jeu où les participants misent sur l'un des dauphins. La vitesse de chaque dauphin est générée aléatoirement et varie tout au long de la course, ce qui maintient le suspense jusqu'à la ligne d'arrivée. Les changements de vitesse sont calculés à intervalles réguliers, offrant un équilibre entre hasard et tension dramatique. Ce système garantit que chaque course est unique, rendant le jeu à la fois imprévisible et captivant.",
        image: "/images/cashbank-dolphins.png",
      },
      {
        title: "Machine à sous",
        content:
          "La machine à sous de CashBank propose plusieurs façons de gagner, avec des récompenses progressives selon les symboles obtenus : Gain standard : Obtenir trois symboles identiques rapporte 25 fois la mise. Jackpot : Obtenir trois fois le symbole 7 offre un jackpot de 50 fois la mise. La machine comporte 7 symboles différents, chacun ayant une probabilité égale d'apparaître sur une case. A chaque lance on a donc 2,04% de chance d'avoir un gain et 2,04% de chance que ca soit un jackpot…",
        image: "/images/cashbank-slots.png",
      },
    ],
    challenges:
      "Le principal défi était de développer un ensemble de jeux fonctionnels et attrayants dans le délai très court de 96 heures. La création de systèmes de physique réalistes pour le Plinko et d'algorithmes équilibrés pour les autres jeux a nécessité une optimisation constante.",
    results:
      "Le projet a été complété avec succès dans le délai imparti et a reçu des retours positifs pour son design cohérent et l'expérience de jeu immersive. L'interface utilisateur intuitive et les mécaniques de jeu bien équilibrées ont été particulièrement appréciées.",
    links: {
      github: "https://github.com/romx88/CashBank.git",
    },
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getAllProjects(): Project[] {
  return projects
}

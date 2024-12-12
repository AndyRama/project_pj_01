"use client";

import { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  // Utilisation du hook useState pour suivre l'index actif
  const [activeIndex, setActiveIndex] = useState(null);

  // Fonction pour basculer l'état de l'accordéon
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Ouvre ou ferme la question
  };

  // Liste des questions et réponses de la FAQ
  const faqs = [
    {
      question: "Qu'est-ce que unlcoaching ?",
      answer: [
        "Unlcoaching est un concept/service unique proposé par [Nom de votre site].",
        "Les principaux aspects de unlcoaching incluent :",
        "• [Point clé 1]",
        "• [Point clé 2]",
        "• [Point clé 3]",
        "Ce qui distingue Unlcoaching des méthodes traditionnelles de coaching est [explication de la différence principale].",
        "Pour en savoir plus sur Unlcoaching et comment il peut vous aider à atteindre vos objectifs de fitness, consultez notre page dédiée [lien vers la page] ou contactez-nous pour une consultation personnalisée."
      ],
    },
    {
      question: "Proposez-vous des services de coaching individuel ?",
      answer: [
        "Oui, nous proposons des services de coaching personnalisé. Nos options incluent :",
        "• Coaching en ligne avec suivi hebdomadaire",
        "• Sessions d'entraînement en personne (selon votre localisation)",
        "• Plans d'entraînement et de nutrition sur mesure",
        "Pour plus de détails ou pour réserver une consultation, veuillez nous contacter via notre page de contact."
      ],
    },
    {
      question: "Je débute dans le fitness, par où devrais-je commencer ?",
      answer: [
        "Pour bien débuter dans le fitness, je vous invite à suivre ces étapes :",
        "• Définissez vos objectifs (perte de poids, gain musculaire, etc.).",
        "• Consultez un médecin pour un bilan de santé.",
        "• Commencez par 2-3 séances de 20-30 minutes par semaine.",
        "• Combinez exercices cardiovasculaires et renforcement musculaire.",
        "• Apprenez la bonne technique pour chaque exercice.",
        "• Adoptez une alimentation équilibrée et restez hydraté.",
        "• Écoutez votre corps et progressez graduellement.",
        "N'hésitez pas à me contacter pour un coaching personnalisé."
      ],
    },
    {
      question: "Proposez-vous des coachings individuels ?",
      answer: [
        "Oui, je propose des coachings individuels personnalisés pour répondre aux besoins spécifiques de chaque client. Voici ce que vous devez savoir :",
        "• Je propose des séances en personne et en ligne, selon votre préférence et votre localisation.",
        "• Mes coachings englobent l'entraînement physique, la nutrition, la préparation mentale et la planification de programmes adaptés à vos objectifs.",
        "• Chaque programme est conçu sur mesure, qu'il s'agisse de perte de poids, de gain musculaire, d'amélioration des performances ou de préparation à une compétition.",
        "• Nous pouvons établir un planning adapté à vos besoins, que ce soit pour des séances hebdomadaires ou un suivi à plus long terme.",
        "• Les tarifs varient en fonction du type et de la fréquence du coaching. Je vous invite à me contacter pour obtenir un devis personnalisé.",
        "Pour plus d'informations ou pour réserver une séance d'évaluation, n'hésitez pas à me contacter via la page Contact du site ou par email à [adresse email]."
      ],
    },
    {
      question: "Comment puis-je commencer si je suis débutant dans le fitness ?",
      answer: [
        "Pour les débutants, nous recommandons de :",
        "• Consulter notre guide 'Débuter en Fitness' dans la section Blog.",
        "• Commencer par des exercices de base et augmenter progressivement l'intensité.",
        "• Établir des objectifs réalistes à court et long terme.",
        "• Considérer une consultation avec un de nos coachs pour un plan personnalisé."
      ],
    },
    {
      question: "Comment puis-je contacter l'équipe de [Nom du site] ?",
      answer: [
        "Vous pouvez nous contacter de plusieurs façons :",
        "• Par email à : [@email.com]",
        "• Via le formulaire de contact sur notre site",
        "• Sur nos réseaux sociaux : [liens vers profils]",
        "Nous nous efforçons de répondre à toutes les requêtes dans un délai de 48 heures."
      ],
    },
    {
      question: "Comment puis-je m'inscrire à un programme de coaching ?",
      answer: [
        "Pour vous inscrire à un programme de coaching, suivez ces étapes :",
        "• Consultez notre page 'Programmes de Coaching' pour voir les options disponibles.",
        "• Choisissez le programme qui correspond le mieux à vos objectifs et à votre niveau.",
        "• Cliquez sur le bouton 'S'inscrire' ou 'Réserver une consultation' associé au programme choisi.",
        "• Remplissez le formulaire d'inscription avec vos informations personnelles et vos objectifs.",
        "• Sélectionnez votre méthode de paiement préférée et procédez au règlement.",
        "• Après confirmation de votre paiement, vous recevrez un email avec les détails de votre programme et les prochaines étapes.",
        "• Un coach vous contactera dans les 24-48 heures pour planifier votre première session ou pour discuter de votre plan personnalisé.",
        "Si vous avez des questions spécifiques avant de vous inscrire, n'hésitez pas à nous contacter via notre formulaire en ligne ou par email à [@email.com]."
      ],
    },
  ];

  return (
    <div className="container mx-auto w-full md:w-10/12 mt-20 mb-20 px-4 ">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Section gauche : titre et bouton de contact */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold mb-4 text-white">FAQs</h2>
          <p className="mb-4 text-white">
            Retrouvez ici les réponses à vos questions sur nos services de coaching et programmes personnalisés.
          </p>
          <Link href="/contact" className="text-white px-4 py-2 rounded hover:border hover:border-white ">Contact</Link>
        </div>

        {/* Section droite : questions et réponses */}
        <div className="md:col-span-2">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b">
              <div
                className="flex justify-between items-center cursor-pointer py-4"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold text-white">{faq.question}</h3>
                <span className="text-white">{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <ul className="text-white pb-4 list-disc pl-6">
                  {faq.answer.map((line, lineIndex) => (
                    <li key={lineIndex}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

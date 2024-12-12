"use client";

import { useState } from 'react';

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
      question: "Qu'est-ce que unlcoaching.com ?",
      answer:
        "Unlcoaching est une plateforme dédiée au coaching sportif et au développement personnel. Elle aide les utilisateurs à atteindre leurs objectifs de santé et de bien-être grâce à des programmes de coaching personnalisés et des articles de blog informatifs.",
    },
    {
      question: "Quels services propose unlcoaching.com ?",
      answer:
        "Nous proposons une gamme de services, y compris des séances de coaching individuel, des programmes de remise en forme, et un blog regorgeant de conseils sur la nutrition, l'entraînement et le développement personnel.",
    },
    {
      question:
        "Comment puis-je m'inscrire à un programme de coaching ?",
      answer:
        "Vous pouvez vous inscrire à un programme en visitant notre page d'accueil et en sélectionnant l'option 'S'inscrire'. Vous serez guidé à travers un processus simple pour choisir le programme qui correspond le mieux à vos besoins.",
    },
    {
      question:
        "Quels sont les avantages du coaching avec unlcoaching.com ?",
      answer:
        "Le coaching avec unlcoaching.com vous permet de bénéficier de l'expertise d'un coach professionnel Jérémy Prat, d'un programme personnalisé adapté à vos objectifs, et d'un suivi continu pour garantir vos progrès.",
    },
    {
      question:
        "Quels sont les prix des services offerts par unlcoaching.com ?",
      answer:
        "Nous offrons plusieurs plans tarifaires adaptés à différents besoins, allant des sessions de coaching individuelles aux programmes complets sur plusieurs mois. Pour plus de détails, veuillez consulter notre page dédiée aux tarifs.",
    },
  ]

  return (
    <div className="container mx-auto w-full md:w-10/12 mt-20 mb-20 px-4 ">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Section gauche : titre et bouton de contact */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold mb-4 text-white">FAQs</h2>
          <p className="mb-4 text-white">
            Retrouvez ici les réponses à vos questions sur nos services de plomberie d’urgence 24h/24 et 7j/7.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded hover:border hover:border-white ">Contact</button>
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
                <div className="text-white pb-4 ">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

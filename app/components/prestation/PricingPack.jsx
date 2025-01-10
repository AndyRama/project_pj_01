'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const pricingOptions = [
  {
    title: 'Programmation niveau',
    subtitle: 'Débutant (4 Mois)',
    price: '150€',
    subPrice: '(3 * 150€ / 3 mois)',
    btnStripe:"https://buy.stripe.com/test_6oE2bO0H692y4VydQT",
    features: [
      'Pack adapté aux débutants dans la musculation.',
      'Programme de musculation personnalisé en fonction de tes objectifs.',
      'Accompagnement sur les divers TCA ou problématique de santé.',
      'Plan alimentaire adapté à tes besoins.',
      'Bilan mensuel photo + mensuration avec un suivi plus approfondi.',
      'Communication WhatsApp & Email + visio ou call chaque mois.',
    ],
  },
  {
    title: 'Programmation niveau',
    subtitle: 'Intermédiaire (4 Mois)',
    price: '150€',
    subPrice: '(3 * 150€ / 3 mois)',
    btnStripe:"https://buy.stripe.com/test_6oE2bO0H692y4VydQT",
    features: [
      'Pack adapté aux initiés ayant déjà des bases en musculation.',
      'Programme de musculation personnalisé en fonction de tes objectifs.',
      'Plan alimentaire adapté à tes besoins.',
      'Accompagnement sur les divers TCA ou problématique de santé.',
      'Bilan mensuel photo + mensuration avec un suivi plus approfondi.',
      'Communication WhatsApp & Email + visio ou call chaque mois.',
    ],
  },
  {
    title: 'Programmation niveau',
    subtitle: 'Confirmé (4 Mois)',
    price: '150€',
    subPrice: '(3 * 150€ / 3 mois)',
    btnStripe:"https://buy.stripe.com/test_6oE2bO0H692y4VydQT",
    features: [
      'Pack adapté aux initiés ayant déjà des bases en musculation depuis plusieurs années.',
      'Programme de musculation personnalisé en fonction de tes objectifs.',
      'Plan alimentaire adapté à tes besoins.',
      'Accompagnement sur les divers TCA ou problématique de santé.',
      'Bilan mensuel photo + mensuration avec un suivi plus approfondi.',
      'Communication WhatsApp & Email + visio ou call chaque mois.',
    ],
  },
  {
    title: 'Programmation niveau',
    subtitle: 'Débutant (1 Mois)',
    price: '150€',
    subPrice: '(1 * 150€ / 1 mois)',
    btnStripe:"https://buy.stripe.com/test_7sI3fS1La92y3Ru28a",
    features: [
      'Pack adapté aux débutants en musculation.',
      'Programme de musculation personnalisé en fonction de tes objectifs.',
      'Plan alimentaire adapté à tes besoins.',
      'Accompagnement sur les divers TCA ou problématique de santé.',
      'Bilan mensuel par email après 4 semaines pour le suivi.',
    ],
  },
  {
    title: 'Programmation niveau',
    subtitle: 'Intermédiaire (1 Mois)',
    price: '150€',
    subPrice: '(1 * 150€ / 1 mois)',
    btnStripe:"https://buy.stripe.com/test_7sI3fS1La92y3Ru28a",    
    features: [
      'Pack adapté aux initiés ayant déjà des bases en musculation.',
      'Programme de musculation personnalisé en fonction de tes objectifs.',
      'Plan alimentaire adapté à tes besoins.',
      'Accompagnement sur les divers TCA ou problématique de santé.',
      'Bilan mensuel par email après 4 semaines.',
    ],
  },
  {
    title: 'Programmation niveau',
    subtitle: 'Confirmé (1 Mois)',
    price: '150€',
    subPrice: '(1 * 150€ / 1 mois)',
    btnStripe:"https://buy.stripe.com/test_7sI3fS1La92y3Ru28a",
    features: [
      'Pack adapté aux initiés ayant déjà des bases en musculation.',
      'Programme de musculation personnalisé en fonction de tes objectifs.',
      'Plan alimentaire adapté à tes besoins.',
      'Accompagnement sur les divers TCA ou problématique de santé.',
      'Bilan mensuel par email après 4 semaines.',
    ],
  },
];

const PricingPack = () => {
  const [visibleOptions, setVisibleOptions] = useState(3);

  const delay = (index) => index * 0.05;

  const handleShowMore = () => {
    setVisibleOptions((prev) => Math.min(prev + 3, pricingOptions.length));
  };

  return (
    <section className="mt-10 mb-20">
      <div className="transform-gpu blur-3xl">
        <div className="absolute right-0 opacity-30 md:opacity-50 -z-20 w-48 h-52 bg-gradient-to-r from-orange-500 to-orange-800"></div>
      </div>
      <h2
        id="pack"
        className="text-white text-2xl md:text-5xl text-center mb-20"
      >
        Pack <br /> Musculation / Perte de poids
      </h2>
      <div className="container px-4 md:px-16 mx-auto">
        <div className="flex flex-wrap">
          {pricingOptions.slice(0, visibleOptions).map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay(index), duration: 0.5 }}
              className="w-full sm:w-1/2 lg:w-1/3 p-2"
            >
              <div className="p-10 bg-[#2F2E2E] rounded-md">
                <p className="text-3xl mb-1 text-center text-white">
                  {option.title}
                </p>
                <p className="text-xl mb-6 text-orange-500 text-center">
                  {option.subtitle}
                </p>
                <hr />
                <p className="mt-2 mb-1 text-center">
                  <span className="text-4xl text-orange-500 mt-6 mr-2">
                    {option.price}
                  </span>
                  <span className="text-orange-500 tracking-tight">/ Mois</span>
                </p>
                <p className="text-xl mb-6 text-white text-center">
                  {option.subPrice}
                </p>
                <motion.a
                  href={option.btnStripe}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: delay(pricingOptions.length),
                    duration: 0.5,
                  }}
                  className="inline-flex justify-center items-center text-black text-center
                   w-full h-12 p-5 tracking-tight text-xl bg-gradient-to-r from-orange-500 to-orange-800 hover:bg-transparent
                    hover:text-white rounded-md transition 
                   duration-200"
                >
                  Choisir le plan
                </motion.a>
                <ul>
                  {option.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: delay(index), duration: 0.5 }}
                      className="mt-8 flex items-center text-orange-500"
                    >
                      •<span className="ml-2 text-white">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        {visibleOptions < pricingOptions.length && (
          <div className="text-right mt-10">
            <button
              onClick={handleShowMore}
              className="bg-gradient-to-r from-orange-500 to-orange-800 text-white px-4 py-2 rounded-md"
            >
              Abonnement 1 mois 
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingPack;

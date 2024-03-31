import React from 'react'

const pricingOptions = [
  {
    title: 'Pack Niveau',
    subtitle: 'Débutant(4 Mois)',
    price: '150€',
    subPrice: '(3 * 150€ / 3 mois) ',
    features: [
      'Pack adapter aux débutants en musculation.',
      'Programme de musculation personalisé en fonction de tes objectifs.',
      'Plan alimentaire adapté à tes besoins',
      'Accompagnement sur les divers TCA ou problématique de santé.',
      'Bilan mensuel photo + mensuration avec un suivi plus approfondie',
      'Communication whatsApp & Email + visio ou call chaque mois',
    ],
  },
  {
    title: 'Pack Niveau',
    subtitle: 'Intermerdaire (4 Mois)',
    price: '150€',
    subPrice: '(3 * 150€ / 3 mois) ',
    features: [
      'Pack adapter aux initiés ayant déja des bases en musculation',
      'Programme de musculation personalisé en fonction de tes objectifs. ',
      'Plan alimentaire adapté à tes besoins. Accompagnement sur les divers TCA ou problématique de santé.',
      'Bilan mensuel photo + mensuration avec un suivi plus approfondie',
      'Communication whatsApp & Email + visio ou call chaque mois',
    ],
  },
  {
    title: 'Pack Niveau',
    subtitle: 'Confirmé (4 Mois)',
    price: '150€',
    subPrice: '(3 * 150€ / 3 mois) ',
    features: [
      'Pack adapter aux initiés ayant déja des bases en musculation depuis plusieurs années',
      'Programme de musculation personalisé en fonction de tes objectifs. ',
      'Plan alimentaire adapté à tes besoins. Accompagnement sur les divers TCA ou problématique de santé.',
      'Bilan mensuel photo + mensuration avec un suivi plus approfondie',
      'Communication whatsApp & Email + visio ou call chaque mois',
    ],
  },
  {
    title: 'Pack Niveau',
    subtitle: 'Débutant(1 Mois)',
    price: '150€',
    subPrice: '(1 * 150€ / 1 mois) ',
    features: [
      'Pack adapter aux débutants en musculation.',
      'Programme de musculation personalisé en fonction de tes objectifs.',
      'Plan alimentaire adapté à tes besoins',
      'Accompagnement sur les divers TCA ou problématique de santé.',
      'Bilan mensuel par email après 4 semaines pour le suivie.',
    ],
  },
  {
    title: 'Pack Niveau',
    subtitle: 'Intermerdaire (1 Mois)',
    price: '150€',
    subPrice: '(1 * 150€ / 1 mois) ',
    features: [
      'Pack adapter aux initiés ayant déja des bases en musculation',
      'Programme de musculation personalisé en fonction de tes objectifs. ',
      'Plan alimentaire adapté à tes besoins.',
      'Accompagnement sur les divers TCA ou problématique de santé.',
      'Bilan mensuel par email après 4 semaines',
    ],
  },
  {
    title: 'Pack Niveau',
    subtitle: 'Confirmé (1 Mois)',
    price: '150€',
    subPrice: '(1 * 150€ / 1 mois) ',
    features: [
      'Pack adapter aux initiés ayant déja des bases en musculation',
      'Programme de musculation personalisé en fonction de tes objectifs. ',
      'Plan alimentaire adapté à tes besoins.',
      'Accompagnement sur les divers TCA ou problématique de santé.',
      'Bilan mensuel par email après 4 semaines',
    ],
  },
]

const EbookOptions = [
  {
    title: 'Ebook1',
    subtitle: 'Sujet numero 1',
    price: 'Free',
    features: [
      'Pack adapter aux débutants en musculation.',
      'Programme de musculation personalisé en fonction de tes objectifs.',
      'Plan alimentaire adapté à tes besoins',
      'Accompagnement sur les divers TCA ou problématique de santé.',
      'Bilan mensuel photo + mensuration avec un suivi plus approfondie',
      'Communication whatsApp & Email + visio ou call chaque mois',
    ],
  },
  {
    title: 'Ebook2',
    subtitle: 'Sujet numero 2',
    price: '15€',
    features: [
      'Pack adapter aux débutants en musculation.',
      'Programme de musculation personalisé en fonction de tes objectifs.',
      'Plan alimentaire adapté à tes besoins',
      'Accompagnement sur les divers TCA ou problématique de santé.',
      'Bilan mensuel photo + mensuration avec un suivi plus approfondie',
      'Communication whatsApp & Email + visio ou call chaque mois',
    ],
  },
]

const Pricing = () => {
  return (
    <section className="mt-10 mb-20">
      <h2 className="text-white text-4xl text-center mb-20">
        Pack <br />
        Musculation / Perte de poids
      </h2>
      <div className="container px-4 mx-auto">
        {/* Main Card Pricing - content  */}
        <div className="flex flex-wrap">
          {pricingOptions.map((option, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
              <div className="p-10 border border-white rounded-xl">
                {/* Card Pricing - Header - Title */}
                <p className="text-4xl mb-1 text-center text-white">
                  {option.title}
                </p>
                {/* Card Pricing - Header - subTitle */}
                <p className="text-xl mb-6 text-orange-400 text-center">
                  {option.subtitle}
                </p>
                {/* Card Pricing - Header - Price  */}
                <p className="mb-1 text-center">
                  <span className="text-4xl text-white mt-6 mr-2">
                    {option.price}
                  </span>
                  <span className="text-white tracking-tight">/Mois</span>
                </p>
                {/* Card Pricing - Header - subPrice  */}
                <p className="text-xl mb-6 text-orange-400 text-center">
                  {option.subPrice}
                </p>
                {/* Card Pricing - main - contents */}
                <ul>
                  {option.features.map((feature, index) => (
                    <li
                      key={index}
                      className="mt-8 flex items-center text-orange-400"
                    >
                      •<span className="ml-2 text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-flex justify-center items-center text-white text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-400 border border-orange-400 rounded-lg transition duration-200"
                >
                  Choisir le plan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Services() {
  return (
    <div className="py-20 bg-gradient-to-b from-transparent to-[#ee818368] md:p-10 px-5 text-center">
      <div className="max-w-[1400px] flex flex-col justify-center items-center gap-5 mx-auto">
        <h2 className="text-6xl text-[#C3B4A4] font-semibold">
          Massages & Soins
        </h2>
        <p className="text-center mx-auto max-w-3xl text-lg">
          Découvrez une sélection de massages et soins bien-être, adaptés à vos
          besoins : relaxation, soulagement des tensions, équilibre du corps et
          de l’esprit. Tous les soins sont pratiqués par Sophie Dénériaz,
          massothérapeute certifiée à Lutry, Suisse.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-12 lg:gap-16 gap-8 md:px-8 lg:px-10 mt-10">
          {services.map((service, index) => (
            <Link
              href={service.slug}
              key={index}
              className="bg-white flex flex-col items-center justify-between relative overflow-hidden p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-[3rem]"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={500}
                className="object-cover rounded-full w-48 mx-auto h-48"
              />
              <span className="absolute top-5 left-5 px-4 py-1 bg-white/50 rounded-full backdrop-blur-lg shadow-md flex">
                <p
                  className={`font-semibold text-[#ED1C8F]  ${service.title === 'Cure de Shungite' || service.title === 'Biorésonance' || service.title === 'Massage assis en entreprise' ? 'text-md' : 'text-xl'}`}
                >
                  {service.duration}
                </p>
              </span>
              <span
                className={`absolute px-4 py-1 flex bg-white/50 backdrop-blur-md rounded-full shadow-md ${service.title === 'Cure de Shungite' || service.title === 'Massage assis en entreprise' || service.title === 'Biorésonance' ? 'left-5 top-16 ' : 'top-5 right-5'} `}
              >
                <p
                  className={`font-semibold text-[#ED1C8F]  ${service.title === 'Cure de Shungite' || service.title === 'Biorésonance' || service.title === 'Massage assis en entreprise' ? 'text-md' : 'text-xl'}`}
                >
                  {service.price}
                </p>
              </span>

              <h3 className="text-2xl text-[#C3B4A4] font-semibold mt-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <div className="flex gap-10 pt-5 justify-center items-center">
                <Button
                  asChild
                  className={`py-6 px-7 rounded-full bg-white text-black`}
                >
                  Plus d’infos
                </Button>

                <Button
                  asChild
                  className="py-6 px-7 rounded-full bg-[#ED1C8F] hover:bg-[#ed1c8fbb] text-white"
                >
                  <Link href="/contact">Réserver</Link>
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    title: 'Drainage lymphatique',
    description:
      "Massage doux et rythmé visant à stimuler la circulation de la lymphe, réduire les gonflements, favoriser l'élimination des toxines et renforcer le système immunitaire.",
    image: '/services/drainage lymphatique.jpg',
    slug: '/drainage-lymphatique',
    price: 'CHF 120',
    duration: '60 min',
  },
  {
    title: 'Massage thérapeutique',
    description:
      'Idéal pour soulager les tensions musculaires et améliorer la circulation. Mouvements profonds pour une détente ciblée et durable.',
    image: '/services/massage therapeutique.avif',
    slug: '/massage-therapeutique',
    price: 'CHF 120',
    duration: '60 min',
  },
  {
    title: 'Massage classique aux huiles essentielles',
    description:
      'Un massage relaxant associé aux bienfaits naturels des huiles essentielles. Il aide à apaiser le stress et favorise l’équilibre du corps et de l’esprit.',
    image: '/services/massage classique aux huiles.avif',
    slug: '/massage-relaxant-huiles-essentielles',
    price: 'CHF 100',
    duration: '60 min',
  },
  {
    title: 'Massage relaxant dynamisé à la shungite',
    description:
      'Allie massage relaxant et propriétés protectrices de la shungite, pour une détente profonde et un regain d’énergie.',
    slug: '/massage-relaxant-1',
    image: '/services/massage relaxant dynamise a la shungite.avif',
    price: 'CHF 100',
    duration: '60 min',
  },
  {
    title: 'Réflexologie plantaire',
    description:
      'Thérapie douce par stimulation des zones réflexes du pied. Libère les tensions, stimule les fonctions naturelles du corps et favorise l’équilibre global.',
    slug: '/reflexologie-plantaire',
    image: '/services/réflexologie plantaire.avif',
    price: 'CHF 120',
    duration: '60 min',
  },
  {
    title: 'Soin aux ventouses & massage classique',
    description:
      '30 min de ventouses suivies d’un massage aux huiles essentielles pour libérer les tensions, soulager douleurs et migraines, et améliorer la souplesse musculaire.',
    image: '/services/soins aux ventouses.avif',
    slug: '/ampoules',
    price: 'CHF 100',
    duration: '60 min',
  },
  {
    title: 'Soin aux ventouses',
    description:
      'Technique ancestrale par succion pour stimuler la circulation, favoriser la détoxification et soulager les tensions musculaires.',
    image: '/services/soins aux ventouses.avif',
    slug: '/ampoules',
    price: 'CHF 60',
    duration: '30 min',
  },
  {
    title: 'Massage assis en entreprise',
    description:
      'Bien-être au travail, sans huile et sur vêtements. Idéal pour relâcher les tensions et se revitaliser. Un devis personnalisé peut être établi. ',
    image: '/services/entreprise chair massage.jpg',
    slug: '/massage-assis',
    price: 'CHF 40 / 15min',
    duration: 'CHF 700 / 20 séances',
  },

  {
    title: 'Cure de Shungite',
    description:
      'Dès que vous entrez dans cet espace de détente, enveloppé de 3,5 tonnes de Shungite, une harmonisation naturelle commence. Et ce n’est que le début…',
    image: '/chambre de shungite image.avif',
    slug: '/blank',
    price: 'CHF 60 / 45min',
    duration: 'CHF 250 / 5 séances',
  },
  {
    title: 'Biorésonance',
    description:
      'Technologie VitaFeld : un bilan énergétique précis sur 650 paramètres, suivi d’un traitement doux et indolore, accessible à toute la famille.',
    image: '/soin/Bilan de santé - bioresonance.avif',
    slug: '/bioresonance',
    price: '60 min',
    duration: 'CHF 150 (1ʳᵉ) / CHF 120 (suivantes)',
  },
];

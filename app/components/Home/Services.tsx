import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Services() {
  return (
    <div className=" py-20 i bg-gradient-to-b from-transparent to-[#ee818368]   md:p-10 px-5 text-center ">
      <div className="max-w-[1400px] flex flex-col justify-center items-center gap-5 mx-auto">
        <h2 className="text-6xl text-[#C3B4A4] font-semibold ">Massages</h2>
        <p className="text-center mx-auto max-w-3xl text-lg">
          Découvrez mes divers types de massages relaxants pour apaiser le corps
          et l&apos;esprit. Chaque massage est conçu pour vous offrir une
          expérience unique de bien-être.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-16 gap-8 md:px-10  mt-10">
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
                className=" object-cover rounded-full w-48 mx-auto h-48"
              />

              <span className="absolute top-5 left-5 px-4 py-1 bg-white/50 rounded-full backdrop-blur-md shadow-md flex">
                <p className="text-xl font-semibold text-[#ED1C8F] mt-2">
                  {service.duration}{' '}
                </p>
              </span>
              <span className="absolute top-5 right-5 px-4 py-1 bg-white/50 backdrop-blur-md rounded-full shadow-md ">
                <p className="text-xl font-semibold text-[#ED1C8F] mt-2">
                  {service.price}{' '}
                </p>
              </span>
              <h3 className="text-2xl text-[#C3B4A4] font-semibold mt-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>

              <div className="flex gap-10 pt-5 justify-center items-center ">
                <Button
                  asChild
                  className=" py-6 px-7 rounded-full bg-white text-black"
                >
                  <Link href={service.slug}>Plus d&apos;infos</Link>
                </Button>

                <Button
                  asChild
                  className=" py-6 px-7 rounded-full bg-[#ED1C8F] hover:bg-[#ed1c8fbb] text-white"
                >
                  <Link href="/contact"> Réservez</Link>
                </Button>
              </div>

              {/* <ShineBorder shineColor={["#FC7CD1", "#EE8182", "#E49D43"]} /> */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    title: 'MASSAGE THÉRAPEUTIQUE',
    description:
      'Le massage suédois est idéal pour soulager les tensions musculaires et améliorer la circulation sanguine. Laissez-vous envelopper par des mouvements fluides et profonds.',
    image: '/services/massage therapeutique.avif',
    slug: '/massage-therapeutique',
    price: 'CHF 120.',
    duration: '60min',
  },
  {
    title: 'MASSAGE CLASSIQUE AUX HUILES ESSENTIELLES',
    description:
      "Le massage aux huiles essentielles sert à soigner les maladies ainsi qu'à exprimer les sentiments.Grâce à son pouvoir, il permet de neutraliser le stress.",
    image: '/services/massage classique aux huiles.avif',
    slug: '/copie-de-massotherapie',
    price: 'CHF 100.',
    duration: '60min',
  },
  {
    title: 'RÉFLEXOLOGIE PLANTAIRE',
    description:
      "La réflexologie est une thérapie qui stimule des zones réflexes situées sur les pieds et les mains, reliées aux organes et systèmes du corps. Elle aide à libérer les tensions et à rétablir l'équilibre du corps.",
    slug: '/reflexologie-plantaire',
    image: '/services/réflexologie plantaire.avif',
    price: 'CHF 120.',
    duration: '60min',
  },
  {
    title: 'MASSAGE RELAXANT DYNAMISE A LA SHUNGITE',
    description:
      "Le massage relaxant dynamisé à la shungite combine les bienfaits du massage classique avec l'énergie unique de la shungite, une pierre aux propriétés protectrices et purifiantes. Ce massage aide à détendre les muscles, tout en équilibrant les énergies du corps.",
    slug: '/massage-relaxant-1',
    image: '/services/massage relaxant dynamise a la shungite.avif',
    price: 'CHF 100.',
    duration: '60min',
  },
  {
    title: 'MASSAGE ASSIS EN ENTREPRISE',
    description:
      "Prestation de Bien-Être en entreprise par massage assis sur vêtements et sans huile.​Déplacement sur place ainsi que la création d'un devis.",
    image: '/services/massage assis en entreprise.avif',
    slug: '/massage-assis',
    price: 'CHF 100.',
    duration: '60min',
  },
  {
    title: 'SOIN AUX VENTOUSES',
    description:
      'Le soin aux ventouses est une technique ancienne qui consiste à  créer un effet de succion. Cette succion stimule la circulation sanguine, favorise la détoxification, et soulage les tensions musculaires. ',
    image: '/services/soins aux ventouses.avif',
    slug: '/ampoules',
    price: 'CHF 60.',
    duration: '30min',
  },
];

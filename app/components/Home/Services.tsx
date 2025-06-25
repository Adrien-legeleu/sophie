import { ShineBorder } from '@/components/magicui/shine-border';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Services() {
  return (
    <div className="flex flex-col py-20 items-center bg-gradient-to-b from-transparent to-[#ee818368] justify-center gap-5 p-10 text-center">
      <h2 className="text-6xl text-[#C3B4A4] font-semibold ">Massages</h2>
      <p className="text-center mx-auto max-w-3xl text-lg">
        Découvrez mes divers types de massages relaxants pour apaiser le corps
        et l'esprit. Chaque massage est conçu pour vous offrir une expérience
        unique de bien-être.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-10 mt-10">
        {services.map((service, index) => (
          <Link
            href={service.slug}
            key={index}
            className="bg-white relative overflow-hidden p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-[3rem]"
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
                <Link href={service.slug}>Plus d'infos</Link>
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
  );
}

const services = [
  {
    title: 'Massage Thérapeutique',
    description:
      'Le massage suédois est idéal pour soulager les tensions musculaires et améliorer la circulation sanguine. Laissez-vous envelopper par des mouvements fluides et profonds.',
    image: '/services/massage therapeutique.avif',
    slug: '',
    price: '100 CHF',
    duration: '1heure',
  },
  {
    title: 'Massage Thérapeutique',
    description:
      'Le massage suédois est idéal pour soulager les tensions musculaires et améliorer la circulation sanguine. Laissez-vous envelopper par des mouvements fluides et profonds.',
    image: '/services/massage therapeutique.avif',
    slug: '',
    price: '100 CHF',
    duration: '1heure',
  },
  {
    title: 'Massage Thérapeutique',
    description:
      'Le massage suédois est idéal pour soulager les tensions musculaires et améliorer la circulation sanguine. Laissez-vous envelopper par des mouvements fluides et profonds.',
    image: '/services/massage therapeutique.avif',
    slug: '',
    price: '100 CHF',
    duration: '1heure',
  },
  {
    title: 'Massage Thérapeutique',
    description:
      'Le massage suédois est idéal pour soulager les tensions musculaires et améliorer la circulation sanguine. Laissez-vous envelopper par des mouvements fluides et profonds.',
    image: '/services/massage therapeutique.avif',
    slug: '',
    price: '100 CHF',
    duration: '1heure',
  },
  {
    title: 'Massage Thérapeutique',
    description:
      'Le massage suédois est idéal pour soulager les tensions musculaires et améliorer la circulation sanguine. Laissez-vous envelopper par des mouvements fluides et profonds.',
    image: '/services/massage therapeutique.avif',
    slug: '',
    price: '100 CHF',
    duration: '1heure',
  },
  {
    title: 'Massage Thérapeutique',
    description:
      'Le massage suédois est idéal pour soulager les tensions musculaires et améliorer la circulation sanguine. Laissez-vous envelopper par des mouvements fluides et profonds.',
    image: '/services/massage therapeutique.avif',
    slug: '',
    price: '100 CHF',
    duration: '1heure',
  },
];

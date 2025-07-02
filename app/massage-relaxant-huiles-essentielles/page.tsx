import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div className="bg-gradient-to-b from-transparent to-[#ee818368] px-5 py-40">
      <div className="space-y-12 text-lg tracking-wide max-w-5xl mx-auto">
        <h1 className="lg:text-6xl sm:text-5xl text-4xl text-center text-[#C3B4A4]">
          MASSAGE RELAXANT <br /> AUX HUILES ESSENTIELLES
        </h1>

        {/* INTRODUCTION */}
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Un soin profondément apaisant
          </h2>
          <p className="text-justify font-light">
            Le massage relaxant aux huiles essentielles est une pratique douce
            et enveloppante qui agit en profondeur sur le corps et l’esprit. Il
            se décline en deux formes complémentaires : le massage classique et
            le massage dynamisé à la Shungite. Chaque version offre un moment
            unique de reconnexion à soi, dans un cadre apaisant et respectueux
            de vos besoins.
          </p>
        </div>

        {/* IMAGE + DESCRIPTION CLASSIQUE */}
        <div className="flex max-md:flex-col max-md:items-center gap-10 pt-10">
          <div className="flex flex-col basis-[40%] gap-10 w-full">
            <Image
              src="/soin/massotherapie huile.avif"
              width={1000}
              height={1000}
              alt="massage aux huiles essentielles"
              className="w-full h-auto object-cover rounded-[3rem] shadow-lg"
            />
            <Image
              src="/soin/massotherapie massage.avif"
              width={1000}
              height={1000}
              alt="massage thérapeutique"
              className="w-full h-auto object-cover rounded-[3rem] shadow-lg"
            />
          </div>

          <div className="basis-[60%] space-y-10">
            <h2 className="text-2xl font-semibold">
              Le massage classique aux huiles essentielles
            </h2>
            <p className="text-justify font-light">
              Recommandé pour tous les âges, le massage classique est une
              méthode naturelle qui favorise la détente, stimule la circulation
              et soulage les tensions musculaires. Réalisé avec des huiles
              essentielles de qualité, il peut se concentrer sur des zones
              spécifiques ou s’étendre à l’ensemble du corps selon vos besoins.
            </p>
            <p className="text-justify font-light">
              Grâce à ses gestes fluides et ses pressions ciblées, il permet de
              relâcher les tensions profondes, d’améliorer la mobilité
              articulaire, de soutenir la récupération musculaire et de prévenir
              les douleurs liées au stress ou à une mauvaise posture.
            </p>
          </div>
        </div>

        {/* IMAGE + DESCRIPTION SHUNGITE */}
        <div className="space-y-10 pt-16">
          <h2 className="text-2xl font-semibold">
            Le massage relaxant dynamisé à la Shungite
          </h2>
          <p className="text-justify font-light">
            Le massage à la Shungite associe les bienfaits du toucher
            thérapeutique à l’énergie naturelle de cette pierre protectrice.
            Connue pour absorber les ondes électromagnétiques et rééquilibrer
            les énergies, la Shungite dynamise l’huile végétale utilisée pour
            renforcer l’action du massage.
          </p>
          <p className="text-justify font-light">
            Après un échange avec vous en début de séance, j’adapte mes
            manœuvres selon vos tensions, votre niveau de stress et les zones à
            cibler. Les gestes sont doux, lents, profonds : pétrissages,
            effleurages, pressions, lissages. Le massage se termine par un
            moment de repos, pour vous laisser le temps de retrouver votre calme
            et votre souffle.
          </p>
          <Image
            src="/soin/image massage relaxant.avif"
            width={2000}
            height={2000}
            alt="massage dynamisé à la Shungite"
            className="w-full h-auto object-cover rounded-[3rem] shadow-lg"
          />
        </div>

        <div className="space-y-5 pt-16">
          <h2 className="text-2xl text-center font-semibold">
            Quels bienfaits attendre ?
          </h2>
          <ul className=" flex flex-wrap justify-center items-center gap-5">
            {bienfaitsShungite.map((bienfait, index) => (
              <li
                key={index}
                className="inline-flex w-max px-4 py-2 items-center gap-2 max-sm:text-sm rounded-full bg-white shadow-md"
              >
                <div className="h-2 w-2 bg-[#ED1C8F] rounded-full" />
                {bienfait}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="w-full items-center justify-center flex pt-10">
          <Button
            asChild
            className="py-8 px-10 text-lg rounded-full bg-[#ED1C8F] hover:bg-[#ed1c8fbb] text-white"
          >
            <Link href="/contact">Réservez votre moment de détente</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

const bienfaitsShungite = [
  'Apaisement des tensions musculaires et nerveuses',
  'Amélioration de la circulation sanguine et lymphatique',
  'Réduction du stress, de l’anxiété et des insomnies',
  'Effet détoxifiant naturel du corps',
  'Soutien à la récupération physique et mentale',
  'Rééquilibrage énergétique grâce à la Shungite',
  'Sensation de bien-être durable et de reconnexion à soi',
];

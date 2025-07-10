import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div className="bg-gradient-to-b px-5 from-transparent to-[#ee818368] py-40">
      <div className="space-y-12 text-lg tracking-wide max-w-5xl mx-auto">
        <h1 className="lg:text-6xl sm:text-5xl text-4xl text-center text-[#C3B4A4]">
          DRAINAGE LYMPHATIQUE
        </h1>

        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Qu&apos;`est-ce que le drainage lymphatique ?
          </h2>
          <p className="text-justify font-light">
            Le drainage lymphatique est une technique de massage manuel douce et
            précise, fondée sur la <strong>méthode Vodder</strong>. Ce protocole
            spécifique repose sur des mouvements lents, circulaires et rythmés,
            visant à stimuler la circulation de la lymphe et à soutenir le bon
            fonctionnement du système immunitaire.
          </p>
          <p className="text-justify font-light">
            En aidant à désengorger les tissus et à éliminer les toxines, ce
            soin contribue à une meilleure détoxification naturelle de
            l&apos;`organisme. Il est particulièrement indiqué en cas de
            convalescence post-opératoire, de jambes lourdes, de rétention d’eau
            ou de troubles circulatoires.
          </p>

          <div className="flex max-md:flex-col gap-10 w-full">
            <div className="w-full">
              <Image
                src={
                  '/soin/hands-massaging-female-abdomen-therapist-applying-pressure-belly.jpg'
                }
                width={1000}
                height={1000}
                alt="technique drainage Vodder"
                className="w-full h-auto object-cover rounded-[3rem] shadow-lg"
              />
              <span className="relative max-md:text-sm md:left-5 top-1 font-light">
                Mouvements circulaires selon la méthode Vodder pour relancer la
                circulation lymphatique.
              </span>
            </div>
            <div className="w-full">
              <Image
                src={'/soin/medical-massage-leg-physiotherapy-center.jpg'}
                width={1000}
                height={1000}
                alt="relaxation après drainage"
                className="w-full h-auto object-cover rounded-[3rem] shadow-lg"
              />
              <span className="relative max-md:text-sm md:left-5 top-1 font-light">
                Le drainage procure une profonde sensation d’apaisement et de
                légèreté.
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Pourquoi opter pour ce soin ?
          </h2>
          <p className="text-justify font-light">
            Recommandé pour soulager les œdèmes, la cellulite, ou en complément
            d’un programme de détox, le drainage lymphatique selon la méthode
            Vodder agit en douceur sur le corps entier. Il favorise une
            meilleure récupération, améliore l’aspect de la peau et procure une
            détente physique et mentale durable.
          </p>
        </div>

        <div className="space-y-5 pt-5">
          <h2 className="text-2xl font-semibold text-center">
            Bienfaits en un coup d’œil
          </h2>
          <ul className=" flex flex-wrap justify-center items-center  gap-5">
            {bienfaitsDrainage.map((bienfait, index) => (
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

        <div className="w-full items-center justify-center flex">
          <Button
            asChild
            className="py-8 px-10 text-lg rounded-full bg-[#ED1C8F] hover:bg-[#ed1c8fbb] text-white"
          >
            <Link href="/contact"> Réservez un soin </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

const bienfaitsDrainage = [
  'Post-opératoire',
  'Stimule la circulation lymphatique',
  'Réduit les gonflements et la rétention d’eau',
  'Favorise l’élimination des toxines',
  'Soulage la sensation de jambes lourdes',
  'Renforce le système immunitaire',
  'Apaise et détend en profondeur',
  'Améliore l’aspect de la peau (cellulite, peau d’orange)',
  'Accompagne les périodes de détox ou de récupération',
];

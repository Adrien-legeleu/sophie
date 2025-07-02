import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div className="bg-gradient-to-b from-transparent to-[#ee818368] px-5 py-40">
      <div className="space-y-12 text-lg tracking-wide  max-w-5xl  mx-auto">
        <h1 className="lg:text-6xl sm:text-5xl text-4xl text-center text-[#C3B4A4]">
          SOIN AUX VENTOUSES
        </h1>
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Qu&apos;est-ce que le soin aux ventouses ?
          </h2>
          <p className="text-justify  font-light">
            Le soin aux ventouses est une technique ancestrale de thérapie
            naturelle, utilisée pour stimuler la circulation sanguine et
            lymphatique grâce à un effet de succion sur la peau. En plus de
            soulager les douleurs musculaires et articulaires, il aide à libérer
            les tensions, à éliminer les toxines, et à renforcer les capacités
            d’auto-guérison du corps. Recommandé pour traiter des troubles
            chroniques ou ponctuels, ce soin est apprécié pour ses effets
            apaisants et revitalisants, tout en étant non invasif et sans effets
            secondaires majeurs.
          </p>

          <div className="flex max-md:flex-col gap-10 w-full">
            <div className="w-full">
              <Image
                src={'/soin/image massage avec ampoule.avif'}
                width={1000}
                height={1000}
                alt="massage thérapeutique"
                className="w-full h-auto object-cover rounded-[3rem] shadow-lg"
              />
              <span className="relative left-5 top-1 max-lg:text-sm font-light">
                Pose de ventouses le long de la colonne vertébrale pour détendre
                cervicales, dorsales et lombaires.
              </span>
            </div>
            <div className="w-full">
              <Image
                src={'/soin/image soin aux ventouses.avif'}
                width={1000}
                height={1000}
                alt="massage thérapeutique"
                className="w-full h-auto object-cover rounded-[3rem] shadow-lg"
              />
              <span className="relative left-5 top-1 max-lg:text-sm  font-light">
                La chaleur retire l&apos;oxygène qui permet ensuite
                l&apos;adhésion.
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Pourquoi opter pour un soin aux ventouses ?
          </h2>
          <p className="text-justify font-light">
            Le soin aux ventouses est une technique ancestrale qui ne se limite
            pas à la relaxation : c&apos;est un véritable traitement naturel
            pour diverses pathologies. En créant une succion sur la peau, les
            ventouses stimulent la circulation sanguine et lymphatique, ce qui
            aide à soulager les douleurs, libérer les tensions et favoriser
            l’élimination des toxines. Ce soin est particulièrement recommandé
            pour traiter des troubles chroniques ou ponctuels, tout en étant
            sans effets secondaires. Il agit profondément sur le corps tout en
            stimulant ses capacités d’auto-guérison.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Les bienfaits du soin aux ventouses
          </h2>
          <ul className="lg:grid flex flex-wrap justify-center items-center lg:grid-cols-2 gap-5">
            {bienfaitsVentouses.map((bienfait, index) => (
              <li
                key={index}
                className="inline-flex w-max px-4 py-2 items-center gap-2 max-sm:text-sm rounded-full bg-white shadow-md"
              >
                <div className="h-2 w-2 bg-[#ED1C8F] rounded-full" />
                {bienfait}
              </li>
            ))}
          </ul>
          <p className="text-justify font-light">
            Alliant efficacité thérapeutique et bien-être, le soin aux ventouses
            permet de soulager de nombreuses pathologies. Il est reconnu pour
            son action sur les douleurs articulaires, comme l&apos;arthrose et
            les rhumatismes, ainsi que sur les douleurs nerveuses, comme les
            névralgies et la sciatique. Ce traitement est également très
            bénéfique pour les douleurs dorsales et musculaires, offrant un
            soulagement profond et durable.
          </p>
          <p className="text-justify font-light">
            En plus d’apaiser les tensions physiques, le soin aux ventouses est
            efficace pour traiter les maladies respiratoires telles que l’asthme
            et les bronchites, en aidant à dégager les voies respiratoires. Il
            améliore également la digestion, en favorisant une meilleure
            circulation des énergies internes et une bonne élimination des
            toxines.
          </p>
          <p className="text-justify font-light">
            Ce soin naturel, qui active également la circulation sanguine, offre
            une relaxation profonde tout en améliorant la souplesse des muscles
            et des articulations. Sur le plan global, il favorise une meilleure
            santé et un bien-être général tout en traitant efficacement des
            douleurs et des troubles variés.
          </p>
        </div>
        <div className="w-full items-center justify-center flex">
          <Button
            asChild
            className=" py-8 px-10 text-lg  rounded-full bg-[#ED1C8F] hover:bg-[#ed1c8fbb] text-white"
          >
            <Link href="/contact"> Réservez un soin</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

const bienfaitsVentouses = [
  'Soulage les douleurs musculaires et articulaires',
  'Libère les tensions nerveuses',
  'Améliore la circulation sanguine et lymphatique',
  'Favorise l’élimination des toxines',
  'Apaise les troubles respiratoires (asthme, bronchite)',
  'Stimule la digestion et le transit',
  'Renforce le système immunitaire',
  'Favorise la détente et la relaxation profonde',
];

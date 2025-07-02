import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div className="bg-gradient-to-b px-5 from-transparent to-[#ee818368] py-40">
      <div className="space-y-12 text-lg tracking-wide  max-w-5xl  mx-auto">
        <h1 className=" lg:text-6xl sm:text-5xl text-4xl text-center text-[#C3B4A4]">
          RÉFLEXOLOGIE PLANTAIRE
        </h1>
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Qu’est-ce que la réflexologie ?​​
          </h2>
          <p className="text-justify  font-light">
            La réflexologie plantaire est bien plus qu’un simple massage des
            pieds. Imaginez que vos pieds soient une véritable carte de votre
            corps : chaque point précis correspond à une partie du corps ou à un
            organe. En stimulant ces zones, la réflexologie agit comme un pont
            entre le corps et l’esprit, libérant les tensions accumulées et
            rétablissant une harmonie intérieure. Cette méthode ancestrale offre
            une pause bien-être unique, là où chaque pression raconte une
            histoire de guérison.​
          </p>
          <p className="text-center font-semibold ">
            Vos pieds en savent long sur vous… Alors pourquoi ne pas les écouter
            ?
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Les divers bienfaits de la réflexologie
          </h2>
          <ul className="lg:grid  flex flex-wrap justify-center items-center lg:grid-cols-2 gap-5 ">
            {bienfaits.map((bienfait, index) => (
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

        <Image
          src={'/soin/image reflexologie-plantaire.avif'}
          width={1000}
          height={1000}
          alt="massage thérapeutique"
          className="w-full h-auto object-cover rounded-[3rem] shadow-lg"
        />
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Pourquoi opter pour la réflexologie ?
          </h2>
          <p className="text-justify font-light">
            La réflexologie n’est pas seulement un moment de relaxation, c’est
            une méthode naturelle et holistique qui vise à améliorer la santé
            globale. En exerçant des pressions spécifiques sur des zones
            réflexes des pieds, des mains ou du visage, elle peut stimuler le
            processus de guérison du corps sans effets secondaires. Reconnue
            pour ses bienfaits sur la gestion du stress, la réflexologie aide à
            soulager les douleurs, à favoriser la circulation sanguine et à
            rétablir l’équilibre énergétique, offrant ainsi une approche
            préventive et thérapeutique.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Les bienfaits de la réflexologie
          </h2>
          <p className="text-justify font-light">
            Alliant bien-être et efficacité thérapeutique, la réflexologie offre
            un large éventail de bienfaits. Elle aide à réduire le stress et à
            relâcher les tensions musculaires tout en agissant sur des maux
            spécifiques comme les douleurs articulaires, les migraines ou les
            troubles digestifs. En stimulant la circulation sanguine et
            lymphatique, elle améliore également l’élimination des toxines,
            contribuant à une meilleure vitalité générale.
          </p>
          <p className="text-justify font-light">
            Sur le plan physique, la réflexologie soulage les tensions
            musculaires, améliore la mobilité articulaire et favorise une
            meilleure oxygénation des tissus. Sur le plan psychologique, elle
            aide à calmer l’esprit, à gérer l’anxiété et à soutenir un état de
            bien-être émotionnel durable.
          </p>
        </div>
        <div className="w-full items-center justify-center flex">
          <Button
            asChild
            className=" py-8 px-10 text-lg  rounded-full bg-[#ED1C8F] hover:bg-[#ed1c8fbb] text-white"
          >
            <Link href="/contact"> Réservez un massage </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

const bienfaits = [
  'Soulage les tensions et les douleurs',
  'Améliore la digestion ',
  "Stimule la capacité d'auto-guérison du corps",
  'Booste le système immunitaire',
  "Favorise l'élimination des toxines",
  'Améliore la circulation sanguine',
];

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div className="bg-gradient-to-b from-transparent to-[#ee818368] py-40">
      <div className="space-y-12 text-lg tracking-wide  max-w-5xl  mx-auto">
        <h1 className="text-6xl text-center text-[#C3B4A4]">
          MASSAGE CLASSIQUE <br />
          AUX HUILES ESSENTIELLES
        </h1>
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Qu’est-ce que le massage classique ?
          </h2>
          <p className="text-justify  font-light">
            Le massage classique est reconnu comme une pratique essentielle dans
            le domaine des soins naturels. Il s’adresse à un large éventail de
            personnes, des enfants aux seniors, offrant une approche douce mais
            efficace qui se démarque des méthodes plus intrusives comme
            l’ostéopathie. Certains praticiens se spécialisent même dans le
            bien-être des animaux souffrants, démontrant l’universalité de cette
            méthode.
          </p>
          <p className="text-justify font-light">
            Bien que réconfortant, le massage classique va au-delà de la simple
            relaxation. Réalisé par un praticien qualifié, il se concentre sur
            des zones spécifiques ou peut englober l’ensemble du corps.
          </p>

          <div className="flex gap-10 pt-10">
            <div className="flex flex-col basis-[40%] gap-10 w-full">
              <Image
                src={'/soin/massotherapie huile.avif'}
                width={1000}
                height={1000}
                alt="massage thérapeutique"
                className="w-full h-auto w object-cover rounded-[3rem] shadow-lg"
              />

              <Image
                src={'/soin/massotherapie massage.avif'}
                width={1000}
                height={1000}
                alt="massage thérapeutique"
                className="w-full h-auto object-cover rounded-[3rem] shadow-lg"
              />
            </div>
            <div className="basis-[60%] space-y-10">
              <div className="space-y-5">
                <h2 className="text-2xl font-semibold">
                  Pourquoi opter pour un massage classique ?
                </h2>
                <p className="text-justify font-light">
                  Un massage classique n’est pas un simple luxe : c’est une
                  pratique nécessaire pour maintenir un équilibre physique et
                  mental. Par des mouvements fluides et des pressions ciblées,
                  il facilite la guérison tout en étant un remède 100% naturel
                  sans effets secondaires. Il exerce des bienfaits profonds sur
                  les muscles, les articulations, et la circulation sanguine.
                </p>
              </div>
              <div className="space-y-5">
                <h2 className="text-2xl font-semibold">
                  Les bienfaits du massage classique
                </h2>
                <p className="text-justify font-light">
                  En alliant relaxation et thérapeutique, le massage classique
                  offre une multitude d’effets bénéfiques. Il permet de relâcher
                  les tensions accumulées, soulage les douleurs musculaires et
                  favorise la souplesse des articulations. En stimulant la
                  circulation sanguine, il aide à prévenir les problèmes tels
                  que les jambes lourdes ou les varices. De plus, il améliore la
                  circulation lymphatique, augmentant ainsi la capacité de
                  l’organisme à éliminer les toxines.
                </p>
                <p className="text-justify font-light">
                  Le massage classique soulage également les douleurs, aide à la
                  récupération après un effort physique, et peut avoir un impact
                  positif sur la santé mentale en réduisant le stress et en
                  améliorant l’état d’esprit. En pratiquant régulièrement, on
                  observe une amélioration notable de la condition physique et
                  mentale, ainsi qu’une sensation de bien-être durable.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full items-center justify-center flex">
          <Button
            asChild
            className=" py-8 px-10 text-lg  rounded-full bg-[#ED1C8F] hover:bg-[#ed1c8fbb] text-white"
          >
            <Link href="/contact"> Réservez un massage thérapeutique</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

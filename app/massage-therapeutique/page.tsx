import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div className="bg-gradient-to-b px-5 from-transparent to-[#ee818368] py-40">
      <div className="space-y-12 text-lg tracking-wide  max-w-5xl  mx-auto">
        <h1 className="lg:text-6xl sm:text-5xl text-4xl text-center text-[#C3B4A4]">
          MASSAGE THÉRAPEUTIQUE
        </h1>
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Qu&apos;est-ce que le message thérapeutique ?
          </h2>
          <p className="text-justify  font-light">
            Le massage thérapeutique est sans doute la méthode la plus prisée
            dans le milieu des médecines naturelles. Sa pratique s&apos;étend à
            un grand nombre d&apos;individus, des très jeunes enfants aux
            personnes âgées, que l&apos;on hésiterait à confier aux soins plus
            vigoureux de pratiques comme la chiropratique, par exemple.
          </p>
          <p className="text-justify font-light">
            Bien qu&apos;également réconfortant, le massage thérapeutique
            s&apos;oppose au massage de bien-être. Il doit être effectué par une
            personne compétente : le thérapeute professionnel et peut porter sur
            certaines zones précises du corps ou sur le corps entier.
          </p>
          <div className="flex max-md:flex-col gap-10 w-full">
            <div className="w-full">
              <Image
                src={
                  '/soin/Sophiedeneriaz_ch - massage drainage lymphatique-therapeutique.avif'
                }
                width={1000}
                height={1000}
                alt="massage thérapeutique"
                className="w-full h-auto object-cover rounded-[3rem] shadow-lg"
              />
              <span className="relative max-md:text-sm md:left-5 top-1 font-light">
                Pressions exercées pour relâcher les contractions.
              </span>
            </div>
            <div className="w-full">
              <Image
                src={'/soin/woman-relaxing-spa-salon-therapeutique.avif'}
                width={1000}
                height={1000}
                alt="massage thérapeutique"
                className="w-full h-auto object-cover rounded-[3rem] shadow-lg"
              />
              <span className="relative  max-md:text-sm md:left-5 top-1 font-light">
                Pressions pour optimiser le fonctionnement de la circulation
                lymphatique.
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Pourquoi un massage thérapeutique ?
          </h2>
          <p className="text-justify font-light">
            Un massage thérapeutique ne s&apos;apparente en aucun cas à un luxe
            : c&apos;est une nécessité à laquelle il est conseillé d’avoir
            recours. Par des pressions effectuées sur les parties à traitées ou
            sur l&apos;intégralité du corps, ce type de massage peut, en effet,{' '}
            <strong>contribuer à optimiser la guérison d’une personne</strong>{' '}
            tout en étant <strong>un remède 100% naturel</strong> qui
            n&apos;engendre pas d&apos;effets secondaires. Il provoque des
            effets bénéfiques puissants sur les articulations ainsi que la
            circulation sanguine.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Les bienfaits du massage thérapeutique
          </h2>
          <ul className="lg:grid flex flex-wrap justify-center items-center lg:grid-cols-2 gap-5">
            {bienfaitsTherapeutique.map((bienfait, index) => (
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
            En conciliant bien-être et thérapie, ce type de massage engendre{' '}
            <strong>de nombreux effets bénéfiques.</strong> Le massage
            thérapeutique offre par exemple la possibilité de se relaxer et de
            se déstresser. Parallèlement à cela,{' '}
            <strong>
              il remédie aux douleurs que l’on éprouve au niveau du dos, dénoue
              les tensions au niveau des muscles et optimise la souplesse au
              niveau des articulations.
            </strong>
          </p>
          <p className="text-justify font-light">
            En activant la circulation sanguine{' '}
            <strong>
              il permet de lutter contre les varices ou encore les problèmes de
              jambes lourdes.
            </strong>{' '}
            Par ailleurs{' '}
            <strong>
              il optimise le fonctionnement de la circulation lymphatique, ce
              qui a pour effet d’augmenter la capacité de l’organisme à éliminer
              les toxines.
            </strong>
          </p>
          <p className="text-justify font-light">
            Le massage thérapeutique permet également de{' '}
            <strong>
              soulager la douleur, de guérir les problèmes respiratoires et
              d’optimiser le fonctionnement du système digestif.
            </strong>{' '}
            Sur le plan psychologique, ce type de massage est prescrit pour{' '}
            <strong>guérir les dépressions et le stress.</strong>
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

const bienfaitsTherapeutique = [
  'Soulage les douleurs musculaires et articulaires',
  'Améliore la circulation sanguine et lymphatique',
  'Réduit le stress, l’anxiété et les états dépressifs',
  'Optimise la souplesse et dénoue les tensions',
  'Stimule l’élimination des toxines',
  'Favorise la récupération physique et mentale',
  'Soutient le système digestif et respiratoire',
  'Soin naturel sans effets secondaires',
];

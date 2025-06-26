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
            Qu’est-ce que le message thérapeutique ?
          </h2>
          <p className="text-justify  font-light">
            Le massage thérapeutique est sans doute la méthode la plus prisée
            dans le milieu des médecines naturelles. Sa pratique s'étend à un
            grand nombre d'individus, des très jeunes enfants aux personnes
            âgées, que l'on hésiterait à confier aux soins plus vigoureux de
            pratiques comme la chiropratique, par exemple. Certains cabinets de
            massage se spécialisent même dans le traitement des animaux
            domestiques souffrants de malformations ou de douleurs arthritiques.
          </p>
          <p className="text-justify font-light">
            Bien qu'également réconfortant, le massage thérapeutique s’oppose au
            massage de bien-être. Il doit être effectué par une personne
            compétente : le thérapeute professionnel et peut porter sur
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
            Un massage thérapeutique ne s’apparente en aucun cas à un luxe :
            c’est une nécessité à laquelle il est conseillé d’avoir recours. Par
            des pressions effectuées sur les parties à traitées ou sur
            l’intégralité du corps, ce type de massage peut, en effet,{' '}
            <strong>contribuer à optimiser la guérison d’une personne</strong>{' '}
            tout en étant <strong>un remède 100% naturel</strong> qui n'engendre
            pas d'effets secondaires. Il provoque des effets bénéfiques
            puissants sur les articulations ainsi que la circulation sanguine.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Les bienfaits du massage thérapeutique
          </h2>
          <p className="text-justify font-light">
            En conciliant bien-être et thérapie, ce type de massage engendre{' '}
            <strong>de nombreux effets bénéfiques.</strong> Le massage
            thérapeutique offre par exemple la possibilité de se relaxer et à se
            de-stresser. Parallèlement à cela,{' '}
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
            <strong>guérir les dépressions et les stress.</strong>
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

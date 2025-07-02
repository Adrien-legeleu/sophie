import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div className="bg-gradient-to-b from-transparent px-5 to-[#ee818368] py-40">
      <div className="space-y-12 text-lg tracking-wide  max-w-5xl  mx-auto">
        <h1 className="lg:text-6xl sm:text-5xl text-4xl text-center text-[#C3B4A4]">
          MASSAGE ASSIS
        </h1>
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Pourquoi opter pour un massage assis en entreprise ?
          </h2>
          <p className="text-justify  font-light">
            Le massage assis en entreprise est une solution innovante et
            efficace pour améliorer le bien-être des employés sur leur lieu de
            travail. Offrant une pause régénérante au cours de la journée, ce
            type de massage permet de relâcher rapidement les tensions
            accumulées et de réduire le stress, sans nécessiter de vêtements
            spéciaux ni de temps de préparation. Réalisé sur une chaise
            ergonomique, il cible spécifiquement les zones les plus sollicitées
            par un travail sédentaire, comme le dos, les épaules et le cou.
            Intégrer des séances de massage assis dans un environnement
            professionnel contribue à créer une atmosphère plus détendue et
            productive.
          </p>

          <div className="flex max-md:flex-col max-md:items-center max-md:justify-center gap-10 pt-10">
            <div className="flex flex-col basis-[40%] gap-5 w-full">
              <Image
                src={'/soin/Sophie_Dénériaz_-_Massage_en_entreprise_.avif'}
                width={1000}
                height={1000}
                alt="massage thérapeutique"
                className="w-full h-auto object-cover rounded-[3rem] shadow-lg"
              />
              <span className="relative left-5 text-sm top-1 font-light">
                Massage assis sur chaise ergonomique d&apos;une durée de 15
                minutes. Le massé conserve ses vêtements, aucune huile
                n&apos;est utilisée.
              </span>
            </div>
            <div className="basis-[60%] space-y-10">
              <div className="space-y-5">
                <h2 className="text-2xl font-semibold">
                  Les bienfaits du massage assis en entreprise
                </h2>
                <p className="text-justify font-light">
                  Le massage assis en entreprise offre une multitude de
                  bienfaits tant pour les employés que pour l&apos;entreprise
                  elle-même. Tout d&apos;abord, il aide à réduire le stress et
                  l&apos;anxiété, ce qui se traduit par une meilleure
                  concentration et une augmentation de la productivité. En
                  soulageant les douleurs musculaires, il contribue également à
                  réduire l&apos;absentéisme dû aux troubles
                  musculo-squelettiques, tels que les douleurs cervicales et les
                  tensions dorsales.
                </p>
              </div>

              <p className="text-justify font-light">
                En activant la circulation sanguine, le massage assis favorise
                une meilleure oxygénation des tissus, ce qui permet aux employés
                de se sentir plus alertes et énergiques. Ce soin rapide et
                accessible est particulièrement bénéfique pour ceux qui passent
                de longues heures devant un ordinateur, aidant ainsi à prévenir
                le syndrome du canal carpien et d&apos;autres affections liées à
                une posture inadéquate.
              </p>
              <p className="text-justify font-light">
                De plus, proposer des massages assis dans le cadre de la
                politique de bien-être en entreprise renforce le sentiment
                d’appartenance et améliore la satisfaction au travail. Cela
                montre également que l&apos;entreprise se soucie du bien-être de
                ses employés, ce qui peut renforcer leur engagement et leur
                motivation. En somme, le massage assis en entreprise est un
                investissement judicieux pour favoriser la santé, la
                productivité et la cohésion d&apos;équipe.
              </p>
            </div>
          </div>
          <div className="space-y-5 pt-10">
            <h2 className="text-2xl text-center font-semibold">
              Bienfaits principaux en un coup d’œil
            </h2>
            <ul className="flex flex-wrap justify-center items-center gap-5">
              {bienfaitsMassageAssis.map((bienfait, index) => (
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
        </div>

        <div className="w-full items-center flex-col gap-5 justify-center flex">
          <p className="text-center text-lg font-semibold">
            N&apos;hésitez pas à demander un devis !
          </p>
          <Button
            asChild
            className=" py-8 px-10 text-lg  rounded-full bg-[#ED1C8F] hover:bg-[#ed1c8fbb] text-white"
          >
            <Link href="/contact"> Réservez un massage</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

const bienfaitsMassageAssis = [
  'Réduction du stress et de l’anxiété',
  'Soulagement des tensions cervicales et dorsales',
  'Amélioration de la concentration et de la productivité',
  'Prévention des troubles musculo-squelettiques',
  'Stimulation de la circulation sanguine',
  'Renforcement du sentiment de bien-être au travail',
  'Amélioration de la posture',
  'Soin rapide, accessible et non invasif',
];

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function AssurancePage() {
  return (
    <div className="bg-gradient-to-b px-5 from-transparent to-[#ee818368]">
      <div className="space-y-20 text-lg tracking-wide py-40 max-w-5xl mx-auto">
        <h1 className="lg:text-6xl sm:text-5xl text-4xl text-center text-[#C3B4A4]">
          RECONNAISSANCE <br />
          DES ASSURANCES
        </h1>
        <div className="flex flex-col items-center gap-10">
          {/* Logo ASCA */}
          <div className="w-full mx-auto flex flex-col md:flex-row gap-8 items-center justify-center">
            <Image
              src={'/asca-logo.png'}
              width={250}
              height={250}
              alt="Logo ASCA"
              className="w-48 h-auto object-contain"
            />
            <Image
              src={'/logo_f_RME.png'}
              width={250}
              height={250}
              alt="Logo RME"
              className="w-48 h-auto object-contain"
            />
          </div>
          {/* Introduction */}
          <div className="space-y-8 flex-1">
            <p className="text-justify font-light">
              <strong>Reconnaissance officielle :</strong> Je suis agréée par l’
              <strong>ASCA</strong> et par le <strong>RME</strong>, deux labels
              majeurs en Suisse qui garantissent la qualité et la sécurité des
              soins, et ouvrent droit au remboursement par de nombreuses
              assurances complémentaires.
            </p>
            <p className="text-justify font-light">
              <strong>L’ASCA</strong> est l’organisme de référence pour le
              remboursement des thérapeutes, tandis que <strong>le RME</strong>{' '}
              (Registre de Médecine Empirique) est un label encore plus
              exigeant, reconnu pour son haut niveau de qualité et d’exigence
              auprès des assureurs suisses.
            </p>
            <p className="text-justify font-light">
              <span className="font-medium text-[#ED1C8F]">Important :</span>{' '}
              Chaque assurance applique ses propres conditions de remboursement.
              Il est indispensable de vous renseigner directement auprès de
              votre assurance complémentaire pour vérifier la prise en charge de
              votre soin.
            </p>
          </div>
          {/* Section ASCA */}
          <div className="w-full space-y-5">
            <h3 className="text-2xl font-semibold">
              Assurances agréées ASCA :
            </h3>
            <ul className="flex-wrap gap-5 flex">
              {assurances.map((assurance, index) => (
                <li
                  key={index}
                  className="inline-flex w-max px-4 py-2 items-center gap-2 rounded-full bg-white shadow-md"
                >
                  <a
                    href={assurance.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex text-sm items-center justify-center gap-2"
                  >
                    <div className="h-2 w-2 bg-[#ED1C8F] rounded-full" />
                    {assurance.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Section Groupe Mutuel */}
          <div className="w-full space-y-5">
            <h3 className="text-2xl font-semibold">Groupe Mutuel :</h3>
            <ul className="flex-col gap-5 flex">
              {groupMutuelles.map((grp, index) => (
                <li
                  key={index}
                  className="inline-flex w-max px-4 py-2 items-center gap-2 rounded-full bg-white shadow-md"
                >
                  <a
                    href={grp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex text-sm items-center justify-center gap-2"
                  >
                    <div className="h-2 w-2 bg-[#ED1C8F] rounded-full" />
                    {grp.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Section RME */}
          <div className="w-full space-y-5 mt-10">
            <h3 className="text-2xl font-semibold">Assurances agréées RME :</h3>
            <p className="text-justify font-light">
              Grâce à ma reconnaissance RME, mes prestations sont éligibles au
              remboursement auprès d’une grande majorité d’assurances
              complémentaires suisses partenaires du RME.
              <br />
              <a
                href="https://rme.ch/fr/partenaires"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#ED1C8F]"
              >
                Voir la liste complète des assureurs agréés RME
              </a>
              .
            </p>
          </div>
          {/* Accroche finale */}
          <p className="text-justify font-light">
            Chaque séance est personnalisée selon vos besoins, que vous
            recherchiez un massage relaxant, thérapeutique ou plus dynamique.
            Grâce à une approche bienveillante et professionnelle, je vous aide
            à retrouver équilibre et vitalité.
          </p>
          <p className="text-justify font-light">
            Offrez-vous cette pause bien-être, votre corps vous en remerciera.
          </p>
        </div>
        {/* Bouton contact */}
        <div className="w-full flex items-center justify-center">
          <Button
            asChild
            className="py-8 px-10 text-lg rounded-full bg-[#ED1C8F] hover:bg-[#ed1c8fbb] text-white"
          >
            <Link href="/contact">Parlons de votre projet</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

// Listes des assurances
const assurances = [
  { title: 'AMB', link: 'https://www.amb.ch' },
  { title: 'ASSURA', link: 'https://www.assura.ch' },
  { title: 'INTRAS', link: 'https://www.intras.ch' },
  { title: 'Krankenkasse WÄDENSWIL', link: 'https://www.wkk.ch' },
  { title: 'SANITAS', link: 'https://www.sanitas.com' },
  { title: 'SUPRA', link: 'https://www.supra-1846.ch' },
  { title: 'SWICA', link: 'https://www.swica.ch' },
  { title: 'RHENUSANA', link: 'https://www.rhenusana.ch' },
  { title: 'VIVAO SYMPANY, MOOVE SYMPANY', link: 'https://www.sympany.ch' },
  { title: 'FKB', link: 'https://www.fkb.ch' },
];

const groupMutuelles = [
  {
    title: 'AVENIR Assurance Maladie SA',
    link: 'https://www.groupemutuel.ch/fr/clients-prives/avenir.html',
  },
  {
    title: 'PHILOS Assurance Maladie SA',
    link: 'https://www.groupemutuel.ch/fr/clients-prives/philos.html',
  },
  {
    title: 'Easy Sana Assurances Maladie SA',
    link: 'https://www.groupemutuel.ch/fr/clients-prives/easysana.html',
  },
  {
    title: 'Mutuel Assurance Maladie SA',
    link: 'https://www.groupemutuel.ch/fr/clients-prives/mutuel.html',
  },
];

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div className=" bg-gradient-to-b from-transparent to-[#ee818368] ">
      <div className="space-y-20 text-lg tracking-wide py-40 max-w-5xl mx-auto">
        <h1 className="text-6xl text-center text-[#C3B4A4]">
          RECONNAISSANCE <br />
          DES ASSURANCES
        </h1>
        <div className="flex flex-col items-center gap-10">
          <div className="w-full mx-auto">
            <Image
              src={'/asca-logo.png'}
              width={1000}
              height={1000}
              alt="massage thérapeutique"
              className="w-48 mx-auto h-auto object-cover "
            />
          </div>
          <div className="space-y-8 flex-1">
            <p className="text-justify  font-light">
              <strong>
                Agréée par l’ASCA, organisme de référence pour le remboursement
                des thérapeutes,
              </strong>{' '}
              certains soins (comme les massages classiques) sont remboursés en
              partie par les assureurs listés ci-dessous,{' '}
              <strong>
                à condition que le soin soit à visée thérapeutique
              </strong>{' '}
              et non pas à titre de prévention ou de bien-être.​
            </p>
            <p className="text-justify  font-light">
              Chaque caisse a son propre règlement de remboursement, de ce fait,
              <strong>
                il est indispensable de vous informer directement auprès de
                votre assurance complémentaire pour connaître leurs conditions
              </strong>{' '}
              et s’ils vont rembourser le soin que vous désirez.
            </p>
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold">
                Liste des assurances maladie conventionnées :
              </h3>
              <ul className="flex-wrap gap-5 flex ">
                {assurances.map((assurance, index) => (
                  <li
                    key={index}
                    className="inline-flex w-max px-4 py-2 items-center gap-2 rounded-full bg-white shadow-md"
                  >
                    <a
                      href={assurance.link}
                      className="relative flex text-sm items-center justify-center gap-2"
                    >
                      <div className="h-2 w-2 bg-[#ED1C8F] rounded-full" />
                      {assurance.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold">groupe mutuel :</h3>
              <ul className="flex-col gap-5 flex ">
                {groupMutuelles.map((grp, index) => (
                  <li
                    key={index}
                    className="inline-flex w-max px-4 py-2 items-center gap-2 rounded-full bg-white shadow-md"
                  >
                    <a
                      href={grp.link}
                      className="relative flex text-sm items-center justify-center gap-2"
                    >
                      <div className="h-2 w-2 bg-[#ED1C8F] rounded-full" />
                      {grp.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-justify  font-light">
              Chaque séance est personnalisée selon vos besoins, que vous
              recherchiez un massage relaxant, thérapeutique ou plus dynamique.
              Grâce à une approche bienveillante et professionnelle, je vous
              aide à retrouver équilibre et vitalité.
            </p>
            <p className="text-justify  font-light">
              Offrez-vous cette pause bien-être, votre corps vous en remerciera.
            </p>
          </div>
        </div>

        <div className="w-full items-center justify-center flex">
          <Button
            asChild
            className=" py-8 px-10 text-lg  rounded-full bg-[#ED1C8F] hover:bg-[#ed1c8fbb] text-white"
          >
            <Link href="/contact"> Parlons de votre projet</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
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
    title: 'AVENIR Assurance Maladie SA (Avenir, CMBB, St. Moritz)',
    link: 'https://www.groupemutuel.ch/fr/clients-prives/avenir.html',
  },
  {
    title:
      'PHILOS Assurance Maladie SA (Philos, Avantis, Fonction publique, Troistorrents, Panorama, EOS)',
    link: 'https://www.groupemutuel.ch/fr/clients-prives/philos.html',
  },
  {
    title:
      'Easy Sana Assurances Maladie SA (Caisse vaudoise, Hermes, Easysana)',
    link: 'https://www.groupemutuel.ch/fr/clients-prives/easysana.html',
  },
  {
    title: 'Mutuel Assurance Maladie SA (Mutuel, Universa, Natura)',
    link: 'https://www.groupemutuel.ch/fr/clients-prives/mutuel.html',
  },
];

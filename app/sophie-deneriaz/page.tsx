import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div className="bg-gradient-to-b from-transparent px-5 to-[#ee818368] py-40">
      <div className="space-y-12 text-lg tracking-wide  max-w-7xl  mx-auto">
        <h1 className="text-6xl text-center text-[#C3B4A4]">SOPHIE DÉNÉRIAZ</h1>
        <div className="flex max-lg:flex-col max-lg:justify-center items-center gap-20">
          <div className="lg:w-full lg:flex-1 w-64 mx-auto">
            <Image
              src={'/sophie profil.avif'}
              width={1000}
              height={1000}
              alt="massage thérapeutique"
              className="w-full h-auto object-cover rounded-full shadow-lg"
            />
          </div>
          <div className="space-y-8 flex-1">
            <p className="text-justify  font-light">
              Depuis toujours, le bien-être des autres a été au cœur de ma vie.
              Très tôt, j’ai compris à quel point le massage pouvait soulager,
              détendre et rééquilibrer le corps. C’est cette passion qui m’a
              naturellement menée à la massothérapie, une pratique qui allie
              écoute, intuition et techniques éprouvées pour favoriser un
              mieux-être durable.
            </p>
            <p className="text-justify  font-light">
              Aujourd’hui, en tant que massothérapeute certifiée, je vous
              accompagne pour :
            </p>
            <ul className="space-y-4 flex-colflex flex-wrap justify-center items-start max-lg:items-center">
              {accompagnements.map((accomp, index) => (
                <li
                  key={index}
                  className="flex max-sm:max-w-sm sm:w-max px-4 py-2 items-center gap-2 max-sm:text-sm rounded-full bg-white shadow-md  text-center"
                >
                  <div className="h-2 w-2 bg-[#ED1C8F] rounded-full" />
                  {accomp}
                </li>
              ))}
            </ul>

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
            <Link href="/contact"> Prendre rendez-vous</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

const accompagnements = [
  'Relâcher les tensions musculaires et nerveuses',
  'Apaiser les douleurs chroniques et le stress',
  'Améliorer la circulation sanguine et lymphatique',
  'Offrir un moment de profonde détente et de reconnexion à soi',
];

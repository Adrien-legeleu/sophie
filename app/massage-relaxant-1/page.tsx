import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div className="bg-gradient-to-b px-5 from-transparent to-[#ee818368] py-40">
      <div className="space-y-12 text-lg tracking-wide  max-w-5xl  mx-auto">
        <h1 className=" lg:text-6xl sm:text-5xl text-4xl text-center text-[#C3B4A4]">
          MASSAGE RELAXANT DYNAMISÉ À LA SHUNGITE
        </h1>
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Pourquoi un massage relaxant dynamisé à la shungite ?
          </h2>
          <p className="text-justify  font-light">
            Le massage relaxant dynamisé à la shungite n'est pas seulement un
            moment de détente, c’est un véritable soin holistique qui s'appuie
            sur les vertus exceptionnelles de la shungite. Cette pierre, connue
            pour ses propriétés purifiantes et protectrices, aide à rééquilibrer
            les énergies tout en absorbant les ondes électromagnétiques. Ce type
            de massage permet de relâcher les tensions, d'apaiser le corps, tout
            en optimisant l'énergie vitale. En plus d'être un remède 100%
            naturel, il aide à revitaliser l’organisme sans effets secondaires.
          </p>
        </div>

        <Image
          src={'/services/massage relaxant dynamise a la shungite.avif'}
          width={1000}
          height={1000}
          alt="massage thérapeutique"
          className="w-full h-auto object-cover rounded-[3rem] shadow-lg"
        />
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Le massage relaxant dynamisé à la Shungite, c’est quoi ?
          </h2>
          <p className="text-justify font-light">
            Le massage relaxant dynamisé à la Shungite est réalisé sur
            l'ensemble du corps. Il se pratique{' '}
            <strong>
              avec une huile végétale de première qualité dynamisée à la pierre
              de Shungite.
            </strong>{' '}
            Le massage relaxant est{' '}
            <strong>
              composé de manœuvres douces de pétrissages des muscles,
              d'effleurages, de pressions et de lissages fluides.
            </strong>{' '}
            Les gestes sont{' '}
            <strong>
              lents et légèrement appuyés, afin de dénouer les tensions du
              massé, sans que celui-ci ne ressente aucune gêne, aucune douleur.
            </strong>
          </p>
          <p className="text-justify font-light">
            À l’arrivée vous êtes invité(e) à discuter quelques instants, le
            temps d’en savoir plus sur vous, votre état de stress, les tensions
            que vous pouvez ressentir au quotidien ou dans des situations bien
            précises, comme au travail. Après cette étape, j'adapte l’intensité
            de mes manœuvres et{' '}
            <strong>les zones du corps sur lesquelles il faut insister.</strong>{' '}
            Le massage relaxant se pratique avec des huiles essentielles
            d'origine suisse et la séance se termine par un petit temps de
            repos, le temps pour vous de retrouver vos esprits.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Quels sont les bienfaits du massage relaxant ?
          </h2>
          <p className="text-justify font-light">
            Vous faire <strong>passer un moment inoubliable,</strong> notamment
            en réunissant toutes les conditions pour que le massage soit réalisé
            dans un cadre apaisant : musique relaxante, effluves gourmandes,
            ambiance calme... Tout est mis en œuvre pour vous faire{' '}
            <strong>oublier l’agitation du quotidien !</strong>
          </p>
          <p className="text-justify font-light">
            De plus, les massages relaxants sont le plus souvent adaptés à vos
            besoins :{' '}
            <strong>
              les tensions s’envolent, le stress est un souvenir lointain, on se
              sent détendu, relaxé, apaisé, en harmonie avec nous-même.
            </strong>
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

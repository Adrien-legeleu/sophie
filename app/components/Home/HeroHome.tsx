import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import StarClientsGoogle from './GoogleClientsHero';

export default function HeroHome() {
  return (
    <div className='bg-[url("/home_image_hero.avif")] w-full h-screen bg-cover bg-center flex text-center gap-8 flex-col items-center justify-center text-white '>
      <div className="h-screen absolute w-full top-0 left-0 bg-white/10 " />
      <Image
        src={'/logo original sophie deneriaz.avif'}
        alt="logo-sophie-dénériaz"
        width={1000}
        height={1000}
        className="w-96  relative top-10 z-10"
      />
      <div>
        <h2 className="text-3xl font-semibold z-10">
          MASSAGES <br />
          RELAXANTS & THÉRAPEUTIQUES
        </h2>
        <h1 className="text-7xl z-10 font-bold  text-[#ED1C8F]">
          SOPHIE DÉNÉRIAZ
        </h1>
      </div>
      <StarClientsGoogle />
      <div className="flex gap-10 justify-center items-center z-10">
        <Button
          asChild
          className="text-lg py-7 px-5 rounded-full bg-white text-black"
        >
          <a href="tel:+41793562008">Nous appeler ?</a>
        </Button>

        <Button
          asChild
          className="text-lg py-7 px-5 rounded-full bg-white text-black"
        >
          <Link href="/contact"> Prendre rendez-vous</Link>
        </Button>
      </div>
    </div>
  );
}

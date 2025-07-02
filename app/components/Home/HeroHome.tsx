import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import StarClientsGoogle from './GoogleClientsHero';
import { IconPhoneFilled, IconCalendarMonthFilled } from '@tabler/icons-react';

export default function HeroHome() {
  return (
    <div className='bg-[url("/home_image_hero.avif")] w-full h-screen bg-cover bg-center flex text-center gap-8 xs:gap-16 lg:gap-8 flex-col items-center justify-center text-white '>
      <div className="h-screen absolute w-full top-0 left-0 bg-white/10 max-lg:backdrop-blur-sm " />
      <div className="absolute top-6 xl:hidden translate-y-0 left-6">
        <StarClientsGoogle />
      </div>
      <Image
        src={'/logo original sophie deneriaz.avif'}
        alt="logo-sophie-dénériaz"
        width={1000}
        height={1000}
        className="lg:w-96 w-1/2  relative top-10 z-10"
      />
      <div className="z-10 px-5 space-y-2">
        <h2 className=" md:text-6xl sm:text-5xl text-4xl  font-semibold z-10">
          Massages
          <br />
          Relaxation & Bien-être
        </h2>
        <h1
          className="md:text-3xl   text-2xl z-10 font-bold  text-[#c81979]"
          style={{ textShadow: '0 0px 6px rgba(255, 255, 255, 0.9)' }}
        >
          Sophie Dénériaz, massothérapeute certifiée
        </h1>
      </div>

      <div className="flex max-sm:flex-col sm:gap-10 gap-5 justify-center items-center z-10">
        <Button
          asChild
          className="xs:text-lg  px-5 py-7 rounded-full bg-white text-black"
        >
          <a href="tel:+41793562008">
            {' '}
            <IconPhoneFilled className="min-w-6 min-h-6 text-[#ED1C8F]" />{' '}
            Appeler Sophie
          </a>
        </Button>
        <Button
          asChild
          className="xs:text-lg py-7 px-5 rounded-full bg-white text-black"
        >
          <Link href="/contact">
            <IconCalendarMonthFilled className="min-w-6 min-h-6  text-[#ED1C8F]" />
            Prendre rendez-vous
          </Link>
        </Button>
      </div>
    </div>
  );
}

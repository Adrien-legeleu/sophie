'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Shungite() {
  return (
    <div className="bg-[url('/chambre%20de%20shungite%20fond.avif')] px-5 overflow-hidden relative w-full h-full py-20 bg-cover bg-center flex text-center gap-10 flex-col items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        transition={{ type: 'spring', damping: 10, stiffness: 20 }}
        className="absolute z-50 top-0 left-1/2 max-md:-translate-x-1/2 md:left-0 bg-[#ed1c8f81] w-2/3 md:w-64 h-48 md:h-96 blur-[80px] md:-rotate-45 "
      />
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        transition={{ type: 'spring', damping: 10, stiffness: 20 }}
        className="absolute max-md:hidden z-50 top-0 right-0 bg-[#ed1c8f81] w-64 h-96 blur-[80px] rotate-45 "
      />
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        transition={{ type: 'spring', damping: 10, stiffness: 20 }}
        className="absolute z-50 bottom-0 right-0 bg-[#ed1c8f3a] w-64 h-96 blur-[80px] -rotate-45 "
      />
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        transition={{ type: 'spring', damping: 10, stiffness: 20 }}
        className="absolute z-50 bottom-0 left-0 bg-[#ed1c8f23] w-64 h-96 blur-[80px] -rotate-45 "
      />

      <h2 className="lg:text-6xl sm:text-5xl text-4xl text-[#C3B4A4] font-bold ">
        Chambre de Shungite à Lutry
      </h2>
      <p className="max-w-3xl text-black text-center text-lg mx-auto">
        Offrez-vous un moment de relaxation profonde dans notre chambre de
        shungite à Lutry. Un espace apaisant pour recharger vos énergies,
        retrouver calme et équilibre grâce aux vertus naturelles de la shungite.
        Idéal pour relâcher les tensions, apaiser l’esprit et favoriser votre
        bien-être en Suisse.
      </p>

      <Button
        asChild
        className="text-lg py-7 px-5 rounded-full bg-[#ED1C8F] hover:bg-[#ed1c8fbb] text-white"
      >
        <a href={'https://healthyshungite.ch/boutique-shungite/'}>
          Réserver maintenant
        </a>
      </Button>
      <Image
        src={'/chambre de shungite image.avif'}
        alt="chambre de shungite à Lutry"
        width={1000}
        height={1000}
        className="aspect-video w-full object-cover rounded-[3rem] shadow-lg max-w-4xl mx-auto "
      />
    </div>
  );
}

'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Shungite() {
  return (
    <div className="bg-[url('/chambre%20de%20shungite%20fond.avif')] overflow-hidden relative w-full h-full py-20 bg-cover bg-center flex text-center gap-10 flex-col items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        transition={{ type: 'spring', damping: 10, stiffness: 20 }}
        className="absolute z-50 top-0 left-0 bg-[#ed1c8f81] w-64 h-96 blur-[80px] -rotate-45 "
      />
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        transition={{ type: 'spring', damping: 10, stiffness: 20 }}
        className="absolute z-50 top-0 right-0 bg-[#ed1c8f81] w-64 h-96 blur-[80px] rotate-45 "
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

      <h2 className="text-6xl text-[#C3B4A4] font-semibold ">
        CHAMBRE DE SHUNGITE
      </h2>
      <p className="max-w-3xl text-black text-center text-lg mx-auto">
        Découvrez notre chambre de Shungite, un espace unique conçu pour
        harmoniser vos énergies et apaiser votre esprit. Réservez dès maintenant
        pour profiter des bienfaits de cette pierre naturelle aux propriétés
        revitalisantes.
      </p>

      <Button
        asChild
        className="text-lg py-7 px-5 rounded-full bg-[#ED1C8F] hover:bg-[#ed1c8fbb] text-white"
      >
        <a href={'https://healthyshungite.ch/boutique-shungite/'}>
          Réserver maintenant !
        </a>
      </Button>
      <Image
        src={'/chambre de shungite image.avif'}
        alt="chambre de shungite"
        width={1000}
        height={1000}
        className="aspect-video w-full object-cover rounded-[3rem] shadow-lg max-w-4xl mx-auto "
      />
    </div>
  );
}

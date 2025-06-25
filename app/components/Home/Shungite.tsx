import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

export default function Shungite() {
  return (
    <div className="bg-[url('/chambre%20de%20shungite%20fond.avif')] w-full h-full py-20 bg-cover bg-center flex text-center gap-10 flex-col items-center justify-center text-white">
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

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="py-10 bg-[#FFD2D9] gap-5 flex flex-col w-full items-center justify-center">
      <Link href="/">
        <Image
          src={'/logo_site.avif'}
          alt="logo-sophie-dénériaz"
          width={1000}
          height={1000}
          className="h-48 w-48 object-contain"
        />
      </Link>
      <h2 className="text-4xl text-center">
        MASSAGES <br />
        RELAXANTS & THÉRAPEUTIQUES
      </h2>
      <div>
        <p className="text-center text-xl">Uniquement sur rendez-vous</p>
        <p className="text-center text-xl font-bold">
          Agréée ASCA & RME N° RCC: P402763
        </p>
      </div>
      <ul className="text-center text-xl">
        <li>Sophie Dénériaz</li>
        <li>Chemin de la Jaque 80</li>
        <li>1093 La Conversion</li>
        <li className="underline">
          <a href="tel:+41793562008"> Tél. 079 356 20 08</a>
        </li>
      </ul>
    </div>
  );
}

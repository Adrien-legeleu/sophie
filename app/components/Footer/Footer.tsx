import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className=" py-10 px-5 bg-[#FFD2D9] relative">
      <div className="max-w-[1400px] grid mx-auto md:grid-cols-2 grid-cols-1 relative justify-center items-center gap-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.740944153152!2d6.678682776193826!3d46.516693962602986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c2ee177e22b75%3A0x54a116ae591b1f03!2sChem.%20de%20la%20Jaque%2080%2C%201093%20Lutry%2C%20Suisse!5e1!3m2!1sfr!2sfr!4v1750865589439!5m2!1sfr!2sfr"
          style={{ border: 0 }}
          className="rounded-[3rem] w-full h-96 mx-auto"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className=" gap-5 flex mx-auto flex-col w-full items-center justify-center">
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
            <p className="text-center text-lg">Uniquement sur rendez-vous</p>
            <p className="text-center text-lg font-bold">
              Agréée ASCA & RME N° RCC: P402763
            </p>
          </div>
          <ul className="text-center text-lg">
            <li>Sophie Dénériaz</li>
            <li>Chemin de la Jaque 80</li>
            <li>1093 La Conversion Lutry</li>
            <li className="underline">
              <a href="tel:+41793562008"> Tél. 079 356 20 08</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

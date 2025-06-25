import Image from 'next/image';
import React from 'react';

export default function page() {
  return (
    <div className="p-6 space-y-8 max-w-4xl mx-auto text-justify">
      <h1 className="text-4xl font-bold text-center">CURE DE SHUNGITE</h1>
      <p className="text-blue-600 underline text-center">
        <a
          href="https://www.healthyshungite.ch"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.healthyshungite.ch
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-10">Notre boutique</h2>

      <h3 className="text-xl font-semibold">Qu’est-ce que la Shungite ?</h3>
      <p>
        La shungite est une substance minérale composée de carbone organique à
        98% et qui aurait environ deux milliards d’années. Cette pierre
        particulière contient des molécules de carbone appelées fullérènes.
      </p>
      <img
        src="/images/shungite1.jpg"
        alt="Pierre de Shungite"
        className="rounded-2xl w-full my-4"
      />

      <h3 className="text-xl font-semibold">
        La Shungite, une pierre de protection contre les ondes
        électromagnétiques (Champ_EM)
      </h3>
      <p>
        La pierre de shungite est un allié précieux contre la pollution
        électromagnétique du Monde moderne. Elle s’avère être un bouclier idéal
        contre à la fois les radiations nommées « géopathogènes » et les champs
        électromagnétiques.
      </p>
      <p>
        Sa capacité à neutraliser les rayonnements électromagnétiques
        (electrosmog) est ainsi une des principales qualités. Les perturbations
        causées par les ondes des appareils modernes sans fil comme le Wi-Fi ou
        les téléphones portables sont fortement réduites.
      </p>
      <p>
        L’exposition aux ondes électromagnétiques fait vibrer le corps humain à
        des fréquences plus hautes que la normale. La shungite permet d’atténuer
        fortement l’impact de ces ondes sur nos organismes.
      </p>
      <p>
        Porter un bijou en pierre de shungite en pendentif, collier ou même dans
        sa poche est un moyen idéal pour se protéger pendant ses activités
        professionnelles ou dans les transports en commun où les champs
        électromagnétiques sont omniprésents.
      </p>
      <img
        src="/images/shungite2.jpg"
        alt="Bijou Shungite"
        className="rounded-2xl w-full my-4"
      />
      <p>
        Une experte de la shungite, Régine Martino, y a consacré un livre
        intitulé « La shungite, énergie de vie ». Dans cet ouvrage, elle décrit
        des expériences menées sur une série de pierres recommandées selon les
        zones énergétiques du corps.
      </p>
      <p>
        Contrairement à une autre pierre, la tourmaline noire, qui se charge
        rapidement, la shungite révèle des capacités assez extraordinaires :
        elle mobilise la circulation de l’énergie vitale pour la transformer,
        sans être elle-même affectée.
      </p>
      <p>
        Pour vous protéger activement et apaiser l’atmosphère au bureau, à la
        maison ou même lors de vos déplacements, pensez à placer dans la pièce
        une pyramide de shungite, un cube ou une sphère de shungite.
      </p>

      <h3 className="text-xl font-semibold">
        Sphère de Shungite en protection, rééquilibrage et harmonisation
      </h3>
      <p>
        À placer dans la chambre à coucher. Assure un sommeil apaisé, permettant
        de dormir en connexion avec notre propre champ bio-énergétique. Une
        sphère pesant env. 200 gr peut produire des effets bénéfiques dans un
        rayon de 2 mètres environ.
      </p>
      <Image
        src="/shungite3.jpg"
        alt="Sphère de Shungite"
        width={500}
        height={500}
        className="rounded-2xl w-full my-4"
      />

      <h3 className="text-xl font-semibold">
        Plaques de Shungite neutralisantes contre l’électrosmog
      </h3>
      <p>
        La shungite est aussi une pierre de soin avec des vertus sur le plan
        physique et mental. Depuis des siècles, la shungite a été utilisée pour
        ses vertus curatives. Son champ d’action est large.
      </p>
      <p>
        Elle active la circulation des fluides corporels et permet ainsi un
        regain d’énergie. Elle harmonise efficacement l’environnement dans
        lequel elle est placée et de fait, elle répare les dégâts causés par le
        stress, la fatigue ou le surmenage.
      </p>
      <img
        src="/images/shungite4.jpg"
        alt="Plaques de Shungite"
        className="rounded-2xl w-full my-4"
      />
    </div>
  );
}

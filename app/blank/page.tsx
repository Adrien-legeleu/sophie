import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div className="bg-gradient-to-b from-transparent px-5 to-[#ee818368] py-40">
      <div className="space-y-12 text-lg tracking-wide  max-w-5xl  mx-auto">
        <h1 className="lg:text-6xl sm:text-5xl text-4xl text-center text-[#C3B4A4]">
          CURE DE SHUNGITE
        </h1>
        <div className="relative">
          <Image
            src={'/blank/chambre shungite 5 image.avif'}
            width={1000}
            height={1000}
            alt="massage thérapeutique"
            className="w-full h-auto object-cover rounded-[3rem] shadow-lg"
          />
          <div className="absolute top-10 left-1/2 max-sm:text-sm -translate-x-1/2 py-2 px-4 rounded-3xl bg-white/80 backdrop-blur-[10px]">
            <a
              href="https://healthyshungite.ch/"
              className="cursor-pointer underline"
              target="_blank"
            >
              www.healthyshungite.ch
            </a>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <Button
            asChild
            className="text-lg py-7 px-5 rounded-full bg-[#ED1C8F] hover:bg-[#ed1c8fbb] text-white"
          >
            <a href={'https://healthyshungite.ch/boutique-shungite/'}>
              Notre boutique
            </a>
          </Button>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Qu&apos;est-ce que la Shungite ?
          </h2>
          <p className="text-justify  font-light">
            La Shungite est une substance minérale composée de carbone organique
            à 98% et qui aurait environ deux milliards d’années. Cette pierre
            particulière contient des molécules de carbones appelées «
            fullérènes ». Avec leurs structures en forme de pentagones similaire
            au graphite et au diamant, ces molécules de fullérènes présentent
            <strong>
              des propriétés uniques de captation, notamment d’électrons, ainsi
              que de nombreuses réactions d’oxydoréduction.
            </strong>
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            La Shungite, une pierre de protection contre les ondes
            électromagnétiques (Champ EM)
          </h2>
          <p className="text-justify  font-light">
            La pierre de shungite est{' '}
            <strong>
              un allié précieux contre la pollution électromagnétique
            </strong>
            du Monde moderne. Elle s’avère être un bouclier idéal contre à la
            fois les radiations nommées « géopathogènes » et les ondes
            électromagnétiques. Pour cela, son utilisation dans le cadre de
            l’hygiène énergétique en fait un outil approprié{' '}
            <strong>
              afin de se protéger des nuisances environnementales de type
              cosmos-telluriques
            </strong>
            (failles, nappe d’eau souterraine, rivières souterraines) et{' '}
            <strong>
              des rayonnements électromagnétiques émis par les appareils
            </strong>
            qui nous entourent (téléphonie mobile, ordinateur, Wifi,
            électroménager, antenne-relais, etc…).
          </p>
          <p className="text-justify  font-light">
            Sa capacité à neutraliser les rayonnements électromagnétiques
            (electrosmog) est ainsi une de ses principales qualités. Les
            perturbations causées par les ondes des appareils modernes sans fil
            (ordinateurs, téléphones portables, Wi-Fi, etc.) sont omniprésentes.
          </p>
          <p className="text-justify  font-light">
            L’exposition aux ondes électromagnétiques fait vibrer le corps
            humain à des fréquences plus hautes que la normale.{' '}
            <strong>
              La shungite permet d’atténuer fortement l’impact de ces ondes sur
              nos organismes.
            </strong>
            Porter un bijoux en pierre de shungite en pendentif, collier ou même
            dans sa poche est un moyen idéal pour se protéger pendant ses
            activités professionnelles ou dans les transports en commun où les
            ondes électromagnétiques sont les plus présentes au vu de la
            multitude d’appareils en activité.
          </p>
          <div className="flex max-md:flex-col-reverse max-md:items-center max-md:justify-center gap-20 mt-20">
            <div className="space-y-5 ">
              <p className="text-justify  font-light">
                Une experte de la shungite, Régine Martino, y a consacré un
                livre intitulé « La shungite, énergie de vie ». Dans cet
                ouvrage, elle décrit des expériences menées sur une série de
                pierres reconnues pour leurs propriétés de protection.
              </p>
              <p className="text-justify  font-light">
                Contrairement à une autre pierre, la tourmaline noire, qui se
                charge rapidement, la shungite révèle des capacités assez
                extraordinaires : elle{' '}
                <strong>
                  mobilise la circulation de l’énergie vitale pour réparer les
                  dégâts causés par les rayonnements négatifs, densifie le corps
                  énergétique, et grâce à ses caractéristiques moléculaires, ne
                  se charge jamais.
                </strong>{' '}
                Pour vous protéger activement et apaiser l’atmosphère au bureau,
                à la maison ou même lors de vos déplacements, pensez à placer
                dans la pièce{' '}
                <a
                  href="https://healthyshungite.ch/shop/pyramide-10-x-10-cm/"
                  target="_blank"
                  className="underline"
                >
                  une pyramide de shungite
                </a>
                , un cube ou une sphère de shungite. ​
              </p>
              <p className="text-justify  font-light">
                Sphère de Shungite en protection, rééquilibrage et
                harmonisation. À placer dans la chambre à coucher. Assure un
                sommeil apaisé, permettant de dormir en connexion avec notre
                propre champs bio-énergétique. Une sphère pesant env.200 gr peut
                produire des effets puissants jusqu’à une distance de 3 mètres.
                Idéales pour les personnes ayant des troubles du sommeil
                (insomnies, difficulté à s’endormir).{' '}
                <a
                  target="_blank"
                  href="https://healthyshungite.ch/shop/sphere-shungite-8-cm/"
                  className="underline"
                >
                  {' '}
                  Découvrez les différents modèles de sphères.
                </a>
              </p>
            </div>
            <Image
              src={'/blank/Shungite pièce web boule .avif'}
              width={1000}
              height={1000}
              alt="massage thérapeutique"
              className="w-full h-auto object-cover rounded-[3rem] shadow-lg"
            />
          </div>
        </div>

        <div className="flex max-md:flex-col max-md:items-center max-md:justify-center gap-10 pt-10">
          <div className="flex flex-col basis-[40%] gap-5 w-full">
            <Image
              src={'/blank/PLAQUES NEUTRALISANTES shungite.avif'}
              width={1000}
              height={1000}
              alt="massage thérapeutique"
              className="w-full h-auto object-cover rounded-[3rem] shadow-lg"
            />
            <span className="relative left-5 max-md:text-sm top-1 font-light">
              Plaques de Shungite neutralisantes contre l&apos;électrosmog.
            </span>
          </div>
          <div className="basis-[60%] space-y-10">
            <div className="space-y-5">
              <p className="text-justify font-light">
                La shungite est aussi une pierre de soin avec des vertus sur le
                plan physique et mental.
              </p>
              <p className="text-justify font-light">
                Depuis des siècles, la shungite a été utilisée pour ses vertus
                curatives. Son champ d’action est large. On lui a reconnu de
                nombreuses propriétés d’aides à la convalescence en renforçant
                le métabolisme énergétique et en stimulant les capacités
                d’auto-guérison de notre corps.
              </p>
              <p className="text-justify font-light">
                Elle active la circulation des fluides corporels et permet ainsi
                un regain d’énergie. Elle harmonise efficacement l’environnement
                dans lequel elle est placée et de fait, elle répare les dégâts
                occasionnés par les rayonnements électromagnétique nocifs.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            CHAMBRE SHUNGITE DE RÉGÉNÉRATION
          </h2>
          <p className="text-justify  font-light">
            Un moment privilégié pour tout votre être.
          </p>
          <p className="text-justify  font-light">
            Un espace de soins shungite unique.
          </p>
          <p className="text-justify  font-light">
            Une fois entré dans l’espace de détente dont les murs sont
            entièrement recouverts par 3,5 tonnes de Shungite, une harmonisation
            commence à se produire. Mais il y a bien plus que ça...
          </p>
        </div>
        <Image
          src={'/blank/chambre shungite 4 - web siege.avif'}
          width={1000}
          height={1000}
          alt="massage thérapeutique"
          className="w-full h-auto object-cover rounded-[3rem] shadow-lg"
        />

        <div className="space-y-5">
          <div>
            <p className="text-justify  font-light">
              Les effets bénéfiques agissent immédiatement car un travail au
              niveau moléculaire se produit. La Shungite est capable de dépister
              le mal et d’agir en profondeur. L’essentiel est de profiter le
              plus longtemps possible du lieu et de la sensation qu’il nous
              procure pour laisser le corps s’ouvrir afin que la Shungite
              agisse.
            </p>
            <p className="text-justify  font-light">
              <strong>
                {' '}
                Cette chambre de Shungite est particulièrement recommandée dans
                plusieurs situations, telles que:
              </strong>
            </p>
          </div>
          <ul className="gap-5 py-5  flex flex-wrap justify-center items-start max-lg:items-center">
            {troubles.map((trouble, index) => (
              <li
                key={index}
                className="flex max-sm:max-w-sm sm:w-max px-4 py-2 items-center gap-2 max-sm:text-sm rounded-full bg-white shadow-md  text-center"
              >
                <div className="h-2 w-2 bg-[#ED1C8F] rounded-full" />
                {trouble}
              </li>
            ))}
          </ul>
          <p className="text-justify  font-light">
            De plus, des séances sont vivement conseillées pour les personnes
            hypersensibles aux divers rayonnements. Que ce soient les ondes
            électromagnétiques émisent par les antennes, par nos téléphones,
            wifi, télévisions ou encore relais d&apos;opérateurs téléphoniques à
            proximité.
          </p>
          <p className="text-justify  font-light">
            Enfin, ses effets bénéfiques sont également reconnus dans le monde
            des sportifs. Que ce soit avant l’effort pour augmenter la puissance
            d&apos;endurance et de performance ou alors après l’entraînement
            dans le cadre d&apos;une récupération cellulaire active.
          </p>
          <p className="text-justify  font-light">
            Il est opportun de compléter ces moments d&apos;exception par des
            massages thérapeutiques ou relaxant de même que par une thérapie de
            Biorésonance.
          </p>
        </div>

        <div className="w-full items-center justify-center flex">
          <Button
            asChild
            className=" py-8 px-10 text-lg  rounded-full bg-[#ED1C8F] hover:bg-[#ed1c8fbb] text-white"
          >
            <Link href="/contact"> Réservez un soin</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
const troubles = [
  'Maux de tête chroniques',
  'Rétablissement post-opératoire',
  'Grandes fatigues',
  'Dépression',
  'Stress',
  'Diabète',
  'Problèmes articulaires',
  'Asthme',
  'Troubles d’humeurs',
  'Insomnies',
  'Allergies',
  'Psoriasis',
  'Zona',
  'Effets secondaires de la chimiothérapie',
  'Agressions des rayons électromagnétiques (pour personnes EHS)',
  'Stimule les capacités d’auto-guérison',
];

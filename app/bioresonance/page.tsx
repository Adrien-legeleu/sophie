import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IconVideoFilled } from '@tabler/icons-react';

export default function page() {
  return (
    <div className="bg-gradient-to-b px-5 from-transparent to-[#ee818368] py-40">
      <div className="space-y-12 text-lg tracking-wide  max-w-5xl  mx-auto">
        <h1 className="lg:text-6xl sm:text-5xl text-4xl text-center text-[#C3B4A4]">
          BIORÉSONANCE
        </h1>
        <div className="space-y-5">
          <p className="text-justify  font-light">
            La thérapie de biorésonance est un procédé thérapeutique qui utilise
            les ondes électromagnétiques émises par le corps du patient. On a
            longtemps considéré à tort les champs électromagnétiques de tissus
            et d&apos;organes comme un produit secondaire de l&apos;activité
            cellulaire et donc comme biologiquement insignifiants.
          </p>
          <h2 className="text-2xl font-semibold">
            Comment se déroule une séance de biorésonance ?
          </h2>
          <p className="text-justify  font-light">
            <strong>
              {' '}
              Un bilan de santé énergétique comprenant plus de 650 mesures très
              précises est effectué initialement.{' '}
            </strong>{' '}
            Ces prises de mesures relaxantes durent environ 8 minutes permet au
            thérapeute de faire des évaluations selon la méthode BIA
            (Bio-Impedance-Analyse). Connecté par des électrodes sur vos
            chevilles, l’appareil établit un test en enregistrant toutes les
            ondes électromagnétiques émises par tous les organes de votre corps.
            Les résultats de{' '}
            <strong>la mesure du champ vital , le Vitafeld,</strong> sont
            illustrés de différentes manières. On peut par exemple tirer des
            conclusions sur la résistance, la capacité de régulation et le
            contenu toxique de la personne.
          </p>
          <p className="text-justify  font-light">
            <strong>
              {' '}
              Le traitement s&apos;opère directement après les mesures.
            </strong>
          </p>
          <p className="text-justify  font-light">
            En plus de la fonction de mesure et d&apos;analyse, je vous propose
            un traitement en <strong>douceur, simple et indolore,</strong>
            parfaitement adaptée aux besoins de votre organisme.
          </p>
          <p className="text-justify  font-light">
            <strong>Très rapidement une décontraction se fait sentir </strong>{' '}
            et les dépressions peuvent diminuer. Par ailleurs, toutes les
            cellules sont remises dans leur bonne fréquence, ce qui libère les
            toxines.
          </p>

          <div className="flex max-sm:flex-col gap-10 w-full">
            <div className="w-full">
              <Image
                src={'/soin/Global diagnostics bioresonance.avif'}
                width={1000}
                height={1000}
                alt="massage thérapeutique"
                className="w-full h-auto object-cover rounded-[3rem] shadow-lg"
              />
              <span className="relative max-md:text-sm left-5 top-1 font-light">
                Résultats des 650 mesures effectuées avant traitement.
              </span>
            </div>
            <div className="w-full">
              <Image
                src={'/soin/Bilan de santé - bioresonance.avif'}
                width={1000}
                height={1000}
                alt="massage thérapeutique"
                className="w-full h-auto object-cover rounded-[3rem] shadow-lg"
              />
              <span className="relative left-5 top-1 max-md:text-sm font-light">
                Bilan de santé énergétique. Électrodes aux chevilles pour les
                prises de mesures.
              </span>
            </div>
          </div>
        </div>

        <p className="text-justify font-light">
          Allongé(e), vous n&apos;avez plus qu&apos;à vous relaxer en pensant
          exclusivement à votre bien-être durant les 40 à 50 minutes de
          traitement.{' '}
          <strong>
            Des mesures comparatives permettent d&apos;observer les évolutions
            et modifications au niveau général et en détail.
          </strong>
        </p>

        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Biorésonance : quels sont les résultats auxquels vous pouvez vous
            attendre ?
          </h2>
          <ul className="space-y-4 flex-colflex flex-wrap justify-center items-start max-lg:items-center">
            {resultats.map((r, index) => (
              <li
                key={index}
                className="flex max-sm:max-w-sm sm:w-max px-4 py-2 items-center gap-2 max-sm:text-sm rounded-full bg-white shadow-md  text-center"
              >
                <div className="h-2 w-2 bg-[#ED1C8F] rounded-full" />
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            La biorésonance est efficace pour traiter les allergies aux pollens
          </h2>
          <p className="text-justify font-light">
            Comme le montre le reportage de la RTS ci-dessous, la biorésonance
            représente une solution fiable et peu coûteuse pour en finir avec
            les allergies.
          </p>
        </div>
        <div className="lg:w-1/2 w-full mx-auto relative hover:scale-110 duration-300 cursor-pointer">
          <a
            href="https://www.rts.ch/play/tv/19h30/video/les-taux-de-pollen-sont-tres-eleves-a-cause-des-temperatures-clementes-et-des-pluies-recentes?urn=urn:rts:video:6721265"
            target="_blank"
            className="relative w-full"
          >
            <Image
              src={'/soin/rts-bioresonance.avif'}
              width={1000}
              height={1000}
              alt="massage thérapeutique"
              className="w-full object-cover rounded-[3rem] shadow-lg"
            />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-light">
              <IconVideoFilled className="w-28 h-28  text-[#e8915efa]" />
            </span>
          </a>
        </div>
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            À qui s’adresse la biorésonance ?
          </h2>
          <p className="text-justify font-light">
            En soutien aux personnes en traitement médicamenteux
            (chimiothérapies, radiothérapies, traitements hormonaux, etc.){' '}
            <br /> · Aux personnes souffrant d’allergies, de fatigue chronique,
            de baisse de rendement, de malaises indéfinis <br /> · Aux personnes
            en bonne santé désirant maintenir leur vitalité
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Un bilan de santé énergétique complet du corps avec des appareils de
            dernière génération
          </h2>
          <p className="text-justify font-light">
            Après la réalisation d&apos;un bilan énergétique complet du corps
            (tous les organes, les articulations, les vertèbres, les muscles),
            l&apos;ensemble des systèmes corporels (système digestif,
            respiratoire, immunitaire, endocrinien) on procède ensuite au
            traitement de rééquilibrage énergétique parfois en plusieurs
            séances.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Des conclusions très précises
          </h2>
          <p className="text-justify font-light">
            Chaque composante de l&apos;organisme et chaque système, qu&apos;il
            soit malade ou sain, a un type de réponse spécifique à de faibles
            stimulations extérieures. Ce modèle réactionnel permet de tirer des
            conclusions très précises sur votre état énergétique actuel et sur
            le fonctionnement énergétique des organes examinés pour réaliser des
            traitements adaptés à vos carences, sans douleur ni médicament.
          </p>
        </div>
        <p className="text-justify font-light ">
          Global Diagnostics ne pose pas des diagnostic et ne remplace aucun des
          procédés médicaux reconnus et éprouvés pour établir un diagnostic. Il
          élargit la base de données dont le dispose le médecin ou thérapeute.
        </p>
        <div className="w-full items-center justify-center flex">
          <Button
            asChild
            className=" py-8 px-10 text-lg  rounded-full bg-[#ED1C8F] hover:bg-[#ed1c8fbb] text-white"
          >
            <Link href="/contact"> Réservez un appel</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
const resultats = [
  " Plus de vitalité, d’énergie et d'équilibre",
  'Amélioration de votre état de santé',
  'Disparition des réactions allergiques',
  'Renforcement de votre système immunitaire',
];

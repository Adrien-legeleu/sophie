'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { IconArrowsMinimize } from '@tabler/icons-react';
import { IconInfoSquareRounded } from '@tabler/icons-react';
import { IconX } from '@tabler/icons-react';

export default function Page() {
  const [imageIsClicked, setImageIsClicked] = useState(false);
  const [imageSrcClicked, setImageSrcClicked] = useState('');
  const [infoClicked, setInfoClicked] = useState(false);
  const handleInfoClick = () => {
    setInfoClicked(!infoClicked);
  };
  const openImageClick = (src: string) => {
    setImageSrcClicked(src);
    setImageIsClicked(true);
  };
  const closeImageClick = () => {
    setImageIsClicked(false);
    setInfoClicked(false);
    setImageSrcClicked('');
  };
  return (
    <div className=" bg-gradient-to-b from-transparent to-[#ee818368] ">
      <div className="space-y-20 text-lg tracking-wide py-40 max-w-5xl px-5 mx-auto">
        <h1 className="lg:text-6xl sm:text-5xl text-4xl text-center text-[#C3B4A4]">
          CERTIFICATIONS
        </h1>
        <p className="text-center  font-light">
          Il est expressément rappelé que les thérapies naturelles ou
          alternatives sont complémentaires à la médecine conventionnelle et ne
          remplacent en aucun cas les traitements médicaux mais les
          accompagnent, les complètent et les optimisent. A ce titre toute
          personne est soumise à une anamnèse lors de la première séance
          (questionnaire écrit et verbal sur vos antécédents).
        </p>
        <ul className="flex justify-center flex-wrap gap-10 items-center">
          {certifications.map((certification, index) => (
            <li
              key={index}
              className="cursor-pointer hover:scale-110 ease-in duration-100"
              onClick={() => openImageClick(certification)}
            >
              <Image
                src={certification}
                width={1000}
                height={1000}
                alt="certification"
                className="w-72 h-auto object-cover rounded-lg"
              />
            </li>
          ))}
        </ul>
      </div>
      <AnimatePresence>
        {imageIsClicked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-screen py-40  backdrop-blur-md flex items-center justify-center z-[1000000]"
          >
            <div
              className="bg-black/20 absolute top-0 h-full w-full left-0"
              onClick={closeImageClick}
            />
            <IconArrowsMinimize
              onClick={closeImageClick}
              className="absolute sm:w-12 sm:h-12 h-8 w-8 text-[#000000] lg:top-28 lg:right-28 top-20 right-8 sm:right-20  cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className=" h-full w-2/3 relative"
              onClick={closeImageClick}
            >
              <Image
                src={imageSrcClicked}
                width={1000}
                height={1000}
                alt="certification"
                className=" h-full w-full object-contain "
              />
            </motion.div>
            <div
              className="bg-white h-20 w-20 p-5 rounded-[2rem] absolute bottom-0 left-1/2 -translate-1/2 flex items-center justify-center"
              onClick={() => handleInfoClick()}
            >
              <IconInfoSquareRounded className=" h-full w-full text-[#000000] cursor-pointer" />
            </div>
            <AnimatePresence>
              {infoClicked && (
                <motion.div
                  className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-[3rem] shadow-lg max-w-md w-[90%]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <IconX
                    className="absolute bg-white p-1 rounded-full shadow-lg -top-2 -right-2 w-8 h-8 text-black cursor-pointer"
                    onClick={handleInfoClick}
                  />
                  <h2 className="text-xl font-semibold mb-2">
                    {certificationsText[imageSrcClicked].title}
                  </h2>
                  <p className="text-sm text-gray-700">
                    {certificationsText[imageSrcClicked].description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
const certifications = [
  '/certifications/ASCA 2025_page-0001.jpg',
  '/certifications/RME 2025_page-0001.jpg',
  '/certifications/Diplôme Drainage Lymphatique.png', // ✅ nouveau
  '/certifications/Diplôme Réflexologie Plantaire.jpeg',
  '/certifications/médecine académique.avif',
  '/certifications/massage classique.avif',
  '/certifications/ventouses.avif',
];

interface CertificationInfo {
  title: string;
  description: string;
}

const certificationsText: Record<string, CertificationInfo> = {
  '/certifications/ASCA 2025_page-0001.jpg': {
    title: 'Certification d’agrégation ASCA',
    description:
      'Reconnaissance officielle par la Fondation suisse pour les médecines complémentaires (ASCA) pour la pratique du massage classique. Cette certification atteste la qualité et le sérieux de la pratique de Sophie Dénériaz.',
  },
  '/certifications/Diplôme Drainage Lymphatique.png': {
    // ✅ nouveau
    title: 'Diplôme de Drainage Lymphatique',
    description:
      'Certification attestant la maîtrise des techniques de drainage lymphatique manuel, visant à stimuler la circulation lymphatique, réduire les œdèmes et favoriser une meilleure récupération.',
  },
  '/certifications/Diplôme Réflexologie Plantaire.jpeg': {
    title: 'Diplôme de Réflexologie Plantaire',
    description:
      'Formation axée sur les zones réflexes des pieds pour agir sur les organes et fonctions du corps. Ce diplôme valide une approche naturelle et efficace du rééquilibrage énergétique.',
  },
  '/certifications/médecine académique.avif': {
    title: 'Diplôme de Médecine Académique',
    description:
      'Anatomie, physiologie et pathologie : un socle scientifique indispensable pour une pratique sécurisée, éclairée et respectueuse du corps.',
  },
  '/certifications/massage classique.avif': {
    title: 'Diplôme de Massage Classique',
    description:
      'Diplôme pratique validant la maîtrise des techniques manuelles pour un soin relaxant ou thérapeutique personnalisé.',
  },
  '/certifications/ventouses.avif': {
    title: 'Attestation en Technique des Ventouses',
    description:
      'Formation dédiée à la technique des ventouses, utilisée pour soulager les tensions et favoriser la circulation sanguine.',
  },
  '/certifications/RME 2025_page-0001.jpg': {
    title: 'Certificat RME – Massage réflexe et massage classique (2025–2026)',
    description:
      'Reconnaissance officielle RME valable du 09.05.2025 au 09.05.2026 pour Sophie Dénériaz. Prestations reconnues : Massage des zones réflexes du pied (N°81) et Massage classique (N°102).',
  },
};

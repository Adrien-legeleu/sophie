'use client';

import React from 'react';
import { IconMenuDeep, IconX, IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function HeaderResponsive() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const closeMenuToggle = () => setIsMenuOpen(false);
  const toggleDropdown = (item: string) =>
    setOpenDropdown(openDropdown === item ? null : item);

  return (
    <div className="xl:hidden">
      <button
        onClick={handleMenuToggle}
        className="fixed top-4 right-4 z-[10000] p-2 bg-white rounded-2xl shadow-lg"
      >
        {isMenuOpen ? <IconX size={28} /> : <IconMenuDeep size={28} />}
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bg-white/80 backdrop-blur-md rounded-[3rem] shadow-lg p-10 top-20 flex justify-center items-center flex-col gap-5  left-1/2 -translate-x-1/2 w-[90%] max-w-3xl h-auto z-40"
          >
            <li>
              <Link
                href="/"
                onClick={closeMenuToggle}
                className="block text-xl"
              >
                Accueil
              </Link>
            </li>

            {/* Soins Dropdown */}
            <li className="w-full">
              <button
                onClick={() => toggleDropdown('soins')}
                className="flex justify-center gap-4 items-center w-full text-xl"
              >
                Soins
                <IconChevronDown
                  className={`transition-transform ${
                    openDropdown === 'soins' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openDropdown === 'soins' && (
                <ul className="mt-2 pl-4 text-center space-y-4 text-sm">
                  <li>
                    <Link
                      href="/drainage-lymphatique"
                      onClick={closeMenuToggle}
                    >
                      Drainage lymphatique
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/massage-therapeutique"
                      onClick={closeMenuToggle}
                    >
                      Massage thérapeutique
                    </Link>
                  </li>
                  <li>
                    <Link href="/massage-relaxant-huiles-essentielles">
                      Massage relaxant aux huiles essentielles
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/reflexologie-plantaire"
                      onClick={closeMenuToggle}
                    >
                      Réflexologie plantaire
                    </Link>
                  </li>
                  <li>
                    <Link href="/ampoules" onClick={closeMenuToggle}>
                      Soin aux ventouses
                    </Link>
                  </li>
                  <li>
                    <Link href="/massage-assis" onClick={closeMenuToggle}>
                      Massage assis en entreprise
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* A propos Dropdown */}
            <li className="w-full">
              <button
                onClick={() => toggleDropdown('apropos')}
                className="flex justify-center gap-4 items-center w-full text-xl"
              >
                À propos
                <IconChevronDown
                  className={`transition-transform ${
                    openDropdown === 'apropos' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openDropdown === 'apropos' && (
                <ul className="mt-2 pl-4 text-center space-y-4 text-sm">
                  <li>
                    <Link href="/sophie-deneriaz" onClick={closeMenuToggle}>
                      Sophie Dénériaz
                    </Link>
                  </li>
                  <li>
                    <Link href="/assurances" onClick={closeMenuToggle}>
                      Assurances
                    </Link>
                  </li>
                  <li>
                    <Link href="/certifications" onClick={closeMenuToggle}>
                      Certifications
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/bioresonance"
                onClick={closeMenuToggle}
                className="block text-center text-xl"
              >
                Biorésonance
              </Link>
            </li>
            <li>
              <Link
                href="/blank"
                onClick={closeMenuToggle}
                className="block text-center text-xl"
              >
                Shungite
              </Link>
            </li>
            <li>
              <Button
                asChild
                onClick={closeMenuToggle}
                variant={'secondary'}
                className="rounded-3xl py-5 mx-auto text-white bg-[#ED1C8F] hover:bg-[#ed1c8fd1]"
              >
                <Link href={'/contact'}>Contactez-nous</Link>
              </Button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

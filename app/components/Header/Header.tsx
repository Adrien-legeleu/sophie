'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import {
  IconStethoscope,
  IconMoodSmile,
  IconDroplet,
  IconFingerprint,
  IconWind,
  IconChairDirector,
  IconUserHeart,
  IconShieldCheck,
  IconCertificate,
} from '@tabler/icons-react';

import { HoveredLink, Menu, MenuItem } from '@/components/ui/navbar-menu';
import { Button } from '@/components/ui/button';
import HeaderResponsive from './HeaderResponsive';
import StarClientsGoogle from '../Home/GoogleClientsHero';

export function Header({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div
        className={cn(
          'fixed max-xl:hidden bg-transparent  inset-x-0 duration-500 ease-in-out flex items-center justify-center mx-auto z-[100000]  ',
          className
        )}
      >
        <Menu setActive={setActive}>
          <div className={` flex items-center justify-center  `}>
            <Link href="/">
              <Image
                src={'/logo_site.avif'}
                alt="logo-sophie-dénériaz"
                width={1000}
                height={1000}
                className="h-10 w-12 object-contain"
              />
            </Link>
          </div>
          <div className="flex items-center   w-full gap-10  justify-end">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Accueil"
              link="/"
              isLink={true}
            ></MenuItem>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Soins"
              link="/"
              isLink={false}
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/drainage-lymphatique">
                  <IconDroplet stroke={2} /> Drainage lymphatique
                </HoveredLink>
                <HoveredLink href="/massage-therapeutique">
                  <IconStethoscope stroke={2} />
                  Massage Thérapeutique
                </HoveredLink>

                <HoveredLink href="/massage-relaxant-huiles-essentielles">
                  <IconMoodSmile stroke={2} /> Massage relaxant aux huiles
                  essentielles
                </HoveredLink>
                <HoveredLink href="/reflexologie-plantaire">
                  <IconFingerprint stroke={2} /> Réflexologie plantaire
                </HoveredLink>
                <HoveredLink href="/ampoules">
                  <IconWind stroke={2} /> Soin aux ventouses
                </HoveredLink>
                <HoveredLink href="/massage-assis">
                  <IconChairDirector stroke={2} /> Massage assis en entreprise
                </HoveredLink>
                <HoveredLink href="/massage-relaxant-1">
                  <IconChairDirector stroke={2} />
                  Massage relaxant dynamisé à la shungite
                </HoveredLink>
              </div>
            </MenuItem>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Biorésonance"
              link="/bioresonance"
              isLink={true}
            ></MenuItem>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Shungite"
              link="/blank"
              isLink={true}
            ></MenuItem>
            <MenuItem
              setActive={setActive}
              active={active}
              item="À propos"
              link="/"
              isLink={false}
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/sophie-deneriaz">
                  <IconUserHeart stroke={2} />
                  Sophie Dénériaz
                </HoveredLink>
                <HoveredLink href="/assurances">
                  <IconShieldCheck stroke={2} /> Assurances
                </HoveredLink>
                <HoveredLink href="/certifications">
                  <IconCertificate stroke={2} /> Certifications
                </HoveredLink>
              </div>
            </MenuItem>
            <div className="flex items-center gap-4">
              <StarClientsGoogle />

              <Button
                asChild
                variant={'secondary'}
                className="rounded-3xl py-5 text-white bg-[#ED1C8F] hover:bg-[#ed1c8fd1]"
              >
                <Link href={'/contact'}>Contactez-nous</Link>
              </Button>
            </div>
          </div>
        </Menu>
      </div>
      <HeaderResponsive />
    </>
  );
}

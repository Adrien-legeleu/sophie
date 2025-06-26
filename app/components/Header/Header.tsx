'use client';
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import {
  IconStethoscope,
  IconHeartbeat,
  IconMoodSmile,
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

export function Header({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div
        className={cn(
          'fixed max-lg:hidden bg-transparent  inset-x-0 duration-500 ease-in-out flex items-center justify-center mx-auto z-[10000]  ',
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
                <HoveredLink href="/massage-therapeutique">
                  <IconStethoscope stroke={2} />
                  Massage Therapeutique
                </HoveredLink>
                <HoveredLink href="/copie-de-massotherapie">
                  <IconHeartbeat stroke={2} /> Copie de Massothérapie
                </HoveredLink>
                <HoveredLink href="/massage-relaxant-1">
                  <IconMoodSmile stroke={2} /> Massage relaxant
                </HoveredLink>

                <HoveredLink href="/reflexologie-plantaire">
                  <IconFingerprint stroke={2} /> Réflexologie plantaire
                </HoveredLink>
                <HoveredLink href="/ampoules">
                  <IconWind stroke={2} /> Soinaux ventouses
                </HoveredLink>
                <HoveredLink href="/massage-assis">
                  <IconChairDirector stroke={2} /> Massage assis
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
              item="A propos"
              link="/"
              isLink={false}
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/sophie-deneriaz">
                  <IconUserHeart stroke={2} />
                  Sophie dénériaz
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

// ED1C8F

// C3B4A4

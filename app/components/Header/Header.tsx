'use client';
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import {
  IconApps,
  IconChartLine,
  IconDeviceLaptop,
  IconEye,
  IconHelpHexagon,
  IconHistory,
  IconMessage,
  IconShieldCheck,
  IconThumbUp,
  IconUser,
  IconUsersGroup,
} from '@tabler/icons-react';
import { HoveredLink, Menu, MenuItem } from '@/components/ui/navbar-menu';
import { Button } from '@/components/ui/button';

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
              item="Home"
              link="/"
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/#about">
                  <IconUser stroke={2} />A Propos
                </HoveredLink>
                <HoveredLink href="/#services">
                  {' '}
                  <IconApps stroke={2} />
                  Nos Services
                </HoveredLink>
                <HoveredLink href="/#review">
                  {' '}
                  <IconMessage stroke={2} />
                  Témoignages
                </HoveredLink>
              </div>
            </MenuItem>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Nos Services"
              link="/nos-services"
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/nos-services/#buisness-developpement">
                  <IconChartLine stroke={2} /> Accélérez votre croissance
                </HoveredLink>
                <HoveredLink href="/nos-services/#developpement-digital">
                  <IconDeviceLaptop stroke={2} /> Modernisez votre présence en
                  ligne
                </HoveredLink>
                <HoveredLink href="/nos-services/#pourquoi-nous">
                  <IconThumbUp stroke={2} /> Ce qui fait notre différence
                </HoveredLink>

                <HoveredLink href="/nos-services/#faq">
                  <IconHelpHexagon stroke={2} /> Foire aux questions
                </HoveredLink>
              </div>
            </MenuItem>
            <MenuItem
              setActive={setActive}
              active={active}
              item="A Propos"
              link="/about"
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/about/#notre-histoire">
                  <IconHistory stroke={2} />
                  Notre Histoire
                </HoveredLink>
                <HoveredLink href="/about/#notre-equipe">
                  <IconUsersGroup stroke={2} />
                  Notre Equipe
                </HoveredLink>
                <HoveredLink href="/about/#notre-vision">
                  <IconEye stroke={2} /> Notre Vision
                </HoveredLink>
                <HoveredLink href="/about/#notre-garantie">
                  <IconShieldCheck stroke={2} /> Notre Garantie
                </HoveredLink>
              </div>
            </MenuItem>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Conseils Digitaux"
              link="/blog"
            ></MenuItem>
            <div className="flex items-center gap-4">
              <Button
                asChild
                variant={'secondary'}
                className="rounded-3xl py-5 text-[#ED1C8F]"
              >
                <Link href={'/contact'}>Contactez-nous</Link>
              </Button>
            </div>
          </div>
        </Menu>
      </div>
    </>
  );
}

// ED1C8F

// C3B4A4

'use client';
import React, { ReactNode } from 'react';
import { motion, Transition } from 'framer-motion';
import Link, { LinkProps } from 'next/link';
import Image from 'next/image';

const transition: Transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  link,
  isLink,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  link: string;
  isLink: boolean;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      {isLink ? (
        <Link href={link}>
          <motion.span
            transition={{ duration: 0.3 }}
            className="cursor-pointer text-[#C2B4A4] text-xl hover:opacity-[0.9] dark:text-white"
          >
            {item}
          </motion.span>
        </Link>
      ) : (
        <motion.span
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-[#C2B4A4] text-xl hover:opacity-[0.9] dark:text-white"
        >
          {item}
        </motion.span>
      )}
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-3xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4 text-[#C2B4A4]"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;

  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className={`relative rounded-full   max-w-[1400px] w-auto backdrop-blur-md mt-5 bg-white/90 border-[1px] shadow-xl shadow-black/05 gap-20 justify-between   flex space-x-4 px-6 py-4 duration-500 ease-in-out  `}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1  text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}: LinkProps & { children: ReactNode }) => {
  return (
    <Link
      {...rest}
      className="text-[#C2B4A4]  hover:text-[#a59787] flex gap-2 items-center "
    >
      {children}
    </Link>
  );
};

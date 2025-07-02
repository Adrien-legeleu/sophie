'use client';
import { IconStarFilled, IconExternalLink } from '@tabler/icons-react';

import { motion } from 'framer-motion';

export default function StarClientsGoogle() {
  return (
    <div className="z-10">
      <a
        target="_blank"
        className="flex sm:flex-row flex-col  items-center justify-center sm:gap-2 gap-1 cursor-pointer"
        href="https://www.google.com/search?sca_esv=7f6b8dae05f48483&rlz=1C5CHFA_enFR1167FR1167&tbm=lcl&sxsrf=AE3TifOUsl3wQoxpJGjh8t27tywHfPMSCg:1750864568952&q=Massoth%C3%A9rapeute+Sophie+D%C3%A9n%C3%A9riaz+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2s7A0NjI1NTU0MbI0NDM2MjY03MDI-IpR3TexuDi_JOPwyqLEgtTSklSF4PyCjMxUBZfDK_OAgpmJVQqOZZnFi1iJVQkASCv-jG4AAAA&rldimm=6893255514291632311&hl=fr-FR&sa=X&ved=2ahUKEwj7t7rl7oyOAxVgK_sDHc94Mn0Q9fQKegQIShAF&biw=1440&bih=777&dpr=2#lkt=LocalPoiReviews"
      >
        <div className="flex items-center justify-center gap-1">
          <motion.span
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 5,
              delay: 0.2,
            }}
          >
            <IconStarFilled className="text-yellow-300 w-4 h-4 sm:h-5 sm:w)5" />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 5,
              delay: 0.4,
            }}
          >
            <IconStarFilled className="text-yellow-300 w-4 h-4 sm:h-5 sm:w)5" />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 5,
              delay: 0.6,
            }}
          >
            <IconStarFilled className="text-yellow-300 w-4 h-4 sm:h-5 sm:w)5" />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 5,
              delay: 0.8,
            }}
          >
            <IconStarFilled className="text-yellow-300 w-4 h-4 sm:h-5 sm:w)5" />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 5,
              delay: 1,
            }}
          >
            <IconStarFilled className="text-yellow-300 w-4 h-4 sm:h-5 sm:w)5" />
          </motion.span>
        </div>
        <motion.span
          initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: 1.2,
          }}
          className="font-semibold flex relative  items-center gap-1 text-sm"
        >
          <span className="sm:text-lg  text-md ">+50 </span>
          avis Google <IconExternalLink className="w-4 h-4" />
        </motion.span>
      </a>
    </div>
  );
}

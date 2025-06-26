'use client';

import Mathilde from '@/public/avis/mathilde fornay profil.png';
import Martine from '@/public/avis/Martine Aubert profil.png';
import Veronique from '@/public/avis/veronique profil.png';
import Dylan from '@/public/avis/dylan rocha profil.png';
import Nina from '@/public/avis/nina profil.png';
import AnneClaire from '@/public/avis/anne claire profil.png';
import Suzana from '@/public/avis/suzana filipe profil.png';
import Zoe from '@/public/avis/zoe profil.png';
import Patrick from '@/public/avis/patrick profil.png';
import Jenna from '@/public/avis/jenna profil.png';

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Marquee from '@/components/ui/marquee';

interface ReviewType {
  name: string;

  text: string;
  image: string | StaticImageData;
}

const reviews: ReviewType[] = [
  {
    name: 'Mathilde Fornay',
    text: "Si vous cherchez un endroit où vous reposer, profiter de douceurs et de bienveillance, c'est ici qu'il faut aller ! Accueilli par une femme rayonnante de bienveillance, vous découvrirez un cadre idyllique. Chaque instant est une parenthèse enchantée dédiée à la relaxation. Elle est à l'écoute de vos besoins et adapte chaque séance à vos préférences. Une expérience vraiment exceptionnelle !",
    image: Mathilde,
  },
  {
    name: 'Martine Aubert',
    text: "Sophie à des doigts en or! Très à l'écoute & professionnelle.Le soins au ventouses m'a été très bénéfique.vraiment je recommande ! Elle m'a beaucoup aidé dans ma remise en forme.",
    image: Martine,
  },
  {
    name: 'Véronique Bongard-Gabriel',
    text: 'Merci ma Sophie pour ton massage et le soins avec les ventouses. Incroyable tu es un anges. Magnifiques le bien pour le corps. Merci 💋💋💋😍❤️',
    image: Veronique,
  },
  {
    name: 'Dylan Rocha',
    text: 'Je recommande le massage ventouse ! Très relaxant 😁',
    image: Dylan,
  },
  {
    name: 'Nina Recupero',
    text: 'Un bien être fabuleux Sophie est à l écoute et très passionné du bien être je recommande vivement de prendre le temps d aller la voir .',
    image: Nina,
  },
  {
    name: 'Anne-Claire ROGGO',
    text: 'Quelle plaisir de venir voir Sophie!!! Elle est tellement gentille, un accueil très agréable et elle a des mains tellement douces, et le niveau de pression de ses massages sont exactement comme j’aime! La salle est aussi très cozy, et la chaise/le lit de massage est vraiment exceptionnelle qui a vraiment fait pour moi une vraie différence des autres salons de massage! N’hésitez pas une seule seconde, vous ne regretterez pas du tout. Le cadre en plus est vraiment magnifique. Je recommande fortement!',
    image: AnneClaire,
  },
  {
    name: 'Suzana Filipe',
    text: "Je viens de vivre une expérience incroyable avec Sophie Dénériaz, experte en massage traditionnel 💆‍♀️💫. J'avais le dos en vrac, tendu, bloqué… et après une séance entre ses mains magiques : libération totale au point que je me suis endormi😂😂😂 ! Son toucher est à la fois précis, puissant et profondément apaisant. On sent qu’elle maîtrise son art avec passion 💖. Si vous avez mal au dos, ou si vous rêvez d’un vrai moment de détente, foncez la voir. Vous ne le regretterez pas ! 👉 Merci Sophie pour ce pur moment de renaissance ✨",
    image: Suzana,
  },
  {
    name: 'Zoé Chaubert',
    text: 'Superbe accueil, visite et présentation des différentes offres du cabinet. Sophie est à l’écoute et transmet sa positivité tout au long de la séance. On ressent tout de suite les bienfaits du soin au ventouse et massage. Je recommande!',
    image: Zoe,
  },
  {
    name: 'Patrick Scaron',
    text: "J'ai passé un moment très agréable la masseusse et très professionnel dans sont domaines l'endroit propre et très confortable je suis ressortie de cette séance détendu zen .. je vous remercie encore madame dénériaz",
    image: Patrick,
  },
  {
    name: 'Jenna Fantoni',
    text: 'Sophie est une super masseuse ! Très à l’écoute, elle a une super technique de massage douce dans sa manière de faire et à la fois elle masse vraiment en profondeur. Je la recommande vivement. Merci Sophie !',
    image: Jenna,
  },
];

const firstColumn = reviews.slice(0, 3);
const firstColumnResponsive = reviews.slice(0, 5);
const secondColumn = reviews.slice(3, 6);
const secondColumnResonsive = reviews.slice(5, 10);
const thirdColumn = reviews.slice(6, 10);

const ReviewCard = ({
  image,
  name,

  text,
}: {
  image: string | StaticImageData;
  name: string;

  text: string;
}) => (
  <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-md w-full bg-white dark:bg-neutral-900">
    <div
      style={{
        display: '-webkit-box',
        WebkitLineClamp: 5,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
      className="mb-4 text-base"
    >
      {text}
    </div>
    <div className="flex items-center gap-2 mt-5">
      {typeof image === 'string' ? (
        <Image
          width={40}
          height={40}
          src={image}
          alt={name}
          className="h-10 w-10 rounded-full object-cover"
        />
      ) : (
        <Image
          width={40}
          height={40}
          src={image.src}
          alt={name}
          className="h-10 w-10 rounded-full object-cover"
        />
      )}
      <div className="flex flex-col ml-2">
        <div className="font-medium tracking-tight leading-5">{name}</div>
      </div>
    </div>
  </div>
);

const MarqueeDemoVertical = () => (
  <div className="relative flex h-[700px] sm:h-[500px] 2xl:h-[600px] w-full flex-row items-center justify-center overflow-hidden">
    <Marquee pauseOnHover vertical className="[--duration:20s] max-lg:hidden">
      {firstColumn.map((review) => (
        <ReviewCard key={review.name} {...review} />
      ))}
    </Marquee>
    <Marquee
      reverse
      pauseOnHover
      vertical
      className="[--duration:20s] max-lg:hidden "
    >
      {secondColumn.map((review) => (
        <ReviewCard key={review.name} {...review} />
      ))}
    </Marquee>
    <Marquee pauseOnHover vertical className="[--duration:20s] max-lg:hidden">
      {thirdColumn.map((review) => (
        <ReviewCard key={review.name} {...review} />
      ))}
    </Marquee>
    <Marquee
      pauseOnHover
      vertical
      className="[--duration:20s] lg:hidden max-sm:hidden"
    >
      {firstColumnResponsive.map((review) => (
        <ReviewCard key={review.name} {...review} />
      ))}
    </Marquee>
    <Marquee
      pauseOnHover
      vertical
      reverse
      className="[--duration:20s] lg:hidden max-sm:hidden"
    >
      {secondColumnResonsive.map((review) => (
        <ReviewCard key={review.name} {...review} />
      ))}
    </Marquee>
    <Marquee pauseOnHover vertical className="[--duration:20s] sm:hidden">
      {reviews.map((review) => (
        <ReviewCard key={review.name} {...review} />
      ))}
    </Marquee>
    <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
  </div>
);

const Review = () => {
  return (
    <section className="bg-background py-20 relative max-sm:overflow-hidden bg-gradient-to-b from-transparent to-[#ee818368] pt-32">
      <div className="container z-10 relative mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col z-10 px-5 items-center justify-center max-w-[540px] mx-auto"
        >
          <h2 className=" text-center text-4xl xl:text-5xl font-bold text-[#C3B4A4] z-10 tracking-tighter mt-5">
            Ce que nos clients disent de nous
          </h2>
          <p className="text-center mt-5 opacity-75">
            Découvrez les avis et retours d&apos;expérience de nos clients.
          </p>
        </motion.div>
        <div className="flex justify-center z-10 gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <MarqueeDemoVertical />
        </div>
      </div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-32 left-1/2 md:h-48 h-36 w-36 md:w-48 bg-secondary z-0 blur-[110px] md:blur-[150px]  -translate-x-1/2"
      />
    </section>
  );
};

export default Review;

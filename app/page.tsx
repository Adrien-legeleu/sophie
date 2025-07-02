import HeroHome from './components/Home/HeroHome';
import Review from './components/Home/Review';
import Services from './components/Home/Services';
import Shungite from './components/Home/Shungite';

export default function Home() {
  return (
    <>
      <HeroHome />
      <Services />
      <Shungite />
      <Review />
    </>
  );
}

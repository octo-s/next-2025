import { rackets } from '@/data/mock';
import RacketCarousel from '@/components/RacketCarousel/RacketCarousel';

export default function Home() {
  const topRackets = rackets.filter((topRacket) => topRacket.top10);

  return (
    <div>
      <h1>Магазин ракеток</h1>
      <RacketCarousel rackets={topRackets} />
    </div>
  );
}

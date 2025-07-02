import { getRackets } from '@/services/get-rackets';
import { Suspense } from 'react';
import { getTopRackets } from '@/services/get-top-rackets';
import RacketCarouselWrapper from '@/components/RacketCarouselWrapper/RacketCarouselWrapper';
import Loading from '@/app/Suspense/loading';

export default async function Home() {
  const racketsPromise = getRackets({ page: 1, limit: 10 });
  const topRacketsPromise = getTopRackets();

  return (
    <div>
      <h1>Магазин ракеток</h1>
      <Suspense fallback={<Loading text="Загрузка топ-10" />}>
        <RacketCarouselWrapper promise={topRacketsPromise} />
      </Suspense>
      <Suspense fallback={<Loading text="Загрузка первых 10 ракеток" />}>
        <RacketCarouselWrapper promise={racketsPromise} />
      </Suspense>
    </div>
  );
}

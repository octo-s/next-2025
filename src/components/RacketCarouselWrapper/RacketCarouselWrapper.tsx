import RacketCarousel from '@/components/RacketCarousel/RacketCarousel';
import { Response, TRacket } from '@/types/global';

type Props = {
  promise: Promise<Response<TRacket[]>>;
};

export default async function RacketCarouselWrapper({ promise }: Props) {
  const { data } = await promise;

  return <RacketCarousel rackets={data} />;
}

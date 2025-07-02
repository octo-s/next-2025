import { RacketDetail } from '@/components/RacketDetail/RacketDetail';
import { getRacketById } from '@/services/get-racket-by-id';
import { notFound } from 'next/navigation';
import { getRackets } from '@/services/get-rackets';

type RacketPageProps = {
  params: Promise<{ racketId: string }>;
};

export const generateStaticParams = async () => {
  const { data: rackets } = await getRackets({ page: 1, limit: 3 });

  if (!rackets) return [];

  return rackets.map((racket) => ({
    racketId: racket.id.toString(),
  }));
};

export default async function RacketPage({ params }: RacketPageProps) {
  const { racketId } = await params;
  const { data: racket } = await getRacketById({ id: racketId });

  if (!racket) {
    notFound();
  }

  return <RacketDetail racket={racket} />;
}

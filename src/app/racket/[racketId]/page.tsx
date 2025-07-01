import { RacketDetail } from '@/components/RacketDetail/RacketDetail';
import { getRacketById } from '@/services/get-racket-by-id';
import { notFound } from 'next/navigation';

type RacketPageProps = {
  params: Promise<{ racketId: string }>;
};

export default async function RacketPage({ params }: RacketPageProps) {
  const { racketId } = await params;
  const { data: racket } = await getRacketById({ id: racketId });

  if (!racket) {
    notFound();
  }

  return <RacketDetail racket={racket} />;
}

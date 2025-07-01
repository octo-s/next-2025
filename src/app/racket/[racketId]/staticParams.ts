import { getRackets } from '@/services/get-rackets';
export const generateStaticParams = async () => {
  const { data: rackets } = await getRackets({ page: 1, limit: 3 });

  if (!rackets) return [];

  return rackets.map((racket) => ({
    racketId: racket.id.toString(),
  }));
};

import { BASE_API_URL } from '@/constants/api';
import { TRacket, Response } from '@/types/global';
import { fetchData } from '@/utils/fetchHelper';
import { getRackets } from '@/services/get-rackets';

export const generateStaticParams = async () => {
  const { data: rackets } = await getRackets({ page: 1, limit: 3 });

  if (!rackets) return [];

  return rackets.map((racket) => ({
    racketId: racket.id.toString(),
  }));
};

type Params = {
  id: string;
};

export const getRacketById = async ({ id }: Params): Promise<Response<TRacket>> => {
  const result = await fetchData<{ product: TRacket }>(`${BASE_API_URL}/product/${id}`);

  return {
    isError: result.isError,
    data: result.data?.product,
  };
};

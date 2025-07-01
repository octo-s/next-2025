import { BASE_API_URL } from '@/constants/api';
import { TRacket, Response } from '@/types/global';
import { fetchData } from '@/utils/fetchHelper';

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

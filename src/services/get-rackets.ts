import { BASE_API_URL } from '@/constants/api';
import { TRacket, Response } from '@/types/global';

type GetRacketsParams = {
  page?: number;
  limit?: number;
  brand?: string;
};

export const getRackets = async ({
  page = 1,
  limit = 10,
  brand,
}: GetRacketsParams): Promise<Response<TRacket[]>> => {
  const queryParams = new URLSearchParams();

  queryParams.append('page', page.toString());
  queryParams.append('limit', limit.toString());

  if (brand) {
    queryParams.append('brand', brand);
  }

  const result = await fetch(`${BASE_API_URL}/products?${queryParams.toString()}`);

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: TRacket[] = await result.json();

  return { isError: false, data };
};

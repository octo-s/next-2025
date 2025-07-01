import { BASE_API_URL } from '@/constants/api';
import { TRacket, Response } from '@/types/global';
import { fetchData } from '@/utils/fetchHelper';

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
  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  if (brand) {
    queryParams.append('brand', brand);
  }

  return await fetchData<TRacket[]>(`${BASE_API_URL}/products?${queryParams.toString()}`);
};

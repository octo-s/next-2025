import { BASE_API_URL } from '@/constants/api';
import { TRacket, Response } from '@/types/global';
import { fetchData } from '@/utils/fetchHelper';

export const getTopRackets = async (): Promise<Response<TRacket[]>> => {
  return await fetchData<TRacket[]>(`${BASE_API_URL}/top-10`);
};

import { BASE_API_URL } from '@/constants/api';
import { TRacket, Response } from '@/types/global';

export const getTopRackets = async (): Promise<Response<TRacket[]>> => {
  const result = await fetch(`${BASE_API_URL}/top-10`);

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: TRacket[] = await result.json();

  return { isError: false, data };
};

export const fetchData = async <T>(
  url: string,
): Promise<{ isError: boolean; data: T | undefined; error?: unknown }> => {
  try {
    const response = await fetch(url);

    if (response.status === 404) {
      return { isError: false, data: undefined };
    }

    if (!response.ok) {
      return { isError: true, data: undefined };
    }

    const data: T = await response.json();
    return { isError: false, data };
  } catch (error) {
    return { isError: true, error, data: undefined };
  }
};

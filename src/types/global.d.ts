type TBrand = {
  id: number;
  name: string;
};

type TRacket = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  type: string;
  model: string;
  year: number;
  top10: boolean;
  description: string;
  brandId: number;
  brand: TBrand;
};

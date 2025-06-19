import { rackets } from '@/data/mock';

type RacketDetailProps = {
  params: Promise<{ racketId: string }>;
};

export const generateStaticParams = () => {
  const idsToGenerate = rackets.slice(0, 3);

  return idsToGenerate.map((racket) => ({
    racketId: racket.id.toString(),
  }));
};

export default async function RacketDetail({ params }: RacketDetailProps) {
  const { racketId } = await params;
  const racket = rackets.find((currentRacket) => currentRacket.id === Number(racketId));

  if (!racket) return <p>Ракетка не найдена</p>;

  return (
    <>
      <h1>{racket.name}</h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <img src={racket.imageUrl} alt={racket.name} width="300" />
        <div>
          <p>
            <strong>Цена:</strong> €{racket.price}
          </p>
          <p>{racket.description}</p>
          <p>
            <strong>Модель:</strong> {racket.model}
          </p>
          <p>
            <strong>Год:</strong> {racket.year}
          </p>
          <p>
            <strong>Бренд:</strong> {racket.brand.name}
          </p>
        </div>
      </div>
    </>
  );
}

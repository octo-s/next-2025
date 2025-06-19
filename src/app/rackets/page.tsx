import { rackets } from '@/data/mock';
import { RacketCard } from '@/components/RacketCard/RacketCard';

export default function RacketsPage() {
  return (
    <>
      <h1>Ракетки</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {rackets.map((racket) => (
          <RacketCard key={racket.id} racket={racket} />
        ))}
      </div>
    </>
  );
}

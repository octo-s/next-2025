import { RacketCard } from '@/components/RacketCard/RacketCard';
import styles from './page.module.css';
import { getRackets } from '@/services/get-rackets';
import { notFound } from 'next/navigation';

export default async function RacketsPage() {
  const { data: rackets } = await getRackets({ limit: 20 });

  if (!rackets) {
    notFound();
  }

  return (
    <>
      <h1>Ракетки</h1>
      <div className={styles.itemsWrapper}>
        {rackets.map((racket) => (
          <RacketCard key={racket.id} racket={racket} />
        ))}
      </div>
    </>
  );
}

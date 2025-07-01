import { RacketCard } from '@/components/RacketCard/RacketCard';
import styles from './page.module.css';
import { notFound } from 'next/navigation';
import { getTopRackets } from '@/services/get-top-rackets';

export default async function TopPackets() {
  const { data: rackets } = await getTopRackets();

  if (!rackets) {
    notFound();
  }
  return (
    <>
      <h1>Ракетки - ТОП 10</h1>
      <div className={styles.itemsWrapper}>
        {rackets.map((racket) => (
          <RacketCard key={racket.id} racket={racket} />
        ))}
      </div>
    </>
  );
}

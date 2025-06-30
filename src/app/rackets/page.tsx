import { rackets } from '@/data/mock';
import { RacketCard } from '@/components/RacketCard/RacketCard';
import styles from './page.module.css';

export default function RacketsPage() {
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

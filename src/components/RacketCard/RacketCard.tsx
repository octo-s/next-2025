import { FC } from 'react';
import Link from 'next/link';
import styles from './RacketCard.module.css';
import { TRacket } from '@/types/global';

type Props = {
  racket: TRacket;
};

export const RacketCard: FC<Props> = ({ racket }) => {
  return (
    <Link href={`/racket/${racket.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={racket.imageUrl} alt={racket.name} />
      </div>
      <div className={styles.info}>
        <h3>{racket.name}</h3>
        <p>€{racket.price}</p>
      </div>
    </Link>
  );
};

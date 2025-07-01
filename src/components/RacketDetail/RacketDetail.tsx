import { notFound } from 'next/navigation';
import styles from './RacketDetail.module.css';
import { FC } from 'react';
import { TRacket } from '@/types/global';

type RacketDetailProps = {
  racket: TRacket;
};

export const RacketDetail: FC<RacketDetailProps> = ({ racket }) => {
  if (!racket) {
    notFound();
  }

  return (
    <>
      <h1>{racket.name}</h1>
      <div className={styles.imageWrapper}>
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
};

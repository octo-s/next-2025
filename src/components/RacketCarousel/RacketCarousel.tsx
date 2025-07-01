'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styles from './RacketCarousel.module.css';
import { RacketCard } from '@/components/RacketCard/RacketCard';
import { TRacket } from '@/types/global';

type Props = {
  rackets?: TRacket[];
};

const RacketCarousel = ({ rackets }: Props) => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 16,
    },
    loop: true,
  });

  return (
    <div className={styles.carouselWrapper}>
      <button className={styles.arrowLeft} onClick={() => slider.current?.prev()} />
      <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
        {rackets?.map((racket) => (
          <div className="keen-slider__slide" key={racket.id}>
            <RacketCard racket={racket} />
          </div>
        ))}
      </div>
      <button className={styles.arrowRight} onClick={() => slider.current?.next()} />
    </div>
  );
};

export default RacketCarousel;

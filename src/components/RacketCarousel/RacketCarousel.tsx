'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styles from './RacketCarousel.module.css';
import { RacketCard } from '@/components/RacketCard/RacketCard';

type Props = {
  rackets: TRacket[];
};

const RacketCarousel = ({ rackets }: Props) => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 16,
    },
    loop: true,
  });

  const handlePrev = () => slider.current?.prev();
  const handleNext = () => slider.current?.next();

  return (
    <div className={styles.carouselWrapper}>
      <button className={styles.arrowLeft} onClick={handlePrev} />
      <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
        {rackets.map((racket) => (
          <div className="keen-slider__slide" key={racket.id}>
            <RacketCard racket={racket} />
          </div>
        ))}
      </div>
      <button className={styles.arrowRight} onClick={handleNext} />
    </div>
  );
};

export default RacketCarousel;

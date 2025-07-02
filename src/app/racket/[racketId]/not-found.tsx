import styles from '@/app/styles/not-found.module.css';
import { Link } from '@/components/Link/Link';

export default function notFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ракетка не найдена</h1>
      <Link href="/rackets">← Назад к списку ракеток</Link>
    </div>
  );
}

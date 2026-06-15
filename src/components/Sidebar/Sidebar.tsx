import Image from 'next/image';
import styles from './Sidebar.module.scss';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <Image
          src="/VU_MIF_herbai.png"
          alt="VU MIF Herbai"
          width={300}
          height={300}
          priority
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>
    </aside>
  );
}

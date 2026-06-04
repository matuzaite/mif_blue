'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Sidebar.module.scss';

export default function Sidebar() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
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

      {/* Live Clock */}
      <div className={styles.clockSection}>
        <p className={styles.time}>
          {time ? time.toLocaleTimeString('lt-LT', { hour: '2-digit', minute: '2-digit' }) : '--:--'}
        </p>
        <p className={styles.date}>
          {time ? time.toLocaleDateString('lt-LT', { day: 'numeric', month: 'long' }) : '...'}
        </p>
      </div>

    </aside>
  );
}

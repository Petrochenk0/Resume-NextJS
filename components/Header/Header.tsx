import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';
export const Header = () => {
  return (
    <header className={styles.header__container}>
      {/* В отличии от React как я знаю, тут мы используем href вместо to как в роутинге */}
      {/* Мы всё прописываем в Header компоненте
      Так как мы указываем в Link href="/"
      NextJS автоматически определяет наши папки и теперь он и отображает */}
      <Link href="/" className={styles.header__link}>
        Home
      </Link>
      <Link className={styles.header__link} href="/contacts">
        Contacts
      </Link>
      <Link className={styles.header__link} href="/about">
        About
      </Link>
    </header>
  );
};

import Link from 'next/link';
import styles from './styles.module.css';
export default function ContactsMe({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>List my contacts...</h1>
      <ul>
        <li className={styles.li__styles}>
          <Link className={styles.link__styles} href="https://t.me/Petrochenk0">
            Telegramm
          </Link>
        </li>
        <li className={styles.li__styles}>
          <Link className={styles.link__styles} href="https://github.com/Petrochenk0">
            GitHub
          </Link>
        </li>
      </ul>
      {children}
    </div>
  );
}

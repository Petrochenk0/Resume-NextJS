import Link from 'next/link';
import styles from './styles.module.css';
export default function AboutInformation({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>About information</h1>
      <ul>
        <li className={styles.li__styles}>
          <Link className={styles.link__styles} href="/about/information">
            ☞ About me ☜
          </Link>
        </li>
        <li className={styles.li__styles}>
          <Link className={styles.link__styles} href="/about/resume">
            ☞ My resume ☜
          </Link>
        </li>
      </ul>
      {/* И конечно же не забываем добавить children для указания текущей страницы */}
      {children}
    </div>
  );
}

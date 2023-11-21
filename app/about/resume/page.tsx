import { Metadata } from 'next';
import styles from './styles.module.css';
export const metadata: Metadata = {
  title: 'Resume | NextJS',
};
// Что делать дальше? Изучать кэширование
export default function About() {
  // Динамический компонент :)
  // Тут должны отображаться конскретные title - название поста(проекта) и body(сам пост(проект))
  return (
    <div>
      <h1>This is proger have 3 years exeperience</h1>
      <ul>
        <li className={styles.margin__top__block}>HTML/CSS/SASS/SCSS - 3 years</li>
        <li className={styles.margin__top__block}>JavaScript - 2 years</li>
        <li className={styles.margin__top__block}>TypeScript - 1 year</li>
        <li className={styles.margin__top__block}>React/Redux - 1.5 years</li>
      </ul>
    </div>
  );
}

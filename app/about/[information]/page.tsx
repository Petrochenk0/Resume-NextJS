import { Metadata } from 'next';
import styles from './styles.module.css';
type Props = {
  params: {
    information: string;
  };
};
export const metadata: Metadata = {
  title: 'Expirience | NextJS',
};
export default function About({ params: { information } }: Props) {
  // Динамический компонент :)
  return (
    <h1 className={styles.container}>
      I'm react-developer that have 3 years exeperience and... <br /> I have 10 wonderful
      pet-project
    </h1>
  );
}

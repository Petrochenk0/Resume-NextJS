import { Metadata } from 'next';
import styles from '../styles.module.css';
type Props = {
  params: {
    contact: string;
  };
};
async function getPosts(id: string) {
  // Чтобы запустить сервер нужно использовать команду json-server --warch myProjects.json
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 120, // теперь с переодичностью в 120 секунд будут обновляться посты
    },
  });
  console.log(response);
  return response.json();
  // Когда мы вызываем функци fetch - это поток байтов, и эти байты мы приобразуем в json
}
export async function generateMetadata({ params: { contact } }: Props): Promise<Metadata> {
  const posts = await getPosts(contact);
  // Мы делаем эту функцию асинхронной
  // Чтобы динамически менять название страницы нужны прописывать точное имя фукнции generateMetadata
  return {
    title: posts.title, // тут нам нужно сделать posts.title
  };
} // Мы пишем динамическую функцию которая будет генерировать название сайта при изменении параметров
export default async function ContactsList({ params: { contact } }: Props) {
  // Интерсная схема показатель конкретного элемента параетров с типом Props
  const posts = await getPosts(contact); // но зачем мы в аргументах мы передаём contact?
  return (
    <>
      <h1>
        You went to post number... <br /> {contact}
        <br />
      </h1>
      <p className={styles.paragraph}>{posts.title}</p>
      <p className={styles.paragraph}>{posts.body}</p>
    </>
  );
}

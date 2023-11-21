import { Metadata } from 'next';
import Link from 'next/link';
import styles from './styles.module.css';
export const metadata: Metadata = {
  title: 'Contacts | NextJS',
};
interface IPosts {
  title: string;
  id: string;
}
async function getPosts() {
  // Чтобы запустить сервер нужно использовать команду json-server --warch myProjects.json
  // Задача: настроить json объект для работы с ним
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 120, // теперь с переодичностью в 120 секунд будет обновляться посты
    },
  });
  console.log(response);
  return response.json();
  // Когда мы вызываем функци fetch - это поток байтов, и эти байты мы приобразуем в json
}
export default async function Contacts() {
  const posts = await getPosts();
  return (
    <>
      <h3 className={styles.flex__block}>
        By the way, if you want, you can check posts in the cache <p>☜(ﾟヮﾟ☜)</p>
      </h3>
      <ul>
        {posts.splice(0, 5).map((post: IPosts, index: number) => {
          return (
            <li className={styles.li__styles} key={index}>
              <Link className={styles.link__styles} href={`/contacts/${post.id}`}>
                {index + 1} {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

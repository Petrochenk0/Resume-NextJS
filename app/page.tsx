import { Metadata } from 'next';
import Link from 'next/link';
// Всё что написанно в NextJS является SSR компонентом
// Но, чтобы использовать клиентские плюшки и хуки, можно использовать "комментарий"
// "use client" - это тот самый комментарий
export const metadata: Metadata = {
  // Метадата позволяет нам продвигать SEO
  // Но если мы хотим менять название динамически, то нужен уже другой метод через компонент и пропсы
  title: 'Greeting NextJS',
};
export default function Home() {
  return (
    <div>
      <h1>This is pet-project was created on the Next.js</h1>
      <h3 className="element__margin__top">You can poke different features on the site ~(˘▾˘~)</h3>
      <ul>
        <li className="li__styles">
          <Link className="link__styles" href="/about">
            {' '}
            1) You can to see "about" dynamic page (◕‿↼)
          </Link>
        </li>
        <li className="li__styles">
          <Link className="link__styles" href="/contacts">
            {' '}
            2) You can to see "contact" dynamic page 🤯 <br />
            how unexpectedly 😂
          </Link>
        </li>
        <li className="li__styles">
          <Link className="link__styles" href="/about/resume">
            3) You can see my resume(¬‿¬)
          </Link>
        </li>
      </ul>
    </div>
  );
}
// Вот и подошол к концк мой проект на NextJS 😔
// Напоследок нужно завершить пару тасков и можно переходить к алго
// 1) Удалить все ненужные фразы для коректности и правильности

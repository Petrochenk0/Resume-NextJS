'use client'; // в компоненте об ошибке в NextJS мы должны импользовать клиентскую часть

export default function Error({ error }: { error: Error }) {
  // То есть в параметрах у нас есть наш error с типом Error
  return (
    <>
      <h1>Oooh no (╯°□°）╯︵ ┻━┻ {error.message}</h1>
    </>
  );
}

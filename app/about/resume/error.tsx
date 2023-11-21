'use client';

export default function Error({ error }: { error: Error }) {
  return <h1>Oooh no (╯°□°）╯︵ ┻━┻ {error.message}</h1>;
}

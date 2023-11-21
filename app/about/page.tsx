import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Information | NextJS',
};
export default async function About() {
  return (
    <>
      <h1>The choice is always yours</h1>
    </>
  );
}

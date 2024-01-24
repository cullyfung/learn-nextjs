import Link from 'next/link';
import { photos } from './data';

export default function Home() {
  return (
    <main className="flex gap-2">
      {photos.map(({ id, src }) => (
        <Link
          key={id}
          href={`/photo/${id}`}
        >
          <img
            width="100"
            src={src}
          />
        </Link>
      ))}
    </main>
  );
}

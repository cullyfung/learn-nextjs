import { photos } from '../../data';

interface PhotoPageProps {
  params: {
    id: string;
  };
}

export default function PhotoPage({ params: { id } }: PhotoPageProps) {
  const photo = photos.find((p) => p.id === id);
  return (
    <img
      style={{ width: '50%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
      src={photo?.src}
      alt="cover"
    />
  );
}

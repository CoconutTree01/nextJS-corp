import Image from 'next/image';

export default function Home() {
  return (
    <div>
      Home Page
      <div className="absolute -z inset-0">
      <Image 
        src="/home.jpg"
        alt="car factory"
        fill
        style={{objectFit: 'cover'}}
      />
      </div>
    </div>
  );
}


import Landing from '@components/home/landing';
import WeAre from '@components/home/weAre';

// import Image from 'next/image';
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Landing />
      <WeAre />
    </div>
  );
}

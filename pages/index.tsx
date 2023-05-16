import Landing from '@components/home/landing';
import WeAre from '@components/home/weAre';
import WeOffer from '@components/home/weOffer';

// import Image from 'next/image';
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Landing />
      <WeAre />
      <WeOffer />
    </div>
  );
}

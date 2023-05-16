import Image from 'next/image';

import Bg1 from 'public/weOffer/1.png';
import Bg2 from 'public/weOffer/2.png';
import Bg3 from 'public/weOffer/3.png';
import Bg4 from 'public/weOffer/4.png';
import Bg5 from 'public/weOffer/5.png';
import Bg6 from 'public/weOffer/6.png';

export default function weOffer() {
  return (
    <div className="h-full bg-[#1abbdb]">
      <div className="pt-16 px-10 xl:px-40 lg:px-28">
        <div className="text-4xl font-bold text-white">What We Offer?</div>
        <div className="flex xl:flex-row flex-col mt-10 gap-4 justify-around">
          <div className="bg-red-200 w-full h-[500px]">
            <Image
              src={Bg1}
              alt="Picture of the author"
              style={{
                width: '100%',
                height: '100%',
                backgroundPosition: 'center',
              }}
            />
          </div>
          <div className="bg-red-200 w-full h-[500px]">
            <Image
              src={Bg2}
              alt="Picture of the author"
              style={{
                width: '100%',
                height: '100%',
                backgroundPosition: 'center',
              }}
            />
          </div>
          <div className="bg-red-200 w-full h-[500px]">
            <Image
              src={Bg3}
              alt="Picture of the author"
              style={{
                width: '100%',
                height: '100%',
                backgroundPosition: 'center',
              }}
            />
          </div>
          <div className="bg-red-200 w-full h-[500px]">
            <Image
              src={Bg4}
              alt="Picture of the author"
              style={{
                width: '100%',
                height: '100%',
                backgroundPosition: 'center',
              }}
            />
          </div>
          <div className="bg-red-200 w-full h-[500px]">
            <Image
              src={Bg5}
              alt="Picture of the author"
              style={{
                width: '100%',
                height: '100%',
                backgroundPosition: 'center',
              }}
            />
          </div>
          <div className="bg-red-200 w-full h-[500px]">
            <Image
              src={Bg6}
              alt="Picture of the author"
              style={{
                width: '100%',
                height: '100%',
                backgroundPosition: 'center',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

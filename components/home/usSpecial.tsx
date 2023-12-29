import Image from 'next/image';

import Bg1 from 'public/usSpecial/1.png';
import Bg2 from 'public/usSpecial/2.png';
import Bg3 from 'public/usSpecial/3.png';
import Bg4 from 'public/usSpecial/4.png';
import Bg5 from 'public/usSpecial/5.png';

const data = [
  {
    title: 'Competitive price',
    img: Bg1,
  },
  {
    title: 'Various services to fulfill',
    img: Bg2,
  },
  {
    title: 'Free consultation to find out your needs',
    img: Bg3,
  },
  {
    title: 'Experienced, reliable, and creative human resource',
    img: Bg4,
  },
  {
    title: 'Up to date on the latest trends',
    img: Bg5,
  },
  {
    title: 'Provide promotions that match your business characteristics ',
    img: Bg5,
  },
  {
    title: 'Up to date on the latest trends',
    img: Bg5,
  },
  {
    title: 'Provide promotions that match your business characteristics',
    img: Bg5,
  },
  {
    title: 'Using the advanced technology',
    img: Bg5,
  },
];

export default function UsSpecial() {
  return (
    <div className="mt-10 px-10 xl:px-40 lg:px-28 animate-fade-right">
      <div className="text-4xl font-bold" data-aos="fade-down">
        What Make Us Special?
      </div>
      <div className="flex flex-col my-10">
        {data.map((item, index) => (
          <div
            data-aos="fade-right"
            className="flex justify-between my-2 shadow-xl"
            key={index}
          >
            <div className="grid p-4 w-8/12 mobileL:w-full mobileM:w-full mobileS:w-full">
              <h1 className="text-2xl font-bold">{item.title}</h1>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                ab.
              </div>
            </div>
            <div className="relative hidden xl:block lg:block md:block">
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '15%',
                  height: '100%',
                  background: 'linear-gradient(to right, white, transparent)',
                }}
              />
              <Image
                src={item.img}
                priority
                alt="Picture of the author"
                style={{
                  width: '300px',
                  height: '100px',
                  zIndex: 1,
                }}
              />
            </div>
          </div>
        ))}
        {/* <div className="flex justify-between my-2">
          <div className="flex flex-col p-4">
            <div className="text-2xl font-bold">RAJANYA REMOTE AREA</div>
            <div>
              Menjangkau 514 kabupaten Kota seluruh Indonesia hingga remote area
            </div>
          </div>
          <div className="">
            <Image
              src={Bg1}
              alt="Picture of the author"
              style={{
                width: '300px',
                height: '100px',
                zIndex: 1,
              }}
            />
          </div>
        </div>
        <div className="flex justify-between my-2">
          <div className="flex flex-col p-4">
            <div className="text-2xl font-bold">RAJANYA REMOTE AREA</div>
            <div>
              Menjangkau 514 kabupaten Kota seluruh Indonesia hingga remote area
            </div>
          </div>
          <div className="">
            <Image
              src={Bg1}
              alt="Picture of the author"
              style={{
                width: '300px',
                height: '100px',
                zIndex: 1,
              }}
            />
          </div>
        </div>
        <div className="flex justify-between my-2">
          <div className="flex flex-col p-4">
            <div className="text-2xl font-bold">RAJANYA REMOTE AREA</div>
            <div>
              Menjangkau 514 kabupaten Kota seluruh Indonesia hingga remote area
            </div>
          </div>
          <div className="">
            <Image
              src={Bg1}
              alt="Picture of the author"
              style={{
                width: '300px',
                height: '100px',
                zIndex: 1,
              }}
            />
          </div>
        </div>
        <div className="flex justify-between my-2">
          <div className="flex flex-col p-4">
            <div className="text-2xl font-bold">RAJANYA REMOTE AREA</div>
            <div>
              Menjangkau 514 kabupaten Kota seluruh Indonesia hingga remote area
            </div>
          </div>
          <div className="">
            <Image
              src={Bg1}
              alt="Picture of the author"
              style={{
                width: '300px',
                height: '100px',
                zIndex: 1,
              }}
            />
          </div>
        </div>
        <div className="flex justify-between my-2">
          <div className="flex flex-col p-4">
            <div className="text-2xl font-bold">RAJANYA REMOTE AREA</div>
            <div>
              Menjangkau 514 kabupaten Kota seluruh Indonesia hingga remote area
            </div>
          </div>
          <div className="">
            <Image
              src={Bg1}
              alt="Picture of the author"
              style={{
                width: '300px',
                height: '100px',
                zIndex: 1,
              }}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

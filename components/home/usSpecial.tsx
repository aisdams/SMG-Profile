import Image from 'next/image';

import Bg1 from 'public/usSpecial/1.png';
import Bg2 from 'public/usSpecial/2.png';
import Bg3 from 'public/usSpecial/3.png';
import Bg4 from 'public/usSpecial/4.png';
import Bg5 from 'public/usSpecial/5.png';

const data = [
  {
    title: 'RAJANYA REMOTE AREA',
    desc: 'Menjangkau 514 kabupaten Kota seluruh Indonesia hingga remote area',
    img: Bg1,
  },
  {
    title: 'RAGAM PRODUK & LAYANAN',
    desc: 'Memiliki aneka ragam produk dan layanan mulai dari pengiriman reguler, express, trucking, dan container',
    img: Bg2,
  },
  {
    title: 'SATU KOTA SATU HARGA',
    desc: 'Link Express hadir dengan tarif seragam yang sangat membantu untuk lebih berhemat',
    img: Bg3,
  },
  {
    title: 'TOP PRIORITY GUARANTEE',
    desc: 'Progam garansi yang menjamin barang dalam hal kehilangan sesuai dengan nilai barang yang hilang',
    img: Bg4,
  },
  {
    title: '40 CABANG OTONOM',
    desc: 'Hadir di 34 provinsi dan 6 kota besar bekerja sama agen lokal sebagai cabang otonom',
    img: Bg5,
  },
];

export default function UsSpecial() {
  return (
    <div className="mt-10 px-10 xl:px-40 lg:px-28 animate-fade-right">
      <div className="text-4xl font-bold">What Make Us Special?</div>
      <div className="flex flex-col my-10">
        {data.map((item, index) => (
          <div className="flex justify-between my-2 shadow-xl" key={index}>
            <div className="flex flex-col p-4 w-8/12 mobileL:w-full mobileM:w-full mobileS:w-full">
              <div className="text-2xl font-bold">{item.title}</div>
              <div>{item.desc}</div>
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

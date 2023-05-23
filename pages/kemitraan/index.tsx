import Image from 'next/image';
import Bg1 from 'public/kemitraan/1.png';
import Bg2 from 'public/kemitraan/2.png';
import Bg3 from 'public/kemitraan/3.png';
import Bg4 from 'public/kemitraan/4.png';

import Footer from '@components/footer';

export default function Kemitraan() {
  return (
    <div className="">
      <div className="relative">
        <div
          style={{
            position: 'absolute',
            // top: '0',
            bottom: '0',
            // left: '0',
            width: '100%',
            height: '15%',
            background: 'linear-gradient(to top, white, transparent)',
          }}
        />
        <Image
          src={Bg1}
          priority
          alt="Picture of the author"
          width="0"
          height="0"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <div
            className="text-white text-4xl font-bold md:text-7xl"
            data-aos="fade-up"
          >
            <p
              className=""
              style={{
                textShadow: '0px 8px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              Kemitraan
            </p>
          </div>
        </div>
      </div>
      <div className="my-20 px-10 xl:px-40 lg:px-28">
        <div className="bg-[#1abbdb] w-full flex flex-col py-4 text-2xl font-semibold text-white">
          <div className="text-center">
            Pembayaran keanggotaan LinkShop dapat melalui transfer bank ke
            rekening berikut:
          </div>
          <div className="text-center mt-5 md:mt-0">
            BANK DKI SYARIAH a/n PT. SARANA MULYA LOGISTIK
          </div>
          <div className="text-center mt-5 md:mt-0">
            No. Rekening: 70912002176
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col hover:shadow-xl">
            <Image
              src={Bg2}
              priority
              alt="Picture of the author"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />
            <div className="text-center font-semibold text-xl py-4 hover:bg-[#1abbdb] cursor-pointer">
              SELENGKAPNYA
            </div>
          </div>
          <div className="flex flex-col hover:shadow-xl">
            <Image
              src={Bg3}
              priority
              alt="Picture of the author"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />
            <div className="text-center font-semibold text-xl py-4 hover:bg-[#1abbdb] cursor-pointer">
              SELENGKAPNYA
            </div>
          </div>
          <div className="flex flex-col hover:shadow-xl">
            <Image
              src={Bg4}
              priority
              alt="Picture of the author"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />
            <div className="text-center font-semibold text-xl py-4 hover:bg-[#1abbdb] cursor-pointer">
              SELENGKAPNYA
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col">
          <div className="flex justify-center text-2xl font-semibold">
            Jika telah melakukan transfer/pembayaran kemitraan LinkShop silahkan
            KLIK
          </div>
          <div className="flex justify-center">
            <button className="bg-[#1abbdb] text-2xl font-semibold rounded-lg text-white px-10 py-2 mt-5 hover:shadow-xl">
              KONFIRMASI PEMBAYARAN
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

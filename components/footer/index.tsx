import Image from 'next/image';
import Link from 'next/link';

import Bg2 from 'public/footer/2.png';
import Bg3 from 'public/footer/3.png';
import Bg4 from 'public/footer/4.png';
import Bg5 from 'public/footer/5.png';

export default function Footer() {
  return (
    <div className="">
      <div className="relative w-full">
        <Image
          src={Bg4}
          priority
          alt="Picture of the author"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        <Image
          src={Bg5}
          priority
          alt="Picture of the author"
          style={{
            width: '150px',
            height: '70px',
            position: 'absolute',
            bottom: '0',
            animation: 'linear infinite',
            animationName: 'myAnim',
            animationDuration: '20s',
          }}
        />
      </div>
      <div className="bg-[#1abbdb] px-[1rem] md:px-[2rem] lg:px-[5rem] xl:px-[7rem]">
        <div className="flex flex-col items-center md:flex-row justify-between py-12 text-white">
          <div className="flex flex-col text-center md:text-left">
            <div className="font-semibold">
              DAPATKAN RESPON CEPAT DARI TIM KAMI
            </div>
            <div className="text-3xl font-bold">
              JANGAN RAGU MENGHUBUNGI KAMI
            </div>
          </div>
          <div className="flex items-center mt-5 md:mt-0">
            <Link
              href={'https://wa.me/6285810558522'}
              target="_blank"
              rel="noreferrer"
              className="flex items-center border-2 text-xl rounded-full py-3 px-6 font-bold cursor-pointer hover:bg-white hover:text-[#1abbdb]"
            >
              <Image
                src={Bg3}
                priority
                alt="Picture of the author"
                style={{
                  width: '25px',
                  height: '25px',
                }}
                className="mx-2"
              />
              0858-1055-8522
            </Link>
          </div>
        </div>
      </div>
      <div className="py-10 px-10 xl:px-40 lg:px-28">
        <div className="flex xl:flex-row lg:flex-row mobileL:flex-col mobileM:flex-col mobileS:flex-col justify-around">
          <div className="w-full">
            <Image
              src={Bg2}
              priority
              alt="Picture of the author"
              style={{
                width: '150px',
                height: '20px',
              }}
            />
            <div className="font-semibold mt-2 xl:mt-5 lg:mt-5">
              Jasa pengiriman yang <br /> menjangkau 514 <br /> kota/kabupaten
              di seluruh <br /> Indonesia dengan menawarkan keunggulan 1 kota 1
              harga.
            </div>
          </div>
          <div className="w-full">
            <div className="font-bold mt-5 xl:mt-0 lg:mt-0">Office Hour</div>
            <div className="font-semibold mt-0 xl:mt-5 lg:mt-5">
              <ul>
                <li>Senin - Jumat : 09.00 - 17.00</li>
                <li>Sabtu : 08.00 - 14.00</li>
                <li>Minggu : Tutup</li>
              </ul>
            </div>
          </div>
          <div className="w-full">
            <div className="font-bold mt-5 xl:mt-0 lg:mt-0">Social Media</div>
            <div className="font-semibold mt-0 xl:mt-5 lg:mt-5">
              <ul>
                <li>
                  <Link
                    href="https://www.facebook.com/linkexpressofit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="hover:underline cursor-pointer">
                      Facebook
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/linkexpressofficial"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="hover:underline cursor-pointer">
                      Instagram
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.tiktok.com/@linkexpressofficial"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="hover:underline cursor-pointer">
                      Tiktok
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full">
            <div className="font-bold mt-5 xl:mt-0 lg:mt-0">Head Office</div>
            <div className="font-semibold mt-0 xl:mt-5 lg:mt-5">
              Citra Grand Cibubur CBD Jl. Citra Grand II Blok AR18 - 19 Kota
              Bekasi, Jawa Barat 17435
            </div>
            <div className="font-semibold mt-2">+62 21 22815019</div>
          </div>
        </div>
      </div>
      <div className="bg-[#6a6a6a] text-[white] text-center">
        © LinkExpress Powered by SML- All Rights Reserved 2023
      </div>
    </div>
  );
}

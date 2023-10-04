import Image from 'next/image';
import Link from 'next/link';

import Bg1 from 'public/footer/1.png';
import Bg2 from 'public/footer/2.png';
import Bg3 from 'public/footer/3.png';

export default function FooterHome() {
  return (
    <div className="mt-20 bg-[#eeeeee]">
      <div className="relative">
        <Image
          src={Bg1}
          priority
          alt="Picture of the author"
          style={{
            width: '100%',
            height: '500px',
            objectFit: 'cover',
          }}
        />
        <div className="absolute top-[7rem] left-0 right-0 bottom-0 flex justify-center items-center">
          <div className="text-md font-bold text-white text-center">
            <Link
              href={'https://wa.me/6285810558522'}
              target="_blank"
              rel="noreferrer"
              className="flex bg-[#B52067] text-white px-5 py-2 rounded-full cursor-pointer hover:shadow-xl"
            >
              Hubungi Kami
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

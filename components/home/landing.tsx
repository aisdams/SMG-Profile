import { Autoplay, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import Bg1 from 'public/landing/1.png';
import Bg2 from 'public/landing/2.png';
import Bg3 from 'public/landing/3.png';

import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    title: 'EKSPEDISI 1 KOTA 1 HARGA',
    desc: 'LINKEXPRESS memberikan tarif flat untuk setiap Kabupaten dan Kota meskipun ada',
    desc2: 'perbedaan jarak yang signifikan antar kecamatan',
    image: Bg1,
  },
  {
    title: 'RAJANYA REMOTE AREA',
    desc: 'LINKEXPRESS menjangkau 514 Kota/Kabupaten ke seluruh Indonesia',
    desc2: 'dan bisa kirim barang hingga kepelosok daerah',
    image: Bg2,
  },
  {
    title: 'TOP PRIORITY GUARANTEE',
    desc: 'LINKEXPRESS bertanggung jawab pada semua pengiriman kami,',
    desc2:
      'berkomitmen untuk selalu menjaga keamanan barang demi kepuasan pelanggan',
    image: Bg3,
  },
];

export default function Landing() {
  return (
    <div className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        className="h-full"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={2000}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative overflow-hidden">
            <Image
              src={slide.image}
              priority
              alt="Picture of the author"
              style={{
                width: '100%',
                height: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                objectFit: 'cover',
                filter: 'brightness(0.8)',
              }}
            />

            <div className="absolute inset-0 mx-auto grid min-h-[30rem] w-[min(90%,1280px)] place-items-center text-white pb-10">
              <div className="flex flex-col cursor-default">
                <span className="lg:text-[40px] mobileL:text-[26px] mobileM:text-[20px] mobileS:text-[18px] font-bold text-center">
                  <p className="drop-shadow-lg shadow-black">
                    PT. Logistik Indonesia Network
                  </p>
                </span>
                <span className="xl:text-[88px] lg:text-[70px] mobileL:text-[48px] mobileL:mt-5 mobileM:text-[34px] mobileM:mt-4 mobileS:text-[26px] mobileS:mt-3 font-bold text-center leading-none">
                  <p className="drop-shadow-lg shadow-black">{slide.title}</p>
                </span>
                <span className="xl:text-[24px] lg:text-[20px] mobileL:text-[20px] mobileL:mt-5 mobileM:text-[18px] mobileM:mt-4 mobileS:text-[16px] mobileS:mt-3 text-center">
                  <p className="drop-shadow-lg shadow-black">{slide.desc}</p>
                  <p className="drop-shadow-lg shadow-black">{slide.desc2}</p>
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute z-[1] inset-0 mx-auto flex justify-center xl:mt-[320px] xl:gap-6 lg:mt-[300px] lg:gap-4 md:mt-[280px] md:gap-3 mobileL:mt-[380px] mobileL:gap-3 mobileM:mt-[330px] mobileM:gap-2 mobileS:mt-[300px] mobileS:gap-2 place-items-center text-white">
        <button className="py-[0.6rem] px-10 rounded-full bg-[#1abbdb] text-[1.2rem] mobileS:text-[1rem] text-white border-white font-semibold">
          About Us
        </button>
        <button className="py-[0.6rem] px-10 rounded-full bg-[#1abbdb] text-[1.2rem] mobileS:text-[1rem] text-white border-white font-semibold">
          Contact
        </button>
      </div>
    </div>
  );
}

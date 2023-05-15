import { Autoplay, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import Bg1 from 'public/landing/1.svg';
import Bg2 from 'public/landing/2.svg';
import Bg3 from 'public/landing/3.svg';

import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    title: 'EKSPEDISI 1 KOTA 1 HARGA',
    desc: 'LinkExpress memberikan tarif flat untuk setiap kabupaten dan kota meskipun ada',
    desc2: 'ada perbedaan jarak yang signifikan antar kecamatan',
    image: Bg1,
  },
  {
    title: 'RAJANYA REMOTE AREA',
    desc: 'LinkExpress menjangkau 514 kota/kabupaten ke seluruh Indonesia',
    desc2: 'dan bisa kirim barang hingga kepelosok daerah',
    image: Bg2,
  },
  {
    title: 'TOP PRIORITY GUARANTEE',
    desc: 'LinkExpress bertanggung jawab pada semua pengiriman kami,',
    desc2:
      'berkomitmen untuk selalu menjaga keamanan barang demi kepuasan pelanggan',
    image: Bg3,
  },
];

export default function landing() {
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
              alt="Picture of the author"
              priority
              style={{
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.8)',
              }}
            />

            <div className="absolute inset-0 mx-auto grid min-h-[30rem] w-[min(90%,1280px)] place-items-center text-white pb-10">
              <div className="flex flex-col cursor-default">
                <span className="text-3xl font-bold text-center">
                  <p className="drop-shadow-lg shadow-black">
                    PT. Logistik Indonesia Network
                  </p>
                </span>
                <span
                  className="text-[88px] font-bold text-center"
                  style={{
                    lineHeight: '98px',
                  }}
                >
                  <p className="drop-shadow-lg shadow-black">{slide.title}</p>
                </span>
                <span className="text-[24px] text-center text-md">
                  <p className="drop-shadow-lg shadow-black">{slide.desc}</p>
                  <p className="drop-shadow-lg shadow-black">{slide.desc2}</p>
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute z-[1] inset-0 mx-auto flex min-h-[30rem] w-[650px] place-items-center text-white pt-[18rem]">
        <input
          type="text"
          placeholder="Cari Resi"
          style={{
            width: '100%',
            padding: '0.6rem',
            fontSize: '1.2rem',
            color: 'black',
            background: 'white',
            opacity: '0.5',
            border: 'none',
            outline: 'none',
          }}
        />
        <button className="py-[0.6rem] px-5 bg-white text-[1.2rem] text-black font-semibold">
          LACAK
        </button>
      </div>
    </div>
  );
}

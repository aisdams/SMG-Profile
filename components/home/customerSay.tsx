import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Bg1 from 'public/customerSay/1.png';
import Bg2 from 'public/customerSay/2.png';
import Bg3 from 'public/customerSay/3.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function CustomerSay() {
  const [lentgh, setLength] = useState(0);

  useEffect(() => {
    // if (window.innerWidth > 1439) {
    //   setLength(1);
    // } else if (window.innerWidth < 769) {
    //   setLength(2);
    // } else if (window.innerWidth < 1025) {
    //   setLength(3);
    // } else if (window.innerWidth < 321) {
    //   setLength(4);
    // }
    if (window.innerWidth > 1439) {
      setLength(4);
    } else if (window.innerWidth > 1023) {
      setLength(3);
    } else if (window.innerWidth > 767) {
      setLength(2);
    } else if (window.innerWidth > 323) {
      setLength(1);
    }
  }, []);

  const data = [
    {
      image: Bg1,
    },
    {
      image: Bg2,
    },
    {
      image: Bg3,
    },
    {
      image: Bg1,
    },
    {
      image: Bg2,
    },
  ];

  return (
    <div className="mt-20 px-10 xl:px-40 lg:px-28">
      <div className="text-4xl font-bold" data-aos="fade-down">
        What Our Customer Say?
      </div>
      <div className="my-10">
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={lentgh}
          navigation
          pagination={{ clickable: true }}
          className="grid md:grid-cols-3 gap-6 xl:gap-x-12"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="mb-6 lg:mb-0" data-aos="zoom-in">
                <div className="bg-red-100 shadow-lg">
                  <Image
                    src={item.image}
                    priority
                    alt="Sample photo"
                    width={300}
                    height={200}
                    className="hover:cursor-pointer"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

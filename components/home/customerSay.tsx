import Image from 'next/image';
import { useEffect, useState } from 'react';
// import Swiper core and required modules
import { Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

export default function CustomerSay() {
  const [lentgh, setLength] = useState(0);

  useEffect(() => {
    console.log(window.innerWidth);

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

  return (
    <div className="mt-20 px-10 xl:px-40 lg:px-28">
      <div className="text-4xl font-bold">What Our Customer Say?</div>
      <div className="my-10">
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={lentgh}
          navigation
          pagination={{ clickable: true }}
          className="grid md:grid-cols-3 gap-6 xl:gap-x-12"
        >
          <SwiperSlide>
            <div className="mb-6 lg:mb-0">
              <div className="relative block bg-white rounded-lg shadow-lg">
                <div className="flex">
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4 w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <Image
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
                      priority
                      className="w-full"
                      alt="Sample photo"
                      width={300}
                      height={200}
                    />
                    <a href="#!">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-lg font-bold mb-2">John Doe</h5>
                  <p>
                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                    placerat vulputate. Ut vulputate est non quam dignissim
                    elementum. Donec a ullamcorper diam.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-6 lg:mb-0">
              <div className="relative block bg-white rounded-lg shadow-lg">
                <div className="flex">
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4 w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <Image
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
                      priority
                      className="w-full"
                      alt="Sample photo"
                      width={300}
                      height={200}
                    />
                    <a href="#!">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-lg font-bold mb-2">John Doe</h5>
                  <p>
                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                    placerat vulputate. Ut vulputate est non quam dignissim
                    elementum. Donec a ullamcorper diam.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-6 lg:mb-0">
              <div className="relative block bg-white rounded-lg shadow-lg">
                <div className="flex">
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4 w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <Image
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
                      priority
                      className="w-full"
                      alt="Sample photo"
                      width={300}
                      height={200}
                    />
                    <a href="#!">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-lg font-bold mb-2">John Doe</h5>
                  <p>
                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                    placerat vulputate. Ut vulputate est non quam dignissim
                    elementum. Donec a ullamcorper diam.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-6 lg:mb-0">
              <div className="relative block bg-white rounded-lg shadow-lg">
                <div className="flex">
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4 w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <Image
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
                      priority
                      className="w-full"
                      alt="Sample photo"
                      width={300}
                      height={200}
                    />
                    <a href="#!">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-lg font-bold mb-2">John Doe</h5>
                  <p>
                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                    placerat vulputate. Ut vulputate est non quam dignissim
                    elementum. Donec a ullamcorper diam.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-6 lg:mb-0">
              <div className="relative block bg-white rounded-lg shadow-lg">
                <div className="flex">
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4 w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <Image
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
                      priority
                      className="w-full"
                      alt="Sample photo"
                      width={300}
                      height={200}
                    />
                    <a href="#!">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-lg font-bold mb-2">John Doe</h5>
                  <p>
                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                    placerat vulputate. Ut vulputate est non quam dignissim
                    elementum. Donec a ullamcorper diam.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

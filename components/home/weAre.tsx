import Image from 'next/image';
import MapWeAre from 'public/weAre/map.png';
import LinkexIcon from 'public/weAre/linkex_icon.png';
// import dynamic from 'next/dynamic';
// const CountUp = dynamic(() => import('react-countup'), { ssr: false });
import { useCountUp } from 'react-countup';
import { useRef } from 'react';

export default function WeAre() {
  const ref1 = useRef(null);
  useCountUp({
    ref: ref1,
    start: 0,
    end: 50000,
    delay: 2,
    duration: 5,
  });
  const ref2 = useRef(null);
  useCountUp({
    ref: ref2,
    start: 0,
    end: 514,
    delay: 2,
    duration: 5,
  });
  const ref3 = useRef(null);
  useCountUp({
    ref: ref3,
    start: 0,
    end: 300,
    delay: 2,
    duration: 5,
  });
  const ref4 = useRef(null);
  useCountUp({
    ref: ref4,
    start: 0,
    end: 40,
    delay: 2,
    duration: 5,
  });

  return (
    <>
      <div className="mt-10 px-10 xl:px-40 lg:px-28">
        <div className="text-4xl font-bold" data-aos="fade-down">
          Who We Are?
        </div>
        <div className="flex">
          <div
            className="w-full xl:w-5/12 z-[1] text-justify"
            data-aos="fade-right"
          >
            <div className="text-base font-semibold mt-5 relative xl:w-[700px] z-[1]">
              Sarana Mulya Grafika merupakan perusahaan yang berpengalaman dan
              mempunyai sumber jaringan yang luas untuk membantu memasarkan
              produk melalui media promosi yang terbaik. Dengan mewujudkan visi
              dan misi kami, kami selalu mengembangkan sumber daya yang kreatif,
              terampil, dan berkompeten untuk dapat memberikan kualitas terbaik
              bagi setiap pelanggan kami.
            </div>
            <div className="text-base font-semibold mt-5 relative xl:w-[700px] z-[1]">
              Saat ini, Sarana Mulya Grafika juga telah didukung dengan mesin
              teknologi maju dan terdepan. Sehingga Sarana Mulya Grafika
              berkomitmen untuk memberikan hasil yang terbaik kepada pelanggan
              karena kepuasan pelanggan adalah prioritas kami.
            </div>
            <div className="text-base font-semibold mt-3 relative xl:w-[650px] z-[1]">
              <div className="flex">
                <Image
                  src={LinkexIcon}
                  priority
                  alt="Picture of the author"
                  style={{
                    width: '40px',
                    height: '40px',

                    backgroundPosition: 'center',
                  }}
                />
                <div className="flex flex-col">
                  <div className="text-lg font-bold">
                    <span className="text-2xl text-blueTwo">N</span>EATNESS
                  </div>
                  <div className="text-base">
                    Kami selalu memberikan kerapihan, ketertiban, dan
                    kedisiplinan dalam memberikan pelayanan.
                  </div>
                </div>
              </div>
              <div className="flex">
                <Image
                  src={LinkexIcon}
                  priority
                  alt="Picture of the author"
                  style={{
                    width: '40px',
                    height: '40px',

                    backgroundPosition: 'center',
                  }}
                />
                <div className="flex flex-col">
                  <div className="text-lg font-bold">
                    <span className="text-2xl text-blueTwo">I</span>NNOVATIVE
                  </div>
                  <div className="text-base">
                    Kami selalu berusaha untuk meciptakan nilai tambah dan
                    menghasilkan ide baru
                  </div>
                </div>
              </div>
              <div className="flex">
                <Image
                  src={LinkexIcon}
                  priority
                  alt="Picture of the author"
                  style={{
                    width: '40px',
                    height: '40px',

                    backgroundPosition: 'center',
                  }}
                />
                <div className="flex flex-col">
                  <div className="text-lg font-bold">
                    <span className="text-2xl text-blueTwo">C</span>REATIVE
                  </div>
                  <div className="text-base">
                    Kami akan selalu beradaptasi pada tren dan mendorong
                    kreativitas tanpa batas.
                  </div>
                </div>
              </div>
              <div className="flex">
                <Image
                  src={LinkexIcon}
                  priority
                  alt="Picture of the author"
                  style={{
                    width: '40px',
                    height: '40px',

                    backgroundPosition: 'center',
                  }}
                />
                <div className="flex flex-col">
                  <div className="text-lg font-bold">
                    <span className="text-2xl text-blueTwo">E</span>XCELLENCE
                    (INOVATIF DAN AMAN)
                  </div>
                  <div className="text-base">
                    Kami berdedikasi dan bersedia mencapai standar tertinggi
                    menuju pelayanan yang berkualitas. Memberikan kinerja
                    terbaik dan hasil yang luar biasa.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden xl:w-7/12 xl:block" data-aos="fade-left">
            <Image
              src={MapWeAre}
              priority
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
      <div
        className=""
        style={{
          background:
            'linear-gradient(to bottom, #ffffff 0%, #ffffff 50%, #0B416D 50%, #0B416D 100%)',
        }}
      >
        <div className="mt-20 px-10 xl:px-40 lg:px-28">
          <div className="flex flex-col xl:flex-row justify-around gap-4 text-center">
            <div className="bg-[#eeeeee] w-full xl:w-3/12 flex flex-col p-6">
              <div className="font-bold text-4xl">
                <span ref={ref1} />+
              </div>
              {/* <CountUp duration={5} start={0} end={50000}>
                {({ countUpRef }) => (
                  <div className="font-bold text-4xl">
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp> */}
              <div className="font-semibold">PENGIRIMAN</div>
            </div>
            <div className="bg-[#eeeeee] w-full xl:w-3/12 flex flex-col p-6">
              <div className="font-bold text-4xl">
                <span ref={ref2} />+
              </div>
              {/* <CountUp duration={5} start={0} end={514} delay={2}>
                {({ countUpRef }) => (
                  <div className="font-bold text-4xl">
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp> */}
              <div className="font-semibold">AREA TERCOVER</div>
            </div>
            <div className="bg-[#eeeeee] w-full xl:w-3/12 flex flex-col p-6">
              <div className="font-bold text-4xl">
                <span ref={ref3} />+
              </div>
              {/* <CountUp duration={5} start={0} end={300}>
                {({ countUpRef }) => (
                  <div className="font-bold text-4xl">
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp> */}
              <div className="font-semibold">PELANGGAN</div>
            </div>
            <div className="bg-[#eeeeee] w-full xl:w-3/12 flex flex-col p-6">
              <div className="font-bold text-4xl">
                <span ref={ref4} />+
              </div>
              {/* <CountUp duration={5} start={0} end={40}>
                {({ countUpRef }) => (
                  <div className="font-bold text-4xl">
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp> */}
              <div className="font-semibold">CABANG & AGEN</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

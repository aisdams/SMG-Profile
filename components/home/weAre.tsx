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
          <div className="w-full xl:w-5/12 z-[1]" data-aos="fade-right">
            <div className="text-base font-semibold mt-5 relative xl:w-[700px] z-[1]">
              LinkExpress yang merupakan sister company dari Sarana Mulya
              Logistic, memberikan warna tersendiri dalam layanan Logistik &
              Sarana Mulya Logistik bagi masyarakat Indonesia dengan keunggulan
              harga yang super kompetitif melalui tagline kami Satu Kota Satu
              Harga.
            </div>
            <div className="text-base font-semibold mt-5 relative xl:w-[700px] z-[1]">
              LINKEXPRESS memberikan solusi layanan pickup di tempat dengan
              harga hemat dan transparan (Satu Kota, Satu Harga). Cukup perlu
              NGOPI, Anda dapat bertransaksi dengan LINKEXPRESS
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
                    <span className="text-2xl text-[#f35f0f]">NG</span>EKLIK
                  </div>
                  <div className="text-base">
                    kunjungi website www.linkexpress.co.id
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
                    <span className="text-2xl text-[#f35f0f]">O</span>RDER
                  </div>
                  <div className="text-base">
                    Masukan data pengiriman baik alamat maupun berat paket untuk
                    mengetahui estimasi biaya
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
                    <span className="text-2xl text-[#f35f0f]">P</span>ICK UP
                  </div>
                  <div className="text-base">
                    Barang akan kami jemput sesuai alamat lokasi yang diberikan
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
                    <span className="text-2xl text-[#f35f0f]">I</span>DAMAN
                    (INOVATIF DAN AMAN)
                  </div>
                  <div className="text-base">
                    Silahkan Anda bersantai sembari NGOPI. Biarkan pelayanan
                    kami menjadi idaman bagi Anda
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
            'linear-gradient(to bottom, #ffffff 0%, #ffffff 50%, #1abbdb 50%, #1abbdb 100%)',
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

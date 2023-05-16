import Image from 'next/image';
import MapWeAre from 'public/weAre/map.png';
import LinkexIcon from 'public/weAre/linkex_icon.png';

export default function weAre() {
  return (
    <>
      <div className="mt-10 px-10 xl:px-40 lg:px-28">
        <div className="w-full">
          <div className="text-4xl font-bold">Who We Are?</div>
        </div>
        <div className="flex">
          <div className="w-full xl:w-5/12">
            <div className="text-base font-semibold mt-5 relative xl:w-[700px] z-[1]">
              LinkExpress yang merupakan sister company dari Sarana Mulya
              Logistic, memberikan warna tersendiri dalam layanan logistic bagi
              masyarakat Indonesia dengan keunggulan harga yang super kompetitif
              melalui tagline kami Satu Kota Satu Harga.
            </div>
            <div className="text-base font-semibold mt-5 relative xl:w-[700px] z-[1]">
              LINKEXPRESS memberikan solusi layanan pickup di tempat dengan
              harga hemat dan transparan (1 Kota, 1 Harga). Cukup perlu NGOPI,
              anda dapat bertransaksi dengan LINKEXPRESS
            </div>
            <div className="text-base font-semibold mt-3 relative xl:w-[650px] z-[1]">
              <div className="flex">
                <Image
                  src={LinkexIcon}
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
                    kami menjadi idaman bagi anda
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden xl:w-7/12 xl:block">
            <Image
              src={MapWeAre}
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
          <div className="flex justify-around gap-4 text-center">
            <div className="bg-[#eeeeee] w-3/12 flex flex-col p-6">
              <div className="font-bold text-4xl">50.000+</div>
              <div className="font-semibold">PENGIRIMAN</div>
            </div>
            <div className="bg-[#eeeeee] w-3/12 flex flex-col p-6">
              <div className="font-bold text-4xl">514+</div>
              <div className="font-semibold">AREA TERCOVER</div>
            </div>
            <div className="bg-[#eeeeee] w-3/12 flex flex-col p-6">
              <div className="font-bold text-4xl">300+</div>
              <div className="font-semibold">PELANGGAN</div>
            </div>
            <div className="bg-[#eeeeee] w-3/12 flex flex-col p-6">
              <div className="font-bold text-4xl">40+</div>
              <div className="font-semibold">CABANG & AGEN</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

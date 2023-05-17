import Image from 'next/image';

import Bg1 from 'public/weOffer/1.png';
import Bg2 from 'public/weOffer/2.png';
import Bg3 from 'public/weOffer/3.png';
import Bg4 from 'public/weOffer/4.png';
import Bg5 from 'public/weOffer/5.png';
import Bg6 from 'public/weOffer/6.png';

export default function weOffer() {
  return (
    <div className="h-full bg-[#1abbdb]">
      <div className="py-16 px-10 xl:px-40 lg:px-28">
        <div className="text-4xl font-bold text-white">What We Offer?</div>
        <div className="grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 mobileL:grid-cols-2 mt-10 gap-4 justify-around">
          <div className="flex flex-col">
            <Image
              src={Bg1}
              alt="Picture of the author"
              style={{
                width: '100%',
                height: '250px',
              }}
            />
            <div className="mx-1 py-4 px-2 -translate-y-4 bg-white border-t-[6px] border-[#1abbdb]">
              <div className="font-bold text-lg">Reguler</div>
              <div className="text-sm">
                Layanan pengiriman atau paket door to door dengan moda laut dan
                darat yang berfokus pada biaya yang lebih efisien dengan tetap
                memberikan kepastian waktu pengiriman.
              </div>
              <button className="bg-[#1abbdb] mt-10 py-1 px-5 rounded-full text-white font-semibold">
                Read More...
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <Image
              src={Bg2}
              alt="Picture of the author"
              style={{
                width: '100%',
                height: '250px',
              }}
            />
            <div className="mx-1 py-4 px-2 -translate-y-4 bg-white border-t-[6px] border-[#1abbdb]">
              <div className="font-bold text-lg">Express</div>
              <div className="text-sm">
                Layanan pengiriman atau paket door to door dengan waktu yang
                cepat. Sebagian besar moda yang digunakan adalah pesawat udara.
              </div>
              <button className="bg-[#1abbdb] mt-10 py-1 px-5 rounded-full text-white font-semibold">
                Read More...
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <Image
              src={Bg3}
              alt="Picture of the author"
              style={{
                width: '100%',
                height: '250px',
              }}
            />
            <div className="mx-1 py-4 px-2 -translate-y-4 bg-white border-t-[6px] border-[#1abbdb]">
              <div className="font-bold text-lg">Container</div>
              <div className="text-sm">
                Layanan pengiriman paket atau High Value Shipment secara door to
                door dengan Full Container Load ataupun Less Container Load yang
                disesuaikan dengan kebutuhan pelanggan.
              </div>
              <button className="bg-[#1abbdb] mt-10 py-1 px-5 rounded-full text-white font-semibold">
                Read More...
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <Image
              src={Bg4}
              alt="Picture of the author"
              style={{
                width: '100%',
                height: '250px',
              }}
            />
            <div className="mx-1 py-4 px-2 -translate-y-4 bg-white border-t-[6px] border-[#1abbdb]">
              <div className="font-bold text-lg">Trucking</div>
              <div className="text-sm">
                Layanan pengiriman paket atau High value Shipment secara door to
                door dengan Full Trucking Load atau Less Trucking Load yang
                disesuaikan dengan kebutuhan pelanggan.
              </div>
              <button className="bg-[#1abbdb] mt-10 py-1 px-5 rounded-full text-white font-semibold">
                Read More...
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <Image
              src={Bg5}
              alt="Picture of the author"
              style={{
                width: '100%',
                height: '250px',
              }}
            />
            <div className="mx-1 py-4 px-2 -translate-y-4 bg-white border-t-[6px] border-[#1abbdb]">
              <div className="font-bold text-lg">Exim</div>
              <div className="text-sm">
                Layanan pengiriman baik export maupun import door to door
                container maupun kg-base, serta layanan custom clearance.
              </div>
              <button className="bg-[#1abbdb] mt-10 py-1 px-5 rounded-full text-white font-semibold">
                Read More...
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <Image
              src={Bg6}
              alt="Picture of the author"
              style={{
                width: '100%',
                height: '250px',
              }}
            />
            <div className="mx-1 py-4 px-2 -translate-y-4 bg-white border-t-[6px] border-[#1abbdb]">
              <div className="font-bold text-lg">Warehouse</div>
              <div className="text-sm">
                Layanan yang menawarkan jasa penyimpanan barang berbentuk
                gudang.
              </div>
              <button className="bg-[#1abbdb] mt-10 py-1 px-5 rounded-full text-white font-semibold">
                Read More...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

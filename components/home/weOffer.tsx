import Image from 'next/image';

import Bg1 from 'public/weOffer/1.png';
import Bg2 from 'public/weOffer/2.png';
import Bg3 from 'public/weOffer/3.png';
import Bg4 from 'public/weOffer/4.png';
import Bg5 from 'public/weOffer/5.png';
import Bg6 from 'public/weOffer/6.png';

export default function WeOffer() {
  const data = [
    {
      name: 'Reguler',
      desc: 'Layanan pengiriman atau paket door to door dengan moda laut dan darat yang berfokus pada biaya yang lebih efisien dengan tetap memberikan kepastian waktu pengiriman.',
      img: Bg1,
    },
    {
      name: 'Express',
      desc: 'Layanan pengiriman atau paket door to door dengan waktu yang cepat. Sebagian besar moda yang digunakan adalah pesawat udara.',
      img: Bg2,
    },
    {
      name: 'Container',
      desc: 'Layanan pengiriman paket atau High Value Shipment secara door to door dengan Full Container Load ataupun Less Container Load yang disesuaikan dengan kebutuhan pelanggan',
      img: Bg3,
    },
    {
      name: 'Trucking',
      desc: 'Layanan pengiriman paket atau High value Shipment secara door to door dengan Full Trucking Load atau Less Trucking Load yang disesuaikan dengan kebutuhan pelanggan',
      img: Bg4,
    },
    {
      name: 'Exim',
      desc: 'Layanan pengiriman baik export maupun import door to door container maupun kg-base, serta layanan custom clearance.',
      img: Bg5,
    },
    {
      name: 'Warehouse',
      desc: 'Layanan yang menawarkan jasa penyimpanan barang berbentuk gudang.',
      img: Bg6,
    },
  ];

  return (
    <div className="h-full bg-[#1abbdb]">
      <div className="py-16 px-10 xl:px-40 lg:px-28">
        <div className="text-4xl font-bold text-white" data-aos="fade-down">
          What We Offer?
        </div>
        <div className="grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 mobileL:grid-cols-2 mt-10 gap-4 justify-around">
          {data.map((item, index) => (
            <div className="flex flex-col" key={index} data-aos="zoom-in">
              <Image
                src={item.img}
                priority
                alt="Picture of the author"
                style={{
                  width: '100%',
                  height: '250px',
                }}
              />
              <div className="mx-1 py-4 px-2 -translate-y-4 bg-white border-t-[6px] border-[#1abbdb]">
                <div className="font-bold text-lg">{item.name}</div>
                <div className="text-sm">{item.desc}</div>
                <button className="bg-[#1abbdb] mt-10 py-1 px-5 rounded-full text-white font-semibold">
                  Read More...
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

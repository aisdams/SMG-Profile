import Image from 'next/image';
import Bg1 from 'public/service/1.png';
import Bg2 from 'public/service/2.png';
import Bg3 from 'public/service/3.png';
import Bg4 from 'public/service/4.png';
import Bg5 from 'public/service/5.png';
import Bg6 from 'public/service/6.png';
import Bg7 from 'public/service/7.png';

import Footer from '@components/footer';

export default function Service() {
  const data = [
    {
      name: 'Reguler',
      description:
        'adalah layanan pengiriman atau paket door to door dengan moda laut dan darat yang berfokus pada biaya yang lebih efisien dengan tetap memberikan kepastian waktu pengiriman.',
      image: Bg2,
    },
    {
      name: 'Express',
      description:
        'adalah layanan pengiriman atau paket door to door dengan waktu yang cepat. Sebagian besar moda yang digunakan adalah pesawat udara.',
      image: Bg3,
    },
    {
      name: 'Trucking',
      description:
        'adalah layanan pengiriman paket atau High value Shipment secara door to door dengan Full Trucking Load atau Less Trucking Load yang disesuaikan dengan kebutuhan pelanggan.',
      image: Bg4,
    },
    {
      name: 'Container',
      description:
        'Container adalah layanan pengiriman paket atau High Value Shipment secara door to door dengan Full Container Load ataupun Less Container Load yang disesuaikan dengan kebutuhan pelanggan.',
      image: Bg5,
    },
    {
      name: 'EXIM (Export Import) and Custom Clearence',
      description:
        'adalah layanan pengiriman baik export maupun import door to door container maupun kg-base, serta layanan custom clearance.',
      image: Bg6,
    },
    {
      name: 'Warehousing',
      description:
        'Warehousing adalah layanan yang menawarkan jasa penyimpanan barang berbentuk gudang.',
      image: Bg7,
    },
  ];
  return (
    <div className="">
      <div className="relative">
        <div
          style={{
            position: 'absolute',
            // top: '0',
            bottom: '0',
            // left: '0',
            width: '100%',
            height: '15%',
            background: 'linear-gradient(to top, white, transparent)',
          }}
        />
        <Image
          src={Bg1}
          priority
          alt="Picture of the author"
          width="0"
          height="0"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <div className="text-white text-7xl font-bold">
            <p
              className=""
              style={{
                textShadow: '0px 8px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              Service
            </p>
          </div>
        </div>
      </div>
      <div className="my-20 px-10 xl:px-40 lg:px-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {/* <div className="relative block bg-white rounded-lg shadow-lg">
            <div className="flex">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg m-4 w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <Image
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
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
          </div> */}
          {data.map((item, index) => (
            <div
              className="relative block bg-white rounded-lg shadow-lg"
              key={index}
            >
              <div className="flex">
                <div
                  className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg m-4 w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <Image
                    src={item.image}
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
                <h5 className="text-lg font-bold mb-2">{item.name}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

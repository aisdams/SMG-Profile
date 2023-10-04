import Image from 'next/image';
import Bg1 from 'public/kemitraan/1.png';
import Bg2 from 'public/service/2.png';
import Bg3 from 'public/service/3.png';
import Bg4 from 'public/service/4.png';
import Bg5 from 'public/service/5.png';
import Bg6 from 'public/service/6.png';
import Bg7 from 'public/service/7.png';

import Footer from '@components/footer';

export default function Kemitraan() {
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
          <div className="text-white text-4xl font-bold md:text-7xl">
            <p
              className=""
              style={{
                textShadow: '0px 8px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              Hubungi Kami
            </p>
          </div>
        </div>
      </div>
      <div className="my-20 px-10 xl:px-40 lg:px-28">
        <div className="flex xl:flex-row lg:flex-row md:flex-row mobileS:flex-col">
          <div className="w-full md:w-8/12 p-4">
            <div className="font-bold text-xl">
              Apakah Anda memiliki pertanyaan?
            </div>
            <div className="flex flex-col md:flex-row mt-2 gap-2">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Nama"
                  className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-red-400"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-red-400"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row mt-2 gap-2">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-red-400"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-red-400"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row mt-2">
              <textarea
                name=""
                id=""
                cols={20}
                rows={5}
                placeholder="Message"
                className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-red-400"
              />
            </div>
            <div className="flex justify-start mt-2">
              <button className="bg-red-400 text-white px-4 py-2 rounded-lg">
                Kirim
              </button>
            </div>
          </div>
          <div className="w-full md:w-4/12 bg-[#FBFBFB] rounded-xl p-4">
            <div>
              <div className="font-bold text-xl">Kantor pusat</div>
              <div className="text-gray-600">
                Kawasan Niaga Citra Grand. R15-17, RT.002/RW.008, Jatisampurna,
                Kec. Jatisampurna, Kota Bks, Jawa Barat 17434
              </div>
            </div>
            <div className="mt-4">
              <div className="font-bold text-xl">Jam Kerja</div>
              <div className="text-gray-600">
                <ul>
                  <li>Senin - Jumat : 09.00 - 17.00</li>
                  <li>Sabtu : 08.00 - 14.00</li>
                  <li>Minggu : Tutup</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <div className="font-bold text-xl">Contact</div>
              <div className="text-gray-600">
                <ul>
                  <li>Email : 09.00 - 17.00</li>
                  <li>Phone : 08.00 - 14.00</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex xl:flex-row lg:flex-row md:flex-row mobileS:flex-col mt-10">
          <iframe
            width="100%"
            height="500"
            // frameborder="0"
            // scrolling="no"
            // marginheight="0"
            // marginwidth="0"
            src="https://www.google.com/maps/embed/v1/place?q=LinkExpress,+RT.002/RW.008,+Jatisampurna,+Bekasi,+West+Java,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            // src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1982.6044839252481!2d106.94002!3d-6.366997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xff989a705829b3a2!2sPT.%20INSPIRY%20INDONESIA%20KONSULTAN!5e0!3m2!1sen!2sus!4v1665826439901!5m2!1sen!2sus'
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}

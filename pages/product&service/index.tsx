import Image from 'next/image';
import Bg1 from 'public/service/1.png';
import Bg2 from 'public/service/2.png';
import Bg3 from 'public/service/3.png';
import Bg4 from 'public/service/4.png';
import Bg5 from 'public/service/5.png';
import Bg6 from 'public/service/6.png';
import Bg7 from 'public/service/7.png';
import Bg8 from 'public/service/8.jpeg';

import Footer from '@components/footer';
import Link from 'next/link';

export default function Service() {
  const data = [
    {
      name: 'Company Profile',
      description:
        'Jasa pembuatan company profile baik dalam bentuk cetak maupun video. Layanan yang kami berikan berupa ide untuk konten dalam company profile, design untuk versi cetak, copywriting, storyboard, dan editing untuk versi video. ',
      image: Bg2,
    },
    {
      name: 'Sistem Operasional',
      description:
        'Jasa pembuatan operational management system untuk sarana penunjang suatu operasional perusahaan. Kami melayani full customize dimana disesuaikan dengan alur atau proses bisnis di perusahaan Anda',
      image: Bg8,
    },
    {
      name: 'Social Media',
      description:
        'Jasa pengurusan social media bisnis diantaranya Instagram,Facebook, Youtube, TikTok, dan lainnya. Yang kami berikanadalah berupa pengurusan design stories & feeds, post stories &feeds, copywriting captions, popular hashtags, managecomments & direct messages, dan social Media Ads.',
      image: Bg4,
    },
    {
      name: 'Website',
      description:
        'Jasa pembuatan website mulai dari design website (Elemen,Gambar, Warna, Font, Grafik), copywriting Bahasa indonesia &inggris, development & maintenance website, kustomisasi domain,HTML, CSS & JavaScript, serta gratis 5 Artikel Blog.',
      image: Bg5,
    },
    {
      name: 'Booth',
      description:
        'Kami menyediakan layanan pembuatan stan, mulai dari desain hingga konstruksi. Kami mendesain dan menciptakan stan pameran yang berkualitas dan eksklusif.',
      image: Bg5,
    },
    {
      name: 'Merchandise',
      description:
        'Jasa pembuatan merchandise bisnis atau perusahaan seperti mug, lanyard, notebook, puplen, kipas, mousepad, kaos, dan sebagainya mulai dari designing hingga proses cetak',
      image: Bg6,
    },
    {
      name: 'Percetakan',
      description:
        'Kami menyediakan layanan offset printing dan digital printing. Produk yang dapat kami cetak baik offset maupun digital printing berupa : o Buku, Katalog, Buku panduan, Majalah, Buku menu, Agenda o Nota, Faktur, Invoice o Kop Surat, Amplop, Kartu, Undangan, dll. ',
      image: Bg7,
    },
    {
      name: 'Furniture, komputer, Stationery',
      description:
        'Penyediaan kebutuhan alat tulis kantor, perangkat keras komputer, dan furniture kantor. ',
      image: Bg8,
    },
    {
      name: 'Design',
      description:
        'Jasa pembuatan flyer, brochure, product catalog, dan sejenisnya. Kami memberikan fasilitas designing, copywriting dan printing jika dibutuhkan. Kami memberikan permintaan kustomisasi terhadap design, warna, model, hingga bentuknya. Kami juga menawarkan jasa promosi untuk event-event seperti pameran,  conference, training, dan sebagainya.',
      image: Bg3,
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
          <div
            className="text-white text-4xl font-bold md:text-7xl"
            data-aos="fade-up"
          >
            <p
              className=""
              style={{
                textShadow: '0px 8px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              Product & Service
            </p>
          </div>
        </div>
      </div>
      <div className="my-20 px-10 xl:px-40 lg:px-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div
              className="relative block bg-white rounded-lg shadow-lg"
              key={index}
              data-aos="zoom-in"
            >
              <Link href="#!">
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
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                    ></div>
                  </div>
                </div>
                <div className="p-6 text-left">
                  <h5 className="text-lg font-bold mb-2">{item.name}</h5>
                  <p>{item.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

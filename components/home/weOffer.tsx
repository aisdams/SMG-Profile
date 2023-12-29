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
      name: 'Company Profile',
      desc: 'Jasa pembuatan company profile baik dalam bentuk cetak maupun video. Layanan yang kami berikan berupa ide untuk konten dalam company profile, design untuk versi cetak, copywriting, storyboard, dan editing untuk versi video. ',
      img: Bg2,
    },
    {
      name: 'Sistem Operasional',
      desc: 'Jasa pembuatan operational management system untuk sarana penunjang suatu operasional perusahaan. Kami melayani full customize dimana disesuaikan dengan alur atau proses bisnis di perusahaan Anda',
      img: Bg5,
    },
    {
      name: 'Social Media',
      desc: 'Jasa pengurusan social media bisnis diantaranya Instagram,Facebook, Youtube, TikTok, dan lainnya. Yang kami berikanadalah berupa pengurusan design stories & feeds, post stories &feeds, copywriting captions, popular hashtags, managecomments & direct messages, dan social Media Ads.',
      img: Bg4,
    },
    {
      name: 'Website',
      desc: 'Jasa pembuatan website mulai dari design website (Elemen,Gambar, Warna, Font, Grafik), copywriting Bahasa indonesia &inggris, development & maintenance website, kustomisasi domain,HTML, CSS & JavaScript, serta gratis 5 Artikel Blog.',
      img: Bg5,
    },
    {
      name: 'Booth',
      desc: 'Kami menyediakan layanan pembuatan stan, mulai dari desain hingga konstruksi. Kami mendesain dan menciptakan stan pameran yang berkualitas dan eksklusif.',
      img: Bg5,
    },
    {
      name: 'Merchandise',
      desc: 'Jasa pembuatan merchandise bisnis atau perusahaan seperti mug, lanyard, notebook, puplen, kipas, mousepad, kaos, dan sebagainya mulai dari designing hingga proses cetak',
      img: Bg6,
    },
    {
      name: 'Percetakan',
      desc: 'Kami menyediakan layanan offset printing dan digital printing. Produk yang dapat kami cetak baik offset maupun digital printing berupa : o Buku, Katalog, Buku panduan, Majalah, Buku menu, Agenda o Nota, Faktur, Invoice o Kop Surat, Amplop, Kartu, Undangan, dll. ',
      img: Bg3,
    },
    {
      name: 'Furniture, komputer, Stationery',
      desc: 'Penyediaan kebutuhan alat tulis kantor, perangkat keras komputer, dan furniture kantor. ',
      img: Bg5,
    },
    {
      name: 'Design',
      desc: 'Jasa pembuatan flyer, brochure, product catalog, dan sejenisnya. Kami memberikan fasilitas designing, copywriting dan printing jika dibutuhkan. Kami memberikan permintaan kustomisasi terhadap design, warna, model, hingga bentuknya. Kami juga menawarkan jasa promosi untuk event-event seperti pameran,  conference, training, dan sebagainya.',
      img: Bg3,
    },
  ];

  return (
    <div className="h-full bg-blueTwo">
      <div className="py-16 px-10 xl:px-40 lg:px-28">
        <div className="text-4xl font-bold text-white" data-aos="fade-down">
          What We Offer?
        </div>
        <div
          className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 mobileL:grid-cols-2 mt-10 gap-4 justify-around"
          data-aos="fade-up"
        >
          {data.map((item, index) => (
            <div className="flex flex-col bg-white" key={index}>
              <Image
                src={item.img}
                priority
                alt="Picture of the author"
                style={{
                  width: '100%',
                  height: '250px',
                }}
              />
              <div className="flex flex-col mx-1 py-4 px-2">
                <div className="font-bold text-lg">{item.name}</div>
                <div className="text-sm">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

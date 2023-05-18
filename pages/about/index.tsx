import Image from 'next/image';
import Bg1 from 'public/about/1.png';
import Bg2 from 'public/about/2.png';
import Bg3 from 'public/about/3.png';

import Footer from '@components/footer';

export default function About() {
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
          alt="Picture of the author"
          width="0"
          height="0"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <div className="text-white text-7xl font-bold">
            <p className="drop-shadow-2xl shadow-black">About Us</p>
          </div>
        </div>
      </div>
      <div className="my-20 px-10 xl:px-40 lg:px-28">
        <Image
          src={Bg2}
          alt="Picture of the author"
          style={{
            width: '250px',
            height: '30px',
          }}
        />
        <div className="mt-5 font-semibold text-xl">
          Era disrupsi saat ini menjadikan setiap lini bisnis menjadi berubah
          dengan kecepatan yang belum pernah terjadi <br /> sebelumnya. Begitu
          juga dalam bidang logistic di Indonesia, terjadi pesaingan seru dengan
          munculnya para pemain <br /> baru yang lebih dinamis, efisien dan
          visioner.
        </div>
        <div className="mt-5 font-semibold text-xl">
          LinkExpress yang merupakan sister company dari Sarana Mulya Logistic,
          memberikan warna <br /> tersendiri dalam layanan logistic bagi
          masyarakat Indonesia dengan keunggulan harga yang <br /> super
          kompetitif melalui tagline kami Satu Kota Satu Harga.
        </div>
        <div className="flex mt-5 text-xl justify-between relative">
          <div className="font-semibold w-5/12">
            Kami juga akan terus mengembangkan layanan LinkExpress berbasis
            platform teknologi, sehingga menjadikan bisnis logistik akan semakin
            mudah dan terbuka untuk semua pelaku usaha. Dengan pengembangan
            tersebut nantinya setiap orang dapat berpartisipasi dan berpartner
            dalam bisnis logistik dengan platform teknologi LinkExpress, oleh
            karena itu semboyan kami adalah expression of It.
          </div>
          <div className="w-6/12 absolute right-0 bottom-0">
            <Image
              src={Bg3}
              alt="Picture of the author"
              style={{
                width: '100%',
                height: '100%',
                // objectFit: 'cover',
                objectPosition: 'top 100px right 0',
              }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

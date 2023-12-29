// import { useState } from 'react';
import Image from 'next/image';
import Bg1 from 'public/about/1.png';
import Bg2 from 'public/about/2.png';
import Bg3 from 'public/about/3.png';
import Bg4 from 'public/about/4.png';
import Bg5 from 'public/about/5.png';
import Bg6 from 'public/about/6.png';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';

import Footer from '@components/footer';

export default function About() {
  const tabs = ['Vision & Mission', 'Link GO!', 'Company Value'];

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
              About Us
            </p>
          </div>
        </div>
      </div>
      <div className="my-20 px-10 xl:px-40 lg:px-28">
        <Image
          src={Bg2}
          priority
          alt="Picture of the author"
          style={{
            width: '250px',
            height: '30px',
          }}
          data-aos="fade-right"
        />
        <div
          className="mt-5 font-semibold text-xl text-justify"
          data-aos="fade-right"
        >
          Sarana Mulya Grafika merupakan perusahaan yang bergerak dibidang
          kreatif dan pendukung para pelaku bisnis di Indonesia untuk membangun
          kesadaran merek dan meningkatkan level kualitas bisnis Anda. Kami
          melayani bisnis Anda dalam hal advertising, branding, pembuatan system
          operasional, pemenuhan kebutuhan furniture, komputer, sekaligus
          stationery, dan percetakan. Kami dapat melakukan perencanaan,
          perancangan, penerapan, pemenuhan, hingga percetakan menyesuaikan
          dengan kebutuhan Anda.
        </div>
        <div
          className="mt-5 font-semibold text-xl text-justify"
          data-aos="fade-right"
        >
          Sejak tahun 2021, kami memulai bisnis ini dengan berorientasi terhadap
          mutu pelayanan terbaik seiring mengikuti perkembangan tren. Sarana
          Mulya Grafika hadir dengan kualitas layanan yang tinggi serta didukung
          tenaga-tenaga ahli yang terampil dan berpengalaman pada bidang kreatif
          dan menjadi pendukung bisnis Anda, demi mengatasi tantangan persaingan
          bisnis global ke depannya.
        </div>
        <div className="flex mt-5 text-xl justify-between text-justify relative xxxl:h-[20rem]">
          <div className="font-semibold w-full lg:w-5/12" data-aos="fade-right">
            Sarana Mulya Grafika merupakan perusahaan yang berpengalaman dan
            mempunyai sumber jaringan yang luas untuk membantu memasarkan produk
            melalui media promosi yang terbaik. Dengan mewujudkan visi dan misi
            kami, kami selalu mengembangkan sumber daya yang kreatif, terampil,
            dan berkompeten untuk dapat memberikan kualitas terbaik bagi setiap
            pelanggan kami. Saat ini, Sarana Mulya Grafika juga telah didukung
            dengan mesin teknologi maju dan terdepan. Sehingga Sarana Mulya
            Grafika berkomitmen untuk memberikan hasil yang terbaik kepada
            pelanggan karena kepuasan pelanggan adalah prioritas kami.
          </div>
          <div
            className="w-6/12 absolute bottom-0 right-0 hidden xl:block lg:block h-full"
            data-aos="fade-left"
          >
            <Image
              src={Bg3}
              priority
              alt="Picture of the author"
              style={{
                width: '100%',
                height: '100%',
                // objectFit: 'cover',
                // padding
                // objectPosition: 'top 100px right 0',
              }}
            />
          </div>
        </div>
        <div className="w-full">
          <Tab.Group>
            {/* <Tab.List className="flex flex-col md:flex-row rounded-xl mt-1"> */}
            <Tab.List className="grid md:grid-cols-3 mt-1">
              {tabs.map((item) => (
                <Tab
                  key={item}
                  id="pointer"
                  className={({ selected }) =>
                    classNames(
                      'w-full p-[2rem] pr-[4rem] text-sm font-medium leading-5 text-black bg-[#eeeeee] relative',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected
                        ? '!bg-blueTwo !text-white shadow mobileM:!text-xl'
                        : 'text-black hover:bg-blueTwo hover:text-white',
                      item === 'Vision & Mission' && 'md:left-[21%]',
                      item === 'Link GO!' && 'mt-5 md:mt-0',
                      item === 'Company Value' && 'md:right-[21%] mt-5 md:mt-0'
                    )
                  }
                >
                  {item}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {tabs.map((item, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-white',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                  )}
                >
                  {item === 'Vision & Mission' && (
                    <div className="flex flex-col">
                      <Image
                        src={Bg4}
                        priority
                        alt="Picture of the author"
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    </div>
                  )}
                  {item === 'Link GO!' && (
                    <div className="flex flex-col mt-10">
                      <Image
                        src={Bg5}
                        priority
                        alt="Picture of the author"
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    </div>
                  )}
                  {item === 'Company Value' && (
                    <div className="flex justify-center mt-10">
                      <Image
                        src={Bg6}
                        priority
                        alt="Picture of the author"
                        style={{
                          width: '70%',
                          height: '50%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                  )}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>

      <Footer />
    </div>
  );
}

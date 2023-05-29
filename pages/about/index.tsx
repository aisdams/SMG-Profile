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
        <div className="mt-5 font-semibold text-xl" data-aos="fade-right">
          Era disrupsi saat ini menjadikan setiap lini bisnis menjadi berubah
          dengan kecepatan yang belum pernah terjadi sebelumnya. Begitu juga
          dalam bidang logistic di Indonesia, terjadi pesaingan seru dengan
          munculnya para pemain baru yang lebih dinamis, efisien dan visioner.
        </div>
        <div className="mt-5 font-semibold text-xl" data-aos="fade-right">
          LinkExpress yang merupakan sister company dari Sarana Mulya Logistic,
          memberikan warna tersendiri dalam layanan logistic bagi masyarakat
          Indonesia dengan keunggulan harga yang super kompetitif melalui
          tagline kami Satu Kota Satu Harga.
        </div>
        <div className="flex mt-5 text-xl justify-between relative">
          <div className="font-semibold w-full lg:w-5/12" data-aos="fade-right">
            Kami juga akan terus mengembangkan layanan LinkExpress berbasis
            platform teknologi, sehingga menjadikan bisnis logistik akan semakin
            mudah dan terbuka untuk semua pelaku usaha. Dengan pengembangan
            tersebut nantinya setiap orang dapat berpartisipasi dan berpartner
            dalam bisnis logistik dengan platform teknologi LinkExpress, oleh
            karena itu semboyan kami adalah Expression Of IT.
          </div>
          <div
            className="w-6/12 absolute right-0 bottom-0 hidden xl:block lg:block"
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
                objectPosition: 'top 100px right 0',
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
                        ? '!bg-[#1abbdb] !text-white shadow mobileM:!text-xl'
                        : 'text-black hover:bg-[#1abbdb] hover:text-white',
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

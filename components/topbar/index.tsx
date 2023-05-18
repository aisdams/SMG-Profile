import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import Bg1 from 'public/topbar/1.png';

export default function Topbar() {
  const router = useRouter();

  const [isActive, setIsActive] = useState('');

  useEffect(() => {
    setIsActive(router.pathname);
  }, [router.pathname]);

  return (
    <div className="fixed right-0 z-[2] w-full">
      <div
        className="pt-10"
        style={{
          paddingInline: '5%',
        }}
      >
        <div className="flex justify-between bg-white shadow-xl">
          <Image
            src={Bg1}
            alt="Picture of the author"
            width="0"
            height="40"
            className="pl-3 m-2 object-contain cursor-pointer"
            priority
          />

          <div className="flex">
            <div
              className={classNames(
                'flex items-center font-semibold h-full mx-3 cursor-pointer hover:bg-[#1abbdb] hover:text-white ',
                isActive === '/' && 'border-b-4 border-[#1abbdb]'
              )}
            >
              <Link href="/">
                <span>Home</span>
              </Link>
            </div>
            <div
              className={classNames(
                'flex items-center font-semibold h-full mx-3 cursor-pointer hover:bg-[#1abbdb] hover:text-white ',
                isActive === '/about' && 'border-b-4 border-[#1abbdb]'
              )}
            >
              <Link href="/about">
                <span>About Us</span>
              </Link>
            </div>
            <div
              className={classNames(
                'flex items-center font-semibold h-full mx-3 cursor-pointer hover:bg-[#1abbdb] hover:text-white ',
                isActive === '/service' && 'border-b-4 border-[#1abbdb]'
              )}
            >
              <Link href="/about">
                <span>Service</span>
              </Link>
            </div>
            <div
              className={classNames(
                'flex items-center font-semibold h-full mx-3 cursor-pointer hover:bg-[#1abbdb] hover:text-white ',
                isActive === '/service' && 'border-b-4 border-[#1abbdb]'
              )}
            >
              <Link href="/about">
                <span>Cek Ongkir</span>
              </Link>
            </div>
            <div
              className={classNames(
                'flex items-center font-semibold h-full mx-3 cursor-pointer hover:bg-[#1abbdb] hover:text-white ',
                isActive === '/service' && 'border-b-4 border-[#1abbdb]'
              )}
            >
              <Link href="/about">
                <span>Tracking</span>
              </Link>
            </div>
            <div
              className={classNames(
                'flex items-center font-semibold h-full mx-3 cursor-pointer hover:bg-[#1abbdb] hover:text-white ',
                isActive === '/service' && 'border-b-4 border-[#1abbdb]'
              )}
            >
              <Link href="/about">
                <span>Kemitraan</span>
              </Link>
            </div>
            <div
              className={classNames(
                'flex items-center font-semibold h-full mx-3 cursor-pointer hover:bg-[#1abbdb] hover:text-white ',
                isActive === '/service' && 'border-b-4 border-[#1abbdb]'
              )}
            >
              <Link href="/about">
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

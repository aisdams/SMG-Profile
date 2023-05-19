import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';

import Bg1 from 'public/topbar/1.png';

export default function Topbar() {
  const router = useRouter();

  const [isActive, setIsActive] = useState('');

  useEffect(() => {
    setIsActive(router.pathname);
  }, [router.pathname]);

  return (
    <div className="fixed right-0 z-[2] w-full">
      <div className="pt-0 lg:pt-10 lg:ps-10 lg:pe-10">
        <div
          className="flex justify-between bg-white"
          style={{
            boxShadow: '0px 15px 10px -15px #111',
          }}
        >
          <Image
            src={Bg1}
            alt="Picture of the author"
            width="0"
            height="40"
            className="pl-3 m-2 object-contain cursor-pointer"
            priority
          />
          <div className="hidden lg:flex">
            <Link href="/">
              <div
                className={classNames(
                  'flex items-center font-semibold h-full px-3 cursor-pointer hover:bg-[#1abbdb] hover:text-white ',
                  isActive === '/' && 'border-b-4 border-[#1abbdb]'
                )}
              >
                <span>Home</span>
              </div>
            </Link>
            <Link href="/about">
              <div
                className={classNames(
                  'flex items-center font-semibold h-full px-3 cursor-pointer hover:bg-[#1abbdb] hover:text-white ',
                  isActive === '/about' && 'border-b-4 border-[#1abbdb]'
                )}
              >
                <span>About Us</span>
              </div>
            </Link>
            <Link href="/service">
              <div
                className={classNames(
                  'flex items-center font-semibold h-full px-3 cursor-pointer hover:bg-[#1abbdb] hover:text-white ',
                  isActive === '/service' && 'border-b-4 border-[#1abbdb]'
                )}
              >
                <span>Service</span>
              </div>
            </Link>
            <Link href="/fee">
              <div
                className={classNames(
                  'flex items-center font-semibold h-full px-3 cursor-pointer hover:bg-[#1abbdb] hover:text-white ',
                  isActive === '/fee' && 'border-b-4 border-[#1abbdb]'
                )}
              >
                <span>Cek Ongkir</span>
              </div>
            </Link>
            <Link href="/tracking">
              <div
                className={classNames(
                  'flex items-center font-semibold h-full px-3 cursor-pointer hover:bg-[#1abbdb] hover:text-white ',
                  isActive === '/tracking' && 'border-b-4 border-[#1abbdb]'
                )}
              >
                <span>Tracking</span>
              </div>
            </Link>
            <Link href="/kemitraan">
              <div
                className={classNames(
                  'flex items-center font-semibold h-full px-3 cursor-pointer hover:bg-[#1abbdb] hover:text-white ',
                  isActive === '/kemitraan' && 'border-b-4 border-[#1abbdb]'
                )}
              >
                <span>Kemitraan</span>
              </div>
            </Link>
            <Link href="/contact">
              <div
                className={classNames(
                  'flex items-center font-semibold h-full px-3 cursor-pointer hover:bg-[#1abbdb] hover:text-white ',
                  isActive === '/contact' && 'border-b-4 border-[#1abbdb]'
                )}
              >
                <span>Contact</span>
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <div className="flex items-center pr-3">
              <HiMenu size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

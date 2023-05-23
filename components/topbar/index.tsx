import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
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
      <div className="pt-0 lg:pt-10 lg:ps-20 lg:pe-20">
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
            {/* <div className="flex items-center pr-3">
              <HiMenu size={30} />
            </div> */}
            <div className="flex items-center pr-3">
              <Menu as="div" className="flex">
                <Menu.Button className="inline-flex w-full justify-center bg-opacity-20 text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  <HiMenu size={30} />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-10 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {() => (
                          <Link href="/">
                            <span
                              className={`${
                                isActive === '/'
                                  ? 'bg-[#1abbdb] text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Home
                            </span>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {() => (
                          <Link href="/about">
                            <span
                              className={`${
                                isActive === '/about'
                                  ? 'bg-[#1abbdb] text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              About Us
                            </span>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {() => (
                          <Link href="/service">
                            <span
                              className={`${
                                isActive === '/service'
                                  ? 'bg-[#1abbdb] text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Service
                            </span>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {() => (
                          <Link href="/fee">
                            <span
                              className={`${
                                isActive === '/fee'
                                  ? 'bg-[#1abbdb] text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Cek Ongkir
                            </span>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {() => (
                          <Link href="/tracking">
                            <span
                              className={`${
                                isActive === '/tracking'
                                  ? 'bg-[#1abbdb] text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Tracking
                            </span>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {() => (
                          <Link href="/kemitraan">
                            <span
                              className={`${
                                isActive === '/kemitraan'
                                  ? 'bg-[#1abbdb] text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Kemitraan
                            </span>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {() => (
                          <Link href="/contact">
                            <span
                              className={`${
                                isActive === '/contact'
                                  ? 'bg-[#1abbdb] text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Contact
                            </span>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

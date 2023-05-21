import { useRef, useState, useCallback } from 'react';
import { getCoverageAreaByDestination } from '@/apis/coverage';
import { useMutation, useQuery } from '@tanstack/react-query';
import { format, set } from 'date-fns';
import { id } from 'date-fns/locale';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';

import Image from 'next/image';
import Bg1 from 'public/fee/1.png';

import Footer from '@components/footer';

export const dateYearMonthFormat = (date: string) =>
  format(new Date(date), 'yyyy-MM-dd', { locale: id });

export default function FeeX() {
  const selectRef1 = useRef(null);
  const selectRef2 = useRef(null);

  const [cityInputValue, setCityInputValue] = useState('');
  const citiesQuery = useQuery(
    ['query', cityInputValue],
    () =>
      getCoverageAreaByDestination({
        destination: cityInputValue,
      }),
    {
      onSuccess: () => {
        console.log('~~~ GETTING SUCCESS QUERYYYYY ~~~');
      },
    }
  );

  const filterColors = (inputValue: string) => {
    setCityInputValue(inputValue);
    return citiesQuery.data?.filter((i: any) =>
      i.destination.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (
    inputValue: string,
    callback: (options: any) => void
  ) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  const handleCekOngkir = () => {
    console.log('cek ongkir');
    console.log(selectRef1);
    console.log(selectRef2);
    // console.log();
  };

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
          <div className="text-white text-7xl font-bold" data-aos="fade-up">
            <p
              className=""
              style={{
                textShadow: '0px 8px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              Cek Ongkir
            </p>
          </div>
        </div>
      </div>
      <div className="my-20 px-10 xl:px-40 lg:px-28">
        <div className="flex flex-col items-center text-xl">
          <div className="w-[600px] bg-red-100">
            <AsyncSelect
              instanceId={1}
              cacheOptions
              loadOptions={loadOptions}
              defaultOptions
              placeholder="Kota Asal"
              value={citiesQuery.data?.find(
                (option: any) => option['destination'] === cityInputValue
              )}
              getOptionLabel={(option: any) => `${option.destination}`}
              getOptionValue={(option: any) => `${option.destination}`}
              ref={selectRef1}
            />
          </div>
          <div className="w-[600px] bg-red-100 mt-5">
            <AsyncSelect
              instanceId={2}
              cacheOptions
              loadOptions={loadOptions}
              defaultOptions
              placeholder="Kota Asal"
              value={citiesQuery.data?.find(
                (option: any) => option['destination'] === cityInputValue
              )}
              getOptionLabel={(option: any) => `${option.destination}`}
              getOptionValue={(option: any) => `${option.destination}`}
              ref={selectRef2}
            />
          </div>
          <div className="w-[600px] bg-red-100 mt-5">
            <input
              type="text"
              placeholder="Berat (KG)"
              className="w-full h-full border-2 border-gray-300 rounded-md px-3 py-2 outline-none"
            />
          </div>
          <div className="flex mt-5">
            <input
              type="text"
              placeholder="Panjang (cm)"
              className="w-[200px] h-full border-2 border-gray-300 rounded-md px-3 py-2 outline-none"
            />
            <input
              type="text"
              placeholder="Lebar (cm)"
              className="w-[200px] h-full border-2 border-gray-300 rounded-md px-3 py-2 outline-none"
            />
            <input
              type="text"
              placeholder="Tinggi (cm)"
              className="w-[200px] h-full border-2 border-gray-300 rounded-md px-3 py-2 outline-none"
            />
          </div>
          <div>
            <button
              className="bg-red-500 text-white px-10 py-2 rounded-md mt-5"
              onClick={handleCekOngkir}
            >
              Cek Harga
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

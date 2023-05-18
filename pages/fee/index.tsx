import { useRef, useState, useCallback } from 'react';
import { getCoverageAreaByDestination } from '@/apis/coverage';
import { useMutation, useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import Select from 'react-select';

import Image from 'next/image';
import Bg1 from 'public/fee/1.png';

import Footer from '@components/footer';

export const dateYearMonthFormat = (date: string) =>
  format(new Date(date), 'yyyy-MM-dd', { locale: id });

export default function Fee() {
  const searchRef = useRef<HTMLInputElement>(null);

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
            <Select
              options={citiesQuery.data}
              isLoading={citiesQuery.isLoading}
              // onInputChange={onInputChange}
              // value={}
              // getOptionValue={(option) =>
              //   'uniqueField' ? option['uniqueField'] : option.value
              // }
              noOptionsMessage={({ inputValue }) =>
                inputValue.length < 1
                  ? 'Ketik minimal 1 karakter'
                  : `Keyword "${inputValue}" tidak ditemukan`
              }
              getOptionLabel={(option) => `${option.destination}`}
              isClearable
              placeholder="Kota Asal"
              classNamePrefix="react-select"
            />
          </div>
          <div className="w-[600px] bg-red-100 mt-5">
            <Select
              options={citiesQuery.data}
              isLoading={citiesQuery.isLoading}
              // onInputChange={onInputChange}
              // value={}
              // getOptionValue={(option) =>
              //   'uniqueField' ? option['uniqueField'] : option.value
              // }
              noOptionsMessage={({ inputValue }) =>
                inputValue.length < 1
                  ? 'Ketik minimal 1 karakter'
                  : `Keyword "${inputValue}" tidak ditemukan`
              }
              getOptionLabel={(option) => `${option.destination}`}
              isClearable
              placeholder="Kota Tujuan"
              classNamePrefix="react-select"
            />
          </div>
          <div className="w-[600px] bg-red-100 mt-5">
            <input
              ref={searchRef}
              type="text"
              placeholder="Berat (gram)"
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
            <button className="bg-red-500 text-white px-10 py-2 rounded-md mt-5">
              Cek Harga
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

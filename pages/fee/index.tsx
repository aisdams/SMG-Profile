import { useState } from 'react';
import { getCoverageAreaByDestination } from '@apis/coverage';
import { getService } from '@apis/service';
import { getPrice } from '@apis/price';
import { useMutation, useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { FormProvider, useForm } from 'react-hook-form';
import InputText from '@components/forms/InputText';
import InputSelect from '@components/forms/InputSelect';
import ModalBasic from '@components/modal/modalBasic';

import Image from 'next/image';
import Bg1 from 'public/fee/1.png';

import Footer from '@components/footer';

export const dateYearMonthFormat = (date: string) =>
  format(new Date(date), 'yyyy-MM-dd', { locale: id });

export default function Fee() {
  const defaultValues = {
    city_code: 'AMQCA00001',
    product: 'EXPRESS STANDARD',
    weight: '21',
    length: '',
    width: '',
    height: '',
  };
  const methods = useForm({
    mode: 'all',
    defaultValues,
  });
  const {
    handleSubmit,
    getValues,
    formState: { isSubmitting },
  } = methods;

  const [show, setShow] = useState(false);
  const handleModalClose = () => {
    setShow(false);
  };

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

  const serviceQuery = useQuery(['service'], getService, {
    onSuccess: () => {
      console.log('~~~ GETTING SUCCESS QUERYYYYY ~~~');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const [data, setData] = useState<any>([]);
  const priceMutation = useMutation(getPrice, {
    onSuccess: (e) => {
      console.log(e);
      setShow(true);
      setData(e.data);
      console.log('~~~ GETTING SUCCESS MUTATION ~~~');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const productTypePriceList = {
    // EXPRESS
    'EXPRESS STANDARD': 6,
    'PORT TO PORT': 6,
    ONS: 6,
    SAMEDAY: 6,
    // REGULER
    'REGULER KUBIKASI': 4,
    'REGULER KAPAL CEPAT': 4,
    'REGULER LINKEX': 4,
    'REGULER LAUT': 4,
    'REGULER STANDARD': 4,
    // TRUCKING
    'BLIND VAN': 6,
    'CDD COLD CHAIN': 6,
    CDD: 6,
    'CDE COLD CHAIN': 6,
    CDE: 6,
    'FUSO COLD CHAIN': 6,
    FUSO: 6,
    WINGBOX: 6,
    // CONTAINER
    'CONTAINER 20': 4,
    'CONTAINER 40': 4,
    FCL: 6,
    LCL: 6,
  };

  const onSubmit = async (data: {
    city_code: string;
    product: string;
    weight: string;
    length?: string;
    width?: string;
    height?: string;
  }) => {
    console.log(data);
    // get productTypePriceList with same data.product with typescript
    // const volumeType = productTypePriceList[data.product];
    // console.log(volumeType);

    delete data.length;
    delete data.width;
    delete data.height;

    return priceMutation.mutateAsync(data);
  };

  const [city, setCity] = useState<any>([]);
  const getCitySelect = (e: any) => {
    setCity(e);
  };

  return (
    <div className="">
      <div className="relative">
        <div
          style={{
            position: 'absolute',
            bottom: '0',
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
              Cek Ongkir
            </p>
          </div>
        </div>
      </div>
      <div className="my-20 px-10 xl:px-40 lg:px-28">
        <FormProvider {...methods}>
          <div className="flex flex-col items-center text-xl">
            <div className="w-[600px]">
              <div>
                <InputSelect
                  name="city_code"
                  options={citiesQuery.data}
                  optionLabel={(option) => `${option.destination}`}
                  valueKey="city_code"
                  placeholder="Kota Tujuan"
                  func={getCitySelect}
                />
              </div>

              <div className="mt-5">
                <InputSelect
                  name="product"
                  options={serviceQuery.data}
                  optionLabel={(option) =>
                    `${option.service_type} - ${option.product_type}`
                  }
                  valueKey="product_type"
                  placeholder="Service"
                />
              </div>

              <InputText
                name="weight"
                placeholder="Berat (KG)"
                className="w-full h-full border-2 border-gray-300 rounded-md px-3 py-2 outline-none"
              />

              {/* <div className="flex">
                <input
                  type="text"
                  className="border-2 border-gray-300 rounded-md px-3 py-2 outline-none mt-5 w-full"
                  {...methods.register('length', {
                    required: true,
                  })}
                  placeholder="Panjang (cm)"
                />
                <input
                  type="text"
                  className="border-2 border-gray-300 rounded-md px-3 py-2 outline-none mt-5 w-full"
                  {...methods.register('width', {
                    required: true,
                  })}
                  placeholder="Lebar (cm)"
                />
                <input
                  type="text"
                  className="border-2 border-gray-300 rounded-md px-3 py-2 outline-none mt-5 w-full"
                  {...methods.register('height', {
                    required: true,
                  })}
                  placeholder="Tinggi (cm)"
                />
              </div> */}
            </div>
            <div>
              <button
                className="bg-red-500 text-white px-10 py-2 rounded-md mt-5"
                onClick={handleSubmit(onSubmit)}
              >
                Cek Harga
              </button>
            </div>
          </div>
        </FormProvider>
      </div>

      <ModalBasic
        title="Perhitungan Ongkos Kirim"
        onClose={handleModalClose}
        show={show}
      >
        <div className="flex">
          <div className="flex items-center font-semibold text-base w-3/12">
            Tujuan Pengiriman :
          </div>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md px-3 py-2 outline-none ml-2 w-9/12"
            value={city.destination}
            disabled
          />
        </div>
        <div className="flex mt-5">
          <div className="flex items-center font-semibold text-base w-3/12">
            Berat Minimum :
          </div>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md px-3 py-2 outline-none ml-2 w-9/12"
            value={data.minimum_kilo}
            disabled
          />
        </div>
        <div className="flex mt-5">
          <div className="flex items-center font-semibold text-base w-3/12">
            Ongkir per kg :
          </div>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md px-3 py-2 outline-none ml-2 w-9/12"
            value={data.kg_price}
            disabled
          />
        </div>
        <div className="flex mt-5">
          <div className="flex items-center font-semibold text-base w-3/12">
            Ongkos Kirim :
          </div>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md px-3 py-2 outline-none ml-2 w-9/12"
            value={data.view_price}
            disabled
          />
        </div>
        <div className="flex mt-5">
          <div className="flex items-center font-semibold text-base w-3/12">
            Total Estimasi Ongkos Kirim :
          </div>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md px-3 py-2 outline-none ml-2 w-9/12"
            value={data.view_price}
            disabled
          />
        </div>
      </ModalBasic>

      <Footer />
    </div>
  );
}

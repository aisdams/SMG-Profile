import { useRef, useState } from 'react';
import { getTrackingPublic } from '@apis/tracking';
import { useMutation } from '@tanstack/react-query';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import ModalBasic from '@/components/modal/modalBasic';

import Image from 'next/image';
import Bg1 from 'public/tracking/aaa.png';

import Footer from '@components/footer';

export const dateYearMonthFormat = (date: string) =>
  format(new Date(date), 'yyyy-MM-dd', { locale: id });

export const dateHourFormat = (date: string) =>
  format(new Date(date), 'dd-MMMM-yyyy HH:mm', { locale: id });

export default function Tracking() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<any>([]);

  const trackingMutation = useMutation(getTrackingPublic, {
    onSuccess: (res) => {
      setData((prev: any) => [res, ...prev]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleSearchResi = async () => {
    console.log(data);

    const input = searchRef.current?.value.trim();
    if (!input) {
      return console.log('input kosong');
    }
    if (data.some((item: any) => item.receipt_no === input)) {
      return console.log('data sudah ada');
    }

    return trackingMutation.mutate(input);
  };

  const enterField = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchResi();
    }
  };

  const [show, setShow] = useState(false);
  const handleModalClose = () => {
    setShow(false);
  };

  const [dataResi, setDataResi] = useState<any>([]); // [dataResi, setDataResi
  const [history, setHistory] = useState<any>([]); // [history, setHistory
  const handleModalOpen = (e: any) => {
    setShow(true);
    setDataResi(e);
    setHistory(e.track_history);
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
              Tracking
            </p>
          </div>
        </div>
      </div>
      <div className="my-20 px-10 xl:px-40 lg:px-28">
        <div className="flex justify-center">
          <div className="flex flex-col font-semibold md:flex-row md:text-2xl">
            <input
              type="text"
              placeholder="No. Resi"
              className="border-2 border-gray-300 rounded-md px-5 py-2"
              ref={searchRef}
              onKeyDown={enterField}
            />
            <button
              className="bg-[#1abbdb] text-white px-5 py-2 rounded-md mt-5 md:mt-0 md:ml-5"
              onClick={handleSearchResi}
            >
              LACAK
            </button>
          </div>
        </div>
        {data.length > 0 && (
          <div className="mt-20 overflow-auto">
            <table className="table-auto w-full overscroll-auto	">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-5 py-2">No.</th>
                  <th className="border border-gray-300 px-5 py-2">Tanggal</th>
                  <th className="border border-gray-300 px-5 py-2">Pengirim</th>
                  <th className="border border-gray-300 px-5 py-2">Tujuan</th>
                  <th className="border border-gray-300 px-5 py-2">Penerima</th>
                  <th className="border border-gray-300 px-5 py-2">Service</th>
                  <th className="border border-gray-300 px-5 py-2">Status</th>
                  <th className="border border-gray-300 px-5 py-2">Detail</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: any, index: number) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-gray-300 px-5 py-2 text-center">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 px-5 py-2 text-center">
                      {dateYearMonthFormat(item.p_date)}
                    </td>
                    <td className="border border-gray-300 px-5 py-2 text-center">
                      {item.p_shipper_name}
                    </td>
                    <td className="border border-gray-300 px-5 py-2 text-center">
                      {item.destination}
                    </td>
                    <td className="border border-gray-300 px-5 py-2 text-center">
                      {item.p_consignee_name}
                    </td>
                    <td className="border border-gray-300 px-5 py-2 text-center">
                      {item.p_product}
                    </td>
                    <td className="border border-gray-300 px-5 py-2 text-center">
                      {item.status}
                    </td>
                    <td className="border border-gray-300 px-5 py-2 text-center">
                      <button
                        className="bg-[#1abbdb] text-white px-5 py-2 rounded-md"
                        onClick={() => handleModalOpen(item)}
                      >
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <ModalBasic
        title="Tracking Detail"
        onClose={handleModalClose}
        show={show}
      >
        <div className="grid md:grid-cols-2 mobileS:grid-cols-1">
          <div className="sm:mr-4">
            <div className="rounded-lg px-7 py-5 text-sm shadow-lg">
              <div className="mt-2 grid grid-cols-2 sm:grid-cols-1">
                <div className="mt-2">
                  <span className="font-semibold">Tanggal Pengiriman</span>
                  <br />
                  {dataResi?.p_date
                    ? dateYearMonthFormat(dataResi?.p_date)
                    : ''}
                </div>
                <div className="mt-2">
                  <span className="font-semibold"> Tujuan </span>
                  <br />
                  {dataResi?.destination}
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-1">
                <div className="mt-2">
                  <span className="font-semibold"> Pengirim </span>
                  <br />
                  {dataResi?.p_shipper_name}
                </div>
                <div className="mt-2">
                  <span className="font-semibold"> Penerima </span>
                  <br />
                  {dataResi?.p_consignee_name}
                </div>
              </div>
            </div>
          </div>
          <div className="mobileS:mt-10 md:mt-0">
            <div className="rounded-lg px-10 py-5 shadow-lg h-96 overflow-auto">
              <ol className="relative border-l border-gray-200">
                {history.map((e: any, i: any) => (
                  <li key={i} className="mb-10 ml-4">
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200" />
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                      {e.date ? dateHourFormat(e.date) : ''}
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {e.status}
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500">
                      {e.location}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </ModalBasic>

      <Footer />
    </div>
  );
}

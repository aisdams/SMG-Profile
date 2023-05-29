import Image from 'next/image';
import Bg1 from 'public/kemitraan/1.png';
import Bg2 from 'public/kemitraan/2.png';
import Bg3 from 'public/kemitraan/3.png';
import Bg4 from 'public/kemitraan/4.png';
import Bg6 from 'public/kemitraan/6.png';
import Bg7 from 'public/kemitraan/7.png';

import Footer from '@components/footer';
import Modal from '@components/pages/kemitraan/modal';
import { useState } from 'react';
import classNames from 'classnames';
import { FormProvider, useForm } from 'react-hook-form';
import InputText from '@components/forms/InputText';
import InputSelect from '@components/forms/InputSelect';

export default function Kemitraan() {
  const data = [
    {
      id: 1,
      title: 'LinkShop Paket Ruby',
      image: Bg2,
      imagePaket: Bg6,
      status: false,
    },
    {
      id: 3,
      nama: 'Paket SAFIR Rp 3.000.000',
      title: 'LinkShop Paket Safir',
      image: Bg3,
      imagePaket: Bg6,
      status: true,
    },
    {
      id: 2,
      nama: 'Paket DIAMOND Rp 10.000.000',
      title: 'LinkShop Paket Diamond',
      image: Bg4,
      imagePaket: Bg7,
      status: true,
    },
  ];

  interface FormData {
    jenis_paket_id: string;
    nama: string;
    ktp: string;
    npwp?: string;
    kepemilikan?: string;
    alamat_domisili?: string;
    kec_domisili_id?: string;
    alamat_outlet?: string;
    kec_outlet_id?: string;
    telp?: string;
    email?: string;
    info_kemitraan?: string;
  }

  const defaultValues: FormData = {
    jenis_paket_id: '',
    nama: '',
    ktp: '',
    npwp: '',
    kepemilikan: '',
    alamat_domisili: '',
    kec_domisili_id: '',
    alamat_outlet: '',
    kec_outlet_id: '',
    telp: '',
    email: '',
    info_kemitraan: '',
  };
  const methods = useForm({
    mode: 'all',
    defaultValues,
  });
  const { handleSubmit, getValues } = methods;

  const [showBanner, setShowBanner] = useState(false);
  const [modalData, setModalData] = useState<any>([]);
  const handleModalBanner = (data: any) => {
    console.log(data);
    setModalData(data);
    setShowBanner(!showBanner);
  };
  const handleModalBannerClose = () => {
    setShowBanner(false);
  };

  const [showForm, setShowForm] = useState(false);
  const hanleModalForm = () => {
    setShowForm(!showForm);
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
              Kemitraan
            </p>
          </div>
        </div>
      </div>
      <div className="my-20 px-10 xl:px-40 lg:px-28">
        <div className="bg-[#1abbdb] w-full flex flex-col py-4 text-2xl font-semibold text-white">
          <div className="text-center">
            Pembayaran keanggotaan LinkShop dapat melalui transfer bank ke
            rekening berikut:
          </div>
          <div className="text-center mt-5 md:mt-0">
            BANK MANDIRI a/n PT. SARANA MULYA LOGISTIK
          </div>
          <div className="text-center mt-5 md:mt-0">
            No. Rekening: 1670005412571
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col hover:shadow-xl"
              onClick={() => (item.status ? handleModalBanner(item) : null)}
            >
              <Image
                src={item.image}
                priority
                alt="Picture of the author"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
              />
              <div
                className={classNames(
                  'text-center font-semibold text-xl py-4 hover:bg-[#1abbdb] cursor-pointer',
                  item.status ? '' : 'cursor-not-allowed'
                )}
              >
                SELENGKAPNYA
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col">
          <div className="flex justify-center text-2xl font-semibold">
            Jika telah melakukan transfer/pembayaran kemitraan LinkShop silahkan
            KLIK
          </div>
          <div className="flex justify-center">
            <button className="bg-[#1abbdb] text-2xl font-semibold rounded-lg text-white px-10 py-2 mt-5 hover:shadow-xl">
              KONFIRMASI PEMBAYARAN
            </button>
          </div>
        </div>
      </div>

      <Modal
        title={modalData.title}
        onClose={handleModalBannerClose}
        show={showBanner}
      >
        <Image
          src={modalData.imagePaket}
          priority
          alt="Picture of the author"
          width="0"
          height="0"
          style={{
            objectFit: 'cover',
            zIndex: 4,
          }}
        />
        <div className="flex justify-center mt-5 mb-[10px]">
          <button
            className="bg-[#1abbdb] text-2xl font-semibold rounded-lg text-white px-10 py-2 hover:shadow-xl"
            onClick={hanleModalForm}
          >
            DAFTAR SEKARANG
          </button>
        </div>
      </Modal>
      <Modal
        title="Mendaftar Sebagai Mitra LinkExpress"
        onClose={hanleModalForm}
        show={showForm}
      >
        <div>
          <div className="bg-[#bdbdbd] flex justify-center font-bold text-xl py-3">
            {modalData.nama}
          </div>
          <FormProvider {...methods}>
            <div>
              <InputText name="nama" placeholder="Nama Lengkap (Sesuai KTP)" />
            </div>
            <div>
              <InputText name="alamat_domisili" placeholder="Alamat Domisili" />
            </div>
            <div>
              <InputText
                name="kec_domisili_id"
                placeholder="Kecamatan Domisili"
              />
            </div>
            <div>
              <InputText
                name="alamat_outlet"
                placeholder="Alamat Gerai/Outlet"
              />
            </div>
            <div>
              <InputText
                name="kec_outlet_id"
                placeholder="Kecamatan Gerai/Outlet"
              />
            </div>
            <div>
              <InputText name="telp" placeholder="Telp/HP" />
            </div>
            <div>
              <InputText name="email" placeholder="Email" />
            </div>
            <div>
              <InputText
                name="info_kemitraan"
                placeholder="Sumber Informasi Kemitraan"
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-[#1abbdb] text-xl font-semibold rounded-lg text-white px-14 py-2 mt-5 hover:shadow-xl"
                onClick={hanleModalForm}
              >
                KIRIM
              </button>
            </div>
          </FormProvider>
        </div>
      </Modal>
      <Footer />
    </div>
  );
}

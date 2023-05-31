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
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import InputSelectDynamic from '@components/forms/InputSelectDynamic';
import { getCoverageAreaByOrigin } from '@apis/coverage';
import { addKemitraan } from '@apis/kemitraan';
import Swal from 'sweetalert2';

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
    ktp: Blob | null;
    npwp?: string;
    kepemilikan?: string;
    alamat_domisili: string;
    kec_domisili_id: string;
    alamat_outlet: string;
    kec_outlet_id: string;
    telp: string;
    email: string;
    info_kemitraan: string;
  }

  const defaultValues: FormData = {
    jenis_paket_id: '',
    nama: '',
    ktp: null,
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
  const { handleSubmit, reset } = methods;

  const [file, setFile] = useState(null);
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
  const handleModalFormClose = () => {
    setShowForm(false);
  };

  const [cityInputValue, setCityInputValue] = useState('');
  const citiesQuery = useQuery(
    ['query', cityInputValue],
    () =>
      getCoverageAreaByOrigin({
        search: cityInputValue,
      }),
    {
      onSuccess: () => {
        console.log('~~~ GETTING SUCCESS QUERYYYYY ~~~');
      },
    }
  );

  const kemitraanMutation = useMutation(addKemitraan, {
    onSuccess: (e) => {
      handleModalFormClose();
      handleModalBannerClose();
      reset();
      setAgree(false);
      setFile(null);
      Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: e.message,
      });
    },
  });

  const [agree, setAgree] = useState(false);
  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append('jenis_paket_id', modalData.id);
    formData.append('nama', data.nama);
    formData.append('alamat_domisili', data.alamat_domisili);
    formData.append('kec_domisili_id', data.kec_domisili_id);
    formData.append('alamat_outlet', data.alamat_outlet);
    formData.append('kec_outlet_id', data.kec_outlet_id);
    formData.append('telp', data.telp);
    formData.append('email', data.email);
    formData.append('info_kemitraan', data.info_kemitraan);
    if (file !== null) {
      formData.append('ktp', file);
    }

    return kemitraanMutation.mutate(formData);
  };

  const uploadToClient = (e: any) => {
    const file = e.target.files[0];
    setFile(file);
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
        onClose={handleModalFormClose}
        show={showForm}
      >
        <div>
          <div className="bg-[#bdbdbd] flex justify-center font-bold text-xl py-3">
            {modalData.nama}
          </div>
          <FormProvider {...methods}>
            <div className="mt-5">
              <label htmlFor="nama" className="font-semibold">
                Nama Lengkap (Sesuai KTP)
              </label>
              <InputText name="nama" />
            </div>
            <div className="mt-5">
              <label htmlFor="alamat_domisili" className="font-semibold">
                Alamat Domisili
              </label>
              <InputText name="alamat_domisili" />
            </div>
            <div className="mt-5">
              <label htmlFor="kec_domisili_id" className="font-semibold">
                Kecamata Domisili
              </label>
              <InputSelectDynamic
                name="kec_domisili_id"
                query={citiesQuery}
                isLoading={citiesQuery.isLoading}
                inputValue={cityInputValue}
                setInputValue={setCityInputValue}
                optionLabel={(option) =>
                  `${option.nama} - ${option.kabupaten.nama} - ${option.kabupaten.provinsi.nama}`
                }
                uniqueField="id"
                // func={getCitySelect}
              />
            </div>
            <div className="mt-5">
              <label htmlFor="alamat_outlet" className="font-semibold">
                Alamat Gerai/Outlet
              </label>
              <InputText name="alamat_outlet" />
            </div>
            <div className="mt-5">
              <label htmlFor="kec_outlet_id" className="font-semibold">
                Kecamatan Gerai/Outlet
              </label>
              <InputSelectDynamic
                name="kec_outlet_id"
                query={citiesQuery}
                isLoading={citiesQuery.isLoading}
                inputValue={cityInputValue}
                setInputValue={setCityInputValue}
                optionLabel={(option) =>
                  `${option.nama} - ${option.kabupaten.nama} - ${option.kabupaten.provinsi.nama}`
                }
                uniqueField="id"
                // func={getCitySelect}
              />
            </div>
            <div className="mt-5">
              <label htmlFor="telp" className="font-semibold">
                Telp/HP
              </label>
              <InputText name="telp" />
            </div>
            <div className="mt-5">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <InputText name="email" />
            </div>
            <div className="mt-5">
              <label htmlFor="info_kemitraan" className="font-semibold">
                Sumber Informasi Kemitraan
              </label>
              <InputSelect
                name="info_kemitraan"
                options={[
                  { value: 'Sales', label: 'Sales' },
                  { value: 'Teman', label: 'Teman' },
                  { value: 'Google', label: 'Google' },
                  { value: 'Instagram', label: 'Instagram' },
                  { value: 'Facebook', label: 'Facebook' },
                  { value: 'Twitter', label: 'Twitter' },
                  { value: 'Email', label: 'Email' },
                  { value: 'Lainnya', label: 'Lainnya' },
                ]}
              />
            </div>
            <div className="mt-5">
              <label htmlFor="formFile" className="font-semibold">
                Foto Copy KTP
              </label>
              <input
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="file"
                id="formFile"
                onChange={uploadToClient}
              />
            </div>
            <div className="mt-5 flex items-center">
              <input
                type="checkbox"
                id="agree"
                className="mr-2 h-[1rem] w-[1rem]"
                checked={agree}
                onChange={() => setAgree(!agree)}
              />
              <label htmlFor="agree">
                Saya telah membaca dan menyetujui{' '}
                <span className="text-blue-500">Syarat & Ketentuan</span> yang
                berlaku
              </label>
            </div>
            <div className="flex justify-center">
              <button
                className={classNames(
                  'bg-[#1abbdb] text-xl font-semibold rounded-lg text-white px-14 py-2 mt-5 hover:shadow-xl',
                  !agree && 'opacity-50 cursor-not-allowed'
                )}
                type="submit"
                onClick={handleSubmit(onSubmit)}
                disabled={!agree}
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

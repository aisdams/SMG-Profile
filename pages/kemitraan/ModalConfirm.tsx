import Modal from '@components/pages/kemitraan/modal';
import { FormProvider, useForm } from 'react-hook-form';
import InputText from '@components/forms/InputText';
import InputSelect from '@components/forms/InputSelect';
import InputDate from '@components/forms/InputDate';
import classNames from 'classnames';
import { useState } from 'react';
import { confirmKemitraan } from '@apis/kemitraan';
import { useMutation } from '@tanstack/react-query';
import Swal from 'sweetalert2';

interface Props {
  showConfirm: boolean;
  onClose: () => void;
}

export default function ModalConfirm({ showConfirm, onClose }: Props) {
  interface FormDataConfirm {
    nomor_invoice: string;
    nama_mitra: string;
    telp: string;
    tanggal_transfer: Date;
    bank_linkexpress_id: string;
    nama_bank: string;
    total_transfer: string;
    rekening_pengirim: string;
    atas_nama: string;
    berita: string;
    bukti: Blob | null;
  }

  const defaultValuesConfirm: FormDataConfirm = {
    nomor_invoice: '',
    nama_mitra: '',
    telp: '',
    tanggal_transfer: new Date(),
    bank_linkexpress_id: '',
    nama_bank: '',
    total_transfer: '',
    rekening_pengirim: '',
    atas_nama: '',
    berita: '',
    bukti: null,
  };

  const methods = useForm({
    mode: 'all',
    defaultValues: defaultValuesConfirm,
  });

  const { handleSubmit, reset } = methods;

  const [agree, setAgree] = useState(false);
  const [file, setFile] = useState(null);

  const confirmMutation = useMutation(confirmKemitraan, {
    onSuccess: (e) => {
      reset();
      setAgree(false);
      setFile(null);
      onClose();
      Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: e.message,
      });
    },
  });

  const onSubmit = (data: FormDataConfirm) => {
    console.log(data);

    const formData = new FormData();
    formData.append('nomor_invoice', data.nomor_invoice);
    formData.append('nama_mitra', data.nama_mitra);
    formData.append('telp', data.telp);
    formData.append('tanggal_transfer', data.tanggal_transfer.toISOString());
    formData.append('bank_linkexpress_id', data.bank_linkexpress_id);
    formData.append('nama_bank', data.nama_bank);
    formData.append('total_transfer', data.total_transfer);
    formData.append('rekening_pengirim', data.rekening_pengirim);
    formData.append('atas_nama', data.atas_nama);
    formData.append('berita', data.berita);
    if (file) {
      formData.append('bukti', file);
    }

    return confirmMutation.mutate(formData);
  };

  const uploadToClient = (e: any) => {
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <Modal
      title="Form Konfirmasi Pembayaran Registrasi Mitra LinkExpress"
      onClose={onClose}
      show={showConfirm}
    >
      <div>
        <FormProvider {...methods}>
          <div className="mt-5">
            <label htmlFor="nomor_invoice" className="font-semibold">
              Nomor Pendafataran
            </label>
            <InputText name="nomor_invoice" />
          </div>
          <div className="mt-5">
            <label htmlFor="nama_mitra" className="font-semibold">
              Nama Lengkap
            </label>
            <InputText name="nama_mitra" />
          </div>
          <div className="mt-5">
            <label htmlFor="telp" className="font-semibold">
              Telp/HP
            </label>
            <InputText name="telp" />
          </div>
          <div className="mt-5">
            <label htmlFor="tanggal_transfer" className="font-semibold">
              Tanggal Transfer
            </label>
            <InputDate name="tanggal_transfer" />
          </div>
          <div className="mt-5">
            <label htmlFor="bank_linkexpress_id" className="font-semibold">
              Ke Rekening Bank
            </label>
            <InputSelect
              name="bank_linkexpress_id"
              options={[
                {
                  value: '1',
                  label:
                    'BANK MANDIRI (1670005412571) PT. SARANA MULYA LOGISTIK',
                },
              ]}
            />
          </div>
          <div className="mt-5">
            <label htmlFor="nama_bank" className="font-semibold">
              Nama Bank
            </label>
            <InputText name="nama_bank" />
          </div>
          <div className="mt-5">
            <label htmlFor="total_transfer" className="font-semibold">
              Total Nominal Transfer
            </label>
            <InputText name="total_transfer" />
          </div>
          <div className="mt-5">
            <label htmlFor="rekening_pengirim" className="font-semibold">
              Rekening Pengirim
            </label>
            <InputText name="rekening_pengirim" />
          </div>
          <div className="mt-5">
            <label htmlFor="berita" className="font-semibold">
              Berita/Pesan
            </label>
            <InputText name="berita" />
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
  );
}

import request2 from './axiosEx';

export const addKemitraan = async (data: any) => {
  const data2 = await request2({
    url: `/linkshop/mendaftar`,
    method: 'POST',
    data,
  });

  return data2;
};

export const confirmKemitraan = async (data: any) => {
  const data2 = await request2({
    url: `/linkshop/konfirmasi-pembayaran`,
    method: 'POST',
    data,
  });

  return data2;
};

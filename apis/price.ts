import request from './axios';
type ProductType =
  | 'EXPRESS STANDARD'
  | 'PORT TO PORT'
  | 'ONS'
  | 'SAMEDAY'
  | 'REGULER KUBIKASI'
  | 'REGULER KAPAL CEPAT'
  | 'REGULER LINKEX'
  | 'REGULER LAUT'
  | 'REGULER STANDARD'
  | 'BLIND VAN'
  | 'CDD COLD CHAIN'
  | 'CDD'
  | 'CDE COLD CHAIN'
  | 'CDE'
  | 'FUSO COLD CHAIN'
  | 'FUSO'
  | 'WINGBOX'
  | 'CONTAINER 20'
  | 'CONTAINER 40'
  | 'FCL'
  | 'LCL';

export const getPrice = async (data: {
  city_code: string;
  product: ProductType;
  weight: string;
  price_list: string;
}) =>
  request({
    url: `/tarif/public/freight-charges`,
    method: 'POST',
    data,
  });

export const getPriceByDestination = async ({ destination = '' }) => {
  const data = await request({
    url: `/tarif/get/destination?price_list=PRICE%20LIST%20LINKSHOP&destination=${destination}`,
  });

  return data.data;
};

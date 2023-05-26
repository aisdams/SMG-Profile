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
}) =>
  request({
    url: `/tarif/public/freight-charges`,
    method: 'POST',
    data,
  });

import request from './axios';

export const getPrice = async (data: {
  city_code: string;
  product: string;
  weight: string;
}) =>
  request({
    url: `/tarif/public/freight-charges`,
    method: 'POST',
    data,
  });

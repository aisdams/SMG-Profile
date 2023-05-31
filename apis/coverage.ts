import request from './axios';
import request2 from './axiosEx';

export const getCoverageAreaByDestination = async ({ destination = '' }) => {
  const data = await request({
    url: `/datamaster/public/coverage-area?page=1&limit=10&destination=${destination}`,
  });

  return data.data;
};

export const getCoverageAreaByOrigin = async ({ search = '' }) => {
  const data = await request2({
    url: `/kecamatan/search?sortBy=created_at&direction=DESC&page=1&perPage=15&search=${search}`,
  });

  // data;

  const data1 = [{ name: 'test', kecamatan: [{ nama: 'lorem' }] }];

  return data.data;
};

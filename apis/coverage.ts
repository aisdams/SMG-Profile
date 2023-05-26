import request from './axios';

export const getCoverageAreaByDestination = async ({ destination = '' }) => {
  const data = await request({
    url: `/datamaster/public/coverage-area?page=1&limit=9999&destination=${destination}`,
  });

  return data.data;
};

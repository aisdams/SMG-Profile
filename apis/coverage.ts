import request from './axios';

export const getCoverageAreaByDestination = async ({ destination = '' }) => {
  const data = await request({
    url: `/datamaster/get/coverage-area?limit=5&destination=${destination}`,
  });

  return data.data;
};

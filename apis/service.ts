import request from './axios';

export const getService = async () => {
  const data = await request({
    url: `/datamaster/public/services?page=1&limit=9999`,
  });

  return data.data;
};

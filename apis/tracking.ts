import request from './axios';

export const getTrackingPublic = async (id: string) => {
  const data = await request({
    url: `/tracking/public/${id}`,
  });

  return data.data;
};

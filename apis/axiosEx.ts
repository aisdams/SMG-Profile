import axios from 'axios';

axios.defaults.withCredentials = true;

// const Axios = axios.create({
//   baseURL,
//   headers: {
//     Authorization: `Basic ${btoa(
//       `${process.env.NEXT_PUBLIC_API_USERNAME}:${process.env.NEXT_PUBLIC_API_PASSWORD}`
//     )}`,
//   },
// });

const client = (() =>
  axios.create({
    baseURL: 'https://api.linkexpress.co.id/api',
    withCredentials: true,
    // headers: {
    //   Authorization: `Basic ${btoa(
    //     // eslint-disable-next-line prettier/prettier
    //     `sml_serverapi:sml123`
    //   )}`,
    // },
  }))();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const request2 = async function (options: any) {
  // success handler
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSuccess = function (res: any) {
    const { data } = res;

    return data;
  };

  // error handler
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onError = function (err: any) {
    const backendErrMsg = err?.request?.response;
    if (backendErrMsg) {
      return Promise.reject(JSON.parse(backendErrMsg).message);
    }

    const axiosErrMsg = err?.message;
    if (axiosErrMsg) {
      return Promise.reject(axiosErrMsg);
    }

    return Promise.reject(err);
  };

  // adding success and error handlers to client
  return client(options).then(onSuccess).catch(onError);
};

export default request2;

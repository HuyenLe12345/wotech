import axiosClient from "./axiosClient";

const CheckoutAPI = {
  postEmail: (query) => {
    const url = `/order/email${query}`;
    return axiosClient.post(url);
  },
  postInfo: (query) => {
    const url = `/order/info${query}`;
    return axiosClient.post(url);
  },
};

export default CheckoutAPI;

import axiosClient from "./axiosClient";

const productsApi = {
    getAllProducts: (params) => {
        const url = "/";
        return axiosClient.get(url, params);
    },

    // filterProducts: (params) => {
    //     const url = "/";
    //     return axiosClient.get(url, params);
    // }
}

export default productsApi;









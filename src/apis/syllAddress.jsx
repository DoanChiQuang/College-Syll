import axiosInstance from '../helpers/axios';

const config = { baseURL: 'https://vapi.vnappmob.com' };

export const getProvince = () => {
    return axiosInstance.get('/api/province', config);
};

export const getDistrict = (districtId) => {
    return axiosInstance.get(`/api/province/district/${districtId}`, config);
};

export const getWard = (wardId) => {
    return axiosInstance.get(`/api/province/ward/${wardId}`, config);
};

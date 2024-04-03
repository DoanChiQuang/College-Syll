import { useState } from 'react';

const useApi = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('');

    const request = async (...args) => {
        try {
            setLoading(true);
            setError(false);
            setSuccess(false);

            const response = await apiFunc(...args);

            setLoading(false);
            setSuccess(true);
            setData(response?.data);
        } catch (ex) {
            setLoading(false);
            setSuccess(false);

            setError(true);
            alert('Thông báo', 'Có lỗi xảy ra. Bạn lòng thử lại sau nhé :(');
        }
    };

    return {
        data,
        error,
        errorClient,
        message,
        loading,
        success,
        request,
        setData,
    };
};

export default useApi;

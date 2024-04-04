import dayjs from 'dayjs';
import React from 'react';

const useSyll = () => {
    const SelectedValue = (data, value) => {
        const selectedItem = React.useMemo(() => {
            return data.find((item) => item.id === value);
        }, [data, value]);
        return selectedItem || null;
    };

    const getSubtractDate = (num = 0) => {
        const maxDateValue = dayjs().subtract(num, 'year');
        return maxDateValue;
    };

    const getAddDate = (num = 0) => {
        const maxDateValue = dayjs().add(num, 'year');
        return maxDateValue;
    };

    return { SelectedValue, getSubtractDate, getAddDate };
};

export default useSyll;

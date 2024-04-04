export const formatNumberWithComma = (number, option) => {    
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, option || ',');
};

export const formatNumberWithoutComma = (number) => {
    number = number.replace(/[^0-9]/g, '');
    return number.split(',').join('');
};

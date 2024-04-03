export const validateName = (name) => {
    // Kiểm tra xem name có rỗng không
    if (name.trim() === '') {
        return 'Giá trị không được để trống.';
    }

    // Kiểm tra chiều dài tên
    if (name.length < 2 || name.length > 50) {
        return 'Giá trị phải có từ 2 đến 50 ký tự.';
    }

    // Kiểm tra xem tên có chứa ký tự đặc biệt hay không
    if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(name)) {
        return 'Giá trị chỉ có thể chứa chữ cái và dấu cách.';
    }

    // Nếu tất cả các điều kiện đều thỏa mãn, trả về null
    return null;
};

export const validateValueWithSpecialCharacters = (value) => {
    // Kiểm tra xem tên có chứa ký tự không phải chữ cái, số hoặc dấu cách hay không
    if (!/^[a-zA-Z0-9\s]+$/.test(value)) {
        return 'Giá trị chỉ có thể chứa chữ cái, số và dấu cách.';
    }

    // Nếu tất cả các điều kiện đều thỏa mãn, trả về null
    return null;
};
export const validateName = (name) => {
    // Kiểm tra xem name có rỗng không
    if (name.trim() === '') {
        return 'Giá trị không được để trống.';
    }

    // Kiểm tra chiều dài tên
    if (name.length < 2) {
        return 'Giá trị phải có ít nhất 2 ký tự.';
    }

    // Kiểm tra xem tên có chứa ký tự đặc biệt hay không
    if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(name)) {
        return 'Giá trị chỉ có thể chứa chữ cái và dấu cách.';
    }

    // Nếu tất cả các điều kiện đều thỏa mãn, trả về null
    return null;
};

export const validateValueWithSpecialCharacters = (value) => {
    if (value.trim() === '') {
        return 'Giá trị không được để trống.';
    }
    // Kiểm tra xem tên có chứa ký tự không phải chữ cái, số hoặc dấu cách hay không
    if (!/^[a-zA-ZÀ-ỹ0-9\s]+$/.test(value)) {
        return 'Giá trị chỉ có thể chứa chữ cái, số và dấu cách.';
    }

    // Nếu tất cả các điều kiện đều thỏa mãn, trả về null
    return null;
};

export const validateNumber = (value) => {
    if (value.trim() === '') {
        return 'Giá trị không được để trống.';
    }
    // Kiểm tra xem tên có chứa ký tự không phải chữ cái, số hoặc dấu cách hay không
    if (!/^[0-9]+$/.test(value)) {
        return 'Giá trị chỉ có thể chứa số.';
    }

    // Nếu tất cả các điều kiện đều thỏa mãn, trả về null
    return null;
};

export const validateNameCanNull = (name) => {
    if (!name) return null;
    // Kiểm tra xem tên có chứa ký tự đặc biệt hay không
    if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(name)) {
        return 'Giá trị chỉ có thể chứa chữ cái và dấu cách.';
    }

    // Nếu tất cả các điều kiện đều thỏa mãn, trả về null
    return null;
};

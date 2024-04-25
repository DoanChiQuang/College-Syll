import { getDistrict, getProvince, getWard } from '../../apis/syllAddress';
import {
    ONCHANGE_SUCCESS,
    ONCHANGE_FAIL,
    FETCH_ADDRESS_LOADING,
    FETCH_ADDRESS_SUCCESS,
    FETCH_ADDRESS_FAIL,
    ONADD_ROWTABLE,
    ONDELETE_ROWTABLE,
} from '../../constants/syll';

export const onChangeTextField = (key, value, validFunc) => (dispatch) => {    
    if (validFunc) {
        const validate = validFunc(value);
        if (!validate) dispatch({ type: ONCHANGE_SUCCESS, key, value });
        else
            dispatch({
                type: ONCHANGE_FAIL,
                key,
                value,
                message: validate,
            });
    } else {
        dispatch({ type: ONCHANGE_SUCCESS, key, value });
    }
};

export const onAddRowTable = (key, value) => (dispatch) => {
    dispatch({ type: ONADD_ROWTABLE, key, value });
}

export const onDeleteRowTable = (key, id) => (dispatch) => {
    dispatch({ type: ONDELETE_ROWTABLE, key, id });
}

export const fetchProviceData = (key) => async (dispatch) => {
    dispatch({ type: FETCH_ADDRESS_LOADING, key });
    const { data, status } = await getProvince();
    let newData = [];
    if (data && data?.results) {
        newData = data.results.map((item) => {
            return {
                label: item.province_name,
                id: item.province_id,
            };
        });
    }
    if (status == 200) {
        dispatch({
            type: FETCH_ADDRESS_SUCCESS,
            key,
            category: 'province',
            data: newData,
        });
    } else {
        dispatch({
            type: FETCH_ADDRESS_FAIL,
            key,
            category: 'province',
            message: `Lỗi gọi API ${key} province.`,
        });
    }
};

export const fetchDistrictData = (key, districtId) => async (dispatch) => {
    dispatch({ type: FETCH_ADDRESS_LOADING, key });
    const { data, status } = await getDistrict(districtId);    
    let newData = [];
    if (data && data?.results) {
        newData = data.results.map((item) => {
            return {
                label: item.district_name,
                id: item.district_id,
            };
        });
    }
    if (status == 200) {
        dispatch({
            type: FETCH_ADDRESS_SUCCESS,
            key,
            category: 'district',
            data: newData,
        });
    } else {
        dispatch({
            type: FETCH_ADDRESS_FAIL,
            key,
            category: 'district',
            message: `Lỗi gọi API ${key} district.`,
        });
    }
};

export const fetchWardData = (key, wardId) => async (dispatch) => {
    dispatch({ type: FETCH_ADDRESS_LOADING, key });
    const { data, status } = await getWard(wardId);    
    let newData = [];
    if (data && data?.results) {
        newData = data.results.map((item) => {
            return {
                label: item.ward_name,
                id: item.ward_id,
            };
        });
    }
    if (status == 200) {
        dispatch({
            type: FETCH_ADDRESS_SUCCESS,
            key,
            category: 'ward',
            data: newData,
        });
    } else {
        dispatch({
            type: FETCH_ADDRESS_FAIL,
            key,
            category: 'ward',
            message: `Lỗi gọi API ${key} ward.`,
        });
    }
};

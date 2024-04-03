import {
    FETCH_ADDRESS_FAIL,
    FETCH_ADDRESS_LOADING,
    FETCH_ADDRESS_SUCCESS,
    ONCHANGE_FAIL,
    ONCHANGE_SUCCESS,
} from '../../constants/syll';

const syllReducer = (state, action) => {
    const isHasKey = state.errorKeys.includes(action.key);
    const errorKeysArray = state.errorKeys.filter(
        (errorKey) => errorKey != action.key
    );
    delete state.errorKeysMessage[action.key];

    switch (action.type) {
        case ONCHANGE_SUCCESS:
            return {
                ...state,
                value: {
                    ...state.value,
                    [action.key]: action.value,
                },
                errorKeys: errorKeysArray,
            };

        case ONCHANGE_FAIL:
            return {
                ...state,
                value: {
                    ...state.value,
                    [action.key]: action.value,
                },
                errorKeys: isHasKey
                    ? [...state.errorKeys]
                    : [...state.errorKeys, action.key],
                errorKeysMessage: {
                    ...state.errorKeysMessage,
                    [action.key]: action.message,
                },
            };

        case FETCH_ADDRESS_LOADING:
            return {
                ...state,
                value: {
                    ...state.value,
                    [action.key]: {
                        ...state.value[action.key],
                        address: {
                            ...state.value[action.key].address,
                            loading: true,
                        },
                    },
                },
            };

        case FETCH_ADDRESS_SUCCESS:
            return {
                ...state,
                value: {
                    ...state.value,
                    [action.key]: {
                        ...state.value[action.key],
                        address: {
                            ...state.value[action.key].address,
                            [action.category]: action.data,
                            loading: false,
                        },
                    },
                },
                errorKeys: errorKeysArray,
            };

        case FETCH_ADDRESS_FAIL:
            return {
                ...state,
                value: {
                    ...state.value,
                    [action.key]: {
                        ...state.value[action.key],
                        address: {
                            ...state.value[action.key].address,
                            [action.category]: [],
                            loading: false,
                        },
                    },
                },
                errorKeys: isHasKey
                    ? [...state.errorKeys]
                    : [...state.errorKeys, action.key],
                errorKeysMessage: {
                    ...state.errorKeysMessage,
                    [action.key]: action.message,
                },
            };

        default:
            return 'No action found.';
    }
};

export default syllReducer;

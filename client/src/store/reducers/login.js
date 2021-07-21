import { LOGIN, LOGIN_ERROR } from "../actions/type";

const initialState = {
    count: 0,
    products: [],
    isAuthenticated: false,
    loading: true,
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
            };
        case LOGIN_ERROR:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
            };
        default:
            return state;
    }
};

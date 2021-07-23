import axios from "axios";
import { LOGIN, LOGIN_ERROR, REGISTER, REGISTER_ERROR } from "./type";

const login = (formData) => async (dispatch) => {
    console.log("into actions");

    const config = {
        headers: { "Content-Type": "application/json" },
    };

    console.log(formData);

    try {
        const res = await axios.post("/login", formData, config);
        console.log(res);
        dispatch({
            type: LOGIN,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: LOGIN_ERROR,
        });
    }
};

const register = (formData) => async (dispatch) => {
    const config = {
        headers: { "Content-Type": "application/json" },
    };

    try {
        const res = await axios.post("/register", formData, config);
        console.log(res);
        dispatch({
            type: REGISTER,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: REGISTER_ERROR,
        });
    }
};
export { login, register };

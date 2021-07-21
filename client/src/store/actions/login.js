import axios from "axios";
import { LOGIN, LOGIN_ERROR } from "./type";

const login = (formData) => async (dispatch) => {
    console.log("into actions");

    const config = {
        headers: { "Content-Type": "application/json" },
    };

    console.log(formData);

    try {
        console.log("into try");
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
export { login };

import React from "react";
import axios from "axios";
import { LOGIN, LOGIN_ERROR } from "./types";

const login = (formData) => async (dipatch) => {
    const config = {
        headers: { "Content-Type": "application/json" },
    };
    try {
        const res = await axios.post("/login", formData, config);
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

export default login;

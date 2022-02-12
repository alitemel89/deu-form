import React, { useReducer } from "react";
import lecturerReducer from "./lecturerReducer";
import LecturerContext from "./lecturerContext";

import axios from 'axios';
import { ADD_INFO, INFO_ERROR } from "../types";

const LecturerState = (props) => {
    const initialState = {
        token: localStorage.getItem("token"),
        info: null,
        loading: false
    }

    const [state, dispatch] = useReducer(lecturerReducer, initialState);

    // Add Lecturer Info
    const addLecturerInfo = async (info) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const res = await axios.post("/api/info", info, config);

            dispatch({ type: ADD_INFO, payload: res.data });
        } catch (err) {
            dispatch({ type: INFO_ERROR, payload: err.response.msg });
        }
    }


    return (
        <LecturerContext.Provider
            value={{
                info: state.info,
                error: state.error,
                addLecturerInfo
            }}
        >
            {props.children}
        </LecturerContext.Provider>
    )

}


export default LecturerState;
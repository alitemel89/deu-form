import React, { useReducer } from "react";
import lecturerReducer from "./lecturerReducer";


const LecturerState = (props) => {
    const initialState = {
        token: localStorage.getItem("token"),
        info: null,
        loading: false
    }

    const [state, dispatch] = useReducer(initialState, lecturerReducer);

    // Add Lecturer Info
    const addLecturerInfo = () => {

    }

}


export default LecturerState;
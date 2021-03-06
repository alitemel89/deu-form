import React, { Fragment } from 'react';
import Header from './components/Header';
import LecturerForm from './components/LecturerForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Alerts from './components/Alerts';
import LecturerState from './context/lecturer/LecturerState';



function App() {
    return (
        <>
            <AuthState>
                <LecturerState>
                    <AlertState>
                        <BrowserRouter>
                            <Fragment>
                                <Header />
                                <div className="container mt-2">
                                    <Alerts />
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/register" element={<Register />} />
                                        <Route path="/login" element={<Login />} />
                                        <Route path="/lecturerinfo" element={<LecturerForm />} />
                                    </Routes>
                                </div>
                            </Fragment>
                        </BrowserRouter>
                    </AlertState>
                </LecturerState>
            </AuthState>
        </>
    );
};

export default App;
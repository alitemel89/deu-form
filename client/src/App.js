import React from 'react';
import Header from './components/Header';
import LecturerForm from './components/LecturerForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

import AuthState from './context/auth/AuthState';



function App() {
    return (
        <>
            <AuthState>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/lecturerinfo" element={<LecturerForm />} />
                    </Routes>
                </BrowserRouter>
            </AuthState>
        </>
    );
};

export default App;
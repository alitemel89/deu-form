import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register';


function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
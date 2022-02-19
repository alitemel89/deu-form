import React from 'react';
import logo from '../images/fbe.jpg';

const Home = () => {
    return (
        <div className='text-center'>
            <h2 className="mt-4">Dokuz Eylül Üniversitesi Fen Bilimleri Enstitüsü</h2>
            <img src={logo} alt="Enstitü fotoğrafı" className='m-4' />
            <p className='mt-4'>Enstitü Müdürü: Prof. Dr. Okan Fıstıkoğlu</p>
        </div>
    )
}

export default Home

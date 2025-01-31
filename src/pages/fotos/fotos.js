import React from "react";
import './styles.css'
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header'

function Fotos(){
    return(
        <>
        <Header/>
        <div className='actor-banners-container'>
            <div className='banners-content'>
            <div className="banner-item banner-1"></div>
            <div className="banner-item banner-2"></div>
            <div className="banner-item banner-3"></div>
            <div className="banner-item banner-4"></div>
            <div className="banner-item banner-5"></div>
            <div className="banner-item banner-6"></div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Fotos;


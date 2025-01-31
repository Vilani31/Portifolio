import React, { lazy, Suspense, useState } from 'react';
import Header from '../../components/header/header'
import './styles.css'
import Video from '../../assets/trailertwo.mp4'
import Banner from '../../assets/coringac.webp'
import Footer from '../../components/footer/footer';
import Cardsb from '../../components/cardsb';

function CoringaTwo(){
    
    return(
        <>
            <Header />
            <img id='banner' src={Banner}/>
            <div id='trailer-container'>
                <div className='content'>
                    <video controls className='trailertwo'>
                        <source src={Video}/>
                        Seu navegador não possui suporte para vídeos
                    </video>
               
                <div id='sinopse'>
                    <p className='description'>
                    A trama continua a história de Arthur Fleck (Joaquin Phoenix), 
                    agora vivendo no Asilo Arkham e recebendo acompanhamento da doutora Harleen Quinzel / 
                    Arlequina (Lady Gaga), mas a relação deles toma um rumo inesperado e perigoso.
                    </p>
                    <button className='button'>Comprar Ingresso</button>
                </div>
                </div>
            </div>
            <Cardsb />
            <Footer />
            
            
        </>
    )
}

export default CoringaTwo;
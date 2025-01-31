import React, { lazy, Suspense, useState } from 'react';
import Header from '../../components/header/header'
import './styles.css'
import Video from '../../assets/trailer.mp4'
import Banner from '../../assets/Coringab.jpg'
import Cards from '../../components/cards';
import Footer from '../../components/footer/footer';

function Home(){
    
    return(
        <>
            <Header />
            <img id='banner' src={Banner}/>
            <div id='trailer-container'>
                <div className='content'>
                    <video controls className='trailer'>
                        <source src={Video}/>
                        Seu navegador não possui suporte para vídeos
                    </video>
               
                <div id='sinopse'>
                    <p className='description'>
                    Isolado, intimidado e desconsiderado pela sociedade, 
                    o fracassado comediante Arthur Fleck inicia seu caminho 
                    como uma mente criminosa após assassinar três homens em pleno metrô. 
                    Sua ação inicia um movimento popular contra a elite de Gotham City, 
                    da qual Thomas Wayne é seu maior representante.
                    </p>
                    <button className='button'>Comprar Ingresso</button>
                </div>
                </div>
            </div>
            <Cards />
            <Footer />
            
            
        </>
    )
}

export default Home;
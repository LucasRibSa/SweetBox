import React from "react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import './Quadro.css';

const Quadro = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showWhiteOverlay, setShowWhiteOverlay] = useState(false);
    const imagens = [
        "/assets/ex1.JPG",
        "/assets/ex2.JPG",
        "/assets/ex3.JPG"
    ];

const totalImagens = imagens.length;
    
    const mostrarProximaImagem = () => {
        setShowWhiteOverlay(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImagens);
            setTimeout(() => {
                setShowWhiteOverlay(false);
            }, 950);
        }, 950); 
    };
    const mostrarImagemAnterior = () => {
        setShowWhiteOverlay(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImagens) % totalImagens);
            setTimeout(() => {
                setShowWhiteOverlay(false);
            }, 950);
        }, 950);
    };
    return (
        <div className="quadro">
            <div className="quadro-text">
                <h2>Confira nossos bolos.</h2>
            </div>
            <div className="fotos">
            <ArrowLeft size={52}
                    className="botao-imagem"
                    onClick={mostrarImagemAnterior}/>
                <div className="bolos-container">
                    {showWhiteOverlay && <div className="branco"></div>}
                    <img
                        src={imagens[currentIndex]}
                        alt={`bolo${currentIndex + 1}`}
                        className="bolos"/>
                </div>
                <ArrowRight size={52}
                    className="botao-imagem"
                    onClick={mostrarProximaImagem}/>
            </div>
        </div>
    )
}
export default Quadro;
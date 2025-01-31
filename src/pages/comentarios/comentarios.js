import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './styles.css';


function Comentarios() {
    const [nome, setNome] = useState("");
    const [comentario, setComentario] = useState("");
    const [nota, setNota] = useState("");
    const [comentarios, setComentarios] = useState([
        {
            nome: "Felipe N.",
            nota: "5/5",
            comentario: "Mto foda. Não se trata de um filme de super heróis. É um drama psicológico de tirar o fôlego. Um filme adulto, mto bem conduzido e com roteiro e interpretações impecáveis. Espero que o próximo Batman seja a continuação e siga uma linha na mesma pegada.",
        },
        {
            nome: "judsnet",
            nota: "5/5",
            comentario: "Uma obra-prima do cinema no ano de 2019. Um filme que, certamente, dará o Oscar para Joaquin Phoenix por sua absurda interpretação.",
        },
    ]);

    const adicionarComentario = () => {
        if (nome && comentario && nota) {
            const novoComentario = {
                nome,
                nota: `${nota}/5`,
                comentario,
            };
            setComentarios([...comentarios, novoComentario]);
            setNome("");
            setComentario("");
            setNota("");
        }
    };

    return (
        <>
            <Header />
            <div className="comentarios-container">
                <h2>Comentários sobre o filme Coringa</h2>

                <div id="comentarios_div">
                    <h3>Preencha seu Comentário</h3>
                    <label htmlFor="nome">Nome:</label>
                    <input 
                        type="text" 
                        id="nome" 
                        name="nome" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        placeholder="Digite seu nome" 
                        required 
                    />

                    <label htmlFor="comentario">Comentário:</label>
                    <textarea 
                        name="comentario" 
                        id="comentario" 
                        rows="4" 
                        value={comentario} 
                        onChange={(e) => setComentario(e.target.value)} 
                        placeholder="Escreva seu comentário" 
                        required 
                    ></textarea>

                    <label htmlFor="nota">Nota do Filme (1 a 5):</label>
                    <input 
                        type="number" 
                        id="nota" 
                        name="nota" 
                        min="1" 
                        max="5" 
                        value={nota} 
                        onChange={(e) => setNota(e.target.value)} 
                        required 
                    />

                    <button onClick={adicionarComentario}>Enviar Comentário</button>
                </div>

                <div id="comentarios_anteriores">
                    <h3>Comentários Anteriores</h3>
                    {comentarios.map((coment, index) => (
                        <div key={index} className="comentario-item">
                            <p><strong>{coment.nome}</strong> - Nota: {coment.nota}</p>
                            <p>{coment.comentario}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Comentarios;
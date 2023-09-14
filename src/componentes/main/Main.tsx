import { useState } from "react";
import Filme from "../filme/Filme";
import './Main.css'

type FilmesType = {
    id: number,
    titulo: string,
    sinopse: string,
    imagem: string
}

export default function Main() {
    const [texto, setTexto] = useState("");
    const filmes: FilmesType[] = [
        {
            id: 1,
            titulo: "Barbie",
            sinopse: "Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem: "/barbie.png"
        },
        {
            id: 2,
            titulo: "Transformers",
            sinopse: "Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem: "/transformes.jpeg"
        },
        {
            id: 3,
            titulo: "Velozes e Furiosos 10",
            sinopse: "Dom Toretto e sua família precisam lidar com o adversário mais letal que já enfrentaram. Alimentada pela vingança, uma ameaça terrível emerge das sombras do passado para destruir o mundo de Dom e todos que ele ama.",
            imagem: "/bannervef.jpg"
        },
        {
            id: 4,
            titulo: "A Freira 2",
            sinopse: "Em 1956, na França, um padre é assassinado e parece que um mal está se espalhando. Determinada a deter o maligno, irmã Irene mais uma vez fica cara a cara com uma força demoníaca",
            imagem: "/Freira2.jpg"
        },
        {
            id: 5,
            titulo: "Pica-Pau: O Filme",
            sinopse: "O travesso Pica-Pau está metido em mais uma briga por território. Os inimigos da vez são o vigarista Lance Walters e sua namorada Vanessa. Precisando de dinheiro, eles estão determinados a construir uma extravagante mansão na floresta e lucrar com sua venda, mas Pica-Pau também mora no terreno e não pretende deixá-los em paz.",
            imagem: "/picapau.jpg"
        },
        
    ];

    function mudaTexto(e: React.ChangeEvent<HTMLInputElement>) {
        setTexto(e.target.value);
    }

    const filmesFiltrados = filmes.filter(filme =>
        filme.titulo.toLowerCase().includes(texto.toLowerCase())
    );

    return (
        <>
            <div className="pesquisa">
                <p>Buscar Filme</p>
                <input className='barrapesquisa' type="text" onChange={mudaTexto} />
                <div>
                    <p className='texto_digitado'>Pesquisa: {texto}</p>
                </div>
            </div>
            <main className="content-main">
                {filmesFiltrados.length === 0
                    ? filmes.map(filme => (
                        <Filme
                            key={filme.id}
                            titulo={filme.titulo}
                            sinopse={filme.sinopse}
                            imagem={filme.imagem}
                        />
                    ))
                    : filmesFiltrados.map(filme => (
                        <Filme
                            key={filme.id}
                            titulo={filme.titulo}
                            sinopse={filme.sinopse}
                            imagem={filme.imagem}
                        />
                    ))}
            </main>
        </>
    )
}

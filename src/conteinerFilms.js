import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";


export default function ConteinerFilms(){

    const [filmes, setFilmes] = useState([])
    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies/');
        promise.then(response => { setFilmes(response.data) })

        promise.catch(erro => { console.log(erro.message) })

    }, [])
    return (
        <>
            <h2>Selecione o filme</h2>
            <div className="conteiner">
                {filmes.map(filme => {
                    const film = filme.posterURL;
                    const id = filme.id;
                    return (
                        <>
                            <div className="imgFilme">
                                <Link to={`/sessoes/${id}`}>
                                    <img src={film} alt="descrition"/>
                                </Link>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    );
}


import { useEffect, useState } from "react";
import axios from "axios";
import Topo from "./Topo";
import "./assets/css/style.css"
import "./assets/css/reset.css"


export default function App(){
    const [filmes, setFilmes] = useState([1])
    useEffect(()=>{
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
        promise.then(response => {setFilmes(response.data)})

        promise.catch(erro => {console.log(erro.message)})
        
    },[]) 

    // filmes.map(filme => {const film = filme.posterURL }) <div className="filme">  </div>

    return(
        <>
            <Topo />
            <h2>Selecione o filme</h2>
            <div className="conteiner"> 
                    {filmes.map(filme => {
                        const film = filme.posterURL;
                        return(
                            <>
                                    <div className="imgFilme">
                                        <img src={film} />
                                    </div>
                            </>
                        )                                                                                                        
                    })}
            </div>
        </>
    );
}
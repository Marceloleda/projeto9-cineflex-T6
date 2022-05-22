import {useParams} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Footer(){
    const {idfilm} = useParams();
    const [filme, setFilme] = useState({}) ;
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idfilm}/showtimes`);
        
        promise.then(response => {
            setFilme({...response.data})
        })
        promise.catch(erro => { console.log(erro.message) })
    },[])

    return(
        <>            
            <div className="footer">                
               <div className="imgSessao">
                   <img src={filme.posterURL} />
                </div>
               <h2>{filme.title}</h2>
            </div>
        </>
    );
}
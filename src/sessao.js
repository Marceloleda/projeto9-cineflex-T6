import {useParams} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./footer";


export default function Sessao(){
    const {idfilm} = useParams();
    const [filme, setFilme] = useState([]) ;
    const days = filme.days;

   
    // console.log(filme.days)
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idfilm}/showtimes`);
        promise.then(response => {
            setFilme({...response.data})
        })

        promise.catch(erro => { console.log(erro.message) })
    }, [])

    return(
        <>
            <h2>Selecione o horário</h2>  
            {days.map(film => {
            const horario = film.weekday;
                return(
                    <>
                        <div className="horario">
                            <h2>{horario}</h2>
                        </div>
                    </>
                );
            })}


            <Footer />
        </>
    );
}
import {useParams} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./footer";
import React from "react";



export default function Sessao(props){
    const {idfilm} = useParams();
    const [sessao, setSessao] = useState([]);

    console.log(sessao)
     
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idfilm}/showtimes`);
        promise.then(response => {
            setSessao(response.data.days)
        })

        promise.catch(erro => { console.log(erro.message) })
    }, [])

    return(
        <>
            <div className="categoria">
                <h2>Selecione o horário</h2>
            </div>  
            <div className="conteinerSessoes">
                {sessao.map(film => {
                    const dias = film.weekday;
                    const data = film.date;
                    const hora = film.showtimes;
                    return(
                        <>
                            <div className="dia">
                                <h2>{dias} - {data}</h2>
                            </div>
                            <div className="horas">                 
                                {hora.map(hour => {
                                    const idAssentos = hour.id;
                                    const hora = hour.name;
                                    return(
                                        <Link to={`./assentos/${idAssentos}`}>
                                            <div className="hour">
                                                {hora}
                                            </div>
                                        </Link>
                                    );
                                })}
                                
                            </div>
                        </>
                    );
                })}
            </div>
            

            
            <Footer />
        </>
    );
}
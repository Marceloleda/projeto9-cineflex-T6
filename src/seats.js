import Footer from "./footer";
import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import React from "react";
import Lugar from "./lugar";
import styled from "styled-components";

export default function Seats(){

    const {idSessao} = useParams();
    const [assento, setAssento] = useState([]);
    console.log(assento)

    useEffect(()=> {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then(response => {
            setAssento(response.data.seats)
        })
        promise.catch(erro => {
            console.log(erro.message)
        })
    }, [])

    return(
        <>
             <div className="categoria">
                <h2>Selecione o(s) assento(s)</h2>
            </div>  
            <div className="seats">
                {assento.map(seat => {
                    const seatNumber = seat.name;
                    const status = seat.isAvailable;
                    return(
                        <>
                            <Lugar status={status}>
                                {seatNumber}
                            </Lugar>
                        </>
                    );
                })}
            </div>
            <div className="description">
                <div className="exemplo selecionado">
                </div>
                <div className="exemplo disponivel">
                </div>
                <div className="exemplo indisponivel">
                </div>
            </div>
            <div className="status">
                <h3>Selecionado</h3>
                <h3>Disponível</h3>
                <h3>Indisponível</h3>
            </div>
            <Footer />
        </>
    );
}

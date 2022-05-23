import Topo from "./Topo";
import ConteinerFilms from "./conteinerFilms";
import Sessao from "./sessao";
import Seats from "./seats";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./assets/css/style.css"
import "./assets/css/reset.css"



export default function App() {
    return (
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path="/" element={<ConteinerFilms />} />
                <Route path="/filme/:idfilm" element={<Sessao />}/>
                <Route path="/filme/:idfilm/assentos/:idSessao" element={<Seats/>}/>
            </Routes>
        </BrowserRouter>
    );
}

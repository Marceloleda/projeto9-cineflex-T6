import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topo from "./Topo";
import ConteinerFilms from "./conteinerFilms";
import Sessao from "./sessao";
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

            </Routes>
        </BrowserRouter>
    );
}

import styled from "styled-components";

export default function Lugar({status, children}){
    return(

        <Assento  className={status === true? "indisponivel" : "disponivel" } onClick={() => {
            console.log(status)
            if(status === false){
                className= `${selecionado}`
            }
            } }>
            {children}
        </Assento>
    );
}
const Assento = styled.div`
    width: 26px;
    height: 26px;
    margin-top: 18px;
    margin-left: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    box-sizing: border-box;

`;
const selecionado = styled.style`
    background: #8DD7CF;
    border: 1px solid #1AAE9E;
`;
const disponivel = styled.style`
    background: #8DD7CF;
    border: 1px solid #1AAE9E;
`;
const indisponivel = styled.style`
    background: #8DD7CF;
    border: 1px solid #1AAE9E;
`;

import NavBar from "./NavBar";
import MainBtn from "./MainBtn";
import ActionBtn from "./Telas/ActionBtn";
import { useState } from "react";

function TelaFibra({irPara}){
    const[select, setSelect] = useState(null);
    return(
        <div className="layout">

            <NavBar irPara={irPara}/>
            
            <div className="title">
                SELECIONAR TAMANHO DA FIBRA
            </div>

            <div className="content">
                <MainBtn 
                    text="FIBRA" 
                    info="20 CM" 
                    imgSrc="/wire-white.png"
                    imgSrcAtivo="/wire-blue.png"
                    ativo={select === "20"}
                    onClick={() => setSelect("20")}
                    /> 
                <MainBtn 
                    text="FIBRA" 
                    info="40 CM" 
                    imgSrc="/wire-white.png"
                    imgSrcAtivo="/wire-blue.png"
                    ativo={select === "40"}
                    onClick={() => setSelect("40")}
                    />
            </div>

            <div className="botton">
                <ActionBtn caption="VOLTAR" irPara={irPara} destino="Tela"/>
                {select && (<ActionBtn 
                    caption="AVANÇAR"
                    irPara={irPara}
                    destino="TelaQtd"
                    />)}
            </div>

        </div>
    );
}
export default TelaFibra;
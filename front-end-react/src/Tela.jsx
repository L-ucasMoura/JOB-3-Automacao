import { useState } from "react";
import NavBar from "./NavBar";
import MainBtn from "./MainBtn";
import ActionBtn from "./Telas/ActionBtn";

function Tela({irPara}){

    const[select, setSelect] = useState(null);

    return(
        <div className="layout">

            <NavBar irPara={irPara}/>
            
            <div className="title">
                SELECIONAR ARMAZÉM
            </div>

            <div className="content">
                <MainBtn 
                    text="ARMAZÉM" 
                    info="A" 
                    imgSrc="/boxes.png"
                    imgSrcAtivo="/boxes-blue.png"
                    ativo={select === "A"} 
                    onClick={() => setSelect("A")}
                    /> 
                <MainBtn 
                    text="ARMAZÉM" 
                    info="B" 
                    imgSrc="/boxes.png"
                    imgSrcAtivo="/boxes-blue.png"
                    ativo={select === "B"}
                    onClick={() => setSelect("B")}
                    />
            </div>

            <div className="botton">
                <ActionBtn 
                    caption="VOLTAR"
                    destino="Inicio"
                    irPara={irPara}
                    />

                {select && (<ActionBtn 
                    caption="AVANÇAR" 
                    irPara={irPara} 
                    destino="TelaFibra"
                    />)}
            </div>

        </div>
    );
}
export default Tela;
import { useState } from "react";
import NavBar from "./NavBar";
import ActionBtn from "./Telas/ActionBtn";
import InputNumber from "./InputNumber";

export default function TelaQtd({irPara}) {

    const[numero, setNumero] = useState("");
    
    return(
        <div className="layout">

            <NavBar irPara={irPara}/>
            
            <div className="title">
                PARÂMETROS DE CORTE
            </div>
        
            <InputNumber
                    label="Quantidade"
                    value={numero}
                    onChange={setNumero}
                    placeholder=""
                    />
            
                
            <div className="botton">
                <ActionBtn 
                    caption="VOLTAR"
                    destino="TelaFibra"
                    irPara={irPara}
                    />

            {numero !=="" && (<ActionBtn 
                style={{ "--btn-bg": "#10b981" }}
                caption="AVANÇAR" 
                irPara={irPara} 
                destino="TelaFibra"
                />)}
            </div>

        </div>
        );
}
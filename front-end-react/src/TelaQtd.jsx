import { useState } from "react";
import NavBar from "./NavBar";
import ActionBtn from "./ActionBtn";
import InputNumber from "./InputNumber";

export default function TelaQtd({ irPara, onConfirm }) {
  const [numero, setNumero] = useState("");

  const handleAvancar = () => {
    if (!numero) return;
    onConfirm(numero);      // salva no estado do App
    irPara("Inicio");       // exemplo: volta para a tela inicial
  };

  return (
    <div className="layout">
      <NavBar irPara={irPara}/>
      
      <div className="title">PARÂMETROS DE CORTE</div>
    
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

        {numero !== "" && (
          <ActionBtn 
            caption="AVANÇAR"
            destino="TelaConfirm"
            irPara={irPara}
            onClickExtra={() => onConfirm(numero)}
          />
        )}
      </div>
    </div>
  );
}

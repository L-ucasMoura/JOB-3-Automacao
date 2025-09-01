import NavBar from "./NavBar";
import MainBtn from "./MainBtn";
import ActionBtn from "./ActionBtn";
import { useState } from "react";

function TelaFibra({ irPara, onConfirm }) {
  const [select, setSelect] = useState(null);

  const handleAvancar = () => {
    if (!select) return;
    onConfirm(select);       // salva no estado do App
    irPara("TelaQtd");       // vai para a próxima tela
  };

  return (
    <div className="layout">
      <NavBar irPara={irPara}/>
      
      <div className="title">SELECIONAR TAMANHO DA FIBRA</div>

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
        <ActionBtn 
          caption="VOLTAR" 
          irPara={irPara} 
          destino="Tela"
        />
        {select && (
          <ActionBtn 
            caption="AVANÇAR"
            destino="TelaQtd"
            irPara={irPara}
            onClickExtra={() => onConfirm(select)}
          />
        )}
      </div>
    </div>
  );
}

export default TelaFibra;

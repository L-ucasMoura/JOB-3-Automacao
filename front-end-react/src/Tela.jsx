import { useState } from "react";
import NavBar from "./NavBar";
import MainBtn from "./MainBtn";
import ActionBtn from "./ActionBtn";

function Tela({ irPara, onConfirm }) {
  const [select, setSelect] = useState(null);

  const handleAvancar = () => {
    if (!select) return;
    onConfirm(select);       // salva no estado do App
    irPara("TelaFibra");     // vai para a próxima tela
  };

  return (
    <div className="layout">
      <NavBar irPara={irPara}/>
      
      <div className="title">SELECIONAR ARMAZÉM</div>

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

        {select && (
          <ActionBtn 
            style={{ "--btn-bg": "#10b981" }}
            caption="AVANÇAR"
            destino="TelaFibra"
            irPara={irPara}
            onClickExtra={() => onConfirm(select)}  // salva no estado do App
            />
        )}
      </div>
    </div>
  );
}

export default Tela;

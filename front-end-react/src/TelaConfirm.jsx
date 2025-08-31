import NavBar from "./NavBar";
import ActionBtn from "./ActionBtn";

export default function TelaConfirm({ irPara, respostas }) {
  return (
    <div className="layout">
      <NavBar irPara={irPara}/>

      <div className="title">
        CONFIRMAR OPERAÇÃO
      </div>

      <div className="confirm-content">
        <p>ARMAZÉM SELECIONADO:   <span>{respostas.armazem}</span></p>
        <p>TAMANHO DA FIBRA:   <span>{respostas.fibra}CM</span></p>
        <p>QUANTIDADE DE CORTE:   <span>{respostas.quantidade}</span></p>
      </div>


        <div className="botton">
            <ActionBtn 
                caption="VOLTAR"
                destino="TelaQtd"
                irPara={irPara}
                />

            
            <ActionBtn 
                style={{ "--btn-bg": "#10b981" }}
                caption="INICIAR OPERAÇÃO"
                destino="TelaLogin"
                irPara={irPara}
                  // salva no estado do App
                />
        </div>
            
    </div>
  );
}

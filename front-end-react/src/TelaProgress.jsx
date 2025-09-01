import NavBar from "./NavBar";
import ActionBtn from "./ActionBtn";
import ProgressBar from "./ProgressBar";

export default function TelaProgress({irPara}){
    return(
        <div className="layout">
            <NavBar irPara={irPara}/>
            <div className="title">
                <h3>PROCESSO EM ANDAMENTO</h3></div>
            <div className="content">
                <ProgressBar />
            </div>
            <div className="bottom">
                <ActionBtn
                    caption="VOLTAR"
                    irPara={irPara}
                    destino="Tela"
                />
            </div>

        </div>

    );
}
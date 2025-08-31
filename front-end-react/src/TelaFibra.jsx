import NavBar from "./NavBar";
import MainBtn from "./MainBtn";
import ActionBtn from "./Telas/ActionBtn";

function TelaFibra({irPara}){
    return(
        <div className="layout">

            <NavBar irPara={irPara}/>
            
            <div className="title">
                SELECIONAR TAMANHO DA FIBRA
            </div>

            <div className="content">
                <MainBtn text="FIBRA" info="20 CM" imgSrc="/wire-white.png"/> 
                <MainBtn text="FIBRA" info="40 CM" imgSrc="/wire-white.png"/>
            </div>

            <div className="botton">
                <ActionBtn caption="VOLTAR"/>
                <ActionBtn caption="AVANÇAR"/>
            </div>

        </div>
    );
}
export default TelaFibra;
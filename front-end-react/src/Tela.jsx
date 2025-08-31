import NavBar from "./NavBar";
import MainBtn from "./MainBtn";
import ActionBtn from "./Telas/ActionBtn";

function Tela(){
    return(
        <div className="layout">

            <NavBar />
            
            <div className="title">
                SELECIONAR ARMAZÉM
            </div>

            <div className="content">
                <MainBtn text="ARMAZÉM" info="A" imgSrc="/boxes.png"/> 
                <MainBtn text="ARMAZÉM" info="B" imgSrc="/boxes.png"/>
            </div>

            <div className="botton">
                <ActionBtn caption="VOLTAR"/>
                <ActionBtn caption="AVANÇAR"/>
            </div>

        </div>
    );
}
export default Tela;
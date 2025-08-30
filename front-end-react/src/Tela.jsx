import NavBar from "./NavBar";
import MainBtn from "./MainBtn";
import ActionBtn from "./Telas/ActionBtn";

function Tela(){
    return(
        <div className="layout">

            <NavBar />
            
            <div className="title">
                Aqui fica o Título
            </div>

            <div className="content">
                <MainBtn text="ARMAZÉM" info="A"/> 
                <MainBtn text="ARMAZÉM" info="B"/>
            </div>

            <div className="botton">
                <ActionBtn caption="VOLTAR"/>
                <ActionBtn caption="AVANÇAR"/>
            </div>

        </div>
    );
}
export default Tela;
import MainBtn from "./MainBtn";
import NavBar from "./NavBar";

function Tela(){
    return(
        <div className="layout">

            <NavBar />
            
            <div className="title">
                Aqui fica o Título
            </div>

            <div className="content">
                <MainBtn /> 
                <MainBtn />
            </div>

            <div className="botton">
                <button>Botão1</button>
                <button>Botão2</button>
            </div>



            Layout
        </div>
    );
}
export default Tela;
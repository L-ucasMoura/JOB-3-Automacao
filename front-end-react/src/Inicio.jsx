import NavBar from "./NavBar";
import Card from "./Card";

export default function Inicio({irPara}) {
    return (
        <div className="layout">

            <NavBar irPara={irPara}/>
            
            <div className="title">
                Bem Vindo 
            </div>

            <div className="content">
                <Card 
                    caption=" INICIAR PROCESSO"
                    imgSrc="/automation-white.png"
                    irPara={irPara}
                    destino="Tela"
                />
                <Card 
                    caption=" RELATÓRIO"
                    imgSrc="/barchart-white.png"
                    irPara={irPara}
                    destino="Tela"
                />
            </div>

        </div>

    );
}
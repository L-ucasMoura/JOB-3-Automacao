import { useState, useEffect } from "react";
import NavBtn from "./NavBtn";

function NavBar({irPara}){
    const [dateTime, setDateTime] = useState(new Date());

    // Atualiza o estado a cada segundo
    useEffect(() => {
        const interval = setInterval(() => {
        setDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval); // limpa o intervalo ao desmontar o componente
    }, []);

    // Formata a data e hora
    const formattedDate = dateTime.toLocaleDateString(); // dd/mm/aaaa
    const formattedTime = dateTime.toLocaleTimeString(); // hh:mm:ss

    return( 
        <nav className="navBar">
            <div className="nav-left">
                <h2 className="logo-text">AERO<br></br><span className="byte-name">BYTE</span></h2>
                <div className="logo-img"><img src="/Aerobyte.jpg" alt="Logo" /></div>
            </div>

            <div className="nav-center">
                <NavBtn 
                    caption="HOME" 
                    iconScr="/home-white.png"
                    irPara={irPara}
                    destino="Inicio"
                    />
                <NavBtn 
                    caption="PROCESSO" 
                    iconScr="/automation-white.png" 
                    irPara={irPara} 
                    destino="Tela"
                    />
                <NavBtn 
                    caption="RELATÓRIO" 
                    iconScr="/barchart-white.png"
                    />
            </div>

            <div className="nav-right">
                <div className="date-time">
                    <h3>{formattedDate}</h3>
                    <h3>{formattedTime}</h3>
                </div>
                <NavBtn caption="SAIR" iconScr="/exit.png" destino="TelaLogin" irPara={irPara}/>
            </div>
        </nav>
    );
}
export default NavBar;
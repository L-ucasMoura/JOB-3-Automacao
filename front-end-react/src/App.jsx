import { useState } from "react";

import Tela from "./Tela";
import TelaLogin from "./TelaLogin";
import TelaFibra from "./TelaFibra";
import Inicio from "./Inicio";

function App() {
    const [telaAtual, setTela] = useState("TelaLogin");

    return (
        <> 
        {telaAtual === "TelaLogin" && <TelaLogin irPara={setTela} />}
        {telaAtual === "Inicio" && <Inicio irPara={setTela} />}
        {telaAtual === "Tela" && <Tela irPara={setTela} />}
        {telaAtual === "TelaFibra" && <TelaFibra irPara={setTela} />}
       
        </>
    );
    
}
export default App;

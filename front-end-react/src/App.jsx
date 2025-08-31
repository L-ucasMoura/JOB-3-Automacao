import { useState } from "react";

import Tela from "./Tela";
import TelaLogin from "./TelaLogin";
import TelaFibra from "./TelaFibra";

function App() {
    const [telaAtual, setTela] = useState("TelaLogin");

    return (
        <> 
        {telaAtual === "TelaLogin" && <TelaLogin irPara={setTela} />}
        {telaAtual === "Tela" && <Tela irPara={setTela} />}
        {telaAtual === "TelaFibra" && <TelaFibra irPara={setTela} />}
       
        </>
    );
    
}
export default App;

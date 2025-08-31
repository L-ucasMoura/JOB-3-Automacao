import { useState } from "react";

import Tela from "./Tela";
import TelaLogin from "./TelaLogin";

function App() {
    const [telaAtual, setTela] = useState("TelaLogin");

    return (
        <>
        {telaAtual === "TelaLogin" && <TelaLogin irPara={() => setTela("Tela")} />}
        {telaAtual === "Tela" && <Tela irPara={() => setTela("TelaLogin")} />}
        </>
    );
}
export default App;

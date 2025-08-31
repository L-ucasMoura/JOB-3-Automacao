import { useState } from "react";

import Tela from "./Tela";
import TelaLogin from "./TelaLogin";
import TelaFibra from "./TelaFibra";
import Inicio from "./Inicio";
import TelaQtd from "./TelaQtd";
import TelaConfirm from "./TelaConfirm";

function App() {
    const [telaAtual, setTela] = useState("TelaLogin");

    
    const [respostas, setRespostas] = useState({
        armazem: null,
        fibra: null,
        quantidade: null,
    });

    return (
        <>
            {telaAtual === "TelaLogin" && <TelaLogin irPara={setTela} />}
            
            {telaAtual === "Inicio" && <Inicio irPara={setTela} />}
            
            {telaAtual === "Tela" && (
                <Tela 
                    irPara={setTela} 
                    onConfirm={(armazemSelecionado) =>
                        setRespostas(prev => ({ ...prev, armazem: armazemSelecionado }))
                    }
                />
            )}
            
            {telaAtual === "TelaFibra" && (
                <TelaFibra 
                    irPara={setTela} 
                    onConfirm={(fibraSelecionada) =>
                        setRespostas(prev => ({ ...prev, fibra: fibraSelecionada }))
                    }
                />
            )}
            
            {telaAtual === "TelaQtd" && (
                <TelaQtd 
                    irPara={setTela} 
                    onConfirm={(quantidade) =>
                        setRespostas(prev => ({ ...prev, quantidade }))
                    }
                />
            )}

            {telaAtual === "TelaConfirm" && (
                <TelaConfirm 
                    irPara={setTela} 
                    respostas={respostas}
                />
            )}
            
        </>
    );
}

export default App;

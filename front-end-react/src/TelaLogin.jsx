import { useState } from "react";

function TelaLogin({ irPara }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: senha })
      });

      const data = await res.json();

      if (res.ok) {
       
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        
        setErro("");

        
        if (data.role === "SUPERVISOR") {
          irPara("Tela");
        } else {
          irPara("Inicio");
        }
      } else {
        setErro(data.message || "Falha no login");
      }
    } catch (error) {
      console.error(error);
      setErro("Erro de conexão com o servidor");
    }
  };

  return (
    <div className="layout-login">
      <div className="tela-login">
        <div className="login-card">
          <h2>LOGIN</h2>

          <div className="field">
            <label htmlFor="user">USUÁRIO</label>
            <input
              id="user"
              type="text"
              placeholder="Insira seu usuário"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="pass">SENHA</label>
            <input
              id="pass"
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          {erro && <p style={{ color: "red" }}>{erro}</p>}

          <button type="button" className="btn" onClick={handleLogin}>
            ENTRAR
          </button>
        </div>

        <div className="logo">
          <h1>
            AERO<span className="byte">BYTE</span>
          </h1>
          <img src="Aerobyte.jpg" alt="Logo do site" />
        </div>
      </div>
    </div>
  );
}

export default TelaLogin;
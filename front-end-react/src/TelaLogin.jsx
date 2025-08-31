function TelaLogin({irPara}){
    return(
        <div className="layout-login">
        <div className="tela-login">
            <div className="login-card">
                <h2>LOGIN</h2>
                <div className="field">
                    <label for="user">USUÁRIO</label>
                    <input id="user" type="text" placeholder="Insira seu usuário"></input>
                </div>

                <div className="field">
                    <label for="pass">SENHA</label>
                    <input id="pass" type="password" placeholder="Senha"></input>
                </div>

                <button type="button" className="btn" onClick={() => irPara("Tela")}>ENTRAR</button>
            </div>
            
    
            <div className="logo">
                <h1>AERO<span className="byte">BYTE</span></h1>
                <img src="Aerobyte.jpg" alt="Logo do site"></img>
            </div>
        </div>
    </div>

    );
}
export default TelaLogin;
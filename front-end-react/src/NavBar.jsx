import NavBtn from "./NavBtn";

function NavBar(){
    return( 
        <nav className="navBar">
            <div className="nav-left">
                <h2 className="logo-text">AERO<br></br><span className="byte-name">BYTE</span></h2>
                <div className="logo-img"><img src="/Aerobyte.jpg" alt="Logo" /></div>
            </div>

            <div className="nav-center">
                <NavBtn caption="HOME"/>
                <NavBtn caption="PROCESSO"/>
                <NavBtn caption="RELATÓRIO"/>
            </div>

            <div className="nav-right">
                <NavBtn caption="SAIR"/>
            </div>
        </nav>
    );
}
export default NavBar;
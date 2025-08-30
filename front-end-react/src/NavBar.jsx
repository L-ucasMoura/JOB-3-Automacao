import NavBtn from "./NavBtn";

function NavBar(){
    return( 
        <nav className="navBar">
            <div className="nav-left">
                <NavBtn caption="Esq1"/>
            </div>

            <div className="nav-center">
                <NavBtn caption="HOME"/>
                <NavBtn caption="PROCESSO"/>
                <NavBtn caption="RELATÓRIO"/>
            </div>

            <div className="nav-right">
                <NavBtn caption="Esq1"/>
            </div>
        </nav>
    );
}
export default NavBar;
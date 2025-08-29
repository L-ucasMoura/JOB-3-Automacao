
function Header() {
    /*Componentes React retornam só um elemento*/ 
    return (
        <header>
            <h1>Meu site</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <hr></hr>

            </nav>
        </header>

    );
}

export default Header;
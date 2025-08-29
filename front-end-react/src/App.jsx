/*App.jsx é a nossa Main */

/*Tudo isso são componentes criados e importados */
import Header from './Header.jsx'; 
import Footer from './Footer.jsx'; 
import Food from './Food.jsx';

/*Uma function nada mais é que um componente. App() é nosso componente Main*/
function App() {

    return (
        /*Fragmentos abraçam os componentes importados em um conjunto maior*/
        <>
            <Header />
            <Food />
            <Footer />
        </>
     );
}

export default App;

/*App.jsx é a nossa Main */

import Button from "./Button";

//Use components Inline

function App() {
    const styles = {
        font: "Arial",
        color: "white",
        backgroundColor: "green",
        border: "none",
        borderRadius: "5px",
        padding: "10px 20px",
        cursor: "pointer",
    }
    
    return (
        <button style={styles}>Click Me!</button>
    );
}

export default App;

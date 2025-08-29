/*App.jsx é a nossa Main */

import Student from "./Student.jsx";

//Use components Inline
function App(){
    return (
        <>
        <Student name="Spongebob" age={30} isStudent={true}/>
        <Student name="Jose" age={40} isStudent={false}/>
        </>
    );
}

export default App;

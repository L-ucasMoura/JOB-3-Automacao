function MainBtn({text, info, imgSrc, imgSrcAtivo, ativo, onClick}) {
    return (
        <button 
            className={`main-btn ${ativo ? "ativo" : ""}`}
            onClick={onClick}>

            <img alt="img" className="btn-img" src={ativo? imgSrcAtivo : imgSrc}></img>
            <h3 className="btn-txt">{text}</h3>
            <h3 className="btn-main-info">{info}</h3>

        </button>
    );
}
export default MainBtn;
function ActionBtn({caption, irPara, destino}) {
    return(
        <button className="act-btn" onClick={() => irPara(destino)}>{caption}</button>
    );
}
export default ActionBtn;
function NavBtn({caption, iconScr, irPara, destino}){
    return(
        <button 
            className="nav-btn" 
            onClick={() => irPara(destino)}>
            <img 
                className="nav-btn-icon" 
                alt="icon" 
                src={iconScr}>
                </img>
            {caption}
        </button>
    );
}
export default NavBtn;
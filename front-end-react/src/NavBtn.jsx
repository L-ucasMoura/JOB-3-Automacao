function NavBtn({caption, iconScr}){
    return(
        <button className="nav-btn">
            <img className="nav-btn-icon" alt="icon" src={iconScr}></img>
            {caption}
        </button>
    );
}
export default NavBtn;
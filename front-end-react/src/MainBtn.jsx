function MainBtn({text, info}) {
    return (
        <button className="main-btn">
            <img alt="img" className="btn-img" src="/wire-white.png"></img>
            <h3 className="btn-txt">{text}</h3>
            <h3 className="btn-main-info">{info}</h3>
        </button>
    );
}
export default MainBtn;
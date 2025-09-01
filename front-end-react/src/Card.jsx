export default function Card({caption, imgSrc, destino, irPara}) {
    return(
        <button 
            className="card"
            onClick={() => irPara(destino)}>
            
            <img 
                className="btn-img" 
                alt="card-img" 
                src={imgSrc}>
            </img>
            <h3 className="btn-txt">{caption}</h3>

        </button>

    );
}
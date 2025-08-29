/*Só se deve importar imagem qnd ela está na pasta Source. 
Se não for esse o caso, use o link direto */

function Card(){
    return(
        /*Em jsx o nome 'class' é reservado, então usa-se className */
        <div className='card'>
            <img className="card-img" alt="React Image" src="/logo192.png"></img>
            <h2 className="card-title">Learn React or Die!</h2>
            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quos autem sed veniam ipsam assumenda, dolore exercitationem. Cum explicabo in alias, assumenda deserunt nulla, tempore rem quasi porro quam harum. </p>

        </div>
    );
}
export default Card
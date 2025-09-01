function ActionBtn({ caption, irPara, destino, onClickExtra }) {
  const handleClick = () => {
    if (onClickExtra) onClickExtra();  // chama a função extra
    if (irPara && destino) irPara(destino); // depois navega
  };

  return (
    <button className="act-btn" onClick={handleClick}>
      {caption}
    </button>
  );
}

export default ActionBtn;

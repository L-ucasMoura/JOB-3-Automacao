import { useState, useEffect } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Cria um intervalo que atualiza a barra
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval); // Para quando atingir 100%
          return 100;
        }
        return prev + 1; // Incrementa 1% a cada 50ms
      });
    }, 50);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div style={{
      width: "700px",
      height: "60px",
      border: "3px solid #00aaff",
      padding: "0px",
      borderRadius: "5px",
      backgroundColor: "white",
      overflow: "hidden",
      position: "relative",
      marginTop: "80px",
      marginBottom: "100px", 
    }}>
      <div style={{
        width: `${progress}%`,
        height: "100%",
        backgroundColor: "#10b981",
        transition: "width 0.1s linear"
      }} />
      <span style={{
        fontSize: "25px",
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        color: "#0b1f33",
        fontWeight: "bold"
      }}>{progress}%</span>
    </div>
  );
}

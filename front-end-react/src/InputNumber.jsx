import { useState } from "react";
import "./InputNumber.css"; // importa o estilo

export default function InputNumber({ label, value, onChange, placeholder }) {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;

    // Permite apenas números positivos
    if (val === "" || (/^[0-9]+$/.test(val) && parseInt(val) <= 500)) {
      setError("");
      onChange(val);
    } else {
      setError("Valor Inválido.");
    }
  };

  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder || "Digite um valor"}
        className="input-field"
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
}

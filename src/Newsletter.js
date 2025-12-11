import { useState, useEffect } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (email.includes("@")) {
      setMsg("Correo válido");
    } else {
      setMsg("");
    }
  }, [email]);

  return (
    <div>
      <h1>Newsletter mensual</h1>
      <p>Regístrate para recibir novedades de la empresa.</p>

      <input 
        placeholder="Escribe tu email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <p>{msg}</p>

      <button onClick={() => alert("Registrado!")}>
        Registrarme
      </button>
    </div>
  );
}
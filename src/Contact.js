import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });

  return (
    <div>
      <h1>Contacto</h1>

      <input
        placeholder="Tu nombre"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Tu correo"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <textarea
        placeholder="Mensaje"
        onChange={(e) => setForm({ ...form, msg: e.target.value })}
      ></textarea>

      <button onClick={() => alert("Mensaje enviado!")}>
        Enviar
      </button>
    </div>
  );
}
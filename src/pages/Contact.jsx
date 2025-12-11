import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Contacto</h2>
      <form>
        <input name='name' placeholder='Nombre' value={form.name} onChange={handleChange} />
        <input name='email' placeholder='Email' value={form.email} onChange={handleChange} />
        <textarea name='message' placeholder='Mensaje' value={form.message} onChange={handleChange} />
        <button type='button'>Enviar</button>
      </form>
    </div>
  );
};

export default Contact;

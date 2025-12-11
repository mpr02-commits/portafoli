import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    service: 'web'
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', message: '', service: 'web' });
  };
  
  return (
    <div className='page-container'>
      <h2> Contacto</h2>
      <p>¿Tienes un proyecto en mente? ¡Hablemos!</p>
      
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem'}}>
        <div>
          <h3>Información</h3>
          <p><strong>Email:</strong> info@digitalevolution.com</p>
          <p><strong>Teléfono:</strong> +34 971 123 456</p>
          <p><strong>Dirección:</strong> Palma de Mallorca</p>
        </div>
        
        <div>
          <h3>Envíanos un mensaje</h3>
          {submitted && <div style={{background: '#4CAF50', color: 'white', padding: '1rem', borderRadius: '5px', marginBottom: '1rem'}}>
            ¡Mensaje enviado correctamente!
          </div>}
          
          <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='Tu nombre' value={form.name} onChange={handleChange} required />
            <input type='email' name='email' placeholder='Tu email' value={form.email} onChange={handleChange} required />
            
            <select name='service' value={form.service} onChange={handleChange}>
              <option value='web'>Desarrollo Web</option>
              <option value='app'>App Móvil</option>
              <option value='consulting'>Consultoría</option>
            </select>
            
            <textarea name='message' placeholder='Tu mensaje...' rows='4' value={form.message} onChange={handleChange} required />
            
            <button type='submit'>Enviar mensaje</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

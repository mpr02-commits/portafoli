import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribers, setSubscribers] = useState(1250);
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setInterval(() => {
      setSubscribers(prev => prev + Math.floor(Math.random() * 5));
    }, 10000);
    return () => clearInterval(timer);
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Redirige a la página de confirmación con el email
      navigate('/newsletter/confirm', { state: { email: email } });
      setEmail('');
    }
  };
  
  return (
    <div className='page-container'>
      <h2> Newsletter</h2>
      <p>Suscríbete para recibir las últimas novedades en desarrollo web.</p>
      
      <div style={{background: '#f0f8ff', padding: '2rem', borderRadius: '10px', margin: '2rem 0'}}>
        <h3> Estadísticas</h3>
        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
          <div style={{textAlign: 'center', flex: 1}}>
            <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#1a237e'}}>{subscribers.toLocaleString()}</div>
            <div>Suscriptores</div>
          </div>
          <div style={{textAlign: 'center', flex: 1}}>
            <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#1a237e'}}>24</div>
            <div>Ediciones</div>
          </div>
          <div style={{textAlign: 'center', flex: 1}}>
            <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#1a237e'}}>98%</div>
            <div>Tasa apertura</div>
          </div>
        </div>
      </div>
      
      <div style={{margin: '2rem 0'}}>
        <h3> Suscríbete ahora</h3>
        <p>Recibe cada mes:</p>
        <ul style={{marginLeft: '1.5rem', marginBottom: '1.5rem'}}>
          <li> Tutoriales de React y Node.js</li>
          <li> Casos de éxito de nuestros proyectos</li>
          <li> Ofertas exclusivas para suscriptores</li>
          <li> Novedades del sector tecnológico</li>
        </ul>
        
        <form onSubmit={handleSubmit} style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
          <input 
            type='email' 
            placeholder='tu@email.com' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            style={{flex: 1, padding: '1rem'}}
          />
          <button type='submit' style={{padding: '1rem 2rem'}}>
            Suscribirme 
          </button>
        </form>
        <p style={{fontSize: '0.9rem', color: '#666', marginTop: '1rem'}}>
          Al suscribirte aceptas recibir emails mensuales. Puedes cancelar cuando quieras.
        </p>
      </div>
    </div>
  );
}

export default Newsletter;

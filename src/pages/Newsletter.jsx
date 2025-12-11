import { useState, useEffect } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subscribers, setSubscribers] = useState(1250);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setSubscribers(prev => prev + Math.floor(Math.random() * 5));
    }, 10000);
    return () => clearInterval(timer);
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setSubscribers(prev => prev + 1);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
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
        </div>
      </div>
      
      <div style={{margin: '2rem 0'}}>
        <h3>Suscríbete</h3>
        <form onSubmit={handleSubmit} style={{display: 'flex', gap: '1rem'}}>
          <input 
            type='email' 
            placeholder='tu@email.com' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            style={{flex: 1}}
          />
          <button type='submit'>
            {subscribed ? '¡Gracias!' : 'Suscribirme'}
          </button>
        </form>
        {subscribed && <p style={{color: 'green', marginTop: '1rem'}}>¡Te has suscrito correctamente!</p>}
      </div>
    </div>
  );
}

export default Newsletter;

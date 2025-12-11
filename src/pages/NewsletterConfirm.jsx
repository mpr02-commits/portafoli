import { useLocation, Link } from 'react-router-dom';
import { FaCheckCircle, FaEnvelope, FaHome } from 'react-icons/fa';

function NewsletterConfirm() {
  const location = useLocation();
  const email = location.state?.email || 'tu@email.com';
  
  return (
    <div className='page-container' style={{textAlign: 'center'}}>
      <div style={{fontSize: '5rem', color: '#4CAF50', marginBottom: '2rem'}}>
        <FaCheckCircle />
      </div>
      
      <h2>¡Suscripción Confirmada! </h2>
      <p style={{fontSize: '1.2rem', marginBottom: '1.5rem'}}>
        Te has suscrito correctamente a nuestro newsletter.
      </p>
      
      <div style={{
        background: '#f0f8ff',
        padding: '2rem',
        borderRadius: '10px',
        margin: '2rem auto',
        maxWidth: '500px'
      }}>
        <FaEnvelope style={{fontSize: '3rem', color: '#1a237e', marginBottom: '1rem'}} />
        <p><strong>Email suscrito:</strong></p>
        <p style={{
          fontSize: '1.5rem',
          color: '#1a237e',
          fontWeight: 'bold',
          margin: '1rem 0'
        }}>{email}</p>
        <p>Recibirás nuestras novedades cada mes.</p>
      </div>
      
      <div style={{marginTop: '2rem'}}>
        <p>Mientras tanto, puedes:</p>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem'}}>
          <Link to='/'>
            <button><FaHome /> Volver al inicio</button>
          </Link>
          <Link to='/newsletter'>
            <button style={{background: '#4CAF50'}}>Volver al newsletter</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsletterConfirm;

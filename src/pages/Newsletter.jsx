import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
  };

  return (
    <div>
      <h2>Newsletter</h2>
      {subscribed ? (
        <p>¡Gracias por suscribirte!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input 
            type='email' 
            placeholder='Tu email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type='submit'>Suscribirme</button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;

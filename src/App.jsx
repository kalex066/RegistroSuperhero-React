import { useState } from 'react';
import Form from './components/form/form';
import './App.css';

function App() {
  const [superheroes, setSuperheroes] = useState([]);
  const [enviado, setEnviado] = useState(false);

  const agregarSuperheroe = (nombre, apellido, email, password) => {
    const nuevoSuperheroe = {
      id: Date.now(), 
      nombre,
      apellido,
      email,
      password
    };
    setSuperheroes((prev) => [...prev, nuevoSuperheroe]);
    setEnviado(true);
  };

  return (
    <div className="app-container">
      <svg className="zap-bolt" viewBox="0 0 100 140" aria-hidden="true">
        <polygon
          points="55,0 15,70 45,70 30,140 90,55 55,55"
          fill="#FCEC21"
          stroke="#E62429"
          strokeWidth="3"
        />
      </svg>

      <header className="header">
        <h1>
          {enviado
            ? '🛡️ ¡Bienvenido a la Liga de la Justicia!'
            : '⚡ Registro de Superhéroes'}
        </h1>
      </header>

      <Form agregarSuperheroe={agregarSuperheroe}/>

      {superheroes.length > 0 && (
        <section className="hero-list">
          <h2>Héroes Registrados</h2>
          <div className="hero-grid">
            {superheroes.map((superheroe) => (
              <div className="hero-card" key={superheroe.id}>
                <div className="hero-icon">🦸</div>
                <h3>
                  {superheroe.nombre} {superheroe.apellido}
                </h3>
                <p>{superheroe.email}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <svg
        className="city-skyline"
        viewBox="0 0 800 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <rect x="0" y="40" width="60" height="100" fill="#0a1230" />
        <rect x="70" y="20" width="50" height="150" fill="#0a1230" />
        <rect x="130" y="55" width="40" height="95" fill="#0a1230" />
        <rect x="180" y="10" width="55" height="180" fill="#0a1230" />
        <rect x="245" y="45" width="45" height="175" fill="#0a1230" />
        <rect x="300" y="30" width="60" height="190" fill="#0a1230" />
        <rect x="370" y="60" width="40" height="160" fill="#0a1230" />
        <rect x="420" y="15" width="50" height="105" fill="#0a1230" />
        <rect x="480" y="50" width="45" height="170" fill="#0a1230" />
        <rect x="535" y="25" width="55" height="195" fill="#0a1230" />
        <rect x="600" y="40" width="40" height="180" fill="#0a1230" />
        <rect x="650" y="10" width="60" height="210" fill="#0a1230" />
        <rect x="720" y="50" width="45" height="170" fill="#0a1230" />
        <rect x="775" y="35" width="25" height="185" fill="#0a1230" />
      </svg>
    </div>
  );
}

export default App;

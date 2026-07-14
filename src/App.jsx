import { useState } from 'react';
import Form from './components/form/form';
import './App.css';

function App() {
  const [heroes, setHeroes] = useState([]);
  const [enviado, setEnviado] = useState(false);

  const agregarHeroe = (nuevoHeroe) => {
    setHeroes((prev) => [...prev, nuevoHeroe]);
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
        <p className="subtitle">
          {enviado
            ? `Ya tienes ${heroes.length} héroe(s) registrado(s)`
            : 'Únete y protege la ciudad'}
        </p>
      </header>

      <Form agregarSuperheroe={agregarHeroe} />

      {heroes.length > 0 && (
        <section className="hero-list">
          <h2>
            Héroes Registrados <span className="hero-count">{heroes.length}</span>
          </h2>
          <div className="hero-grid">
            {heroes.map((hero, index) => (
              <div
                className="hero-card"
                key={hero.id}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className={`hero-avatar avatar-${index % 4}`}>
                  {hero.nombre.charAt(0)}
                  {hero.apellido.charAt(0)}
                </div>
                <p className="hero-name">
                  {hero.nombre} {hero.apellido}
                </p>
                <p className="hero-email">{hero.email}</p>
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
        <rect x="0" y="40" width="60" height="80" fill="#0a1230" />
        <rect x="70" y="20" width="50" height="100" fill="#0a1230" />
        <rect x="130" y="55" width="40" height="65" fill="#0a1230" />
        <rect x="180" y="10" width="55" height="110" fill="#0a1230" />
        <rect x="245" y="45" width="45" height="75" fill="#0a1230" />
        <rect x="300" y="30" width="60" height="90" fill="#0a1230" />
        <rect x="370" y="60" width="40" height="60" fill="#0a1230" />
        <rect x="420" y="15" width="50" height="105" fill="#0a1230" />
        <rect x="480" y="50" width="45" height="70" fill="#0a1230" />
        <rect x="535" y="25" width="55" height="95" fill="#0a1230" />
        <rect x="600" y="40" width="40" height="80" fill="#0a1230" />
        <rect x="650" y="10" width="60" height="110" fill="#0a1230" />
        <rect x="720" y="50" width="45" height="70" fill="#0a1230" />
        <rect x="775" y="35" width="25" height="85" fill="#0a1230" />
      </svg>
    </div>
  );
}

export default App;
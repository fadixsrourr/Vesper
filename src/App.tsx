import { useState } from 'react';
import CanvasEngine from './components/Core/CanvasEngine';
import Controls from './components/UI/Controls';
import { Github, Globe } from 'lucide-react';

function App() {
  const [params, setParams] = useState({
    count: 150,
    speed: 0.8,
    size: 2,
    interactionRadius: 200,
  });

  return (
    <div className="app-container">
      <CanvasEngine params={params} />
      
      {/* HUD / Branding */}
      <div style={{
        position: 'fixed',
        top: '2rem',
        left: '2rem',
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '0.5rem'
        }}>
          VESPER
        </h1>
        <p style={{ color: 'var(--text-dim)', letterSpacing: '0.2em', fontSize: '0.75rem' }}>
          AMBIENT GENERATIVE ART
        </p>
      </div>

      <div style={{
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        zIndex: 10,
        display: 'flex',
        gap: '1rem'
      }}>
        <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-main)', opacity: 0.6 }}>
          <Github size={24} />
        </a>
        <a href="#" style={{ color: 'var(--text-main)', opacity: 0.6 }}>
          <Globe size={24} />
        </a>
      </div>

      <Controls params={params} setParams={setParams} />

      <div style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 10,
        textAlign: 'right',
        pointerEvents: 'none'
      }}>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.75rem' }}>
          Interactivity: Mouse Follow & Link Density
        </p>
        <p style={{ color: 'var(--text-main)', fontWeight: 600, marginTop: '0.25rem' }}>
          Built with React + TS + Canvas
        </p>
      </div>
    </div>
  );
}

export default App;

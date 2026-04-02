import type { FC, Dispatch, SetStateAction, ChangeEvent } from 'react';
import { Settings, Sliders, Zap } from 'lucide-react';
import GlassCard from './GlassCard';

interface ControlsProps {
  params: {
    count: number;
    speed: number;
    size: number;
    interactionRadius: number;
  };
  setParams: Dispatch<SetStateAction<{
    count: number;
    speed: number;
    size: number;
    interactionRadius: number;
  }>>;
}

const Controls: FC<ControlsProps> = ({ params, setParams }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setParams(prev => ({
      ...prev,
      [name]: parseFloat(value)
    }));
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      left: '2rem',
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <GlassCard>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <Settings size={20} color="var(--accent-primary)" />
          <h2 style={{ fontSize: '1.25rem' }}>Vesper Engine</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="control-group">
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-dim)' }}>
              <Zap size={14} /> Density
            </label>
            <input 
              type="range" 
              name="count"
              min="50" 
              max="300" 
              value={params.count} 
              onChange={handleChange}
              style={{ width: '100%' }}
            />
          </div>

          <div className="control-group">
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-dim)' }}>
              <Sliders size={14} /> Velocity
            </label>
            <input 
              type="range" 
              name="speed"
              min="0.1" 
              max="2" 
              step="0.1"
              value={params.speed} 
              onChange={handleChange}
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default Controls;

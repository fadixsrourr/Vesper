import { useRef } from 'react';
import type { FC } from 'react';
import { useParticles } from '../../hooks/useParticles';

interface CanvasEngineProps {
  params: {
    count: number;
    speed: number;
    size: number;
    interactionRadius: number;
  };
}

const CanvasEngine: FC<CanvasEngineProps> = ({ params }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticles(canvasRef, params);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: 'radial-gradient(circle at center, #1a1a2e 0%, #0c0c0e 100%)',
      }}
    />
  );
};

export default CanvasEngine;

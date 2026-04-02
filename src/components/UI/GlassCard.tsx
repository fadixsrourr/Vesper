import type { FC, ReactNode, CSSProperties } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const GlassCard: FC<GlassCardProps> = ({ children, className = '', style }) => {
  return (
    <div 
      className={`glass-panel ${className}`} 
      style={{
        padding: '2rem',
        width: '100%',
        maxWidth: '400px',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default GlassCard;

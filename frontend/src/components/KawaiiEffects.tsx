import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { IMAGES } from '../assets/imageConstants';

interface RainbowTrailProps {
  enabled?: boolean;
}

interface ConfettiProps {
  count?: number;
  trigger: boolean;
  colors?: string[];
}

/**
 * Componente che crea una scia arcobaleno che segue il cursore
 */
export const RainbowTrail: React.FC<RainbowTrailProps> = ({ enabled = true }) => {
  useEffect(() => {
    if (!enabled) return;

    const colors = [
      '#FF4D8D', '#FF6B3D', '#FFCA3A', 
      '#25DB95', '#4DABFF', '#9747FF'
    ];
    
    const trail = document.createElement('div');
    trail.className = 'rainbow-trail';
    document.body.appendChild(trail);

    let dots: HTMLElement[] = [];
    const maxDots = 20;

    const createDot = (x: number, y: number) => {
      const dot = document.createElement('div');
      dot.className = 'rainbow-dot';
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      trail.appendChild(dot);
      dots.push(dot);
      
      // Rimuovi i punti più vecchi se ci sono troppi
      if (dots.length > maxDots) {
        const oldDot = dots.shift();
        if (oldDot && oldDot.parentNode) {
          oldDot.parentNode.removeChild(oldDot);
        }
      }
      
      // Rimuovi il punto dopo l'animazione
      setTimeout(() => {
        if (dot.parentNode) {
          dot.parentNode.removeChild(dot);
          dots = dots.filter(d => d !== dot);
        }
      }, 1200);
    };

    const handleMouseMove = (e: MouseEvent) => {
      createDot(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(trail);
    };
  }, [enabled]);

  return null;
};

/**
 * Componente che crea un effetto confetti
 */
export const Confetti: React.FC<ConfettiProps> = ({ 
  count = 80, 
  trigger, 
  colors = ['#FF4D8D', '#FF6B3D', '#FFCA3A', '#25DB95', '#4DABFF', '#9747FF'] 
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (trigger && !active) {
      setActive(true);
      
      const container = document.createElement('div');
      container.className = 'confetti-container';
      document.body.appendChild(container);
      
      // Crea i confetti
      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          if (container.parentNode) { // Verifica che il container esista ancora
            const confetti = document.createElement('div');
            
            // Varia le forme
            const shape = Math.floor(Math.random() * 3);
            if (shape === 0) {
              confetti.className = 'confetti square';
            } else if (shape === 1) {
              confetti.className = 'confetti circle';
            } else {
              confetti.className = 'confetti';
            }
            
            // Posizione casuale
            const left = Math.random() * 100;
            const width = Math.random() * 10 + 5;
            const height = width * (Math.random() * 0.4 + 0.6);
            
            confetti.style.left = `${left}%`;
            confetti.style.width = `${width}px`;
            confetti.style.height = `${height}px`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Durata dell'animazione casuale
            const duration = Math.random() * 3 + 2;
            confetti.style.animationDuration = `${duration}s, ${duration * 0.7}s`;
            
            container.appendChild(confetti);
            
            // Rimuovi il confetto dopo l'animazione
            setTimeout(() => {
              if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
              }
            }, duration * 1000);
          }
        }, Math.random() * 500);
      }
      
      // Rimuovi il container dopo che tutti i confetti sono caduti
      setTimeout(() => {
        if (document.body.contains(container)) {
          document.body.removeChild(container);
        }
        setActive(false);
      }, 6000);
    }
  }, [trigger, count, colors, active]);

  return null;
};

/**
 * Componente che mostra personaggi kawaii fluttuanti
 */
export const FloatingCharacters: React.FC = () => {
  const characters = [
    IMAGES.CHARACTER_HAPPY,
    IMAGES.CHARACTER_EXCITED,
    IMAGES.CHARACTER_THINKING
  ];

  return (
    <>
      {characters.map((char, index) => (
        <Box
          key={index}
          component="img"
          src={char}
          alt={`Kawaii character ${index}`}
          sx={{
            position: 'fixed',
            width: { xs: '60px', md: '80px' },
            zIndex: 10,
            filter: 'drop-shadow(0 3px 5px rgba(0,0,0,0.2))',
            opacity: 0.85,
            animation: `floating ${3 + index * 0.5}s ease-in-out infinite`,
            animationDelay: `${index * 0.7}s`,
            ...getPosition(index)
          }}
        />
      ))}
    </>
  );
};

// Funzione helper per posizionare i personaggi
const getPosition = (index: number) => {
  const positions = [
    { bottom: '20px', right: '20px' },
    { top: '20%', left: '20px' },
    { bottom: '40%', right: '15px' }
  ];
  return positions[index % positions.length];
};

/**
 * Componente che mostra decorazioni fluttuanti
 */
export const FloatingDecorations: React.FC = () => {
  const decorations = [
    IMAGES.DECO_STARS,
    IMAGES.DECO_BUBBLES,
    IMAGES.DECO_CONFETTI
  ];

  return (
    <>
      {decorations.map((deco, index) => (
        <Box
          key={index}
          component="img"
          src={deco}
          alt={`Decoration ${index}`}
          sx={{
            position: 'fixed',
            width: { xs: '40px', md: '60px' },
            zIndex: 5,
            opacity: 0.6,
            animation: `floating ${4 + index * 0.7}s ease-in-out infinite`,
            animationDelay: `${index * 0.5}s`,
            ...getDecoPosition(index)
          }}
        />
      ))}
    </>
  );
};

// Funzione helper per posizionare le decorazioni
const getDecoPosition = (index: number) => {
  const positions = [
    { top: '15%', right: '10%' },
    { top: '60%', left: '5%' },
    { bottom: '25%', right: '20%' },
    { top: '30%', right: '30%' },
    { bottom: '10%', left: '15%' }
  ];
  return positions[index % positions.length];
};
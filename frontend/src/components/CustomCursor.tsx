import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

// Componente per il cursore personalizzato Nyan Cat
const NyanCatCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number, y: number, id: number }>>([]);

  useEffect(() => {
    // Funzione per seguire il mouse
    const updatePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      setVisible(true);
      
      // Aggiungi un punto alla scia
      setTrail(prevTrail => {
        const newTrail = [
          { x: newPosition.x, y: newPosition.y, id: Date.now() },
          ...prevTrail.slice(0, 10) // Limita la lunghezza della scia
        ];
        return newTrail;
      });
    };

    // Funzione per rilevare i clic
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Funzione per nascondere il cursore quando esce dalla finestra
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    // Aggiungi gli event listener
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Nascondi il cursore predefinito
    document.body.style.cursor = 'none';

    // Rimuovi gli event listener al cleanup
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      
      // Ripristina il cursore predefinito
      document.body.style.cursor = 'auto';
    };
  }, []);

  // Non renderizzare nulla se il cursore non è visibile
  if (!visible) return null;

  // Colori arcobaleno per la scia
  const rainbowColors = [
    '#FF5151', // rosso
    '#FF9B51', // arancione
    '#FFEB51', // giallo
    '#66FF66', // verde
    '#51A9FF', // blu
    '#D151FF', // viola
  ];

  return (
    <>
      {/* Scia arcobaleno */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: 'fixed',
            left: point.x,
            top: point.y,
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: rainbowColors[index % rainbowColors.length],
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 9998,
          }}
        />
      ))}

      {/* Cursore con gattino kawaii invece di Nyan Cat */}
      <motion.div
        animate={{ 
          x: position.x,
          y: position.y,
          scale: clicked ? 0.8 : 1,
        }}
        transition={{ 
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.5
        }}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      >
        {/* Utilizziamo un SVG incorporato di un gattino kawaii invece di un'immagine esterna */}
        <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          {/* Testa del gatto */}
          <circle cx="50" cy="50" r="45" fill="#FFB6C1" />
          
          {/* Orecchie */}
          <path d="M25,30 Q15,5 30,20" fill="#FF8FAB" stroke="#FF6B98" strokeWidth="2" />
          <path d="M75,30 Q85,5 70,20" fill="#FF8FAB" stroke="#FF6B98" strokeWidth="2" />
          
          {/* Occhi */}
          <ellipse cx="35" cy="45" rx="8" ry="10" fill="white" />
          <ellipse cx="65" cy="45" rx="8" ry="10" fill="white" />
          
          {/* Pupille */}
          <circle cx="35" cy="42" r="4" fill="black">
            {clicked ? <animate attributeName="cy" values="42;44;42" dur="0.2s" /> : null}
          </circle>
          <circle cx="65" cy="42" r="4" fill="black">
            {clicked ? <animate attributeName="cy" values="42;44;42" dur="0.2s" /> : null}
          </circle>
          
          {/* Guance */}
          <circle cx="30" cy="55" r="5" fill="#FF8FAB" opacity="0.7" />
          <circle cx="70" cy="55" r="5" fill="#FF8FAB" opacity="0.7" />
          
          {/* Naso */}
          <path d="M50,50 Q53,55 50,55 Q47,55 50,50" fill="#FF6B98" />
          
          {/* Bocca */}
          <path d="M45,60 Q50,65 55,60" fill="none" stroke="#FF6B98" strokeWidth="2" strokeLinecap="round" />
          
          {/* Baffi */}
          <line x1="30" y1="55" x2="15" y2="50" stroke="#FF6B98" strokeWidth="1.5" />
          <line x1="30" y1="58" x2="15" y2="58" stroke="#FF6B98" strokeWidth="1.5" />
          <line x1="30" y1="61" x2="15" y2="66" stroke="#FF6B98" strokeWidth="1.5" />
          
          <line x1="70" y1="55" x2="85" y2="50" stroke="#FF6B98" strokeWidth="1.5" />
          <line x1="70" y1="58" x2="85" y2="58" stroke="#FF6B98" strokeWidth="1.5" />
          <line x1="70" y1="61" x2="85" y2="66" stroke="#FF6B98" strokeWidth="1.5" />
        </svg>
      </motion.div>
    </>
  );
};

export default NyanCatCursor;
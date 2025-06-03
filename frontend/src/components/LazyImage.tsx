import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BACKUP_IMAGES } from '../assets/imageBackups';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholderSrc?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  placeholderSrc = BACKUP_IMAGES.profile, 
  style,
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Funzione per verificare l'esistenza dell'immagine
    const checkImageExists = (url: string) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
      });
    };

    const loadImage = async () => {
      if (!src) {
        setImageSrc(placeholderSrc);
        return;
      }

      const imageExists = await checkImageExists(src);
      if (imageExists) {
        setImageSrc(src);
        setImageLoaded(true);
      } else {
        console.warn(`Image not found: ${src}. Using placeholder.`);
        setImageSrc(placeholderSrc);
        setImageLoaded(false);
      }
    };

    loadImage();
  }, [src, placeholderSrc]);

  return (
    <motion.img
      src={imageSrc}
      alt={alt}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ 
        opacity: imageLoaded ? 1 : 0.5, 
        scale: imageLoaded ? 1 : 0.95 
      }}
      transition={{ 
        duration: 0.5, 
        type: "spring" 
      }}
      style={{
        transition: 'all 0.5s ease',
        filter: imageLoaded ? 'none' : 'blur(5px)',
        ...style
      }}
      {...props}
    />
  );
};

export default LazyImage;
import React, { useState, useEffect } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { BACKUP_IMAGES } from '../assets/imageBackups';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement>, MotionProps {
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
    const img = new Image();
    img.src = src || placeholderSrc;
    img.onload = () => {
      setImageSrc(src || placeholderSrc);
      setImageLoaded(true);
    };
    img.onerror = () => {
      console.warn(`Failed to load image: ${src}. Using placeholder.`);
      setImageSrc(placeholderSrc);
      setImageLoaded(false);
    };
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
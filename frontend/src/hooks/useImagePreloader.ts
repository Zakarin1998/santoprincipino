import { useState, useEffect } from 'react';

interface PreloadImageResult {
  imagesPreloaded: boolean;
}

export const useImagePreloader = (imageList: string[]): PreloadImageResult => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = imageList.map((src) => {
        return new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => reject();
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesPreloaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesPreloaded(true); // Continua anche se alcune immagini non caricano
      }
    };

    preloadImages();
  }, [imageList]);

  return { imagesPreloaded };
};
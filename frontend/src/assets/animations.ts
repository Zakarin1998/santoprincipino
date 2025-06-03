/**
 * Animazioni avanzate per il sito
 * Queste funzioni possono essere importate e utilizzate nei componenti React
 */

/**
 * Inizializza l'effetto di particelle fluttuanti in background
 * @param containerId ID dell'elemento container dove inserire le particelle
 * @param options Opzioni di configurazione per le particelle
 */
export const initFloatingParticles = (
  containerId: string,
  options: {
    count?: number;
    colors?: string[];
    speed?: number;
    size?: { min: number; max: number };
    opacity?: { min: number; max: number };
  } = {}
) => {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Imposta valori di default
  const particleCount = options.count || 30;
  const particleColors = options.colors || ['#FF4D8D', '#FF7DAE', '#25DB95', '#5AEDBA', '#4DABFF'];
  const speedFactor = options.speed || 1;
  const sizeRange = options.size || { min: 5, max: 15 };
  const opacityRange = options.opacity || { min: 0.2, max: 0.6 };

  // Imposta lo stile del container
  container.style.position = 'relative';
  container.style.overflow = 'hidden';

  // Crea le particelle
  for (let i = 0; i < particleCount; i++) {
    createParticle(
      container,
      particleColors,
      speedFactor,
      sizeRange,
      opacityRange
    );
  }
};

/**
 * Funzione helper per creare una singola particella
 */
const createParticle = (
  container: HTMLElement,
  colors: string[],
  speedFactor: number,
  sizeRange: { min: number; max: number },
  opacityRange: { min: number; max: number }
) => {
  // Crea l'elemento particella
  const particle = document.createElement('div');
  
  // Dimensione casuale
  const size = Math.random() * (sizeRange.max - sizeRange.min) + sizeRange.min;
  
  // Stile della particella
  particle.style.position = 'absolute';
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.borderRadius = '50%';
  particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  particle.style.opacity = `${Math.random() * (opacityRange.max - opacityRange.min) + opacityRange.min}`;
  particle.style.pointerEvents = 'none';
  
  // Posizione casuale
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;
  
  // Velocità casuale
  const speedX = (Math.random() - 0.5) * speedFactor;
  const speedY = (Math.random() - 0.5) * speedFactor;
  
  // Aggiungi la particella al container
  container.appendChild(particle);
  
  // Animazione
  let posX = parseFloat(particle.style.left);
  let posY = parseFloat(particle.style.top);
  
  const animate = () => {
    // Aggiorna posizione
    posX += speedX * 0.1;
    posY += speedY * 0.1;
    
    // Gestisci i bordi
    if (posX < 0) posX = 100;
    if (posX > 100) posX = 0;
    if (posY < 0) posY = 100;
    if (posY > 100) posY = 0;
    
    // Applica la nuova posizione
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    
    // Continua l'animazione
    requestAnimationFrame(animate);
  };
  
  // Avvia l'animazione
  animate();
};

/**
 * Inizializza un effetto di testo che si scrive automaticamente
 * @param elementId ID dell'elemento dove inserire il testo
 * @param texts Array di testi da visualizzare in sequenza
 * @param options Opzioni di configurazione
 */
export const initTypewriterEffect = (
  elementId: string,
  texts: string[],
  options: {
    speed?: number;
    deleteSpeed?: number;
    delayAfterWrite?: number;
    delayAfterDelete?: number;
    loop?: boolean;
    cursor?: boolean;
  } = {}
) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Imposta valori di default
  const speed = options.speed || 100;
  const deleteSpeed = options.deleteSpeed || 50;
  const delayAfterWrite = options.delayAfterWrite || 2000;
  const delayAfterDelete = options.delayAfterDelete || 500;
  const loop = options.loop !== undefined ? options.loop : true;
  const showCursor = options.cursor !== undefined ? options.cursor : true;

  // Aggiungi il cursore se richiesto
  if (showCursor) {
    element.classList.add('typewriter-cursor');
  }

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      // Elimina caratteri
      element.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        
        // Se abbiamo finito tutti i testi e non stiamo loopando, fermati
        if (textIndex === 0 && !loop) {
          return;
        }
        
        setTimeout(type, delayAfterDelete);
      } else {
        setTimeout(type, deleteSpeed);
      }
    } else {
      // Aggiungi caratteri
      element.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      
      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, delayAfterWrite);
      } else {
        setTimeout(type, speed);
      }
    }
  };
  
  // Avvia l'effetto
  type();
};

/**
 * Crea un effetto di scroll reveal per far apparire elementi durante lo scroll
 * @param selector Selettore CSS per gli elementi da animare
 * @param options Opzioni di configurazione
 */
export const initScrollReveal = (
  selector: string,
  options: {
    threshold?: number;
    rootMargin?: string;
    className?: string;
    once?: boolean;
    delay?: number;
  } = {}
) => {
  // Imposta valori di default
  const threshold = options.threshold || 0.1;
  const rootMargin = options.rootMargin || '0px';
  const revealClass = options.className || 'reveal-visible';
  const once = options.once !== undefined ? options.once : true;
  const delay = options.delay || 0;

  // Seleziona tutti gli elementi corrispondenti
  const elements = document.querySelectorAll(selector);
  
  if (elements.length === 0) return;

  // Funzione di callback per l'observer
  const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry) => {
      // Se l'elemento è visibile
      if (entry.isIntersecting) {
        // Aggiungi un ritardo se specificato
        if (delay > 0) {
          setTimeout(() => {
            entry.target.classList.add(revealClass);
          }, delay);
        } else {
          entry.target.classList.add(revealClass);
        }
        
        // Se l'opzione once è true, smetti di osservare questo elemento
        if (once) {
          observer.unobserve(entry.target);
        }
      } else if (!once) {
        // Se l'elemento non è più visibile e once è false, rimuovi la classe
        entry.target.classList.remove(revealClass);
      }
    });
  };
  
  // Crea l'observer
  const observer = new IntersectionObserver(callback, {
    threshold,
    rootMargin
  });
  
  // Osserva ogni elemento
  elements.forEach((element) => {
    observer.observe(element);
  });
};

/**
 * Crea un effetto di parallax sullo scroll
 * @param selector Selettore CSS per gli elementi da animare
 * @param options Opzioni di configurazione
 */
export const initParallaxEffect = (
  selector: string,
  options: {
    speed?: number;
    direction?: 'vertical' | 'horizontal';
  } = {}
) => {
  // Imposta valori di default
  const speed = options.speed || 0.5;
  const direction = options.direction || 'vertical';
  
  // Seleziona tutti gli elementi corrispondenti
  const elements = document.querySelectorAll(selector);
  
  if (elements.length === 0) return;
  
  // Funzione per aggiornare la posizione degli elementi
  const updatePosition = () => {
    const scrollPosition = window.scrollY;
    
    elements.forEach((element) => {
      const elementOffset = (element as HTMLElement).offsetTop;
      const elementHeight = (element as HTMLElement).offsetHeight;
      
      // Calcola l'effetto parallax solo se l'elemento è vicino all'area visibile
      if (
        scrollPosition + window.innerHeight > elementOffset &&
        scrollPosition < elementOffset + elementHeight
      ) {
        const distance = (scrollPosition - elementOffset) * speed;
        
        if (direction === 'vertical') {
          (element as HTMLElement).style.transform = `translateY(${distance}px)`;
        } else {
          (element as HTMLElement).style.transform = `translateX(${distance}px)`;
        }
      }
    });
  };
  
  // Aggiungi l'evento di scroll
  window.addEventListener('scroll', updatePosition);
  
  // Esegui una volta all'inizio per impostare le posizioni iniziali
  updatePosition();
};

/**
 * Aggiunge un effetto gradiente interattivo al passaggio del mouse
 * @param elementId ID dell'elemento a cui aggiungere l'effetto
 * @param options Opzioni di configurazione
 */
export const initInteractiveGradient = (
  elementId: string,
  options: {
    colors?: string[];
    speed?: number;
    intensity?: number;
  } = {}
) => {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  // Imposta valori di default
  const colors = options.colors || ['#FF4D8D', '#FF7DAE', '#25DB95', '#5AEDBA', '#4DABFF'];
  const speed = options.speed || 0.03;
  const intensity = options.intensity || 0.2;
  
  // Converti i colori in un formato utilizzabile per il gradiente
  const gradientColors = colors.map((color, index) => {
    const percent = (index / (colors.length - 1)) * 100;
    return `${color} ${percent}%`;
  }).join(', ');
  
  // Aggiungi stile all'elemento
  element.style.position = 'relative';
  element.style.overflow = 'hidden';
  
  // Crea l'elemento gradiente
  const gradientElement = document.createElement('div');
  gradientElement.style.position = 'absolute';
  gradientElement.style.inset = '-50%';
  gradientElement.style.width = '200%';
  gradientElement.style.height = '200%';
  gradientElement.style.background = `linear-gradient(45deg, ${gradientColors})`;
  gradientElement.style.backgroundSize = '200% 200%';
  gradientElement.style.zIndex = '-1';
  gradientElement.style.opacity = '0.85';
  gradientElement.style.transition = 'transform 0.5s ease-out';
  
  // Assicurati che l'elemento contenitore abbia position relative o absolute
  if (window.getComputedStyle(element).position === 'static') {
    element.style.position = 'relative';
  }
  
  // Aggiungi il gradiente
  element.appendChild(gradientElement);
  
  // Animazione automatica
  let angle = 0;
  const animate = () => {
    angle += speed;
    const x = 50 + Math.sin(angle) * 25;
    const y = 50 + Math.cos(angle) * 25;
    gradientElement.style.backgroundPosition = `${x}% ${y}%`;
    requestAnimationFrame(animate);
  };
  
  // Avvia l'animazione automatica
  animate();
  
  // Aggiungi interazione con il mouse
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Trasforma il gradiente in base alla posizione del mouse
    const translateX = (0.5 - x) * intensity * 100;
    const translateY = (0.5 - y) * intensity * 100;
    
    gradientElement.style.transform = `translate(${translateX}px, ${translateY}px)`;
  });
  
  // Ripristina quando il mouse esce
  element.addEventListener('mouseleave', () => {
    gradientElement.style.transform = 'translate(0, 0)';
  });
};
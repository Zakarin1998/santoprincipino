# Assets grafici

Questa cartella contiene le immagini e gli elementi grafici utilizzati nel sito.

## Struttura

- `backgrounds/`: Sfondi e pattern
- `icons/`: Icone personalizzate
- `decorations/`: Elementi decorativi
- `characters/`: Personaggi kawaii
- `logos/`: Loghi del sito e partner

## Utilizzo

Per utilizzare queste immagini, fare riferimento alle costanti definite in `../imageConstants.ts`.

Esempio:
```jsx
import { IMAGES } from '../assets/imageConstants';

function MyComponent() {
  return (
    <img src={IMAGES.CHARACTER_HAPPY} alt="Happy character" />
  );
}
```
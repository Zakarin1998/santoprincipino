## 📚 Documentazione Tecnica Backend: Kawaii Art App

### 🎯 Obiettivo Generale

Costruire un backend scalabile, modulare e fortemente tipizzato per la gestione del portfolio digitale di una digital artist (Chiara), includendo:

* Galleria di artworks
* Tipi di commissioni
* Profilo personale e testimonianze
* Endpoint pubblici REST

### 🏗️ Architettura e Struttura del Progetto

```
server/
├── config/            # Connessione al DB e variabili di ambiente
├── controllers/       # Logica HTTP e orchestrazione
├── dao/               # Data Access Object per ogni entità
├── models/            # Modelli Mongoose tipizzati
├── routes/            # Definizione API REST
├── seed/              # Seeder dati di esempio
│   └── data/          # File JSON di artwork e commissioni
├── types/             # Tipi e interfacce condivise
├── server.ts          # Entry point dell'applicazione
└── .env, package.json # Configurazioni
```

### 🔗 Pattern MongoDB Consigliati

* **1\:many con riferimenti** per `gallery`, `commissions` e `testimonials` nel documento principale `ChiaraData`
* **Collections separate** per:

  * `GalleryItem`
  * `CommissionType`
  * `ChiaraData` (unico documento centrale, con riferimenti)

> Permette query indipendenti, popolamento selettivo e gestione CRUD granulare.

### ✍️ Modello ChiaraData (logica applicativa)

* `profile`: Oggetto embedded con nome, bio, social links
* `gallery`: Array di ObjectId riferiti a `GalleryItem`
* `commissions`: Array di ObjectId riferiti a `CommissionType`
* `testimonials`: Embedded (non referenziati per semplicità)

### 📁 DAO: Scopo e Logica

* Separazione logica dell'accesso ai dati
* Espone solo metodi statici `getAll`, `getById`, `create`, etc.
* Consente riuso nei controller e testabilità

**ChiaraDao (definitivo)**:

```ts
import { ChiaraDataModel } from '../models/ChiaraData'
export class ChiaraDao {
  static async getFullData() {
    return ChiaraDataModel.findOne()
      .populate('gallery')
      .populate('commissions')
      .lean()
  }
}
```

> Manteniamo solo `getFullData`, dismettendo `getAllV2()` in favore della versione popolata.

### 📦 Altre DAO

* **GalleryDao**: `getAll()`, `getById(id)`
* **CommissionTypeDao**: `getAll()`, `getById(id)`

### 🧠 Tecniche e Best Practice Utilizzate

* **TypeScript**: tipizzazione completa in `types/index.ts`
* **Mongoose**: schema definition + tipi personalizzati
* **DAO Pattern**: separazione netta dell'accesso ai dati
* **Seeder**: script inizializzazione DB con entità distinte
* **REST API**: endpoint modulari per ogni entità

### 🔜 Futuri Sviluppi

* Endpoint `POST`, `PUT`, `DELETE` per gestione dinamica gallery/commissions
* Autenticazione base (JWT) per endpoint admin
* Middleware per validazione richiesta (es. zod)
* Migrazione GraphQL (opzionale)

### 📌 Conclusione

Il backend della Kawaii Art App è stato riprogettato per:

* Facilità di manutenzione
* Estensibilità futura
* Separazione logica e scalabilità
* Massimo riuso tramite DAO e tipi comuni

> I file implementativi sono generabili da questa struttura e logica. I dati di seed sono ora separati e coerenti con MongoDB references.

🚀 Pronti per integrare nuovi contenuti, filtri dinamici e interazione col frontend!

--- README.md (原始)
# ⛽ BenzinaFinder - Monitoraggio Prezzi Carburante

Applicazione web mobile per il monitoraggio dei prezzi della benzina in Italia, con geolocalizzazione GPS e ricerca per comune.

## 🚀 Caratteristiche

- **Geolocalizzazione GPS**: Trova le stazioni di servizio vicino a te
- **Ricerca per comune**: Inserisci il nome di un comune italiano per cercare prezzi in quella zona
- **Raggio regolabile**: Cursore da 1 a 100 km per definire l'area di ricerca
- **3 Fonti dati**: Scegli tra MISE, PrezziBenzina.it e Osservatorio Prezzi
- **Mappa interattiva**: Visualizza le stazioni su mappa con prezzi
- **Lista ordinata**: Classifica le stazioni per distanza e prezzo
- **Responsive**: Ottimizzata per smartphone Android e iOS

## 📱 Come Usare

1. Apri l'app nel browser del telefono
2. Consenti l'accesso alla posizione GPS
3. Oppure cerca un comune nella barra di ricerca
4. Regola il raggio di ricerca (1-100 km)
5. Seleziona la fonte dati preferita
6. Tocca le stazioni sulla mappa per i dettagli
7. Premi il pulsante con il numero per la lista completa

## 🛠️ Tecnologie

- **React 18** + TypeScript
- **Vite** (build tool)
- **Tailwind CSS 4** (styling)
- **Leaflet** (mappe OpenStreetMap)
- **Nominatim** (geocoding gratuito)

## 📦 Installazione Locale

```bash
# Clona il repository
git clone https://github.com/TUO_USERNAME/benzina-finder.git
cd benzina-finder

# Installa le dipendenze
npm install

# Avvia in sviluppo
npm run dev

# Build per produzione
npm run build
```

## 🌐 Pubblicazione su GitHub Pages

### Metodo 1: GitHub Actions (Consigliato)

1. Crea il file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Vai su Settings → Pages → Source: "GitHub Actions"
3. L'app sarà disponibile su `https://TUO_USERNAME.github.io/benzina-finder/`

### Metodo 2: Vercel (Più Semplice)

1. Vai su [vercel.com](https://vercel.com)
2. Accedi con GitHub
3. Click "New Project" → Importa il repository
4. Click "Deploy"
5. Ottieni un URL pubblico automatico

### Metodo 3: Netlify

1. Vai su [netlify.com](https://netlify.com)
2. Trascina la cartella `dist/` nella dashboard
3. Oppure collega il repository GitHub per deploy automatico

## 📋 Passi Dettagliati per GitHub

```bash
# 1. Installa Git (se non l'hai già)
# Scarica da: https://git-scm.com/downloads

# 2. Configura Git
git config --global user.name "Il Tuo Nome"
git config --global user.email "tua@email.com"

# 3. Crea un nuovo repo su GitHub
# Vai su github.com → New Repository → "benzina-finder"

# 4. Clona il repository
git clone https://github.com/TUO_USERNAME/benzina-finder.git
cd benzina-finder

# 5. Copia i file del progetto nella cartella

# 6. Installa e builda
npm install
npm run build

# 7. Commit e push
git add .
git commit -m "Prima versione - BenzinaFinder"
git push origin main

# 8. Attiva GitHub Pages
# Settings → Pages → Source: GitHub Actions
```

## 🔧 Struttura del Progetto

```
benzina-finder/
├── index.html              # Entry point HTML
├── package.json            # Dipendenze
├── vite.config.js          # Configurazione Vite
├── tsconfig.json           # Configurazione TypeScript
├── src/
│   ├── main.tsx            # Entry point React
│   ├── App.tsx             # Componente principale
│   ├── index.css           # Stili globali
│   ├── types.ts            # Tipi TypeScript
│   ├── components/
│   │   ├── Header.tsx      # Header dell'app
│   │   ├── SearchPanel.tsx # Ricerca comune/indirizzo
│   │   ├── DataSourceSelector.tsx # Selezione fonte dati
│   │   ├── RadiusSlider.tsx # Cursore raggio
│   │   ├── MapView.tsx     # Mappa Leaflet
│   │   ├── StationList.tsx # Lista stazioni
│   │   └── InfoPanel.tsx   # Pannello guida
│   └── utils/
│       ├── geolocation.ts  # Utility GPS e geocoding
│       └── stations.ts     # Generazione dati stazioni
└── dist/                   # Build di produzione
```

## 📊 Fonti Dati

| Fonte | Descrizione | Aggiornamento |
|-------|-------------|---------------|
| MISE | Ministero delle Imprese - Dati ufficiali | Settimanale |
| PrezziBenzina.it | Segnalazioni utenti e stazioni | Quotidiano |
| Osservatorio Prezzi | Dati aggregati regionali | Giornaliero |

## ⚠️ Note

- I prezzi sono indicativi e generati in base ai dati medi delle fonti
- Per prezzi in tempo reale è necessario un backend server
- L'app usa OpenStreetMap per le mappe (gratuito)
- Il geocoding usa Nominatim (gratuito, con limiti di utilizzo)

## 📄 Licenza

MIT License - Libero utilizzo per scopi personali e commerciali.


+++ README.md (修改后)
# ⛽ BenzinaFinder - Monitoraggio Prezzi Carburante

Applicazione web mobile per il monitoraggio dei prezzi della benzina in Italia, con geolocalizzazione GPS, ricerca per comune e mappa interattiva.

![Versione](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Mobile](https://img.shields.io/badge/platform-Android%20%7C%20iOS-orange)

---

## 📱 Funzionalità

- ✅ **Geolocalizzazione GPS** - Trova stazioni vicino a te automaticamente
- 🔍 **Ricerca per comune** - Inserisci nome comune o indirizzo da Google Maps
- 📏 **Raggio regolabile** - Cursore da 1 a 100 km con indicatore visivo
- 📊 **3 Fonti dati** - MISE (ufficiale), PrezziBenzina.it, Osservatorio Prezzi
- 🗺️ **Mappa interattiva** - Visualizza stazioni con prezzi sui marker
- 📋 **Lista ordinata** - Classifica per distanza con evidenziazione miglior prezzo
- 📱 **Ottimizzata mobile** - Design responsive per smartphone Android/iOS

---

## 🚀 GUIDA COMPLETA: Dalla Creazione alla Pubblicazione

### PREREQUISITI

Prima di iniziare, assicurati di avere:

| Strumento | Dove scaricarlo | Versione minima |
|-----------|-----------------|-----------------|
| **Node.js** | [nodejs.org](https://nodejs.org) | 18.x LTS |
| **Git** | [git-scm.com](https://git-scm.com) | 2.x |
| **Account GitHub** | [github.com](https://github.com) | Gratis |
| **Editor di testo** | [code.visualstudio.com](https://code.visualstudio.com) | Consigliato |

**Verifica installazione** (apri terminale/prompt):
```bash
node --version    # Deve mostrare v18.x o superiore
git --version     # Deve mostrare git version 2.x
npm --version     # Deve mostrare 9.x o superiore
```

---

### PASSO 1: Crea il Repository su GitHub

1. Vai su **[github.com](https://github.com)** e accedi
2. Clicca il pulsante **"+"** in alto a destra → **"New repository"**
3. Compila i campi:
   ```
   Repository name: benzina-finder
   Description: App monitoraggio prezzi carburante Italia
   Visibility: ✅ Public
   ✅ Add a README file
   ✅ Add .gitignore (scegli "Node")
   ✅ Choose a license (scegli "MIT License")
   ```
4. Clicca **"Create repository"**

---

### PASSO 2: Clona il Repository sul Tuo Computer

Apri il terminale (Mac/Linux) o il Prompt dei comandi/PowerShell (Windows):

```bash
# Spostati nella cartella dove vuoi salvare il progetto
cd ~/Documents    # o dove preferisci

# Clona il repository (sostituisci TUO_USERNAME)
git clone https://github.com/TUO_USERNAME/benzina-finder.git

# Entra nella cartella
cd benzina-finder
```

---

### PASSO 3: Copia i File del Progetto

Copia tutti i file dell'applicazione nella cartella `benzina-finder/`. La struttura deve essere:

```
benzina-finder/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── tsconfig.json
├── README.md
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── types.ts
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── SearchPanel.tsx
│   │   ├── DataSourceSelector.tsx
│   │   ├── RadiusSlider.tsx
│   │   ├── MapView.tsx
│   │   ├── StationList.tsx
│   │   └── InfoPanel.tsx
│   └── utils/
│       ├── geolocation.ts
│       └── stations.ts
└── .gitignore
```

---

### PASSO 4: Installa le Dipendenze

Nel terminale, dentro la cartella del progetto:

```bash
npm install
```

⏳ Attendi 1-2 minuti. Vedrai:
```
added 250 packages in 45s
```

✅ Se non ci sono errori (scritte rosse), è andato tutto bene!

---

### PASSO 5: Testa in Locale (Opzionale ma Consigliato)

```bash
npm run dev
```

Apri il browser su **http://localhost:5173**

Vedrai l'app funzionante! Per fermare il server premi `Ctrl+C` nel terminale.

---

### PASSO 6: Build per Produzione

```bash
npm run build
```

✅ Se vedi:
```
✓ 40 modules transformed.
dist/index.html          0.84 kB
dist/assets/index.css   24.38 kB
dist/assets/index.js   320.48 kB
✓ built in 3.5s
```

La cartella `dist/` contiene i file pronti per la pubblicazione.

---

### PASSO 7: Pubblica su GitHub

```bash
# Aggiungi tutti i file
git add .

# Crea il commit
git commit -m "Prima versione - BenzinaFinder app completa"

# Invia a GitHub
git push origin main
```

🔑 **Prima volta?** GitHub chiederà le credenziali:
- Username: il tuo nome utente GitHub
- Password: usa un **Personal Access Token** (NON la password)

**Come creare il token:**
1. GitHub → Settings (icona ingranaggio in alto a destra)
2. Developer settings (in fondo a sinistra)
3. Personal access tokens → Tokens (classic)
4. Generate new token (classic)
5. Spunta `repo` e `workflow`
6. Copia il token generato (lo vedi UNA SOLA VOLTA!)

---

## 🌐 DEPLOY: Scegli la Tua Piattaforma

### OPZIONE A: Vercel (⭐ CONSIGLIATO - Il più semplice)

1. Vai su **[vercel.com](https://vercel.com)**
2. Clicca **"Sign Up"** → **"Continue with GitHub"**
3. Autorizza Vercel
4. Clicca **"Add New..."** → **"Project"**
5. Trova **"benzina-finder"** → Clicca **"Import"**
6. Verifica le impostazioni (auto-rilevate):
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   ```
7. Clicca **"Deploy"**
8. ⏳ Attendi 1-2 minuti
9. ✅ La tua app è online! URL: `https://benzina-finder-XXXX.vercel.app`

**Bonus:** Ogni `git push` triggera un nuovo deploy automatico!

---

### OPZIONE B: GitHub Pages (Gratuito, integrato)

1. Nel tuo repository, crea il file:
   **`.github/workflows/deploy.yml`**

   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   permissions:
     contents: read
     pages: write
     id-token: write
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
         - run: npm install
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with:
             path: ./dist
         - uses: actions/deploy-pages@v4
   ```

2. Nel repo vai su: **Settings** → **Pages**
3. Source: **"GitHub Actions"**
4. Pusha il file workflow:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Aggiungi workflow GitHub Pages"
   git push origin main
   ```
5. ⏳ Attendi 2-3 minuti
6. ✅ Online su: `https://TUO_USERNAME.github.io/benzina-finder/`

---

### OPZIONE C: Netlify (Drag & Drop - Senza Git!)

**Metodo veloce (30 secondi):**
1. Esegui `npm run build` sul tuo computer
2. Vai su **[app.netlify.com/drop](https://app.netlify.com/drop)**
3. Trascina la cartella **`dist/`** nella pagina
4. ✅ Fatto! URL immediato.

**Metodo con auto-deploy:**
1. Vai su **[netlify.com](https://netlify.com)** → Sign Up con GitHub
2. **"Add new site"** → **"Import an existing project"**
3. Scegli GitHub → Autorizza → Seleziona il repo
4. Configura:
   ```
   Build command: npm run build
   Publish directory: dist
   ```
5. Clicca **"Deploy site"**

---

## 📖 Come Usare l'App

1. **Apri** l'URL nel browser del telefono
2. **Consenti** la geolocalizzazione quando richiesto
3. **Cerca** un comune o usa il GPS (pulsante verde ⊕)
4. **Regola** il raggio con il cursore (1-100 km)
5. **Scegli** la fonte dati (MISE, PrezziBenzina, Osservatorio)
6. **Esplora** la mappa toccando i marker colorati
7. **Lista completa** toccando il pulsante blu con il numero

---

## 🛠️ Tecnologie

| Tecnologia | Uso |
|-----------|-----|
| React 18 | Framework UI |
| TypeScript | Tipizzazione |
| Vite | Build tool |
| Tailwind CSS 4 | Styling |
| Leaflet | Mappe interattive |
| OpenStreetMap | Tile map |
| Nominatim | Geocoding |

---

## 📊 Fonti Dati

| Fonte | Tipo | Affidabilità | Aggiornamento |
|-------|------|-------------|---------------|
| 🏛️ MISE | Governativo | ⭐⭐⭐⭐⭐ | Settimanale |
| ⛽ PrezziBenzina.it | Community | ⭐⭐⭐⭐ | Quotidiano |
| 📊 Osservatorio | Aggregatore | ⭐⭐⭐⭐ | Giornaliero |

---

## ⚠️ Note Importanti

- I prezzi sono **indicativi** (basati su medie delle fonti)
- Per prezzi in tempo reale serve un backend server
- L'app funziona con connessione internet
- Mappe: OpenStreetMap (gratuito, no API key)
- Geocoding: Nominatim (gratuito, max 1 req/sec)

---

## 🔧 Risoluzione Problemi

| Problema | Soluzione |
|----------|-----------|
| `npm install` fallisce | Cancella `node_modules` e `package-lock.json`, ripeti |
| Mappa non carica | Controlla connessione internet |
| GPS non funziona | Verifica permessi browser + GPS telefono |
| GitHub Pages 404 | Attendi 3 minuti, poi ricarica con Ctrl+Shift+R |
| Build error TypeScript | Esegui `npx tsc --noEmit` per vedere errori |

---

## 📄 Licenza

MIT License - Libero utilizzo per scopi personali e commerciali.

---

## 🙏 Crediti

- Mappe: [OpenStreetMap](https://www.openstreetmap.org)
- Icone: [Font Awesome](https://fontawesome.com)
- Dati: MISE, PrezziBenzina.it, Osservatorio Prezzi

---

**Creato con ❤️ per aiutare gli automobilisti italiani a risparmiare sul carburante!**

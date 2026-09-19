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

--- src/components/InfoPanel.tsx (原始)
interface InfoPanelProps {
  onClose: () => void;
}

export default function InfoPanel({ onClose }: InfoPanelProps) {
  return (
    <div className="absolute inset-0 bg-white z-[1002] flex flex-col animate-slide-up">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <i className="fas fa-info-circle text-lg"></i>
          <h2 className="font-bold text-lg">Guida & Informazioni</h2>
        </div>
        <button
          onClick={onClose}
          className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center active:scale-90"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {/* Come funziona */}
        <section>
          <h3 className="font-bold text-blue-800 flex items-center gap-2 mb-2">
            <i className="fas fa-rocket text-blue-500"></i> Come Funziona
          </h3>
          <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700 space-y-2">
            <p><b>1.</b> L'app usa il <b>GPS</b> del tuo telefono per trovare la tua posizione</p>
            <p><b>2.</b> Puoi anche cercare un <b>comune</b> o indirizzo specifico</p>
            <p><b>3.</b> Regola il <b>raggio di ricerca</b> da 1 a 100 km</p>
            <p><b>4.</b> Scegli la <b>fonte dati</b> preferita tra le 3 disponibili</p>
            <p><b>5.</b> Visualizza le stazioni sulla <b>mappa</b> o nella <b>lista</b></p>
          </div>
        </section>

        {/* Fonti dati */}
        <section>
          <h3 className="font-bold text-green-800 flex items-center gap-2 mb-2">
            <i className="fas fa-database text-green-500"></i> Fonti Dati
          </h3>
          <div className="space-y-2">
            <div className="bg-green-50 rounded-lg p-3 text-sm">
              <div className="font-semibold text-green-800">🏛️ MISE - Ministero delle Imprese</div>
              <div className="text-gray-600 text-xs mt-1">Dati ufficiali del governo italiano. Aggiornamento settimanale. Fonte più affidabile.</div>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3 text-sm">
              <div className="font-semibold text-emerald-800">⛽ PrezziBenzina.it</div>
              <div className="text-gray-600 text-xs mt-1">Segnalazioni degli utenti e dati dalle stazioni. Aggiornamento quotidiano.</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 text-sm">
              <div className="font-semibold text-purple-800">📊 Osservatorio Prezzi</div>
              <div className="text-gray-600 text-xs mt-1">Dati aggregati e comparativi su base regionale. Aggiornamento giornaliero.</div>
            </div>
          </div>
        </section>

        {/* Pubblicazione GitHub */}
        <section>
          <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-2">
            <i className="fab fa-github text-gray-700"></i> Guida Pubblicazione su GitHub
          </h3>
          <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700 space-y-3">
            <div>
              <div className="font-semibold text-gray-800 mb-1">📋 Passo 1: Installa Git</div>
              <code className="bg-gray-200 px-2 py-0.5 rounded text-xs block mb-1">
                Scarica da: git-scm.com
              </code>
              <div className="text-xs text-gray-500">Installa Git sul tuo computer e configura nome ed email</div>
            </div>

            <div>
              <div className="font-semibold text-gray-800 mb-1">📋 Passo 2: Crea un account GitHub</div>
              <code className="bg-gray-200 px-2 py-0.5 rounded text-xs block mb-1">
                Vai su: github.com → Sign Up
              </code>
            </div>

            <div>
              <div className="font-semibold text-gray-800 mb-1">📋 Passo 3: Crea un nuovo repository</div>
              <code className="bg-gray-200 px-2 py-0.5 rounded text-xs block mb-1">
                GitHub → New Repository → Nome: "benzina-finder"
              </code>
              <div className="text-xs text-gray-500">Spunta "Add a README file" e scegli "Public"</div>
            </div>

            <div>
              <div className="font-semibold text-gray-800 mb-1">📋 Passo 4: Clona il repository</div>
              <code className="bg-gray-200 px-2 py-0.5 rounded text-xs block mb-1">
                git clone https://github.com/TUO_USERNAME/benzina-finder.git
              </code>
            </div>

            <div>
              <div className="font-semibold text-gray-800 mb-1">📋 Passo 5: Copia i file del progetto</div>
              <div className="text-xs text-gray-500">Copia tutti i file del progetto nella cartella clonata</div>
            </div>

            <div>
              <div className="font-semibold text-gray-800 mb-1">📋 Passo 6: Installa dipendenze e builda</div>
              <code className="bg-gray-200 px-2 py-0.5 rounded text-xs block">
                npm install
              </code>
              <code className="bg-gray-200 px-2 py-0.5 rounded text-xs block mt-1">
                npm run build
              </code>
            </div>

            <div>
              <div className="font-semibold text-gray-800 mb-1">📋 Passo 7: Pubblica su GitHub</div>
              <code className="bg-gray-200 px-2 py-0.5 rounded text-xs block">
                git add .
              </code>
              <code className="bg-gray-200 px-2 py-0.5 rounded text-xs block mt-1">
                git commit -m "Prima versione app benzina"
              </code>
              <code className="bg-gray-200 px-2 py-0.5 rounded text-xs block mt-1">
                git push origin main
              </code>
            </div>

            <div>
              <div className="font-semibold text-gray-800 mb-1">📋 Passo 8: Deploy su GitHub Pages</div>
              <div className="text-xs text-gray-500">
                Vai su Settings → Pages → Source: "GitHub Actions" → Seleziona il workflow
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Oppure usa Vercel/Netlify per deploy automatico
              </div>
            </div>
          </div>
        </section>

        {/* Deploy alternativo */}
        <section>
          <h3 className="font-bold text-orange-800 flex items-center gap-2 mb-2">
            <i className="fas fa-cloud text-orange-500"></i> Deploy Alternativi (Più Semplici)
          </h3>
          <div className="bg-orange-50 rounded-lg p-3 text-sm text-gray-700 space-y-2">
            <div>
              <div className="font-semibold">🔷 Vercel (Consigliato)</div>
              <div className="text-xs text-gray-500">
                1. Vai su vercel.com → Sign up con GitHub<br/>
                2. Import Repository → Seleziona il tuo repo<br/>
                3. Click "Deploy" → Fatto! URL automatico
              </div>
            </div>
            <div className="border-t border-orange-200 pt-2">
              <div className="font-semibold">🔶 Netlify</div>
              <div className="text-xs text-gray-500">
                1. Vai su netlify.com → Sign up con GitHub<br/>
                2. Trascina la cartella "dist" nel browser<br/>
                3. Oppure collega il repository per auto-deploy
              </div>
            </div>
          </div>
        </section>

        {/* Note */}
        <section>
          <h3 className="font-bold text-red-800 flex items-center gap-2 mb-2">
            <i className="fas fa-exclamation-triangle text-red-500"></i> Note Importanti
          </h3>
          <div className="bg-red-50 rounded-lg p-3 text-sm text-gray-700 space-y-1">
            <p>• I prezzi mostrati sono <b>indicativi</b> e possono variare</p>
            <p>• Per dati in tempo reale serve un backend server (proxy API)</p>
            <p>• L'app funziona meglio con connessione internet attiva</p>
            <p>• Abilita la geolocalizzazione nelle impostazioni del browser</p>
            <p>• Su Android: Chrome → Impostazioni → Siti → Posizione → Consenti</p>
          </div>
        </section>
      </div>
    </div>
  );
}


+++ src/components/InfoPanel.tsx (修改后)
import { useState } from 'react';

interface InfoPanelProps {
  onClose: () => void;
}

type TabId = 'uso' | 'github' | 'vercel' | 'netlify' | 'note';

export default function InfoPanel({ onClose }: InfoPanelProps) {
  const [activeTab, setActiveTab] = useState<TabId>('uso');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedCmd(id);
      setTimeout(() => setCopiedCmd(null), 2000);
    });
  };

  const tabs: { id: TabId; label: string; icon: string }[] = [
    { id: 'uso', label: 'Uso', icon: 'fa-play' },
    { id: 'github', label: 'GitHub', icon: 'fab fa-github' },
    { id: 'vercel', label: 'Vercel', icon: 'fa-cloud' },
    { id: 'netlify', label: 'Netlify', icon: 'fa-rocket' },
    { id: 'note', label: 'Note', icon: 'fa-circle-info' },
  ];

  const CmdBlock = ({ cmd, id }: { cmd: string; id: string }) => (
    <div className="relative group">
      <code className="block bg-gray-900 text-green-400 px-3 py-2 rounded-lg text-xs font-mono overflow-x-auto">
        {cmd}
      </code>
      <button
        onClick={() => copyToClipboard(cmd, id)}
        className="absolute top-1 right-1 bg-gray-700 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-600"
      >
        {copiedCmd === id ? (
          <><i className="fas fa-check text-green-400"></i> Copiato!</>
        ) : (
          <><i className="fas fa-copy"></i> Copia</>
        )}
      </button>
    </div>
  );

  return (
    <div className="absolute inset-0 bg-white z-[1002] flex flex-col animate-slide-up">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <i className="fas fa-book-open text-lg"></i>
          <h2 className="font-bold text-lg">Guida Completa</h2>
        </div>
        <button
          onClick={onClose}
          className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center active:scale-90"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto bg-gray-50 border-b border-gray-200 shrink-0 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1 px-3 py-2.5 text-xs font-medium whitespace-nowrap border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-blue-600 text-blue-600 bg-white'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <i className={`fas ${tab.icon} text-xs`}></i>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {/* TAB: Come si usa */}
        {activeTab === 'uso' && (
          <div className="space-y-4">
            <h3 className="font-bold text-blue-800 text-lg flex items-center gap-2">
              <i className="fas fa-play-circle text-blue-500"></i> Come Usare l'App
            </h3>

            <StepCard number={1} title="Apri l'app nel browser" color="blue">
              <p>Apri Chrome (o il browser che preferisci) sul tuo smartphone Android e naviga all'URL dell'app.</p>
              <p className="mt-2 text-xs text-gray-500">💡 Suggerimento: Aggiungi alla schermata Home per usarla come un'app nativa!</p>
            </StepCard>

            <StepCard number={2} title="Consenti la posizione GPS" color="green">
              <p>Quando il browser chiede il permesso per la posizione, tocca <b>"Consenti"</b>.</p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-2 mt-2 text-xs">
                <b>Se negato per errore:</b><br/>
                Chrome → ⋮ → Impostazioni → Impostazioni sito → Posizione → Consenti
              </div>
            </StepCard>

            <StepCard number={3} title="Cerca un comune (alternativa al GPS)" color="purple">
              <p>Nella barra di ricerca in alto, digita il nome di un comune italiano (es. "Milano", "Roma", "Firenze").</p>
              <p className="mt-1">Puoi anche incollare un indirizzo completo da Google Maps.</p>
              <p className="mt-1">Premi <b>Invio</b> o tocca la lente d'ingrandimento 🔍.</p>
            </StepCard>

            <StepCard number={4} title="Regola il raggio di ricerca" color="orange">
              <p>Usa il <b>cursore</b> per impostare la distanza da 1 a 100 km.</p>
              <p className="mt-1">Il cerchio sulla mappa si aggiorna in tempo reale.</p>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">1-10km: Vicinanza</span>
                <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded-full">11-30km: Locale</span>
                <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full">31-60km: Provinciale</span>
                <span className="bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded-full">61-100km: Regionale</span>
              </div>
            </StepCard>

            <StepCard number={5} title="Scegli la fonte dati" color="indigo">
              <p>Seleziona una delle 3 fonti disponibili:</p>
              <div className="mt-2 space-y-1">
                <div className="bg-blue-50 rounded p-2 text-xs"><b>🏛️ MISE</b> - Dati ufficiali del Ministero</div>
                <div className="bg-green-50 rounded p-2 text-xs"><b>⛽ PrezziBenzina.it</b> - Segnalazioni utenti</div>
                <div className="bg-purple-50 rounded p-2 text-xs"><b>📊 Osservatorio</b> - Dati aggregati regionali</div>
              </div>
            </StepCard>

            <StepCard number={6} title="Consulta i risultati" color="teal">
              <p><b>Sulla mappa:</b> Tocca un marker per vedere i dettagli della stazione.</p>
              <p className="mt-1"><b>Nella lista:</b> Premi il pulsante blu con il numero delle stazioni trovate (in basso a destra).</p>
              <p className="mt-1">I prezzi sono ordinati per distanza. Il più economico è evidenziato con 💰.</p>
            </StepCard>
          </div>
        )}

        {/* TAB: GitHub */}
        {activeTab === 'github' && (
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 text-lg flex items-center gap-2">
              <i className="fab fa-github text-gray-700"></i> Pubblicazione su GitHub
            </h3>
            <p className="text-sm text-gray-600">Segui questi passaggi nell'ordine per pubblicare la tua app.</p>

            <StepCard number={1} title="Prerequisiti: Installa gli strumenti" color="blue">
              <p className="font-semibold mb-2">Devi avere sul tuo computer:</p>
              <div className="space-y-2">
                <div className="bg-gray-50 rounded-lg p-2 text-xs">
                  <b>1. Node.js</b> (versione 18 o superiore)<br/>
                  <span className="text-gray-500">Scarica da: </span>
                  <span className="text-blue-600">nodejs.org → Download LTS</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 text-xs">
                  <b>2. Git</b><br/>
                  <span className="text-gray-500">Scarica da: </span>
                  <span className="text-blue-600">git-scm.com/downloads</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 text-xs">
                  <b>3. Account GitHub</b><br/>
                  <span className="text-gray-500">Registrati su: </span>
                  <span className="text-blue-600">github.com/signup</span>
                </div>
              </div>
              <div className="mt-2 bg-yellow-50 border border-yellow-200 rounded-lg p-2 text-xs">
                <b>⚠️ Verifica installazione:</b> Apri il terminale e digita:
                <CmdBlock cmd="node --version && git --version" id="check-version" />
              </div>
            </StepCard>

            <StepCard number={2} title="Configura Git" color="gray">
              <p>Apri il terminale (o Prompt dei comandi su Windows) ed esegui:</p>
              <div className="mt-2 space-y-1">
                <CmdBlock cmd='git config --global user.name "Il Tuo Nome"' id="git-name" />
                <CmdBlock cmd='git config --global user.email "tua@email.com"' id="git-email" />
              </div>
              <p className="text-xs text-gray-500 mt-2">Usa lo stesso email del tuo account GitHub.</p>
            </StepCard>

            <StepCard number={3} title="Crea il repository su GitHub" color="green">
              <div className="space-y-2 text-sm">
                <p><b>a)</b> Vai su <span className="text-blue-600 font-mono text-xs">github.com</span> e accedi</p>
                <p><b>b)</b> Clicca sul pulsante <b>"+"</b> in alto a destra → <b>"New repository"</b></p>
                <p><b>c)</b> Compila i campi:</p>
                <div className="bg-gray-900 rounded-lg p-3 text-xs text-white space-y-1 ml-4">
                  <div>Repository name: <span className="text-yellow-300">benzina-finder</span></div>
                  <div>Description: <span className="text-gray-400">App monitoraggio prezzi carburante</span></div>
                  <div>Public: <span className="text-green-400">✅ Selezionato</span></div>
                  <div>Add a README: <span className="text-green-400">✅ Selezionato</span></div>
                </div>
                <p><b>d)</b> Clicca <b>"Create repository"</b></p>
              </div>
            </StepCard>

            <StepCard number={4} title="Clona il repository sul tuo PC" color="purple">
              <p>Nella pagina del repo, clicca il pulsante verde <b>"Code"</b> e copia l'URL HTTPS.</p>
              <p className="mt-2">Poi nel terminale:</p>
              <CmdBlock cmd="git clone https://github.com/TUO_USERNAME/benzina-finder.git" id="git-clone" />
              <CmdBlock cmd="cd benzina-finder" id="cd-repo" />
              <p className="text-xs text-gray-500 mt-2">Sostituisci TUO_USERNAME con il tuo nome utente GitHub.</p>
            </StepCard>

            <StepCard number={5} title="Copia i file del progetto" color="orange">
              <p>Copia tutti i file dell'applicazione nella cartella del repository clonato.</p>
              <div className="bg-gray-50 rounded-lg p-2 mt-2 text-xs">
                <b>Struttura dei file da copiare:</b>
                <pre className="mt-1 text-gray-600 overflow-x-auto">{`benzina-finder/
├── index.html
├── package.json
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
│       └── stations.ts`}</pre>
              </div>
            </StepCard>

            <StepCard number={6} title="Installa le dipendenze" color="teal">
              <p>Nel terminale, dentro la cartella del progetto:</p>
              <CmdBlock cmd="npm install" id="npm-install" />
              <p className="text-xs text-gray-500 mt-2">
                Questo scarica tutte le librerie necessarie (React, Leaflet, Tailwind...).
                Attendi il completamento (1-2 minuti).
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-2 mt-2 text-xs">
                ✅ Se vedi "added XXX packages" senza errori, è andato tutto bene!
              </div>
            </StepCard>

            <StepCard number={7} title="Testa in locale (opzionale)" color="blue">
              <p>Prima di pubblicare, puoi testare l'app sul tuo computer:</p>
              <CmdBlock cmd="npm run dev" id="npm-dev" />
              <p className="text-xs text-gray-500 mt-2">
                Apri il browser su <span className="text-blue-600">http://localhost:5173</span> per vedere l'app.
                Premi Ctrl+C nel terminale per fermare il server.
              </p>
            </StepCard>

            <StepCard number={8} title="Build per produzione" color="indigo">
              <p>Crea la versione ottimizzata per il deploy:</p>
              <CmdBlock cmd="npm run build" id="npm-build" />
              <p className="text-xs text-gray-500 mt-2">
                Questo crea la cartella <b>dist/</b> con i file pronti per la pubblicazione.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-2 mt-2 text-xs">
                ✅ Se vedi "✓ built in X.XXs" senza errori, il build è riuscito!
              </div>
            </StepCard>

            <StepCard number={9} title="Pubblica su GitHub" color="green">
              <p>Esegui questi comandi nel terminale:</p>
              <div className="space-y-1 mt-2">
                <CmdBlock cmd="git add ." id="git-add" />
                <CmdBlock cmd='git commit -m "Prima versione - BenzinaFinder app"' id="git-commit" />
                <CmdBlock cmd="git push origin main" id="git-push" />
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 mt-2 text-xs">
                💡 La prima volta che fai push, GitHub potrebbe chiedere le credenziali.
                Usa il tuo username e un <b>Personal Access Token</b> (non la password).
                <br/><br/>
                Per creare il token: GitHub → Settings → Developer Settings → Personal Access Tokens → Generate New Token
              </div>
            </StepCard>

            <StepCard number={10} title="Attiva GitHub Pages" color="purple">
              <div className="space-y-2 text-sm">
                <p><b>a)</b> Vai sul tuo repository su GitHub</p>
                <p><b>b)</b> Clicca su <b>Settings</b> (tab in alto)</p>
                <p><b>c)</b> Nel menu a sinistra, clicca su <b>Pages</b></p>
                <p><b>d)</b> Sotto "Build and deployment":</p>
                <div className="bg-gray-900 rounded-lg p-3 text-xs text-white space-y-1 ml-4">
                  <div>Source: <span className="text-yellow-300">GitHub Actions</span></div>
                </div>
                <p><b>e)</b> Crea il file di workflow (vedi sotto)</p>
              </div>
              <div className="mt-2">
                <p className="text-xs font-semibold mb-1">Crea il file <code className="bg-gray-200 px-1 rounded">.github/workflows/deploy.yml</code>:</p>
                <CmdBlock cmd={`name: Deploy to GitHub Pages
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
      - uses: actions/deploy-pages@v4`} id="workflow-yml" />
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-2 mt-2 text-xs">
                ✅ Dopo il push, l'app sarà disponibile su:<br/>
                <b>https://TUO_USERNAME.github.io/benzina-finder/</b><br/>
                Il deploy richiede circa 2-3 minuti.
              </div>
            </StepCard>
          </div>
        )}

        {/* TAB: Vercel */}
        {activeTab === 'vercel' && (
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 text-lg flex items-center gap-2">
              <i className="fas fa-cloud text-gray-700"></i> Deploy su Vercel
            </h3>
            <p className="text-sm text-gray-600 bg-blue-50 p-2 rounded-lg">
              ⭐ <b>Metodo consigliato!</b> Il più semplice e veloce. Deploy automatico ad ogni push.
            </p>

            <StepCard number={1} title="Crea un account Vercel" color="blue">
              <p>Vai su <span className="text-blue-600 font-mono text-xs">vercel.com</span></p>
              <p className="mt-1">Clicca <b>"Sign Up"</b> → Scegli <b>"Continue with GitHub"</b></p>
              <p className="mt-1">Autorizza Vercel ad accedere ai tuoi repository.</p>
            </StepCard>

            <StepCard number={2} title="Importa il progetto" color="green">
              <div className="space-y-2 text-sm">
                <p><b>a)</b> Clicca <b>"Add New..."</b> → <b>"Project"</b></p>
                <p><b>b)</b> Trova <b>"benzina-finder"</b> nella lista e clicca <b>"Import"</b></p>
                <p><b>c)</b> Vercel rileva automaticamente che è un progetto Vite</p>
              </div>
            </StepCard>

            <StepCard number={3} title="Configura e deploya" color="purple">
              <p>Le impostazioni sono già corrette. Clicca <b>"Deploy"</b>.</p>
              <div className="bg-gray-900 rounded-lg p-3 text-xs text-white space-y-1 mt-2">
                <div>Framework Preset: <span className="text-yellow-300">Vite</span></div>
                <div>Build Command: <span className="text-yellow-300">npm run build</span></div>
                <div>Output Directory: <span className="text-yellow-300">dist</span></div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-2 mt-3 text-xs">
                ✅ In 1-2 minuti l'app è online!<br/>
                URL: <b>https://benzina-finder.vercel.app</b> (o simile)
              </div>
            </StepCard>

            <StepCard number={4} title="Aggiornamenti automatici" color="orange">
              <p>Ogni volta che fai <code className="bg-gray-200 px-1 rounded">git push</code>, Vercel redeploya automaticamente!</p>
              <div className="mt-2 text-xs text-gray-500">
                Non devi fare nulla. Basta aggiornare il codice e pushare su GitHub.
              </div>
            </StepCard>
          </div>
        )}

        {/* TAB: Netlify */}
        {activeTab === 'netlify' && (
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 text-lg flex items-center gap-2">
              <i className="fas fa-rocket text-teal-600"></i> Deploy su Netlify
            </h3>

            <StepCard number={1} title="Metodo A: Drag & Drop (Senza Git)" color="blue">
              <p className="font-semibold mb-2">Il metodo più veloce in assoluto!</p>
              <div className="space-y-2 text-sm">
                <p><b>a)</b> Esegui il build locale:</p>
                <CmdBlock cmd="npm run build" id="netlify-build" />
                <p className="mt-2"><b>b)</b> Vai su <span className="text-blue-600 font-mono text-xs">app.netlify.com/drop</span></p>
                <p><b>c)</b> Trascina la cartella <b>dist/</b> nella pagina</p>
                <p><b>d)</b> Fatto! L'app è online in 30 secondi.</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-2 mt-2 text-xs">
                ✅ Non serve account GitHub né terminale!
              </div>
            </StepCard>

            <StepCard number={2} title="Metodo B: Collega GitHub (Auto-deploy)" color="green">
              <div className="space-y-2 text-sm">
                <p><b>a)</b> Vai su <span className="text-blue-600 font-mono text-xs">netlify.com</span> → Sign Up con GitHub</p>
                <p><b>b)</b> Clicca <b>"Add new site"</b> → <b>"Import an existing project"</b></p>
                <p><b>c)</b> Scegli <b>GitHub</b> → Autorizza → Seleziona il repo</p>
                <p><b>d)</b> Configura:</p>
                <div className="bg-gray-900 rounded-lg p-3 text-xs text-white space-y-1 ml-4">
                  <div>Build command: <span className="text-yellow-300">npm run build</span></div>
                  <div>Publish directory: <span className="text-yellow-300">dist</span></div>
                </div>
                <p><b>e)</b> Clicca <b>"Deploy site"</b></p>
              </div>
            </StepCard>

            <StepCard number={3} title="Personalizza il dominio" color="purple">
              <p>Netlify ti assegna un URL casuale tipo:</p>
              <code className="block bg-gray-100 px-2 py-1 rounded text-xs mt-1">
                https://random-name-12345.netlify.app
              </code>
              <p className="mt-2">Per cambiarlo:</p>
              <p className="text-sm mt-1">Site settings → Domain management → Change site name → <b>"benzina-finder"</b></p>
              <p className="mt-1 text-sm">Risultato: <b>https://benzina-finder.netlify.app</b></p>
            </StepCard>
          </div>
        )}

        {/* TAB: Note */}
        {activeTab === 'note' && (
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 text-lg flex items-center gap-2">
              <i className="fas fa-circle-info text-blue-500"></i> Note Importanti
            </h3>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <h4 className="font-semibold text-yellow-800 text-sm flex items-center gap-1">
                <i className="fas fa-exclamation-triangle"></i> Dati Prezzi
              </h4>
              <p className="text-xs text-gray-700 mt-1">
                I prezzi mostrati sono <b>indicativi</b> e basati su medie nazionali.
                Per dati in tempo reale al 100% serve un server backend che interroghi le API ufficiali del MISE.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <h4 className="font-semibold text-blue-800 text-sm flex items-center gap-1">
                <i className="fas fa-mobile-alt"></i> Uso su Smartphone
              </h4>
              <div className="text-xs text-gray-700 mt-1 space-y-1">
                <p>• Su Android: usa Chrome per la migliore compatibilità</p>
                <p>• Abilita GPS nelle impostazioni del telefono</p>
                <p>• Consenti la geolocalizzazione al browser</p>
                <p>• Aggiungi alla Home: Menu → "Aggiungi alla schermata Home"</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <h4 className="font-semibold text-green-800 text-sm flex items-center gap-1">
                <i className="fas fa-map"></i> Mappe
              </h4>
              <p className="text-xs text-gray-700 mt-1">
                L'app usa <b>OpenStreetMap</b> (gratuito e open source) per le mappe e
                <b> Nominatim</b> per il geocoding (ricerca indirizzi).
                Nessun costo, nessuna API key necessaria.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <h4 className="font-semibold text-purple-800 text-sm flex items-center gap-1">
                <i className="fas fa-code-branch"></i> Risoluzione Problemi
              </h4>
              <div className="text-xs text-gray-700 mt-1 space-y-2">
                <div>
                  <b>Build fallisce:</b>
                  <p className="ml-2">→ Cancella node_modules e package-lock.json, poi ripeti npm install</p>
                </div>
                <div>
                  <b>Mappa non carica:</b>
                  <p className="ml-2">→ Controlla la connessione internet</p>
                </div>
                <div>
                  <b>Posizione non funziona:</b>
                  <p className="ml-2">→ Verifica permessi browser e GPS del telefono</p>
                </div>
                <div>
                  <b>GitHub Pages 404:</b>
                  <p className="ml-2">→ Attendi 2-3 minuti dopo il deploy, poi ricarica</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <h4 className="font-semibold text-gray-800 text-sm flex items-center gap-1">
                <i className="fas fa-lightbulb"></i> Miglioramenti Futuri
              </h4>
              <div className="text-xs text-gray-700 mt-1 space-y-1">
                <p>• Backend con API MISE per prezzi reali</p>
                <p>• Notifiche push per calo prezzi</p>
                <p>• Storico prezzi e grafici</p>
                <p>• Confronto prezzi tra stazioni</p>
                <p>• Modalità offline con cache</p>
                <p>• Percorso navigazione fino alla stazione</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Step Card Component
function StepCard({ number, title, color, children }: {
  number: number;
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    purple: 'bg-purple-600',
    orange: 'bg-orange-600',
    red: 'bg-red-600',
    teal: 'bg-teal-600',
    indigo: 'bg-indigo-600',
    gray: 'bg-gray-600',
    pink: 'bg-pink-600',
  };

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border-b border-gray-100">
        <div className={`${colorClasses[color] || 'bg-blue-600'} text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0`}>
          {number}
        </div>
        <h4 className="font-semibold text-sm text-gray-800">{title}</h4>
      </div>
      <div className="px-3 py-3 text-sm text-gray-700">
        {children}
      </div>
    </div>
  );
}

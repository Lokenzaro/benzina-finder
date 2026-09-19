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

// ================================================================
//  SCORES.JS — saves & loads scores via JSONBin (free)
//  Setup: sign up at jsonbin.io, create a bin with {"scores":[]},
//  then paste your Master Key and Bin ID below.
// ================================================================

const JSONBIN_KEY = '$2a$10$6XI1GsE30Mt1Xz91F2ost.HSGk8Ie6JjcPPcQs0a3ggaZsxq7iAoC';
const JSONBIN_BIN = '69f36fb036566621a80d5766';           // e.g. 6634a1f...

const BIN_URL = `https://api.jsonbin.io/v3/b/${JSONBIN_BIN}`;
const LOCAL_KEY = 'bq_scores_v2';

function isConfigured() {
  return JSONBIN_KEY !== 'YOUR_JSONBIN_MASTER_KEY' && JSONBIN_BIN !== 'YOUR_BIN_ID';
}

async function loadScores() {
  if (!isConfigured()) return getLocal();
  try {
    const res = await fetch(BIN_URL + '/latest', {
      headers: { 'X-Master-Key': JSONBIN_KEY }
    });
    if (!res.ok) throw new Error('fetch failed');
    const data = await res.json();
    return data.record.scores || [];
  } catch {
    return getLocal();
  }
}

async function saveScore(entry) {
  saveLocal(entry);
  if (!isConfigured()) return;
  try {
    const existing = await loadScores();
    const updated = [...existing.filter(s => s.id !== entry.id), entry];
    await fetch(BIN_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'X-Master-Key': JSONBIN_KEY },
      body: JSON.stringify({ scores: updated })
    });
  } catch {
    console.warn('JSONBin sync failed, saved locally');
  }
}

async function clearAllScores() {
  localStorage.removeItem(LOCAL_KEY);
  if (!isConfigured()) return;
  try {
    await fetch(BIN_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'X-Master-Key': JSONBIN_KEY },
      body: JSON.stringify({ scores: [] })
    });
  } catch {
    console.warn('JSONBin clear failed');
  }
}

function getLocal() {
  try { return JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]'); } catch { return []; }
}
function saveLocal(entry) {
  const scores = getLocal();
  const updated = [...scores.filter(s => s.id !== entry.id), entry];
  localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
}

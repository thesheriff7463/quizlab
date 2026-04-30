const JSONBIN_KEY = '$2a$10$6XI1GsE30Mt1Xz91F2ost.HSGk8Ie6JjcPPcQs0a3ggaZsxq7iAoC';
const JSONBIN_BIN = '69f36fb036566621a80d5766';
const BIN_URL = 'https://api.jsonbin.io/v3/b/' + JSONBIN_BIN;
const LOCAL_KEY = 'bq_scores_v2';

function isConfigured() {
  return JSONBIN_KEY !== 'YOUR_JSONBIN_MASTER_KEY' && JSONBIN_BIN !== 'YOUR_BIN_ID';
}

async function loadScores() {
  if (!isConfigured()) return getLocal();
  try {
    const res = await fetch(BIN_URL + '/latest', {
      headers: {
        'X-Master-Key': JSONBIN_KEY,
        'X-Bin-Meta': 'false'
      }
    });
    if (!res.ok) throw new Error('load failed');
    const data = await res.json();
    return Array.isArray(data.scores) ? data.scores : [];
  } catch(e) {
    console.warn('JSONBin load failed, using local', e);
    return getLocal();
  }
}

async function saveScore(entry) {
  saveLocal(entry);
  if (!isConfigured()) return;
  try {
    const existing = await loadScores();
    const updated = [...existing.filter(s => s.id !== entry.id), entry];
    const res = await fetch(BIN_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': JSONBIN_KEY
      },
      body: JSON.stringify({ scores: updated })
    });
    if (!res.ok) throw new Error('save failed');
  } catch(e) {
    console.warn('JSONBin save failed', e);
  }
}

async function clearAllScores() {
  localStorage.removeItem(LOCAL_KEY);
  if (!isConfigured()) return;
  try {
    await fetch(BIN_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': JSONBIN_KEY
      },
      body: JSON.stringify({ scores: [] })
    });
  } catch(e) {
    console.warn('JSONBin clear failed', e);
  }
}

function getLocal() {
  try { return JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]'); } catch { return []; }
}
function saveLocal(entry) {
  try {
    const scores = getLocal();
    const updated = [...scores.filter(s => s.id !== entry.id), entry];
    localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
  } catch(e) {}
}

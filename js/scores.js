const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxTX5DVhrAN2rm49e2hl_VjPFf3ah09woJxfxNc4dKeV_uODZTv6Bv2ln4Xd9uRSr76/exec';
const LOCAL_KEY = 'bq_scores_v4';

async function loadScores() {
  try {
    const res = await fetch(SCRIPT_URL);
    if (!res.ok) throw new Error('load failed');
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch(e) {
    console.warn('Google Sheets load failed, using local', e);
    return getLocal();
  }
}

async function saveScore(entry) {
  saveLocal(entry);
  try {
    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry)
    });
  } catch(e) {
    console.warn('Google Sheets save failed', e);
  }
}

async function clearAllScores() {
  localStorage.removeItem(LOCAL_KEY);
  try {
    await fetch(SCRIPT_URL + '?action=clear');
  } catch(e) {
    console.warn('Clear failed', e);
  }
}

function getLocal() {
  try { return JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]'); } catch { return []; }
}

function saveLocal(entry) {
  try {
    const scores = getLocal();
    const updated = scores.filter(s => s.id !== entry.id);
    updated.push(entry);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
  } catch(e) {}
}

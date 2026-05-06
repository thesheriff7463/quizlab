const SUPABASE_URL = 'https://mhejqwzcbwibcrbhtdf.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oZWpxd3pjYndpYmNicmJodGRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc1ODgxMzUsImV4cCI6MjA5MzE2NDEzNX0.wpQf73wA0rREBDtS0dn5Du0o20AB5NoToWnVSn53syw';
const TABLE = 'scores';
const LOCAL_KEY = 'bq_scores_v3';

const headers = {
  'Content-Type': 'application/json',
  'apikey': SUPABASE_KEY,
  'Authorization': 'Bearer ' + SUPABASE_KEY
};

async function loadScores() {
  try {
    const res = await fetch(SUPABASE_URL + '/rest/v1/' + TABLE + '?select=data&order=created_at.asc', { headers });
    if (!res.ok) throw new Error('load failed');
    const rows = await res.json();
    return rows.map(r => JSON.parse(r.data));
  } catch(e) {
    console.warn('Supabase load failed, using local', e);
    return getLocal();
  }
}

async function saveScore(entry) {
  saveLocal(entry);
  try {
    const res = await fetch(SUPABASE_URL + '/rest/v1/' + TABLE, {
      method: 'POST',
      headers: { ...headers, 'Prefer': 'return=minimal' },
      body: JSON.stringify({ data: JSON.stringify(entry) })
    });
    if (!res.ok) throw new Error('save failed');
  } catch(e) {
    console.warn('Supabase save failed', e);
  }
}

async function clearAllScores() {
  localStorage.removeItem(LOCAL_KEY);
  try {
    await fetch(SUPABASE_URL + '/rest/v1/' + TABLE + '?id=gte.0', {
      method: 'DELETE',
      headers
    });
  } catch(e) {
    console.warn('Supabase clear failed', e);
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

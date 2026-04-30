# Berklee Quiz Platform — Setup Guide

Zero cost. No subscriptions. Works in Canvas. Takes about 10 minutes.

---

## Step 1 — Make a free GitHub account

1. Go to **github.com** → click **Sign up**
2. Use your **personal email** (not Berklee — that expires when you leave)
3. Pick a username, verify your email, done

---

## Step 2 — Create a repository and upload the files

1. Click the **+** button (top right) → **New repository**
2. Name it: `berklee-quiz`
3. Set to **Public**
4. Check **"Add a README file"**
5. Click **Create repository**
6. On the repo page, click **"uploading an existing file"**
7. Unzip the `berklee-quiz.zip` you downloaded
8. Drag the contents of the `berklee-quiz` folder into GitHub (all the files and folders)
9. Click **Commit changes**

---

## Step 3 — Turn it into a live website (1 click)

1. In your repo, click **Settings** tab
2. In the left sidebar, click **Pages**
3. Under Source, select: **Deploy from a branch**
4. Set Branch: **main** · Folder: **/ (root)**
5. Click **Save**
6. Wait 1–2 minutes

Your site is now permanently live at:
```
https://YOUR-GITHUB-USERNAME.github.io/berklee-quiz/
```

Bookmark these two links:
- **Students:** `https://YOUR-USERNAME.github.io/berklee-quiz/`
- **Your dashboard:** `https://YOUR-USERNAME.github.io/berklee-quiz/host.html`

---

## Step 4 — Set up free score syncing (JSONBin)

This is what lets scores from different students sync to your dashboard in real time.

1. Go to **jsonbin.io** → click **Sign Up** (free, just an email)
2. Click **Create a Bin**
3. Paste this as the content: `{"scores":[]}`
4. Click **Create**
5. Copy the **Bin ID** (shown in the URL bar after `/b/`)
6. Go to **Account → API Keys** → copy your **Master Key**

Now add these to your code:
1. In your GitHub repo, open **js/scores.js**
2. Click the pencil icon (Edit)
3. Replace `YOUR_JSONBIN_MASTER_KEY` with your Master Key
4. Replace `YOUR_BIN_ID` with your Bin ID
5. Click **Commit changes**

Scores now sync live from any device to your dashboard.

---

## Step 5 — Add quizzes

Adding a quiz is a 3-step workflow:

1. **Ask Claude:** "Make me a Pro Tools shortcuts quiz with 15 questions in Berklee quiz format"
2. **Claude gives you** a ready-to-paste code block
3. **Paste it** into `js/quizzes.js` in GitHub (click the pencil icon, find the QUIZZES array, paste before the closing `]`)
4. Click **Commit changes** — live in under a minute

That's it. Claude does all the work, you just paste.

---

## Step 6 — Add categories (optional)

To add a new category (e.g. "Recording", "Ear Training"):
1. Open `js/quizzes.js` in GitHub
2. Find the `CATEGORIES` array at the top
3. Add a line like:
```javascript
{ id: "recording", name: "Recording", icon: "🎙️", color: "#DC2626" },
```
4. Commit. Done. The home page updates automatically.

---

## Step 7 — Embed in Canvas

1. Go to your Canvas course → Pages or Assignments
2. Edit → switch to HTML editor (the `</>` button)
3. Paste:
```html
<iframe src="https://YOUR-USERNAME.github.io/berklee-quiz/" width="100%" height="750px" frameborder="0" allowfullscreen></iframe>
```
4. Save

---

## Your host dashboard features

Go to `.../host.html` (bookmark this!):

| Feature | What it does |
|---------|-------------|
| Leaderboard | Ranked by points (speed + accuracy), auto-refreshes every 15s |
| All submissions | Every student who finished, click any row for full breakdown |
| Cheat flags | Shows how many times each student switched tabs/windows |
| Question breakdown | See exactly which questions each student got right/wrong |
| Filter by quiz | View scores for one specific quiz at a time |
| Export CSV | Download all scores for your gradebook |
| Clear scores | Wipe everything to start fresh for a new class |

---

## Questions or something broke?

Just paste the error message into Claude and it'll fix it instantly.

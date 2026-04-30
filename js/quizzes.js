// ================================================================
//  BERKLEE QUIZ PLATFORM — ALL YOUR QUIZZES LIVE HERE
//  When you want a new quiz, ask Claude to generate it and
//  paste the new block into the QUIZZES array below.
// ================================================================

// ── CATEGORIES ──────────────────────────────────────────────────
// Add, rename, or reorder categories freely.
// Each quiz references a category id below.
const CATEGORIES = [
  { id: "pro-tools",      name: "Pro Tools",       icon: "🎛️", color: "#7C3AED" },
  { id: "music-theory",   name: "Music Theory",    icon: "🎵", color: "#2563EB" },
  { id: "music-business", name: "Music Business",  icon: "💼", color: "#D97706" },
  { id: "ear-training",   name: "Ear Training",    icon: "👂", color: "#059669" },
  // Add more categories here:
  // { id: "recording",   name: "Recording",        icon: "🎙️", color: "#DC2626" },
];

// ── QUIZZES ──────────────────────────────────────────────────────
// Each quiz belongs to one category (by id).
// timePerQuestion = seconds on the timer (default 20).
// Questions and answers are shuffled automatically.
const QUIZZES = [

  // ── PRO TOOLS ──
  {
    id: "pt-shortcuts-1",
    category: "pro-tools",
    title: "Pro Tools Keyboard Shortcuts",
    description: "Essential shortcuts every Pro Tools user needs to know.",
    timePerQuestion: 20,
    questions: [
      // ── PASTE YOUR QUESTIONS HERE ──
      // Format:
      // { q: "Question text?", options: ["A","B","C","D"], answer: 0 },
      // answer = index of the correct option (0 = first, 1 = second, etc.)

      // Placeholder questions — replace with your real ones:
      {
        q: "What shortcut starts and stops playback in Pro Tools?",
        options: ["Spacebar", "Cmd + P", "Enter", "F5"],
        answer: 0
      },
      {
        q: "What does Cmd + Z do?",
        options: ["Redo", "Save", "Undo", "Close session"],
        answer: 2
      },
      {
        q: "Which shortcut enters record mode in Pro Tools?",
        options: ["Cmd + Spacebar", "F12", "Cmd + R", "Shift + Space"],
        answer: 0
      }
    ]
  }

  // ── TO ADD MORE QUIZZES, COPY THIS BLOCK ──────────────────────
  // ,{
  //   id: "pt-shortcuts-2",
  //   category: "pro-tools",
  //   title: "Pro Tools — Advanced Shortcuts",
  //   description: "Level up with advanced editing shortcuts.",
  //   timePerQuestion: 20,
  //   questions: [
  //     { q: "...", options: ["A","B","C","D"], answer: 0 },
  //   ]
  // }
  // ─────────────────────────────────────────────────────────────
];

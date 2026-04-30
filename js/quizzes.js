const CATEGORIES = [
  { id: "pro-tools",      name: "Pro Tools",       icon: "🎛️", color: "#7C3AED" },
  { id: "music-theory",   name: "Music Theory",    icon: "🎵", color: "#2563EB" },
  { id: "music-business", name: "Music Business",  icon: "💼", color: "#D97706" },
  { id: "ear-training",   name: "Ear Training",    icon: "👂", color: "#059669" },
];

const QUIZZES = [
  {
    id: "pt-shortcuts-1",
    category: "pro-tools",
    title: "Pro Tools Keyboard Shortcuts",
    description: "Test your knowledge of essential Pro Tools keyboard shortcuts for Mac.",
    timePerQuestion: 0,
    questions: [
      { q: "What is the shortcut to create an automation breakpoint?", options: ["Command + Click (in Automation Lane)", "Option + Click", "Control + Command + Click", "Command + Shift + Click"], answer: 0 },
      { q: "What is the shortcut to delete an automation breakpoint?", options: ["Command + Click", "Option + Click", "Control + Click", "Shift + Click"], answer: 1 },
      { q: "What shortcut enables plugin parameter automation?", options: ["Control + Command + Click", "Control + Command + Option + Click", "Option + Shift + Click", "Command + Shift + Click"], answer: 1 },
      { q: "How do you use fine resolution while dragging in Pro Tools?", options: ["Hold Option while dragging", "Hold Shift while dragging", "Hold Command while dragging", "Hold Control while dragging"], answer: 2 },
      { q: "What shortcut displays plugin parameter automation?", options: ["Control + Command + Click", "Option + Command + Click", "Control + Option + Click", "Shift + Command + Click"], answer: 0 },
      { q: "What shortcut shows the Volume Automation Lane on all tracks?", options: ["Option + =", "Option + -", "Command + -", "Control + -"], answer: 1 },
      { q: "What shortcut shows the Volume Automation Lane on the selected track?", options: ["-", "+", "=", "Option + ="], answer: 2 },
      { q: "What shortcut thins selected automation?", options: ["Option + Command + T", "Command + Shift + T", "Control + Option + T", "Option + Shift + T"], answer: 0 },
      { q: "What shortcut clears unused clips?", options: ["Command + Shift + U", "Command + Shift + B", "Option + Shift + B", "Command + Option + B"], answer: 1 },
      { q: "What shortcut selects unused clips?", options: ["Command + Shift + B", "Command + Shift + U", "Option + Shift + U", "Command + Option + U"], answer: 1 },
      { q: "What shortcut shows/hides Audio Clips in the Clips List?", options: ["Command + Shift + 2 on Numpad", "Command + Shift + 1 on Numpad", "Option + Shift + 1", "Control + Shift + 1"], answer: 1 },
      { q: "What shortcut shows/hides MIDI Clips in the Clips List?", options: ["Command + Shift + 1 on Numpad", "Command + Shift + 2 on Numpad", "Option + Shift + 2", "Control + Shift + 2"], answer: 1 },
      { q: "What shortcut creates a new session?", options: ["Command + Shift + N", "Command + N", "Command + Shift + O", "Control + N"], answer: 1 },
      { q: "What shortcut opens a recent session?", options: ["Command + O", "Command + Shift + N", "Command + Shift + O", "Option + O"], answer: 2 },
      { q: "What shortcut bounces the mix?", options: ["Command + B", "Option + Command + B", "Option + Shift + B", "Control + B"], answer: 1 },
      { q: "What shortcut bypasses all plugins on selected tracks?", options: ["Shift + Q", "Shift + A", "Shift + B", "Command + Shift + A"], answer: 1 },
      { q: "What shortcut bypasses all sends on selected tracks?", options: ["Shift + A", "Shift + S", "Shift + Q", "Command + Shift + Q"], answer: 2 },
      { q: "What shortcut closes all floating windows?", options: ["Control + Option + Command + W", "Command + Shift + W", "Option + Command + W", "Control + Command + W"], answer: 0 },
      { q: "What shortcut closes the current session?", options: ["Command + W", "Command + Shift + W", "Control + W", "Option + W"], answer: 1 },
      { q: "What shortcut consolidates clips?", options: ["Option + Shift + 2", "Option + Shift + 3", "Command + Shift + 3", "Control + Shift + 3"], answer: 1 },
      { q: "What shortcut creates fades?", options: ["Command + Shift + F", "Option + F", "Command + F", "Control + F"], answer: 2 },
      { q: "What shortcut duplicates a clip?", options: ["Command + C", "Command + V", "Command + D", "Command + Shift + D"], answer: 2 },
      { q: "What shortcut extends the selection to the beginning?", options: ["Shift + Option + Return", "Shift + Return", "Command + Return", "Option + Return"], answer: 1 },
      { q: "What shortc

(() => {
  const notes = [
    'A small page that works teaches more than a large plan that stays unfinished.',
    'A link is a promise: it should take a reader somewhere real.',
    'Responsive design begins by respecting the smallest screen.',
    'The best first test is to open the page as a reader, not as its author.',
    'Curiosity is enough to begin; careful checking is what makes the result trustworthy.'
  ];

  const quote = document.querySelector('#random-quote');

  if (quote) {
    const note = notes[Math.floor(Math.random() * notes.length)];
    quote.textContent = `“${note}”`;
  }
})();

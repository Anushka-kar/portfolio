const revealCards = () => {
  const cards = document.querySelectorAll('.card');
  const windowHeight = window.innerHeight;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < windowHeight - 100) {
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
};

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);

const burger = document.getElementById('burger');
const header = document.querySelector('.header');
const buttons = document.querySelectorAll('.directions-catalog button');
const cards = document.querySelectorAll('.directions-catalog-name');

// logic for the burger menu
burger.addEventListener('click', () => {
  header.classList.toggle('open');
});

// logic for the FAQ
document.querySelectorAll(".faq-item").forEach(item => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});


function filterCards(category) {
  cards.forEach(card => {
    if(category === 'all' || card.getAttribute('data-category') === category)
    {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

buttons.forEach(button => {
  button.addEventListener('click', function() {
    buttons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    const category = this.getAttribute('data-split');
    filterCards(category);
  });
});

const slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
slides[index].classList.remove('active');
index = (index + 1) % slides.length;
slides[index].classList.add('active');
}, 3000);

const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

let score = 0;
let gameActive = false;

function startGame() {
  score = 0;
  gameActive = true;
  document.getElementById('score').innerText = score;

  setTimeout(() => {
    gameActive = false;
    alert("Time's up! Your score: " + score);
  }, 10000);
}

document.addEventListener('click', function () {
  if (gameActive) {
    score++;
    document.getElementById('score').innerText = score;
  }
});

const elements = document.querySelectorAll('.section, .card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});
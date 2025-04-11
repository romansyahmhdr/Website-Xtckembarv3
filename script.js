let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('show-slide'));

    if (index < 0) slideIndex = slides.length - 1;
    else if (index >= slides.length) slideIndex = 0;
    else slideIndex = index;

    slides[slideIndex].classList.add('show-slide');
}

function moveSlide(n) {
    showSlide(slideIndex + n);
}

// Tampilkan slide pertama saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});

function showPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'flex';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000);
}

// Ganti bagian di dalam eventListener submit:
document.getElementById('kritikSaranForm').addEventListener('submit', function(e) {
  e.preventDefault();
  this.reset();
  showPopup(); // Tampilkan popup
});


  document.getElementById('kritikSaranForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('pesanSukses').style.display = 'block';
    this.reset();
    setTimeout(() => {
      document.getElementById('pesanSukses').style.display = 'none';
    }, 3000);
  });


 
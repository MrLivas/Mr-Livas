// Animation au scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.card').forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.transform = 'translateY(0)';
      card.style.opacity = '1';
    }
  });
});

// Initialisation
document.querySelectorAll('.card').forEach(card => {
  card.style.transform = 'translateY(50px)';
  card.style.opacity = '0';
  card.style.transition = 'all 0.6s ease-out';
});
document.addEventListener('DOMContentLoaded', () => {
  const livas = document.querySelector('.livas-name');
  livas.style.opacity = '0';
  livas.style.transform = 'scale(0.8)';
  setTimeout(() => {
    livas.style.transition = 'all 1.5s ease-out';
    livas.style.opacity = '1';
    livas.style.transform = 'scale(1)';
  }, 300);
});
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".menu");
  const header = document.querySelector("header");

  // Masquer la nav au départ
  nav.style.display = "none";
  nav.style.opacity = 0;
  nav.style.transition = "opacity 0.5s ease";

  window.addEventListener("scroll", function () {
    const headerBottom = header.offsetTop + header.offsetHeight;
    const scrollY = window.scrollY;

    if (scrollY > headerBottom) {
      nav.style.display = "flex";
      setTimeout(() => {
        nav.style.opacity = 1;
      }, 50);
    } else {
      nav.style.opacity = 0;
      setTimeout(() => {
        nav.style.display = "none";
      }, 300);
    }
  });
});

  function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  }

  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  }

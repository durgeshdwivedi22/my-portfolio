// Neon Portfolio Script
document.addEventListener('DOMContentLoaded', () => {

  // YEAR
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Stats Counter
  const counters = document.querySelectorAll('.num');
  counters.forEach(counter => {
    const target = +counter.dataset.target || 0;
    let current = 0;
    const step = Math.max(1, Math.round(target / 40));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        counter.textContent = target;
        clearInterval(interval);
      } else counter.textContent = current;
    }, 24);
  });

  // Modal logic (image preview)
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const modalClose = document.getElementById('modalClose');

  function openModal(src, alt='Preview'){
    modalImage.src = src;
    modalImage.alt = alt;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(){
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    modalImage.src = '';
  }

  // Attach to any element with class .view-image or .cert-thumb
  document.querySelectorAll('.view-image, .cert-thumb, .project-thumb img').forEach(el => {
    el.addEventListener('click', (e) => {
      const src = el.dataset?.src ?? el.getAttribute('src');
      if (src) openModal(src);
    });
  });

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Contact form demo (non-server)
  const form = document.getElementById('contactForm');
  if (form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name?.value || 'Friend';
      alert(`Thanks ${name}! Your message was sent (demo).`);
      form.reset();
    });
  }

  // Entrance animations: fade-in on load
  document.querySelectorAll('.fade-in').forEach((el, i) => {
    el.style.animationDelay = `${i * 120}ms`;
  });
});

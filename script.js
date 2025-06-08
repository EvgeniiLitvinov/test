
  function openModal() {
    document.getElementById('registrationModal').classList.add('open');
  }
  function closeModal() {
    document.getElementById('registrationModal').classList.remove('open');
  }
  function handleBackdropClick(event) {
    if (event.target.id === 'registrationModal') {
      closeModal();
    }
  }
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  // === Используем IntersectionObserver для появления .description ===
  document.addEventListener("DOMContentLoaded", () => {
    const desc = document.getElementById("descriptionSection");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          desc.classList.add("visible");
          observer.unobserve(desc); // Только один раз
        }
      });
    }, {
      threshold: 0.3 // % блока должно быть видно
    });

    observer.observe(desc);
  });
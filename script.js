const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const aboutLink = document.getElementById('aboutLink');
const aboutModal = document.getElementById('aboutModal');
const aboutContent = aboutModal.querySelector('.modal-content');
const aboutClose = document.getElementById('aboutClose');
const contactLink = document.getElementById('contactLink');
const contactModal = document.getElementById('contactModal');
const contactContent = contactModal.querySelector('.modal-content');
const contactClose = document.getElementById('contactClose');

// About Modal Aç-Kapat
aboutLink.addEventListener('click', (e) => {
  e.preventDefault();
  if (wrapper.classList.contains('active-popup')) return;

  aboutModal.style.display = 'flex';
  setTimeout(() => {
    aboutContent.classList.add('active');
  }, 10);
});

aboutClose.addEventListener('click', () => {
  aboutContent.classList.remove('active');
  setTimeout(() => {
    aboutModal.style.display = 'none';
  }, 300);
});

// Contact Modal Aç
contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  if (wrapper.classList.contains('active-popup') || aboutContent.classList.contains('active')) return;

  contactModal.style.display = 'flex';
  setTimeout(() => {
    contactContent.classList.add('active');
  }, 10); // 10ms sonra class ekle ki transition çalışsın
});

// Contact Modal Kapat
contactClose.addEventListener('click', () => {
  contactContent.classList.remove('active');
  setTimeout(() => {
    contactModal.style.display = 'none';
  }, 300); // CSS’teki transition süresi kadar bekle
});


// Giriş & Kayıt
registerLink?.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink?.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

btnPopup?.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});

iconClose?.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
});

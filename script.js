// Botão "Voltar ao Topo"
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.remove('opacity-0');
  } else {
    backToTopButton.classList.add('opacity-0');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Validação do Formulário de Contato
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;

  if (nameInput.value.trim() === '') {
    nameError.classList.remove('hidden');
    isValid = false;
  } else {
    nameError.classList.add('hidden');
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
    emailError.classList.remove('hidden');
    isValid = false;
  } else {
    emailError.classList.add('hidden');
  }

  if (messageInput.value.trim() === '') {
    messageError.classList.remove('hidden');
    isValid = false;
  } else {
    messageError.classList.add('hidden');
  }

  if (isValid) {
    alert('Formulário enviado com sucesso!');
    contactForm.reset();
  }
});

// Efeito de Scroll Suave Personalizado
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
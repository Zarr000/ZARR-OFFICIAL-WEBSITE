
document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully");
});
// Menambahkan efek scrolling yang halus
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('sticky', window.scrollY > 0);
});

// Menambahkan efek hover pada navbar
const navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach(link => {
  link.addEventListener('mouseover', function() {
    link.style.transform = 'scale(1.1)';
  });
  link.addEventListener('mouseout', function() {
    link.style.transform = 'scale(1)';
  });
});

// Menambahkan efek fade-in pada elemen-elemen halaman
const elements = document.querySelectorAll('.fade-in');
elements.forEach(element => {
  element.style.opacity = 0;
  window.addEventListener('scroll', function() {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });
});

// Menambahkan efek pulse pada elemen-elemen halaman
const pulseElements = document.querySelectorAll('.pulse');
pulseElements.forEach(element => {
  element.addEventListener('mouseover', function() {
    element.style.animation = 'pulse 1s infinite';
  });
  element.addEventListener('mouseout', function() {
    element.style.animation = '';
  });
});
// Menambahkan efek scrolling yang halus
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('sticky', window.scrollY > 0);
});

// Menambahkan efek hover pada navbar
const navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach(link => {
  link.addEventListener('mouseover', function() {
    link.style.transform = 'scale(1.1)';
    link.style.transition = 'all 0.3s ease';
  });
  link.addEventListener('mouseout', function() {
    link.style.transform = 'scale(1)';
    link.style.transition = 'all 0.3s ease';
  });
});

// Menambahkan efek fade-in pada elemen-elemen halaman
const elements = document.querySelectorAll('.fade-in');
elements.forEach(element => {
  element.style.opacity = 0;
  window.addEventListener('scroll', function() {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
      element.style.transition = 'all 1s ease';
    }
  });
});

// Menambahkan efek pulse pada elemen-elemen halaman
const pulseElements = document.querySelectorAll('.pulse');
pulseElements.forEach(element => {
  element.addEventListener('mouseover', function() {
    element.style.animation = 'pulse 1s infinite';
  });
  element.addEventListener('mouseout', function() {
    element.style.animation = '';
  });
});

// Menambahkan efek ripple pada tombol
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.width = '100px';
    ripple.style.height = '100px';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.5)';
    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    ripple.style.animation = 'ripple 1s linear';
    button.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 1000);
  });
});

// Menambahkan efek loading pada halaman
window.addEventListener('load', function() {
  const loader = document.querySelector('.loader');
  loader.style.opacity = 0;
  setTimeout(() => {
    loader.style.display = 'none';
  }, 1000);
});

// Menambahkan efek scrolling yang halus
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('sticky', window.scrollY > 0);
});

// Menambahkan efek hover pada navbar
const navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach(link => {
  link.addEventListener('mouseover', function() {
    link.classList.add('hover');
  });
  link.addEventListener('mouseout', function() {
    link.classList.remove('hover');
  });
});

// Menambahkan efek fade-in pada elemen-elemen halaman
const elements = document.querySelectorAll('.fade-in');
elements.forEach(element => {
  element.classList.add('hidden');
  window.addEventListener('scroll', function() {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      element.classList.remove('hidden');
      element.classList.add('visible');
    }
  });
});

// Menambahkan efek pulse pada elemen-elemen halaman
const pulseElements = document.querySelectorAll('.pulse');
pulseElements.forEach(element => {
  element.addEventListener('mouseover', function() {
    element.classList.add('pulse-animation');
  });
  element.addEventListener('mouseout', function() {
    element.classList.remove('pulse-animation');
  });
});

// Menambahkan efek ripple pada tombol
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    button.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 1000);
  });
});

// Menambahkan efek loading pada halaman
window.addEventListener('load', function() {
  const loader = document.querySelector('.loader');
  loader.classList.add('hidden');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 1000);
});


body {
  background: radial-gradient(circle at center, #000000 0%, #050d0d 100%);
  overflow-x: hidden;
}

.neon-button {
  color: #fff;
  border: 2px solid #00f0ff;
  box-shadow: 0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 30px #00f0ff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.neon-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px #00f0ff, 0 0 25px #00f0ff;
}

.menu-box {
  backdrop-filter: blur(12px);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.1);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-in {
  opacity: 1 !important;
  transform: scale(1) !important;
  pointer-events: auto !important;
}

.glow-text {
  text-shadow: 0 0 10px #00f0ff;
}

document.querySelector('.img-content').addEventListener('click', function() {
  this.classList.add('clicked');
  setTimeout(() => {
    this.classList.remove('clicked');
  }, 500);
});

document.querySelectorAll('.img-content').forEach(element => {
  element.addEventListener('focus', () => {
    element.blur();
  });
});

document.querySelectorAll('*').forEach(element => {
  element.addEventListener('focus', () => {
    element.blur();
  });
});
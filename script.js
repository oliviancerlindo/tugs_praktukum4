const menuToggle = document.getElementById('menuToggle');
const navLinksContainer = document.getElementById('navLinks');

function closeMenu() {
  navLinksContainer.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

function toggleMenu() {
  const isOpen = navLinksContainer.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
}

menuToggle.addEventListener('click', toggleMenu);

navLinksContainer.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

function makeActive() {
  let index = sections.length;

  if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight - 10) {
   
    navItems.forEach((a) => a.classList.remove("active"));
    if(navItems.length > 0) navItems[navItems.length - 1].classList.add("active");
    return;
  }

  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
 
  navItems.forEach((a) => a.classList.remove("active"));

  if (navItems[index]) {
      navItems[index].classList.add("active");
  }
}

window.addEventListener("scroll", makeActive);

makeActive();

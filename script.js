// ==========================================
// 1. MENU HAMBURGER (Sesuai kode awal Anda)
// ==========================================
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

// Tutup menu saat salah satu link navigasi diklik (memudahkan navigasi di mobile)
navLinksContainer.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});


// ==========================================
// 2. SCROLLSPY (Highlight Navbar Aktif)
// ==========================================
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

// Fungsi untuk menentukan bagian mana yang sedang aktif
function makeActive() {
  let index = sections.length;

  // Cek jika posisi scroll berada di paling bawah halaman
  if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight - 10) {
    // Jika ya, aktifkan tautan terakhir (Kontak)
    navItems.forEach((a) => a.classList.remove("active"));
    if(navItems.length > 0) navItems[navItems.length - 1].classList.add("active");
    return;
  }

  // Iterasi mundur melalui semua section
  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
  
  // Hapus class 'active' dari semua tautan
  navItems.forEach((a) => a.classList.remove("active"));

  // Tambahkan class 'active' ke tautan yang sesuai, jika ada
  if (navItems[index]) {
      navItems[index].classList.add("active");
  }
}

// Panggil fungsi makeActive setiap kali halaman di-scroll
window.addEventListener("scroll", makeActive);

// Panggil sekali saat halaman pertama kali dimuat
makeActive();
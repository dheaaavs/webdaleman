// Toggle tampilan menu mobile
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");

  mobileMenu.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
}

// Tampilkan alert tentang informasi padukuhan
function showAbout() {
  alert(
    "Selamat datang di Website Resmi Padukuhan Daleman!\n\nKami adalah bagian dari Kalurahan Girikerto, Kapanewon Turi, Kabupaten Sleman, Yogyakarta.\n\nWebsite ini menyediakan informasi tentang profil desa, struktur organisasi, dan cara menghubungi kami."
  );
}

// Tutup menu mobile saat klik di luar area menu
document.addEventListener("click", function (event) {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuButton = document.querySelector(".mobile-menu-btn");

  if (
    !mobileMenu.contains(event.target) &&
    !menuButton.contains(event.target) &&
    !mobileMenu.classList.contains("hidden")
  ) {
    toggleMobileMenu();
  }
});

// Sembunyikan menu mobile saat window diubah ke ukuran desktop
window.addEventListener("resize", function () {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");

  if (window.innerWidth >= 768 && !mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
});

// Scroll halus untuk anchor link internal (jika ada)
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});

// Dropdown mobile toggle
const dropdownToggleMobile = document.querySelector('.dropdown-toggle-mobile');
const dropdownMenuMobile = document.querySelector('.dropdown-menu-mobile');

if (dropdownToggleMobile && dropdownMenuMobile) {
  dropdownToggleMobile.addEventListener('click', () => {
    dropdownMenuMobile.classList.toggle('show');
  });
}

// Tanaman
new Swiper(".tanaman-swiper", {
  loop: true,
  autoplay: {
    delay: 3000, // dalam milidetik (3000 = 3 detik)
    disableOnInteraction: false, // tetap autoplay walau user klik tombol
  },
  navigation: {
    nextEl: ".tanaman-next",
    prevEl: ".tanaman-prev",
  },
});

// Hewan
new Swiper(".hewan-swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".hewan-next",
    prevEl: ".hewan-prev",
  },
});

// Sungai
new Swiper(".sungai-swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".sungai-next",
    prevEl: ".sungai-prev",
  },
});

// Kawi Dasri
new Swiper(".kawi-swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".kawi-next",
    prevEl: ".kawi-prev",
  },
});


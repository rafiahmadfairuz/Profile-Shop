

var navbarToggler = document.querySelector('.navbar-toggler')
var navbarIcon = navbarToggler.querySelector('.navbar-toggler-icon');

function toggleNavbar() {
    
    if (navbarIcon.classList.contains('btn-close')) {
        navbarIcon.classList.remove('btn-close');
    } else {
        navbarIcon.classList.add('btn-close');
    }
}


navbarToggler.addEventListener('click', toggleNavbar);

const scrollToTopBtn = document.querySelector(".up");

// Fungsi untuk menunjukkan atau menyembunyikan tombol scroll to top
function toggleScrollToTopButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Event listener saat melakukan scroll
window.onscroll = function() {
  toggleScrollToTopButton();
};

// Event listener saat tombol scroll to top ditekan
scrollToTopBtn.addEventListener("click", function() {
  document.body.scrollTop = 0; // Untuk Safari
  document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE, dan Opera
});



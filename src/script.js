var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});


// TypeText
const texts = ["FrontEnd Web Developer.", "Designer."]; // Array teks yang akan ditampilkan
let index = 0;
let textIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentText = texts[textIndex];
  if (!isDeleting) {
    document.getElementById('typewriter').textContent = currentText.slice(0, ++index);
  } else {
    document.getElementById('typewriter').textContent = currentText.slice(0, --index);
  }

  if (index === currentText.length + 1) {
    isDeleting = true;
    setTimeout(typeWriter, 1000); // Delay sebelum menghapus teks
  } else if (index === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length; // Melakukan loop ke teks berikutnya
    setTimeout(typeWriter, 500); // Delay sebelum menampilkan teks berikutnya
  } else {
    const typingSpeed = isDeleting ? 50 : 150; // Kecepatan mengetik
    setTimeout(typeWriter, typingSpeed); // Mengatur kecepatan mengetik
  }
}

typeWriter(); // Memanggil fungsi untuk memulai efek mengetik


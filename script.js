const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

function showImage(idx) {
    const offset = -idx * 100; // Calculate the offset percentage
    gallery.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : images.length - 1;
    showImage(index);
});

nextBtn.addEventListener('click', () => {
    index = (index < images.length - 1) ? index + 1 : 0;
    showImage(index);
});

// Initialize gallery to show the first image
showImage(index);

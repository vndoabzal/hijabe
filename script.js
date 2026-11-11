

document.addEventListener("DOMContentLoaded", function () {
const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            const href = link.getAttribute('href');
            const target = document.querySelector(href);

            if (!target) return;

            event.preventDefault();

            const header = document.querySelector('header');
            const headerHeight = header
                ? header.offsetHeight
                : 0;

            const startY = window.scrollY;
            const targetY = Math.max(
                0,
                startY + target.getBoundingClientRect().top
                - headerHeight - 10
            );

            const distance = targetY - startY;
            const width = window.innerWidth;

            const duration = width <= 600 ? 1700 :
                             width <= 1024 ? 1500 : 1300;

            let startTime = null;

            /** @param {number} time */
function animate(time) {
                if (startTime === null) startTime = time;

                const progress = Math.min(
                    (time - startTime) / duration,
                    1
                );

                const eased = 0.5 - 0.5 *
                    Math.cos(Math.PI * progress);

                window.scrollTo(
                    0,
                    startY + distance * eased
                );

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            }

            requestAnimationFrame(animate);
        });
    });
});


// GANTI FOTO UTAMA SAAT MOTIF DIPILIH

/**
 * @param {HTMLImageElement} motif
 */
window.changeMotif = function (motif) {
    const card = motif.closest('.product-card');
    if (!card) return;

    const mainImage = card.querySelector('.main-product');

    if (mainImage) {
        mainImage.src = motif.src;
    }

    const motifs = card.querySelectorAll('.motif-list img');

    motifs.forEach((img) => {
        img.classList.remove('active');
    });

    motif.classList.add('active');
};

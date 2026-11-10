
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(function (link) {
        link.addEventListener('click', function () {
            const target = document.querySelector(link.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

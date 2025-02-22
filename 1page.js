// Функция для плавного появления блока с контактами при прокрутке
window.addEventListener('scroll', function() {
    var contactSection = document.querySelector('.contact-section');
    var scrollPosition = window.scrollY + window.innerHeight;
    var contactPosition = contactSection.offsetTop + contactSection.offsetHeight;

    if (scrollPosition > contactPosition) {
        contactSection.classList.add('show'); // Добавляем класс для анимации
    }
});

// Функция прокрутки к блоку с контактами
function scrollToContacts() {
    document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' });
}

function scrollToPortfolio() {
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
}

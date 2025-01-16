document.addEventListener("DOMContentLoaded", () => {
    const cookieConsent = document.getElementById("cookieConsent");
    const acceptButton = document.getElementById("acceptCookies");
    const rejectButton = document.getElementById("rejectCookies");

    // Verifica se o usuário já aceitou ou rejeitou os cookies
    const cookiesStatus = localStorage.getItem("cookiesStatus");
    if (cookiesStatus === "accepted" || cookiesStatus === "rejected") {
        cookieConsent.style.display = "none";
    }

    // Quando o usuário clica em "Aceitar"
    acceptButton.addEventListener("click", () => {
        localStorage.setItem("cookiesStatus", "accepted");
        cookieConsent.style.display = "none";
    });

    // Quando o usuário clica em "Rejeitar"
    rejectButton.addEventListener("click", () => {
        localStorage.setItem("cookiesStatus", "rejected");
        cookieConsent.style.display = "none";
        alert("Você rejeitou os cookies. Algumas funcionalidades podem ser limitadas.");
    });
});

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

let currentSlide = 0;
    
        function moveSlide(direction) {
            const images = document.querySelectorAll('.carousel-image');
            const totalImages = images.length;
            
            currentSlide += direction;
            if (currentSlide < 0) {
                currentSlide = totalImages - 1;
            } else if (currentSlide >= totalImages) {
                currentSlide = 0;
            }
    
            document.querySelector('.carousel-images').style.transform = `translateX(-${currentSlide * 100}%)`;
        }

emailjs.init('gR6m-VYxpvUvz5iu4'); // Inicialize o EmailJS

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Coleta os dados do formulário
    const templateParams = {
        nome: document.querySelector("#nome").value,
        email: document.querySelector("#email").value,
        mensagem: document.querySelector("#mensagem").value
    };

    // Envia o e-mail usando EmailJS
    emailjs.send('service_wawcwfh', 'template_xq3omc9', templateParams)
        .then(function(response) {
            console.log('E-mail enviado com sucesso!', response);
            alert('E-mail enviado com sucesso!');
            location.reload(); // Recarrega a página
        }, function(error) {
            console.log('Erro ao enviar o e-mail:', error);
            alert('Falha ao enviar o e-mail.');
        });
});

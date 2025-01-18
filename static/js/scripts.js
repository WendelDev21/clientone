document.addEventListener("DOMContentLoaded", () => {
    const cookieConsent = document.getElementById("cookieConsent");
    const acceptButton = document.getElementById("acceptCookies");
    const rejectButton = document.getElementById("rejectCookies");

    // Verifica se o usuário aceitou os cookies
    const cookiesStatus = localStorage.getItem("cookiesStatus");
    if (cookiesStatus === "accepted") {
        cookieConsent.style.display = "none"; // Esconde o aviso se aceito
    }

    // Quando o usuário clica em "Aceitar"
    acceptButton.addEventListener("click", () => {
        localStorage.setItem("cookiesStatus", "accepted");
        cookieConsent.style.display = "none";
    });

    // Quando o usuário clica em "Rejeitar"
    rejectButton.addEventListener("click", () => {
        cookieConsent.style.display = "none"; // Apenas esconde, sem salvar no localStorage
    });
});

const toggleMenu = document.querySelector('.toggle-menu');
const navLinks = document.querySelector('.nav-links');

toggleMenu.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

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
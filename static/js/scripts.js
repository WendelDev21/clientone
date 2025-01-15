const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
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

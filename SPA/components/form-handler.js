document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    const auctionForm = document.getElementById('auctionForm');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do botão
        auctionForm.reset(); // Limpa os campos do formulário
    });
});
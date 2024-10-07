// Roteamento simples com caminhos para arquivos HTML
const routes = {
    '#home': 'pages/home.html',    // Rota para a página inicial
    '#about': 'pages/about.html',  // Rota para a página "Sobre"
    '#contact': 'pages/contact.html' // Rota para a página "Contato"
};

// Função para carregar conteúdo de arquivo HTML
function loadContent(page) {
    fetch(page) // Faz uma requisição para carregar o conteúdo da página
        .then(response => {
            if (!response.ok) { // Se a resposta não for bem-sucedida
                throw new Error('Page not found'); // Lança um erro
            }
            return response.text(); // Retorna o conteúdo da página como texto
        })
        .then(html => {
            document.getElementById('app').innerHTML = html; // Insere o conteúdo da página no elemento com id "app"
        })
        .catch(error => {
            showErrorPage(); // Exibe a página de erro se ocorrer um erro
        });
}

// Função para exibir a página de erro
function showErrorPage() {
    const errorContent = `
        <div class="error-message">
            <p>Essa página ainda não existe. Vamos te redirecionar para a página inicial.</p>
        </div>
    `;
    document.getElementById('app').innerHTML = errorContent; // Insere a mensagem de erro no elemento com id "app"

    setTimeout(function() {
        window.location.href = '#home'; // Redireciona para a página inicial após 5 segundos
    }, 5000);
}

// Função para navegar entre as rotas
function navigate() {
    const hash = window.location.hash || '#home'; // Obtém o hash da URL ou define como '#home' se não houver hash
    const page = routes[hash] || null; // Obtém a página correspondente ao hash ou define como null se não existir
    if (page) {
        loadContent(page); // Carrega o conteúdo da página
    } else {
        showErrorPage(); // Exibe a página de erro se a rota não for encontrada
    }
}

// Ouve a mudança no hash da URL
window.addEventListener('hashchange', navigate);

// Carrega a página inicial
window.addEventListener('load', navigate);

// Definição do componente CustomButton
class CustomButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Anexa uma shadow DOM ao elemento
        const button = document.createElement('button'); // Cria um elemento botão
        button.textContent = this.textContent; // Define o texto do botão como o conteúdo do elemento
        this.shadowRoot.appendChild(button); // Adiciona o botão à shadow DOM
    }
}

// Define o elemento custom-button
customElements.define('custom-button', CustomButton);

// Adiciona um evento de submissão ao formulário com id 'auctionForm'
document.getElementById('auctionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão de submissão do formulário
    const name = document.getElementById('name').value; // Obtém o valor do campo 'name'
    const age = document.getElementById('age').value; // Obtém o valor do campo 'age'
    const email = document.getElementById('email').value; // Obtém o valor do campo 'email'
    const bid = document.getElementById('bid').value; // Obtém o valor do campo 'bid'
    console.log(`Nome: ${name}, Idade: ${age}, Email: ${email}, Valor do Lance: ${bid}`); // Exibe os valores no console
    this.reset(); // Limpa os campos do formulário
});
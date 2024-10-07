class AboutButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
    }

    connectedCallback() {
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'components/buttonComponent.css');

        this.shadowRoot.innerHTML = `
            <button class="buttonComponent"><slot></slot></button>
        `;

        this.shadowRoot.appendChild(linkElem);
    }
}

customElements.define('button-component', AboutButton);
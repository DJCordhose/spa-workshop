// https://www.webcomponents.org/
// https://developers.google.com/web/fundamentals/architecture/building-components/

// https://developer.mozilla.org/en-US/docs/Web/Web_Components
//   https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements
//   https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots

import template from './template.js'

class MyElement extends HTMLElement {
    static get observedAttributes() {
        return ['greeting'];
    }
    constructor() {
        super();
        this.render();
    }

    // https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks
    connectedCallback() {
        console.log('connected');
        this.bind();
        this.model = this.getAttribute("greeting");
    }

    disconnectedCallback() {
        console.log('disconnected');
    }

    bind() {
        this.input.addEventListener("keyup", event => this.model = event.target.value);
        this.button.addEventListener("click", event => {
            this.model = "";
            this.input.focus();
        });
    }

    render() {
        // https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true)); // deep clone
        this.input = this.shadowRoot.querySelector("#in");
        this.log = this.shadowRoot.querySelector("#log");
        this.button = this.shadowRoot.querySelector("#btn");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Attribute Changed');
        if (name === "greeting") {
            this.model = newValue;
        }
    }

    set model(value) {
        this.log.textContent = value;
        this.input.value = value;
        this._model = value;
        this.dispatchEvent(new CustomEvent('model-changed', {detail: value}));
    }

    get model() {
        return this._model;
    }
}

customElements.define('my-element', MyElement);
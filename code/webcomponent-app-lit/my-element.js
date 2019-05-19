var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css, property, customElement } from 'lit-element';
let MyElement = class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        this.greeting = 'Hello';
    }
    // https://lit-element.polymer-project.org/guide/styles
    static get styles() {
        return css `
        :host {
            all: initial;
            color: green;
        }
        p {
            background: var(--my-element-bg, #9E9E9E);
        }`;
    }
    render() {
        return html `
        <input value="${this.greeting}" @keyup="${(event) => this.greeting = event.target.value}">
        <slot></slot>
        <p>${this.greeting}, World</p>
        <input type="button" value="Clear" @click="${this.handleClick}">
        <slot name="after"></slot>
        `;
    }
    handleClick() {
        this.greeting = '';
    }
};
__decorate([
    property()
], MyElement.prototype, "greeting", void 0);
MyElement = __decorate([
    customElement('my-element')
], MyElement);
//# sourceMappingURL=my-element.js.map
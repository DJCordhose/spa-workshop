import { LitElement, html, css, property, customElement } from 'lit-element'

@customElement('my-element')
export default class MyElement extends LitElement {
    @property() greeting: string = 'Hello';

    // turns off shadow dom
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
        <input value="${this.greeting}" @keyup="${(event: any) => this.handleChange(event.target.value)}">
        <slot></slot>
        <p>${this.greeting}, World</p>
        <input type="button" value="Clear" @click="${this.handleClick}">
        <slot name="after"></slot>
        `
    }

    handleChange(newValue: string) {
        this.greeting = newValue;
        this.dispatchEvent(new CustomEvent('model-changed', { detail: this.greeting }));
    }

    handleClick() {
        this.handleChange("");
    }
}

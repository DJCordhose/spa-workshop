import { LitElement, html, css, property, customElement } from 'lit-element'

@customElement('my-element')
export default class MyElement extends LitElement {
    @property() greeting: string = 'Hello';

    // https://lit-element.polymer-project.org/guide/styles
    static get styles() {
        return css`
        :host {
            all: initial;
            color: green;
        }
        p {
            background: var(--my-element-bg, #9E9E9E);
            font-size: var(--my-app-font-size);
        }`;
      } 

    render() {
        return html`
        <input value="${this.greeting}" @keyup="${(event: any) => this.greeting = event.target.value}">
        <slot></slot>
        <p>${this.greeting}, World</p>
        <input type="button" value="Clear" @click="${this.handleClick}">
        <slot name="after"></slot>
        `
    }

    handleClick() {
        this.greeting = '';
    }
}

import { customElement, html, LitElement, query, unsafeCSS } from 'lit-element';

import '@vaadin/vaadin-button/vaadin-button';
import '@vaadin/vaadin-form-layout/vaadin-form-item';
import '@vaadin/vaadin-form-layout/vaadin-form-layout';
import '@vaadin/vaadin-notification/vaadin-notification';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-text-field/vaadin-text-area';
import '@vaadin/vaadin-text-field/vaadin-text-field';

import { EndpointError } from '@vaadin/flow-frontend/Connect';

// import the remote endpoint
import * as PersonEndpoint from '../../generated/PersonEndpoint';

// import types used in the endpoint
import Person from '../../generated/com/example/application/data/entity/Person';

// utilities to import style modules
import { CSSModule } from '@vaadin/flow-frontend/css-utils';

import styles from './form-view.css';

@customElement('form-view')
export class FormViewElement extends LitElement {
  static get styles() {
    return [CSSModule('lumo-typography'), unsafeCSS(styles)];
  }

  @query('#firstName')
  private firstName: any;

  @query('#lastName')
  private lastName: any;

  @query('#email')
  private email: any;

  @query('#notification') private notification: any;

  render() {
    return html`
      <vaadin-vertical-layout id="wrapper" theme="padding">
        <h1>Form</h1>
        <vaadin-form-layout>
          <vaadin-form-item>
            <label slot="label">First name</label>
            <vaadin-text-field id="firstName" class="full-width"></vaadin-text-field>
          </vaadin-form-item>
          <vaadin-form-item>
            <label slot="label">Last name</label>
            <vaadin-text-field class="full-width" id="lastName"></vaadin-text-field>
          </vaadin-form-item>
          <vaadin-form-item colspan="2">
            <label slot="label">Email</label>
            <vaadin-text-field class="full-width" id="email"></vaadin-text-field>
          </vaadin-form-item>
        </vaadin-form-layout>
        <vaadin-horizontal-layout id="button-layout" theme="spacing">
          <vaadin-button theme="tertiary" @click="${this.clearForm}">
            Cancel
          </vaadin-button>
          <vaadin-button theme="primary" @click="${this.save}">
            Save
          </vaadin-button>
        </vaadin-horizontal-layout>
        <vaadin-notification duration="5000" id="notification"> </vaadin-notification>
      </vaadin-vertical-layout>
    `;
  }

  private async save() {
    const employee: Person = {
      id: -1,
      email: this.email.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
    };
    try {
      await PersonEndpoint.update(employee);
    } catch (error) {
      if (error instanceof EndpointError) {
        this.notification.renderer = (root: Element) => {
          root.textContent = `Server error. ${error.message}`;
        };
        this.notification.open();
      } else {
        throw error;
      }
    }
  }

  private clearForm() {
    this.firstName.value = '';
    this.lastName.value = '';
    this.email.value = '';
  }
}

import { LitElement, html, css } from 'https://unpkg.com/lit-element?module';
import { styleMap } from 'https://unpkg.com/lit-html/directives/style-map?module';

import * as Utils from '/js/utils.js';


class RandomColorButton extends LitElement {

  static get properties() {
    return {
      color: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        position: absolute;
        height: 3rem;
        width: 3rem;
      }

      button {
        width: 100%;
        height: 100%;
      }
    `;
  }

  constructor() {
    super();
    this.color = this.randomColor();
  }

  connectedCallback() {
    super.connectedCallback();

    Utils.randomPosition(this);
  }

  render() {
    return html`
      <button style=${styleMap({ 
        backgroundColor: this.color 
      })}></button>
    `;
  }

  randomColor = () => `#${Math.random().toString(16).slice(-6)}`;
}

customElements.define('random-color-button', RandomColorButton);
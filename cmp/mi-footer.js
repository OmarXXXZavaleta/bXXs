class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Zavaleta Angeles Omar.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
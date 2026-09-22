class Header extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/`
      <style>
        *{
          box-sizing: border-box;
        }
        header{
          background-color: hsl(39, 100%, 50%);
          width: 100%;
          height: 6vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1rem;
        }
      </style>

      <header>
        <slot></slot>
      </header>
    `

  }
}

customElements.define('header-component', Header);

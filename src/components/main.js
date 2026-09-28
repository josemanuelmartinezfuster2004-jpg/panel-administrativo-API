class Main extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadow.innerHTML = /*html*/`
      <style>
        *{
          box-sizing: border-box;
        }
        
        main {
          display: grid;
          grid-template-columns: 1.5fr 4fr;
          grid-template-rows: 1fr;
          height: 90%;
          padding: 1rem;
          gap: 1rem;
        }
      </style>

      <main>
        <slot></slot>
      </main>
    `

  }
}

customElements.define('main-component', Main);

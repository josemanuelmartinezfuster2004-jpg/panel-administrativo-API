class Titulo extends HTMLElement {
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
        h1{
          color:hsl(0,0%,100%);
          font-size:1.2rem;
          font-weight:bold;
          text-transform:capitalize;
        }
      </style>

      <div class="title">
        <h1>Administrador web - Usuario</h1>
      </div>
    `
  }
}

customElements.define('titulo-component', Titulo);

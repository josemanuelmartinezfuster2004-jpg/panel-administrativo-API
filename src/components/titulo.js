class Titulo extends HTMLElement {
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
        .nombre-web{
          text-align:center;
        }

        .nombre-web p{
          color:hsl(0,0%,100%);
          font-size:1.2rem;
          font-weight:bold;
          text-transform:capitalize;
        }
      </style>

      <div class="nombre-web">
        <p>Administrador web - Usuario</p>
      </div>
    `
  }
}

customElements.define('titulo-component', Titulo);

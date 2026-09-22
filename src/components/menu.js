class Menu extends HTMLElement {
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
        .menu-principal{
          position:relative;
        }

        .svg-menu{
          width:3rem;
          height:3rem;
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:.5rem;
          transition:background-color .2s;
        }

        .svg-menu:hover{
          background-color:hsl(0,70%,45%);
        }

        .svg-menu svg{
          width:100%;
          height:100%;
          fill:hsl(0,0%,100%);
          
        }

        .opciones-menu{
          position:absolute;
          right:0;
          top:4rem;
          width:12rem;
          display:flex;
          flex-direction:column;
          background-color:hsl(0,0%,100%);
          border:none;
          border-radius:.6rem;
          box-shadow:0 .5rem 1.5rem hsl(0,0%,0%,.15);
          overflow:hidden;
          opacity:0;
          visibility:hidden;
          transform:translateY(-.5rem);
          transition:opacity .2s,transform .2s,visibility .2s;
        }

        .opciones-menu.mostrar{
          opacity:1;
          visibility:visible;
          transform:translateY(0);
        }

        .opciones-menu div{
          padding:1rem;
          cursor:pointer;
          transition:background-color .2s;
        }

        .opciones-menu div:hover{
          background-color:hsl(0,0%,94%);
        }

        .opciones-menu p{
          margin:0;
          text-transform:capitalize;
        }
      </style>

      <div class="menu-principal">
        <div class="svg-menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>menu</title>
            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
          </svg>
        </div>

        <div class="opciones-menu">
          <div class="usuarios">
            <p>usuarios</p>
          </div>
          <div class="pedidos">
            <p>pedidos</p>
          </div>
          <div class="reservas">
            <p>reservas</p>
          </div>
        </div>
      </div>
    `;

    const menu = this.shadowRoot.querySelector('.svg-menu');
    const opciones = this.shadowRoot.querySelector('.opciones-menu');

    menu.addEventListener('click', () => {
      opciones.classList.toggle('mostrar');
    });
  }
}

customElements.define('menu-component', Menu);
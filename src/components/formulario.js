class Formulario extends HTMLElement {
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
          box-sizing:border-box;
          margin:0;
          padding:0;
        }

        .caja-form{
          display:flex;
          flex-direction:column;
        }

        .opciones-form{
          display:flex;
          align-items:stretch;
          width:100%;
          height:3rem;
          border-bottom:.15rem solid hsl(39,100%,50%);
        }

        .titulo-apartado{
          display:flex;
          align-items:center;
          justify-content:center;
          padding:0 1rem;
          background-color:hsl(39,100%,50%);
          width:auto;
          height:3rem;
        }

        .titulo-apartado p{
          color:hsl(0,0%,100%);
          font-weight:bold;
          text-transform:capitalize;
        }

        .caja-opciones-form{
          display:flex;
          align-items:center;
          margin-left:auto;
          gap:.5rem;
          padding:0;
        }

        .limpiar,
        .guardar{
          width:3rem;
          height:3rem;
          background-color:hsl(39,100%,50%);
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .limpiar svg,
        .guardar svg{
          width:2rem;
          height:2rem;
          fill:hsl(0,0%,100%);
        }

        .formulario{
          width:100%;
          background-color:hsl(0,0%,100%);
          padding:0 1rem;
        }

        form{
          padding:1rem 0;
          display:flex;
          gap:1rem;
          width:100%;
          min-height:7rem;
        }

        .campo{
          width:100%;
          padding:.5rem;
        }

        .campo p{
          margin-bottom:.5rem;
        }

        .campo input{
          width:100%;
          border:none;
          outline:none;
          min-height:1.5rem;
          background-color:hsl(0,0%,100%);
          padding:.5rem;
          border:2px solid hsl(0,0%,90%);
        }
      </style>

      <div class="caja-form">
        <div class="opciones-form">
          <div class="titulo-apartado">
            <p>General</p>
          </div>

          <div class="caja-opciones-form">
            <div class="limpiar">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>broom</title>
                <path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" />
              </svg>
            </div>

            <div class="guardar">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H11.81C11.42 20.34 11.17 19.6 11.07 18.84C9.5 18.31 8.66 16.6 9.2 15.03C9.61 13.83 10.73 13 12 13C12.44 13 12.88 13.1 13.28 13.29C15.57 11.5 18.83 11.59 21 13.54V7L17 3M15 9H5V5H15V9M15.75 21L13 18L14.16 16.84L15.75 18.43L19.34 14.84L20.5 16.25L15.75 21" />
              </svg>
            </div>
          </div>
        </div>

        <div class="formulario">
          <form>
            <div class="campo">
              <p>Nombre</p>
              <input type="text">
            </div>

            <div class="campo">
              <p>Email</p>
              <input type="email">
            </div>
          </form>
        </div>
      </div>
    `


  }
}

customElements.define('formulario-component', Formulario);

class Tabla extends HTMLElement {
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
        
        .caja-registros{
          display:flex;
          flex-direction:column;
        }

        .opciones-registros{
          display:flex;
          align-items:stretch;
          width:100%;
          height:3rem;
          border-bottom:.15rem solid hsl(39,100%,50%);
        }

        .filtro{
          background-color:hsl(39,100%,50%);
          width:3rem;
          height:3rem;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .filtro svg{
          width:2rem;
          height:2rem;
          fill:hsl(0,0%,100%);
        }

        .paginas{
          background-color:hsl(39,100%,50%);
          display:flex;
          align-items:center;
          justify-content:center;
          gap:1rem;
          width:7rem;
          height:3rem;
          margin-left:auto;
        }

        .paginas p{
          color:hsl(0,0%,100%);
          font-weight:bold;
        }

        .atras,
        .adelante{
          cursor:pointer;
        }

        .registros{
          display:flex;
          flex-direction:column;
          margin-top:1rem;
          background-color:hsl(0,0%,100%);
        }

        .registro{
          min-height:6rem;
          padding:1rem;
          background-color:hsl(0,0%,100%);
          border:2px solid hsl(39,100%,50%);
        }

        .registro p{
          margin-bottom:.5rem;
        }

        .registro p:last-child{
          margin-bottom:0;
        }
      </style>

      <div class="caja-registros">
        <div class="opciones-registros">
          <div class="filtro">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 12V19.88C12.04 20.18 11.94 20.5 11.71 20.71C11.32 21.1 10.69 21.1 10.3 20.71L8.29 18.7C8.06 18.47 7.96 18.16 8 17.87V12H7.97L2.21 4.62C1.87 4.19 1.95 3.56 2.38 3.22C2.57 3.08 2.78 3 3 3H17C17.22 3 17.43 3.08 17.62 3.22C18.05 3.56 18.13 4.19 17.79 4.62L12.03 12H12M17.75 21L15 18L16.16 16.84L17.75 18.43L21.34 14.84L22.5 16.25L17.75 21" />
            </svg>
          </div>

          <div class="paginas">
            <div class="atras">
              <p>&lt;</p>
            </div>

            <div class="pagina">
              <p>1 / 1</p>
            </div>

            <div class="adelante">
              <p>&gt;</p>
            </div>
          </div>
        </div>

        <div class="registros">
          <div class="registro">
            <p><strong>Nombre:</strong> jose</p>
            <p><strong>Email:</strong> josemanuelmarinezfuster2004@gmail.com</p>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('tabla-component', Tabla);

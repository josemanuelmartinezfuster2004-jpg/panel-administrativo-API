export default (() => {

  class Login extends HTMLElement {
    constructor() {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
      this.titulo = this.getAttribute('titulo') || 'Login'
    }

    connectedCallback() {
      this.render()
    }

    render() {
      this.shadow.innerHTML = /*html*/`
        <style>
          .login {
            width: 20rem;
            display: grid;
            gap: 0.8rem;
            padding: 2rem;
          }

          h1 {
            color: hsl(39,100%,50%);
            font-size: 1.5rem;
            text-align: center;
            padding: 0.5rem;
          }

          label {
            color: hsl(39,100%,50%);
            font-size: 0.8rem;
          }

          input {
            height: 2rem;
            box-sizing: border-box;
          }

          button {
            height: 2rem;
            border: none;
            border-radius: 0.3rem;
            background-color: hsl(39,100%,50%);
            color: hsl(0,0%,0%);
            cursor: pointer;
          }

          a {
            color: hsl(39,100%,50%);
            font-size: 0.8rem;
            text-align: center;
          }
        </style>

        <form class="login">
          <h1>${this.titulo}</h1>

          <label for="email">Email</label>
          <input type="email" id="email">

          <label for="password">Contraseña</label>
          <input type="password" id="password">

          <button type="submit">Enviar</button>

          <a href="#">Olvidé mi contraseña</a>
        </form>
      `
    }
  }

  customElements.define('login-component', Login)

})()
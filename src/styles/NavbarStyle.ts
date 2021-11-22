import styled from 'styled-components'

// Navbar Styles
export const NavbarStyle = styled.div`
  .navbar-container {
    background: rgba(86, 0, 225, 1);
    width: 100%;
    height: 3.75rem;
    position: fixed;
    top: 0;
    color: #ffffff;

    padding-top: 2rem;
    padding-bottom: 2rem;

    /* transition-timing-function: ease-in;
    transition: 0.3s; */
  }
  .navbar-onchange {
    background: rgba(86, 0, 224, 0.6);
    backdrop-filter: blur(13px);
    padding-top: 2.5rem;
    padding-bottom: 2rem;
    font-size: 2rem;
  }

  nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 4.37rem;
    min-height: 4.37rem;
    max-height: 4.37rem;
    background-color: rgb(1, 20, 52, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  /* Imagem */

  nav .imagem {
    width: 100%;
    padding-top: 0.3rem;
    padding: 0px 4rem;
  }

  nav .imagem img {
    width: 100%;
    max-width: 9rem;
  }

  /* Opcoes */

  nav .opcoes {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-right: 4rem;
  }

  nav .opcoes a {
    font-family: var(--fonte-medium);
    font-size: 1.1rem;
    color: var(--cor-branco);
    margin-left: 50px;
    transition: 0.3s;
  }

  nav .opcoes a:hover {
    opacity: 0.6;
  }

  nav .opcoes a.destaque {
    padding: 7px 15px;
    border-radius: 10px;
  }

  nav .opcoes a.destaque:hover {
    opacity: 0.6;
  }

  /* Menu */

  nav .menu {
    display: none;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: 0px 2rem;
  }

  nav .menu {
    z-index: 6;
    display: none;
    align-items: center;
    justify-content: flex-end;
    width: auto;
    height: 100%;
    padding: 0px 2rem;
  }

  nav .menu img .logo {
    align-items: center;
    justify-content: flex-end;
    width: auto;
    height: 100%;
    padding-top: 1rem;
  }

  nav .menu img:hover {
    opacity: 0.6;
  }

  nav .menu.mostrar img.fechar {
    display: flex;
  }

  nav .menu.mostrar img.abrir {
    display: none;
  }

  nav .menu img.fechar {
    display: none;
  }

  nav .menu img.abrir {
    display: flex;
  }

  /* Menu Mobile */

  nav .menu_opcoes {
    display: flex;
    padding: 30px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 5;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  nav .menu_opcoes.mostrar {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }

  nav .menu_opcoes a {
    font-family: var(--fonte-medium);
    font-size: 1.5rem;
    color: var(--cor-branco);
    margin-bottom: 30px;
  }

  nav .menu_opcoes a:hover {
    opacity: 0.8;
  }

  nav .menu_opcoes a.destaque {
    padding: 7px 15px;
    border-radius: 10px;
  }

  nav .menu_opcoes a.destaque:hover {
    opacity: 0.6s;
  }

  body.menu_aberto {
    overflow: hidden;
  }

  /* Responsivo */

  @media screen and (max-width: 1000px) {
    nav .opcoes {
      display: none;
    }
    nav .menu {
      display: flex;
    }
    nav .imagem {
      padding: 0px 2rem;
    }
  }

  /* custom hamburguer */
  .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .icon {
    position: absolute;
    z-index: 40;
    width: fit-content;
    height: 44px;
    cursor: pointer;
    padding-right: 2rem;
  }

  .hamburguer {
    top: 50%;
    right: 10%;
    width: 35px;
    height: 3px;
    background-color: #fff;
    position: absolute;
    border-radius: 13px;
  }

  .hamburguer::before {
    top: -12px;
    content: '';
    position: absolute;
    width: 35px;
    height: 3px;
    background: #fff;
    transition: 0.5s;
    border-radius: 13px;
  }

  .hamburguer::after {
    top: 12px;
    content: '';
    position: absolute;
    width: 35px;
    height: 3px;
    background: #fff;
    transition: 0.5s;
    border-radius: 13px;
  }

  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;

    margin: 12rem -1rem 0;
    flex-wrap: nowrap;
    color: white;
    font-size: 1.1rem;
  }

  .list .listItems {
    padding: 0px;
    list-style: none;
  }

  .list .listItems a {
    margin: 2px 0;
    cursor: pointer;
    color: #ffffff;
    transition: 0.3s;
  }

  .list .listItems a:hover {
    opacity: 0.6;
  }

  .icon.iconActive .hamburguer {
    background: transparent;
  }

  .icon.iconActive .hamburguer::after {
    top: 0;
    background: white;
    transform: rotate(225deg);
  }

  .icon.iconActive .hamburguer::before {
    top: 0;
    background: white;
    transform: rotate(135deg);
  }

  .menu.menuOpen {
    position: absolute;
    right: 0;
    width: 180px;
    height: 100vh;
    background: rgba(100, 60, 225, 1);
    margin-top: 3rem;
    padding-right: 3rem;
    -webkit-border-bottom-left-radius: 13px;
    -moz-border-radius-bottomleft: 13px;
    border-bottom-left-radius: 13px;
  }

  .menu.menuClose {
    display: none;
    width: 0;
  }
`

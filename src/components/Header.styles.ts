import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 3rem;
  justify-content: space-between;

  .logo{
    width: 100px;
    height: 30px;
  }

  .header-main {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  ul {
    list-style: none;
  }

  .menu{
    position: relative;
  }

  .menu li {
    display: inline-block;
    padding: 1rem 1.3rem;
    cursor: pointer;
  }

  .menu li:hover{
    a{
      color: #404040
    }
    .submenu{
      opacity: 1;
      visibility: visible;
      z-index: 999;
    }
  }

  a {
    color: #7c7c7c;
    text-decoration: none;
  }

  .menu svg{
    cursor: pointer;
    margin-left: 0.4rem;
  }

  .btn-abrir {
    display: none;
  }

  .login {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .login #login:hover{
    color: #404040;
  }

  .login #register {
    border: 1px solid gray;
    padding: 1rem;
    border-radius: 10px;
  }

  .login #register:hover{
    color: #404040;
    border-color: #404040;
  }

  .submenu {
    display: flex;
    background: #fff;
    padding: 1rem;
    box-shadow: 0px 1px 16px 0px grey;
    border-radius: 8px;
    transition: all .2s ease;
    opacity: 0;
    visibility: hidden;
  }

  .sub-features{
    position: absolute;
    top: 3rem;
    left: -1.5rem;
  }

  .sub-company{
    position: absolute;
    top: 3rem;
    left: 9rem;
  }

  .submenu li{
    display: flex;
    padding: 0.4rem 0.3rem;
  }

  .submenu svg{
    margin-right: 1rem;
  }


  @media(max-width: 767px){
    padding: 1rem;

    .menu{
      display: none
    }

    .login{
      display: none
    }

    .btn-abrir {
      display: block;
      font-size: 45px;
      margin-bottom: 1rem;
    }

    .menu-content {
      height: 100%;
      background: #fff;
      position: fixed;
      width: 240px;
      top: 0;
      right: 0;
      z-index: 1;
      overflow: hidden;
      animation: openMenu .3s; 
    }

    @keyframes openMenu{
      from{
        opacity: 0;
        width: 0;
      }
      to{
        opacity: 1;
        width: 240px;
      }
    }

    .btn-close {
      display: flex;
      justify-content: end;
      padding: 15px;
    }

    .btn-close a {
      font-size: 40px;
    }

    .menu-contain {
      width: 90%;
      width: 100%;
    }

    .menu-contain ul{
      display: flex;
      flex-direction: column;
      padding: 3rem;
      width: 100%;
      gap: 2rem;
      padding: 2rem 1rem;
    }

    .menu-contain li{
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .menu-contain a{
      color: #717171;
      font-size: 1.3rem;
    }
  }
`

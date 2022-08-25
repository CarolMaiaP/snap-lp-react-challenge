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

  .menu-mobile{
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

    /* .menu-mobile{
      display: block;
    } */

    .btn-abrir {
      display: block;
      font-size: 45px;
      margin-bottom: 1rem;
    }

    .menu-content {
      height: 100%;
      background: #812828;
      position: fixed;
      width: 0px;
      top: 0;
      right: 0;
      z-index: 1;
      overflow: hidden;
    }
  }
`

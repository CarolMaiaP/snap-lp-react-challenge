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

  li {
    display: inline-block;
    padding: 1rem 1.3rem;
  }

  a {
    color: #7c7c7c;
    text-decoration: none;
  }

  svg{
    cursor: pointer;
    margin-left: 0.4rem;
  }

  .login {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .login #register {
    border: 1px solid gray;
    padding: 1rem;
    border-radius: 10px;
  }
`

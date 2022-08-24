import styled from "styled-components";

export const InfoContainer = styled.div`
    width: 85%;
    text-align: center;
    margin-top: 8rem;
    padding: 0 12rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    h1{
      font-size: 5rem;
    }
    
    p {
      width: 84%;
      text-align: justify;
      color: #7c7c7c;
      line-height: 1.4rem;
    }

    .btn a{
      text-decoration: none;
      color: #fafafa;
      font-weight: 500;
      border: 1px solid;
      border-radius: 8px;
      width: 30%;
      text-align: center;
      padding: 1rem 1.5rem;
      background-color: #151515;
      transition: .3s;
    }

    .btn a:hover{
      color: #000;
      background: #fafafa;
    }
`
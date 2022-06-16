import styled from "styled-components";

export const AreaInteira = styled.div`
  background-image: url(https://github.com/EvanRispoli/voceTurista_Projeto_Bloco_FrontEnd/blob/master/src/img/login.jpg?raw=true);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

export const AreaLogin = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.3rem 0;
  max-width: 100px;
  margin: auto;
  margin-top: 20px;
  text-align: center;
  border-color: black;
  border-radius: 5px;
  box-shodow: 0px 0px 10px #ccc;

  h1 {
    font-size: 24px;
  }

  img {
    width: 30vw;
    height: 50vh;
  }


  .form--imput {
    text-align: left;
    color: black;

    label {
      display: block;
    }

    input {
      margin-bottom: 20px;
      padding: 10px;
      font-size: 16px;
      outline: none;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 250px;
      transition: 0.3s;

      &:hover {
        border: 1px solid #7d2ae8;
      }
    }
  }
`;

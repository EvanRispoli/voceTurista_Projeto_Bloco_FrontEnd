import { textAlign } from "@mui/system";
import styled from "styled-components";

export const BtnGet = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: 0px;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
  transition: 0.4s;
  background-color: green;
  color: #ffff;
  text-align: center;

  &:hover {
    background-color: #3FBF7F;
  }

  .center {
    text-align: center;
    
  }
`;

export const BtnSocial = styled.div`
  color: #fff;
  display: inline;

  &:hover {
    background-color: #4e129c;
  }
`;
export const AreaInteira = styled.div`
  background-image: url(https://github.com/EvanRispoli/voceTurista_Projeto_Bloco_FrontEnd/blob/master/src/img/avaliacao.jpg?raw=true);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  
`;
export const erro = styled.h1`
textAlign: center;
`;

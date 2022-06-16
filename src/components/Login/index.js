/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import { AreaLogin } from "./styled";
import { AreaInteira } from "./styled";
import { BtnGet } from "../../components/Styled";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <AreaInteira>
      <AreaLogin>
        <div>
          <img src={logo} />
        </div>
        <form>
          <div className="form--imput">
            <label>E-mail</label>
            <input type="email" />
          </div>

          <div className="form--imput">
            <label>senha</label>
            <input type="password" />
          </div>

          <Link to="/turista">
            <BtnGet>Entrar</BtnGet>
          </Link>
        </form>
      </AreaLogin>
    </AreaInteira>
  );
};

import React from "react";
import ReactDOM from "react-dom";
import ReactStars from "react-rating-stars-component";
import { AreaInteira } from "./Styled";
import "./../index";

export default function Rating() {
  return (
    <AreaInteira>
      <div className="Rating">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a
              className="btn btn-primary"
              href="http://localhost:3000/turista"
              role="button"
            >
              Página Inicial
            </a>
          </div>
        </nav>
        <h1 className="p-4">Avalie nosso serviço</h1>
        <div className="d-flex justify-content-center">
          <ReactStars
            size={70}
            isHalf={true}
            onChange={newRating => {
              console.log(newRating);
            }}
          />
        </div>
        <div className="cabecalho">
          <h1>Comente</h1>
        </div>
        <section>
          <div className="container my-2 py-5 text-dark">
            <div className="row d-flex justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-6">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-flex flex-start w-100">
                      <div className="w-100">
                        <div className="form-outline">
                          <div className="form-group shadow-textarea">
                            <label htmlFor="exampleFormControlTextarea6">
                              Comentário
                            </label>
                            <textarea
                              className="form-control z-depth-1"
                              id="exampleFormControlTextarea6"
                              rows="10"
                              placeholder="Escreva aqui ..."
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                          <button type="button" className="btn btn-success">
                            Enviar
                            <i className="fas fa-long-arrow-alt-right ms-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AreaInteira>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Rating />, rootElement);

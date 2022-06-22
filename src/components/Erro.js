import React from "react";
import ReactDOM from "react-dom";
import { AreaInteira } from "./Styled";
import "../index"

export default function Rating() {
  return (
    <AreaInteira>
      <div className="Erro">
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
        <div className="d-flex justify-content-center">
        </div>
        <section>
          <div className="container my-2 py-5 text-dark">
            <div className="row d-flex justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-6">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-flex flex-start w-90">
                      <div className="w-100">
                        <div className="form-outline">
                          <div className="form-group shadow-textarea">
                            <label htmlFor="exampleFormControlTextarea6">
                              Erro:
                            </label>
                            <h1>Página não encontrada.</h1>
                          </div>
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
  )
  };
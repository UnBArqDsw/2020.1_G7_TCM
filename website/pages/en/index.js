/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const Index = () => {
  return (
    <div>
      <div className="land">
        <img src="/2020.1_G7_TCM/img/logo.png" alt="logo" />
        <h1>Tennis Cup Management</h1>
        <p>Seu gerenciador de torneios de Tênis favorito</p>
      </div>
      <div className="container">
        <div className="title">
          <h1>
            <b>Tennis Cup Management</b>
          </h1>
          <br />
        </div>
        <div className="about">
          <h2>Sobre</h2>
          <p>
            O projeto tem como objetivo o desenvolvimento de um Progressive Web
            Application (PWA), para tornar melhor o gerenciamento dos torneios e
            partidas de tênis, fornecendo funcionalidades como criação de perfil
            do usuário, criação de torneios, gerenciamento das partidas,
            histórico e estatísticas dos torneios e dos usuários, criação de
            partidas amistosas entre diversas outras funcionalidades que podem
            ser exploradas em nossa documentação.
          </p>
        </div>
        <div className="techs">
          <h2>Tecnologias</h2>
          <div className="techs-container">
            <div className="card">
              <div className="card-image">
                <img src="/2020.1_G7_TCM/img/nodejs.png" alt="node" />
              </div>
              <div className="card-text">
                <h2 className="tech">Nome: NodeJS</h2>
                <p>Descrição: Ambiente de execução Javascript server-side</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src="/2020.1_G7_TCM/img/js.png" alt="node" />
              </div>
              <div className="card-text">
                <h2 className="tech">Nome: Javascript</h2>
                <p>
                  Descrição: JavaScript é uma linguagem de programação
                  interpretada estruturada
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src="/2020.1_G7_TCM/img/undraw_react.svg" alt="node" />
              </div>
              <div className="card-text">
                <h2 className="tech">Nome: ReactJS</h2>
                <p>
                  Descrição: O React é uma biblioteca JavaScript de código
                  aberto com foco em criar interfaces de usuário em páginas web
                </p>
              </div>
            </div>
          </div>
          <div className="techs-container">
            <div className="card">
              <div className="card-image">
                <img src="/2020.1_G7_TCM/img/docker.png" alt="node" />
              </div>
              <div className="card-text">
                <h2 className="tech">Nome: Docker</h2>
                <p>
                  Descrição: O Docker é uma plataforma open source que facilita
                  a criação e administração de ambientes isolados.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src="/2020.1_G7_TCM/img/postgres.png" alt="node" />
              </div>
              <div className="card-text">
                <h2 className="tech">Nome: Postgres</h2>
                <p>
                  Descrição: PostgreSQL é um sistema gerenciador de banco de
                  dados objeto relacional.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="team">
          <h2>Desenvolvedores</h2>
          <div className="techs-container">
            <div className="card-u">
              <div className="card-user">
                <img src="https://avatars3.githubusercontent.com/u/31708472?s=400&u=ffa8433cc108be51c87f9d1d67128f98d4c174f2&v=4" />
              </div>
              <div className="card-text">
                <h2 className="tech">Nome: João Pedro</h2>
                <p>Matricula: 15/0132344</p>
              </div>
              <div className="github">
                <a href="https://github.com/jpcirqueira">
                  <img src="/2020.1_G7_TCM/img/github.png" alt="node" />
                </a>
              </div>
            </div>

            <div className="card-u">
              <div className="card-user">
                <img src="https://avatars0.githubusercontent.com/u/44438409?s=400&u=60ed0c69fa317ba1192806ca0b1a4688dec6dd22&v=4" />
              </div>
              <div className="card-text">
                <h2 className="tech">Nome: Lucas Alexandre</h2>
                <p>Matricula: 15/0136862</p>
              </div>
              <div className="github">
                <a href="https://github.com/lucasA27">
                  <img src="/2020.1_G7_TCM/img/github.png" alt="node" />
                </a>
              </div>
            </div>

            <div className="card-u">
              <div className="card-user">
                <img src="https://avatars2.githubusercontent.com/u/44438591?s=460&u=ee2bb251abf91b14dcc3295c47bda61c499f648f&v=4" />
              </div>
              <div className="card-text">
                <h2 className="tech">Nome: Matheus Estanislau</h2>
                <p>Matricula: 15/0141220</p>
              </div>
              <div className="github">
                <a href="https://github.com/MatheusEstanislau">
                  <img src="/2020.1_G7_TCM/img/github.png" alt="node" />
                </a>
              </div>
            </div>
          </div>
          <div className="techs-container">
            <div className="card-u">
              <div className="card-user">
                <img src="https://fga-eps-mds.github.io/2019.1-MaisMonitoria/img/faculty/Moacir.jpg" />
              </div>
              <div className="card-text">
                <h2 className="tech">Nome: Moacir Mascarenha</h2>
                <p>Matricula: 17/0080366</p>
                <div className="github">
                  <a href="https://github.com/MoacirMSJ">
                    <img src="/2020.1_G7_TCM/img/github.png" alt="node" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card-u">
              <div className="card-user">
                <img src="https://avatars2.githubusercontent.com/u/39436190?s=460&u=7359939be5e8683192bf0b718b2d9c96ed70a020&v=4" />
              </div>
              <div className="card-text">
                <h2 className="tech">Nome: Renan Cristyan</h2>
                <p>Matricula: 17/0044386</p>
              </div>
              <div className="github">
                <a href="https://github.com/RCristyan">
                  <img src="/2020.1_G7_TCM/img/github.png" alt="node" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = Index;

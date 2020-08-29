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
    <div className="container">
      <div className="title">
        <h1>
          <b>Projeto Grupo 7</b>
        </h1>
        <br />
        <h2>Sobre</h2>
        <p>
          A ideia é fazer uma aplicação (PWA) para gerenciar torneios, organizar
          cronograma dos torneios, informações de partidas, cadastros de
          atletas, informação de atleta e outros. A nossa ideia inicial era
          alcançar outros esportes mas pensamos em limitar o escopo só em
          competições de tênis. Inicialmente optamos em desenvolver um PWA por
          conta da acessibilidade e compatibilidade, também a facilidade do
          usuário não precisar instalar a aplicação.
        </p>
      </div>
      <div className="install">
        <h2>Tecnologias</h2>
        <div className="techs">
          <p>Javascript, PostgreSQL, Docker, ReactJS, Node</p>
        </div>
      </div>
      <div className="readme">
        <h2 className="subtitle">Alunos</h2>
        <div className="container-card">
          <div className="card">
            <img src="https://avatars3.githubusercontent.com/u/31708472?s=400&u=ffa8433cc108be51c87f9d1d67128f98d4c174f2&v=4" />
            <p>Nome: João Pedro</p>
            <p>Matricula:	15/0132344</p>
          </div>

          <div className="card">
            <img src="https://avatars0.githubusercontent.com/u/44438409?s=400&u=60ed0c69fa317ba1192806ca0b1a4688dec6dd22&v=4" />
            <p>Nome: Lucas Alexandre</p>
            <p>Matricula: 15/0136862</p>
          </div>

          <div className="card">
            <img src="https://avatars2.githubusercontent.com/u/44438591?s=460&u=ee2bb251abf91b14dcc3295c47bda61c499f648f&v=4" />
            <p>Nome: Matheus Estanislau</p>
            <p>Matricula: 15/0141220</p>
          </div>

          <div className="card">
            <img src="https://fga-eps-mds.github.io/2019.1-MaisMonitoria/img/faculty/Moacir.jpg" />
            <p>Nome: Moacir Mascarenha</p>
            <p>Matricula: 17/0080366</p>
          </div>

          <div className="card">
            <img src="https://avatars2.githubusercontent.com/u/39436190?s=460&u=7359939be5e8683192bf0b718b2d9c96ed70a020&v=4" />
            <p>Nome: Renan Cristyan</p>
            <p>Matricula: 17/0044386</p>
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = Index;

---
id: grasp
title: GRASP
---


## Introdução

<p align = "justify">
Os padrões GRASP (General Responsibility Assignment Software Patterns) consistem em uma série de princípios baseados em conceitos para atribuição de responsabilidades a classes e objetos na construção de bons softwares usando programação orientada a objetos.
</p>

## Metodologia

<p align = "justify">
A partir do estudo da equipe sobre os padrões de projeto(GRASP e gofs) e feedback das avaliações, foi identificado os problemas onde os padrões podem ser aplicados.
</p>

## Padrões

### Versão 1.0

#### Creator

<p align = "justify">
Determina qual classe deve ser responsável pela criação certos objetos.
Atribua à classe B a responsabilidade de criar uma instância de A se
pelo menos um desses for verdadeiro:
• B contém ou agrega A
• B registra a existência de A
• B usa A
• B tem os dados necessários para a inicialização de A que
serão passados ao construtor de A.
</p>

##### Aplicação no projeto
É possível identificar o uso deste padrão incorporado ao padrão factory method exemplificado no documento [GOFs Criacionais](./gof_criacionais.md).

#### Polimorfismo
<p align = "justify"> 
As responsabilidades devem ser atribuídas a abstrações e não a objetos concretos, permitindo que eles possam variar conforme a necessidade.
</p>

##### Aplicação no projeto
É possivel identificar o padrão polimorfismo em várias classes do [diagrama de classe](../modelagem/diagrama_de_classes.md).

Exemplo:
![Participants](../assets/Grasp/polimorfismo.jpg)

É possível identificar o uso deste padrão incorporado em varios padrões GOFs, como: [GOFs Criacionais](./gof_criacionais.md).


#### controller

<p align = "justify">
O padrão controller determina que a responsabilidade da manipulação de eventos deve permanecer fora da interface com usuário, ela também distribui responsabilidades entre as demais classes do sistema, funciona como fachada do sistema retornando mensagens ao cliente
</p>

##### Aplicação no projeto

Utilizamos o padrão de projeto Controller em nosso backend distribuindo a manipulção de eventos para os serviços responsaveis, no projeto será utilizado a controller de Usuário, Sessão, Torneio, Rounds e Partidas.

## Conclusão

<p align = "justify">

</p>

## Referências


> Padrões GRASP. Disponivel em: http://www.facom.ufu.br/~bacala/ESOF/05a-Padr%C3%B5es%20GRASP.pdf

> Understanding the GRASP Design Patterns. Disponivel em: https://medium.com/@ReganKoopmans/understanding-the-grasp-design-patterns-2cab23c7226e

> Padrões GRASP. Dispnível em: http://www.facom.ufu.br/~bacala/ESOF/05a-Padr%C3%B5es%20GRASP.pdf

> Padrão GRASP Controller. Dispnível em: https://www.ramonsilva.net/post/controller-padr%C3%B5es-grasp

## Autor(es)

| Data | Versão | Descrição | Autor(es) |
| -- | -- | -- | -- |
| 18/10/20 | 1.0 | Criação do documento | João Pedro e Moacir Mascarenha |
| 18/10/20 | 1.1 | Adicionado padrão creator | João Pedro, Matheus Estanislau e  Moacir Mascarenha |
| 18/10/20 | 1.2 | Adicionado padrão polimorfismo | João Pedro, Matheus Estanislau e  Moacir Mascarenha |
| 18/10/20 | 1.3 | Adicionado padrão controller | João Pedro, Matheus Estanislau e  Moacir Mascarenha |

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
pelo menos um desses for verdadeiro (quanto mais melhor):
• B contém ou agrega A
• B registra a existência de A
• B usa A
• B tem os dados necessários para a inicialização de A que
serão passados ao construtor de A.
</p>

##### Aplicação no projeto
É possível identificar o uso deste padrão incorporado ao padrão factory method exemplificado no documento [GOFs Criacionais](./gof_criacionais.md).

#### Polimorfismo
<p align = "justify"> </p>

#### controller

<p align = "justify"> </p>

## Conclusão

<p align = "justify">

</p>

## Referências


> Padrões GRASP. Disponivel em: http://www.facom.ufu.br/~bacala/ESOF/05a-Padr%C3%B5es%20GRASP.pdf

> Understanding the GRASP Design Patterns. Disponivel em: https://medium.com/@ReganKoopmans/understanding-the-grasp-design-patterns-2cab23c7226e

> Padrões GRASP. Dispnível em: http://www.facom.ufu.br/~bacala/ESOF/05a-Padr%C3%B5es%20GRASP.pdf

## Autor(es)

| Data | Versão | Descrição | Autor(es) |
| -- | -- | -- | -- |
| 18/10/20 | 1.0 | Criação do documento | João Pedro e Moacir Mascarenhas |
| 18/10/20 | 1.1 | Adicionado padrão creator | João Pedro, Matheus Estanislau e  Moacir Mascarenhas |

---
id: gofs_comportamentais
title: GOFS Comportamentais
---

## Introdução

<p align = "justify">
Os padrões comportamentais se concentram nos algoritmos e atribuições de responsabilidades entre os objetos. Eles não descrevem apenas padrões de classes ou de objetos, mas também os padrões de comunicação entre os objetos. Ao fazer isso, esses padrões aumentam a flexibilidade na realização dessa comunicação [4].

</p>

## Metodologia

<p align = "justify">
 A partir do estudo da equipe sobre os padrões comportamentais e feedback das avaliações, a equipe analisou os diagramas identificando problemas onde os padrões poderiam ser aplicados. A partir desses padrões identificados, a equipe os implementou .
</p>

## Padrões Comportamentais

### Versão 1.0

#### Chain of responsability

<p align = "justify">
O Chain of Responsibility é um padrão de projeto comportamental que permite que você passe pedidos por uma corrente de handlers. Ao receber um pedido, cada handler decide se processa o pedido ou o passa adiante para o próximo handler na corrente [1].
</p>

#### Motivação

<p align = "justify">
Foi usado o padrão Chain of Responsibility a partir de metodos handlers, para que a partir da request a controller decida qual service deverá realizar a função desejada. Assim reduzindo o grau de acoplamento e com maior flexibilidade.
</p>

## Conclusão

## Referências

> [1]PADRÕES de PROJETO. Disponível em: https://refactoring.guru/pt-br/design-patterns 

> [2]GAMMA, Erich et al. Design Patterns: Elements of Reusable Object-Oriented Software. 1. ed. Massachusetts: Addison-Wesley Professional, 2009. 426 p. ISBN 0-201-63361-2.

> [3] CONHEÇA OS PADRÕES DE PROJETO. Disponível em: https://www.devmedia.com.br/conheca-os-padroes-de-projeto/957

> [4] Padrão de projeto de software. Disponível em: https://pt.wikipedia.org/wiki/Padr%C3%A3o_de_projeto_de_software


## Autor(es)

| Data | Versão | Descrição | Autor(es) |
| -- | -- | -- | -- |
| 24/10/20 | 1.0 | Criação do documento | João Pedro e Lucas Alexandre |
|24/10/20 | 1.1| Adicionado o padrão chain of responsability | João Pedro, Lucas Alexandre e Matheus Estanislau 

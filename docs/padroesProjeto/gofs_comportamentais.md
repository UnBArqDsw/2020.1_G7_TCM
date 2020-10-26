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
 A partir do estudo da equipe sobre os padrões comportamentais e feedback das avaliações, a equipe analisou os diagramas identificando problemas onde os padrões poderiam ser aplicados. A partir desses padrões identificados, a equipe os implementou.
</p>

## Padrões Comportamentais

### Versão 1.0

## Chain of responsability

<p align = "justify">
O Chain of Responsibility é um padrão de projeto comportamental que permite que você passe pedidos por uma corrente de handlers. Ao receber um pedido, cada handler decide se processa o pedido ou o passa adiante para o próximo handler na corrente [1].
</p>

<p align = "justify">
Exemplo:
</p>

![Exemplo de Chain of Responsability ](../assets/Gof/chain_exemple.png)

### Motivação

<p align = "justify">
Foi usado o padrão Chain of Responsibility a partir de métodos handlers, para que a partir da request a controller decida qual service deverá realizar a função desejada. Assim reduzindo o grau de acoplamento e com maior flexibilidade.
</p>

### Aplicação no projeto

<p align = "justify">
Na imagem abaixo encontra a controller de torneio em que contém o padrão chain of responsability na funçao handle que instancia a classe CreatePlayoff
</p>

![ Aplicação de Chain of Responsability ](../assets/Gof/chain_responsability.png)


## Strategy

<p align = "justify">
O padrão comportamental Strategy permite a criação de uma família de algoritmos, separá-los em classes e fazer objetos intercambiáveis [5].
 
Uma vantagem em se aplicar este padrão é que se torna possível criar uma interface contendo determinados métodos, e classes que implementam esses métodos de maneira independente, facilitando a manutenibilidade do sistema.

</p>

![ Exemplo de strategy ](../assets/Gof/strategy_example.png)

### Motivação

<p align = "justify">
A ideia de se utilizar o padrão comportamental Strategy foi para abstrair a lógica de uma partida (match), já que uma partida pode ser amistosa, de mata-mata, de barragem ou de muitos tipos diferentes de torneio. Ao utilizar o padrão, cada tipo de partida implementa em sua própria classe os mesmos métodos determinados por uma interface.
</p>

### Aplicação no projeto

<p align = "justify">
No diagrama de classes, foi implementada uma interface Match que contém métodos comuns a todos os tipos de partida. Porém, devido às diferenças entre cada torneio e suas partidas, foi criada uma classe por partida diferente, e cada classe implementa os métodos da interface Match. A aplicação do padrão Strategy contribuiu fortemente para a manutenibilidade do sistema, além de permitir que o mesmo se expanda com facilidade no futuro.
</p>

![ Aplicação de Strategy ](../assets/Gof/strategy.png)

## Observer

O observer(Observador, Assinante do evento, Event-Subscriber, Escutador, Listener)  é um padrão de projeto comportamental que permite que você definir um mecanismo de assinatura para notificar múltiplos objetos sobre quaisquer eventos que aconteçam com o objeto que eles estão observando.

![ Aplicação de observer ](../assets/Gof/observer_example.png)


### Motivação
Ao solicitar inscrição em um torneio é necessário que o gerente do torneio receba uma notificação, para tal comportamento deve se definir um mecanismo que monitore as solicitações, sendo assim, o observer será utilizado para este comportamento.


### Aplicação no projeto
No diagrama de sequência([Tournament registration request](../modelagem/diagrama_de_sequencia.md)) é possível identificar que o observer se encaixa perfeitamente para tal comportamento.

- Não implementado até o momento


## Mediator

<p align = "justify">
O Mediator é um padrão de projeto comportamental que permite que você reduza as dependências caóticas entre objetos. O padrão restringe comunicações diretas entre objetos e os força a colaborar apenas através do objeto mediador [1].
</p>

![ Exemplo de mediator ](../assets/Gof/mediator_example.png)

### Motivação
<p align = "justify">
A partir do padrão de projeto Repository Pattern é possível observar a aplicação do padrão GoF representada pela controller que faz mediação entre a camada de view e service. Para o frontend usamos o padrão de rotas para acesso as páginas do sistema sendo assim um mediator.
</p>

### Aplicação no projeto
<p align = "justify">
O padrão Mediator foi aplicado tanto no Backend da aplicação (na implementação dos controllers), quanto no Frontend (os conceitos de mediação foram aplicados nas lógicas das rotas).

</p>

<p align = "justify">
Aplicação no Frontend
</p>

![ Aplicação de Mediator no Frontend ](../assets/Gof/mediator_frontend.png)

<p align = "justify">
Aplicação no Backend
</p>

![ Aplicação de Mediator no Backend ](../assets/Gof/mediator_backend.png)


## Memento

<p align = "justify">
O padrão comportamental Memento permite salvar e restaurar o estado de um objeto sem revelar os detalhes da sua implementação [1].
</p>

### Motivação
<p align = "justify">
Para modelar o banco usamos uma migrate que serve para gerenciar a estrutura das tabelas do banco. E também serve como um histórico de versão do banco. Pode ser considerado como um padrão memento por poder salvar e restaurar o estado sem revelar mais detalhes.
</p>

### Aplicação no projeto
<p align = "justify">
Os conceitos do padrão Memento foram aplicados na forma de migrations do banco de dados. Podemos tanto salvar o estado atual do banco como recuperar versões antigas.
</p>

![ Aplicação de Memento ](../assets/Gof/migration.png)

## Command
O Command é um padrão de projeto comportamental que transforma um pedido em um objeto independente que contém toda a informação sobre o pedido. Essa transformação permite que você parametrize métodos com diferentes pedidos, atrase ou coloque a execução do pedido em uma fila, e suporte operações que não podem ser feitas.

![ Command exemplo ](../assets/Gof/command_example.png)


### Motivação
Para realizar a criação de diferentes objetos como torneio, partida, etc. É necessário enviar informações para a camada de negócio. A ação de envio pode ser configurada por meio de um botão, que ao ser acionado executa um comando específico para cada tipo objeto.

### Aplicação no projeto
Em processo de aplicação no Front-End, com o intuito de retirar a reponsabilidade dos componentes de se comunicar com a camada de negócio, passando a responsabilidade para funções de comando especificas.


- Não implementado até o momento

## Conclusão
<p align = "justify">
A aplicação dos padrões de projeto no TCM nos auxiliou a melhorar a manutenibilidade do sistema, desacoplar o código e aprender novos conceitos que serão praticáveis em projetos futuros.
</p>

## Referências

> [1] PADRÕES de PROJETO. Disponível em: https://refactoring.guru/pt-br/design-patterns Acesso em: 24/10/20

> [2] GAMMA, Erich et al. Design Patterns: Elements of Reusable Object-Oriented Software. 1. ed. Massachusetts: Addison-Wesley Professional, 2009. 426 p. ISBN 0-201-63361-2. Acesso em: 24/10/20

> [3] CONHEÇA OS PADRÕES DE PROJETO. Disponível em: https://www.devmedia.com.br/conheca-os-padroes-de-projeto/957 Acesso em: 24/10/20

> [4] Padrão de projeto de software. Disponível em: https://pt.wikipedia.org/wiki/Padr%C3%A3o_de_projeto_de_software Acesso em: 24/10/20

> [5] Padrão Comportamental Strategy. Disponível em: https://refactoring.guru/pt-br/design-patterns/strategy Acesso em: 24/10/20 

## Autor(es)

| Data | Versão | Descrição | Autor(es) |
| -- | -- | -- | -- |
| 24/10/20 | 1.0 | Criação do documento | João Pedro e Lucas Alexandre |
|24/10/20 | 1.1| Adicionado o padrão Chain of Responsability | João Pedro, Lucas Alexandre e Matheus Estanislau 
| 24/10/20 | 1.2 | Adicionado o padrão Strategy | Renan Cristyan 
| 25/10/20 | 1.3 | Adicionado exemplo do padrão Strategy | Renan Cristyan
| 25/10/20 | 1.4 | Adicionado o padrão Mediator | João Pedro e Renan Cristyan
| 25/10/20 | 1.5 | Adicionados exemplos do padrão Mediator | João Pedro e Renan Cristyan
| 26/10/20 | 1.6 | Adicionado o padrão Memento | João Pedro e Renan Cristyan
| 26/10/20 | 1.7 | Adicionada conclusão | João Pedro e Renan Cristyan
| 26/10/20 | 1.8 | Adicionado padrão Observer | Moacir Mascarenha
| 26/10/20 | 1.9 | Adicionado padrão Command | Matheus Estanislau e Moacir Mascarenha
| 26/10/20 | 2.0 | Correções no documento | João Pedro, Lucas Alexandre, Matheus Estanislau, Renan Cristyan |

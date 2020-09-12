---
id: metodologia
title: Metodologia
---
 
 
## Introdução
 
<p align = "justify">
A metodologia pode ser definida como a sistematização de métodos e técnicas com o intuito de se alcançar um objetivo. Este documento aborda os métodos e técnica de metodologias, processos e práticas (Scrum, XP, Kanban, RUP) de acordo com o objetivo da equipe e da disciplina.
</p>
 
## Metodologia
A equipe utiliza vários métodos e técnicas de diversas metodologias, processos e práticas, para o desenvolvimento. Com o estudo e  experiência da equipe sobre as metodologias ágeis, foi possível identificar aspectos das diversas metodologias, que a equipe utiliza para o desenvolvimento do projeto.
 
Metodologias, processos e práticas identificados:
 
 
- [Scrum](https://www.desenvolvimentoagil.com.br/scrum/):<p align = "justify">
Scrum é uma metodologia ágil para gestão e planejamento de projetos de software.
</p>
 
- [XP (Extreme Programming)](https://www.desenvolvimentoagil.com.br/xp/):<p align = "justify">
Extreme Programming (XP) é uma metodologia de desenvolvimento de software, seus objetivos são alcançados através de conjuntos de valores, princípios e práticas, que diferem da forma tradicional de se desenvolver software.
</p>
 
- [RUP (Rational Unified Process)](https://www.ibm.com/developerworks/rational/library/content/03July/1000/1251/1251_bestpractices_TP026B.pdf?mhsrc=ibmsearch_a&mhq=RUP):<p align = "justify">
O Rational Unified Process é um Processo de Engenharia de Software. Ele fornece uma abordagem disciplinada para atribuir
tarefas e responsabilidades dentro de uma organização de desenvolvimento.
<p>
 
- [Kanban](https://artia.com/blog/como-utilizar-sistema-kanban-para-beneficiar-sua-empresa/):</p>
   O sistema kanban é uma metodologia ágil e visual que contribui para o controle de produção e gestão de tarefas
<p align = "justify">
 
 
## Metodologias de desenvolvimento:
 
### Versão 1.0
 
### Scrum
 
- **Product Backlog**: O Product Backlog é uma lista contendo todas as funcionalidades desejadas para um produto [1]. O Product Backlog da equipe é baseado nas tarefas exigidas pela disciplina e também nas funcionalidades para a criação da aplicação TCM.
- **Sprint Plannig Meeting**: Sprint Planning Meeting é uma reunião no início da sprint para o planejamento das atividades [1]. A equipe se reúne via hangouts no início do Sprint, para definir as atividades que serão executadas durante o Sprint priorizando as atividades de acordo com o escopo da disciplina.
- **Sprint Backlog**: O Sprint Backlog é uma lista de tarefas que o Scrum Team se compromete a fazer em um Sprint. Os itens do Sprint Backlog são extraídos do Product Backlog [1]. Durante o Sprint Planning Meeting a equipe analisa as tarefas a serem feitas do backlog, pendências e assim é definido o Sprint Backlog.
- **Sprint**: O Sprint representa um Time Box dentro do qual atividades devem ser executadas [1]. O Sprint da equipe é um ciclo de uma semana, sendo:
 
   - Início da Sprint: Segunda-feira
   - Fim da Sprint: Domingo
- **Daily Scrum**: Daily Scrum é uma breve reunião diária da equipe, durante a sprint [1]. A equipe utiliza um bot no slack para realizar sua daily, onde as 09:00 horas o bot envia as seguintes perguntas para a equipe: No que você fez ontem? No que você vai trabalhar hoje? e Você teve algum impedimento?
- **Sprint Review Meeting**: Sprint Review Meeting é quando a equipe apresenta as funcionalidades implementadas em uma Sprint [1]. No final de toda Sprint a equipe apresenta em uma reunião via hangouts o que foi entregue do planejado, dívidas, pontos negativos e positivos da sprint.
 
- **Scrum master**: O Scrum Master procura assegurar que a equipe respeite e siga os valores e as práticas do Scrum. Ele também protege a equipe assegurando que ela não se comprometa excessivamente com relação àquilo que é capaz de realizar durante um Sprint [1]. O scrum master é definido pela equipe através de um rodízio dos integrantes, realizado no início de toda Sprint.
 
- **Sprint Retrospective**: O Sprint Retrospective ocorre ao final de um Sprint e serve para identificar o que funcionou bem, o que pode ser melhorado e que ações serão tomadas para melhorar [1]. Ao final da Sprint Review Meeting acontece um debate entre os participantes onde a equipe é perguntada sobre os pontos que podem ser melhorados para a próxima sprint.
 
### XP (Extreme Programming)
 
#### Valores:
 
- **Comunicação**: O objetivo é garantir que todas as partes envolvidas em um projeto tenham a chance de se compreender da melhor maneira possível [6]. A equipe se comunica diariamente pelos os canais de comunicação (Whatsapp, Slack, Telegram) sobre todos os aspectos  relacionados ao projeto.
- **Feedback**: Normalmente, quanto mais cedo descobrimos um problema, menos prejuízos ele pode causar e maiores são as chances de resolvê-lo de forma barata [6]. A equipe busca sempre o feedback dos usuários, avaliadores e os próprios membros da equipe.
 
#### Práticas:
 
- **Programação em pares**: A Extreme Programming sugere que todo e qualquer código produzido no projeto seja sempre implementado por duas pessoas juntas, diante do mesmo computador, revezando-se no teclado [6]. A equipe utiliza a programação em pares (remotamente utilizando a ferramenta Live Share) como uma forma de verificação, debate e auxílio durante a execução da tarefa.
 
- **Integração Contínua**: Integração contínua consiste em integrar o trabalho, assegurando que a base de código permaneça consistente ao final de cada integração [6]. A equipe utiliza o Github e cada nova funcionalidade a ser integrada deve passar por critérios de aceitação.
 
- **Refatoração**: Refatore impiedosamente para manter o design simples à medida que avança e para evitar confusão e complexidade desnecessárias [3]. A refatoração dos artefatos gerados para o projeto deve ser algo constante com o intuito de sempre melhorá-los.
 
 
### RUP (Rational Unified Process)
 
#### Práticas:
 
- **Desenvolvimento iterativo**: A
abordagem iterativa é necessária para permitir uma compreensão crescente do problema por meio de sucessivas
refinamentos e para aumentar gradativamente uma solução eficaz em várias iterações. Durante o processo de desenvolvimento do projeto a equipe efetua refinamentos constantes dos artefatos durante cada sprint, com o objetivo de sempre melhorar a qualidade [5].
 
- **Verificação da qualidade de software**: A qualidade deve ser revista com
respeito aos requisitos com base na confiabilidade, funcionalidade, e desempenho [5]. A aplicação será constantemente verificada para atender os padrões de qualidade definidos pela equipe e usuários, sendo essas verificações por meio de testes manuais e automatizados.
 
 
### Kanban
 
<p align = "justify">
O Kanban é técnica que propõe a utilização de cartões em um quadro para acompanhar visualmente o desenvolvimento de um projeto, informando as suas etapas, andamentos e entregas [2]. A equipe utiliza as issues do Github como os cartões de tarefas e o plugin ZenHub como quadro visual para gerenciar as issues (tarefas). O quadro utilizado pela equipe é dividido em quatro partes:
</p>
 
- **Backlog**: Contém todas as tarefas do projeto.
- **Sprint Backlog**: Contém as tarefas a serem executadas durante a Sprint.
- **Em andamento**: Contém as tarefas que estão em andamento.
- **Revisão**: Contém as tarefas que precisam ser revisadas para conclusão.
- **Concluido**: Contém as tarefas que já foram revisadas e concluídas.
 
 
## Conclusão
 
<p align = "justify">
 
Com o estudo das metodologias, processos e práticas ágeis, foi possível identificar quais aspectos a equipe utiliza no desenvolvimento do projeto, estruturando uma metodologia para o projeto e satisfazendo os critérios da aplicação e da disciplina.
 
</p>
 
## Referências
 
> [1] SCRUM, Disponivel em: https://www.desenvolvimentoagil.com.br/scrum/
 
> [2] Sistema Kanban: Como utilizar para beneficiar sua empresa?, Disponivel em: https://artia.com/blog/como-utilizar-sistema-kanban-para-beneficiar-sua-empresa/
 
> [3] Extreme Programming:A gentle introduction, Disponivel em: http://www.extremeprogramming.org/
 
> [4] Metodologia de pesquisa: guia rápido de possibilidades, Disponivel em: https://blog.mettzer.com/metodologia-de-pesquisa/
 
> [5] Rational Unified Process, Disponivel em: https://www.ibm.com/developerworks/rational/library/content/03July/1000/1251/1251_bestpractices_TP026B.pdf?mhsrc=ibmsearch_a&mhq=RUP
 
> [6] EXTREME PROGRAMMING, Disponivel em: https://www.desenvolvimentoagil.com.br/xp/
 
 
## Autor(es)
 
| Data | Versão | Descrição | Autor(es) |
| -- | -- | -- | -- |
| 05/09/20 | 1.0 | Criação do documento, introdução e metodologia | João Pedro e Moacir Mascarenha |
| 06/09/20 | 1.1 | Adicionado Metodologia desenvolvimento: Scrum | João Pedro e Moacir Mascarenha |
| 06/09/20 | 1.2 | Adicionado Metodologia desenvolvimento: Kanban | João Pedro e Moacir Mascarenha |
| 06/09/20 | 1.3 | Adicionado Metodologia desenvolvimento: XP | João Pedro e Moacir Mascarenha |
| 06/09/20 | 1.4 | Adicionado Metodologia desenvolvimento: RUP e conclusão | João Pedro e Moacir Mascarenha |
| 09/09/20 | 1.5 | Revisão do documento | Renan Cristyan |
| 09/09/20 | 1.6 | Ajuste no topico Scrum | João Pedro e Matheus Estanislau |

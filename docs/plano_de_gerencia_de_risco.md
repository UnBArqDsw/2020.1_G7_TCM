---
id: gerencia_riscos
title: Plano de gerencimaneto de riscos
---


## Introdução

<p align = "justify">
O plano de gerenciamento de riscos é um documento que consiste em identificar, analisar e monitorar os riscos envolvidos em um determinado projeto. Seu principal objetivo é aumentar a probabilidade e o impacto de riscos positivos e diminuir a probabilidade e o impacto de riscos negativos, visando otimizar as chances de sucesso do projeto.
</p>

## Estrutura Analítica de Riscos - EAR

<p align = "justify">
A Estrutura Analitica de Riscos fornece um meio para estruturar e categorizar os riscos do projeto de forma hierárquica, identificando possiveis fontes. A EAR auxilia a equipe a considerar as fontes de riscos para o projeto e consequentemente nas ações para evitá-los e corrigi-los.
</p>

### Categoria dos Riscos

Os riscos podem ser divididos em categorias, sendo elas:

- Técnico

Os riscos técnicos abordam os requisitos, tecnologia, complexidade, interfaces, desempenho e confiabilidade e qualidade.

- Externo

Os riscos externos abordam o ambiente acadêmico, os fatores pessoais e cliente (Product Owner).

- Organizacional

Os riscos organizacionais abordam as dependências do projeto, recursos, financiamento e priorização.

- Gerenciamento de projetos

Os riscos de gerenciamento do projeto abordam a estimativa, planejamento, controle e a comunicação.

## Análise Quantitativa dos Riscos

### Impacto

<p align = "justify">Para se quantificar o impacto do risco no projeto, deve-se levar em conta o custo, o tempo, o escopo e a qualidade.

A tabela abaixo deve ser usada como referência:

| Impacto | Intervalo | Descrição | Representação |
|:-------------:|:---------:|:---------:|:---------:|
| **Muito Baixo** | menor que 20% |Impacto pouco expressivo no desenvolvimento do projeto|1|
| **Baixo** | de 21% a 40% |Pouco impacto no desenvolvimento do projeto|2|
| **Médio** | de 41% a 60% |Possui certo impacto porém é facilmente recuperado |3|
| **Alto** | de 61% a 80% |Há grande impacto no desenvolvimento do projeto|4|
| **Muito Alto** | Acima de 80% |O impacto inviabiliza o projeto|5|

### Probabilidade

<p align = "justify">Para quantificar um risco em relação a sua probabilidade de ocorrência, a tabela a seguir deve ser utilizada:

| Probabilidade | Intervalo | Representação | 
|:-------------:|:---------:|:---------:|
| **Muito Baixa** | menor que 10% |1|
| **Baixa** | de 11% a 30% |2|
| **Média** | de 31% a 50% |3|
| **Alta** | de 51% a 60% |4|
| **Muito Alta** | maior que 61%  |5|

### Prioridade

<p align = "justify">Para definir a prioridade do risco, deve-se relacionar a Probabilidade com o Impacto por meio da matriz <b>Probabilidade</b> x <b>Impacto</b> a seguir:

| Probabilidade / Impacto | Muito Baixa | Baixo | Média | Alta | Muito Alta |
|:-----------------------:|:-----------:|:-----:|:-----:|:----:|:----------:|
| **Muito Baixo** | 1 | 2 | 3 | 4 | 5 |
| **Baixo** | 2 | 4 | 6 | 8 | 10 |
| **Médio** | 3 | 6 | 9 | 12 | 15 |
| **Alto** | 4 | 8 | 12 | 16 | 20 |
| **Muito Alto** | 5 | 10 | 15 | 20 | 25 |

<p align = "justify">O valor da prioridade definido na matriz <b>Probabilidade</b>x<b>Impacto</b> deve ser traduzido, utilizando a seguinte tabela:

| Prioridade | Intervalo |
|:-------------:|:---------:|
| **Muito Baixa** | 1 ~ 4 |
| **Baixa** | 5 ~ 9 |
| **Média** | 10 ~ 14 |
| **Alta** | 15 ~ 19 |
| **Muito Alta** | 20 ~ 25 |

## Riscos levantados

| **Risco** | **Descrição** | **Categoria EAR** | **Probabilidade** | **Impacto** | **Ação (preventiva/corretiva)** | **Prioridade**
| --- | --- | --- | --- | --- | --- | --- |
| R01 | Dificuldade com as tecnologias | Técnico - Tecnologia | Média | Muito Alto | Estudo | 15
| R02 | Redução dos membros da equipe | Externo - Fatores pessoais  | Baixa | Muito Alto | Comunicação efetiva, motivação, e redistribuição das tarefas | 10
| R03 | Mudança de escopo | Gerenciamento do projeto - Planejamento  | Média | Muito Alto | Redefinir o escopo e redistribuir as novas tarefas | 15
| R04 | Falta de comunicação | Organizacionais - Estratégias  | Muito baixa | Alto | Usar meios de comunicações comuns entre os membros | 4
| R05 | Perda de equipamentos da equipe | Externo - Fatores pessoais | Média | Muito Alto | Redistribuição de tarefas | 15
| R06 | Alteração nas datas da disciplina | Externo - Ambiente acadêmico | Muito baixo | Alto | Redefinir datas das entregas, analisar refatorações no projeto, analisar o escopo | 4
| R07 | Entregas (pontos de controle) atrasadas(os) | Gerenciamento do projeto - Planejamento | Baixo | Muito Alto | Planejamento, comunicação efetivo e redistribuição dos artefatos atrados | 8
| R08 | Dependência das atividades | Gerenciamento do projeto - Planejamento | Média | Alto | Organização das tarefas, buscar tarefas independentes | 12
| R09 | Qualidade do projeto não atender às expectativas do Product Owner | Externo - Cliente | Baixa | Alto | Acompanhamento do desenvolvimento junto ao Product Owner | 8
| R10 | Fácil adaptação a tecnologia | Técnico - Tecnologia |  Média | Alto | Possibilidade de adição de novas features | 12
| R11 | Pareamentos não efetivos | Externo - Fatores pessoais | Média | Alto | Tentar aumentar a comunicação entre os membros, mudança no pareamento. | 12
| R12 | Conflito entre entregas da sprint e de tarefas de outras disciplinas.| Externo - Fatores pessoais | Muito Alta | Alto | Diminuir o escopo da sprint e redistribuir tarefas. | 20
| R13 | Indisponibilidade de membros da equipe | Externo - Fatores pessoais  | Alta | Muito Alto | Redistribuição das tarefas. | 20
| R14 | Má priorização de requisitos | Organizacional - Priorização | Média | Alto | Analise em conjutno dos requisitos afetados e refazer priorizações | 12 
| R15 | Dificuldade em reunir todos os membros | Gerenciamento - Comunicação | Baixa | Baixo | Remarcar as reuniões, datas e horários | 4 
| R16 | Produto não atinge a qualidade esperada | Técnico - Qualidade | Média | Alto | Verificação constante da qualidade e refatoração com base nos padrões de projeto | 12 

## Conclusão 
<p align = "justify">
Através da análise e priorização da tabela de riscos levantados, é possível monitorar os riscos que mais causarão impacto durante o projeto. Dessa forma, medidas de prevenção e correção poderão ser tomadas, caso ocorram.
</p>

## Referências

> +Monitoria. Plano de Riscos. Disponível em https://fga-eps-mds.github.io/2019.1-MaisMonitoria/docs/plano-riscos

> NAKASHIMA, D. T. V. Identificação de riscos em projetos de TI. Disponível em http://www.abepro.org.br/biblioteca/ENEGEP2004_Enegep0802_1822.pdf 

> RODRIGUES, Eli. EAR para projetos de software. Disponivel em https://www.elirodrigues.com/2013/09/21/gerenciamento-de-riscos-ear-para-projetos-de-software/

> PMI®
. PMBOK®
: Um Guia do Conhecimento em Gerenciamento de Projetos (Guia PMBOK)/Project Management Institute.Sexta. Pensilvânia 19073-3299 EUA 

## Versionamento

| Data | Versão | Descrição | Autor(es) |
| -- | -- | -- | -- |
| 26/08/20 | 1.0 | Criação do documento | Lucas Alexandre, Matheus de Cristo, Moacir Mascarenha e Renan Cristyan | 
---
id: backlog
title: Backlog
---


## Introdução

<p align = "justify">
O Product Backlog é uma lista de tudo que é necessário no produto. O Product Owner (P.O.) é responsável por criar essa lista, e organizar seu conteúdo, disponibilidade, ordenação e priorização. Um detalhe interessante do Product Backlog é que ele é um artefato que evolui junto com o projeto, ou seja, as primeiras versões são curtas e contém apenas os primeiros requisitos, mas logo se torna uma grande lista complexa e dinâmica, que constantemente é revisada e modificada para atender as necessidades do cliente, demanda do mercado, concorrência, entre outros fatores.
</p>

## Metodologia

<p align = "justify">
Para a criação do backlog, fizemos um pequeno brainstorming entre os autores e consultamos os artefatos de requisitos já elicitados, como documento de brainstorming, entrevista e observação. A partir destas discussões, foi possível construir uma tabela organizada por epic, feature, ID, história de usuário e prioridade. Como não temos um Product Owner especificamente para a disciplina de Arquitetura e Desenho de Software, optamos por criar uma persona que representa o P.O, assim poderemos usá-la para priorizar histórias de usuário e organizar as futuras sprint backlogs.   
</p>

## Backlog 

### Versão 1.0

[![Backlog](../assets/backlog/product_backlog.png)](../assets/backlog/product_backlog.png)

### Versão 2.0

[![Backlog versão 2](../assets/backlog/product_backlog2.png)](../assets/backlog/product_backlog2.png)


## Histórias de Usuário

|ID| História do Usuário |Rastro|
|--|--|--|
|US01	|Eu, como usuário, desejo fazer cadastro, informando email, nome, username, senha e data de nascimento.|[BS01](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados)|	
|US02	|Eu, como usuário, desejo recuperar minha senha caso esqueça.||
|US03	|Eu, como usuário, gostaria de cadastrar minha conta utilizando o facebook para agilizar o processo.|[BS01](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) |	
|US04	|Eu, como usuário, gostaria de cadastrar minha conta utilizando o gmail para agilizar o processo.	|[BS01](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) |
|US05	|Eu, como usuário, desejo fornecer minha localização para filtrar torneios próximos.	|[BS12](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados)|
|US06	|Eu, como usuário, gostaria de fornecer uma imagem para meu perfil.	|[BS18](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) [ENT10](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista)|
|US07	|Eu, como usuário, desejo fornecer meu nível de habilidade no tênis (iniciante, intermediário, profissional).	|[ENT16](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista)|
|US08	|Eu, como usuário, gostaria de fazer login informando email e senha.	|[BS02](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados)|
|US09	|Eu, como usuário, gostaria de fazer login pelo facebook para facilitar.	|[BS02](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados)|
|US10	|Eu, como usuário, gostaria de fazer login pelo gmail para facilitar.	|[BS02](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados)|
|US11	|Eu, como usuário, gostaria de ter a opção de manter conectado para não realizar o login toda hora.||	
|US12	|Eu, como usuário, gostaria de poder editar meu nome, username, foto e email.	|[BS18](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) [ENT10](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) |
|US13	|Eu, como usuário, desejo ver quantas partidas participei, quantas ganhei e quantas perdi no meu perfil.|[BS17](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) [BS19](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) [ENT12](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) [OBS11](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/obs)|	
|US14	|Eu, como usuário, gostaria de poder deletar minha conta.	||
|US15	|Eu, como usuário, desejo ver meus torneios em andamento.	| [BS13](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) [BS19](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) [ENT12](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) [ENT15](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) [OBS11](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/obs) |    
|US16	|Eu, como usuário, gostaria de ser notificado sobre os torneios que estou participando.	|[BS20](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) [ENT11](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista)  [OBS02](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/obs)|
|US17	|Eu, como moderador, gostaria de cadastrar um torneio informando local, tipo e data de início e fim.|[BS03](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) [BS05](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) [ENT02](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) [ENT03](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) [ENT06](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) [OBS01](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/obs)|	
|US18	|Eu, como moderador, gostaria de cadastrar um torneio informando a descrição e as regras.	|[BS03](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) [BS05](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) [ENT01](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) [ENT02](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) [ENT03](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) [ENT06](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) [OBS01](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/obs)|
|US19	|Eu, como moderador, gostaria de cadastrar um torneio informando o tipo, o nível e a quantidade de jogadores.|[BS03](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) [BS05](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) [ENT02](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) [ENT03](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) [ENT16](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) [OBS01](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/obs)|
|US20	|Eu, como moderador, gostaria de restringir o torneio por idade.	|[BS03](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) [BS05](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) [ENT02](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) [ENT03](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) [ENT16](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) [OBS01](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/obs)|
|US21	|Eu, como moderador, gostaria de cadastrar um torneio informando o tipo de quadra.	| [BS03](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) [BS05](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) |
|US22	|Eu, como moderador, desejo convidar um jogador para uma partida casual.	| [BS04](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados)  |
|US23	|Eu, como moderador, desejo que as partidas amistosas não impactem nas minhas estatísticas.	| |
|US24	|Eu, como moderador, desejo convidar jogadores através do username.	| [BS04](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) [BS11](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) [ENT07](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista)|
|US25	|Eu, como moderador, desejo convidar jogadores através de link.	| [BS04](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) [BS11](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) [ENT07](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista)|
|US26	|Eu, como moderador, desejo acessar uma lista de jogadores com solicitações pendentes.	| [BS09](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) [ENT09](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) [OBS04](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/obs) |
|US27	|Eu, como moderador, gostaria de remover jogadores do meu torneio.	|[ENT09](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) [OBS04](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/obs)|
|US28	|	Eu, como moderador, gostaria de definir as datas dos jogos.|[BS06](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados)|
|US29	|Eu, como moderador, desejo editar informações do torneio caso não hajam inscritos.	| [BS16](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados)|
|US30	|Eu, como usuário, desejo pesquisar por torneios próximos da minha localização.	| [BS12](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) |
|US31	|Eu, como usuário, desejo filtrar por torneios públicos ou privados.	|  [BS12](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) |
|US32	|Eu, como usuário, desejo filtrar por nível (iniciante, intermediário, profissional).|[BS12](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados)|
|US33	|Eu, como usuário, desejo pre-visualizar as regras do torneio antes de solicitar inscrição.|[BS10](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados)|
|US34	|Eu, como usuário, desejo acessar uma lista de torneios disponiveis, para escolher torneios abertos.|[BS14](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados)|
|US35	|Eu, como moderador, desejo adicionar informações da partida, para manter o registro.|[BS15](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados#requisitos-elicitados) [OBS07](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/obs) [OBS08](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/obs)|
|US36	|Eu, como moderador, desejo editar informações da partida, para corrigir possiveis erros.|[BS16](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados#requisitos-elicitados) [OBS07](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/obs)|
|US37	|Eu, como usuário, desejo receber notificações de minhas proximas partidas, para me manter informado.|[BS20](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados#requisitos-elicitados)|
|US38	|Eu, como usuário, desejo visualizar informações dos meus adversários.|[BS21](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados) [ENT14](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista)|
|US39	|Eu, como usuário, desejo ter o contato do meu adversario para agendar partidas.|[BS21](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/brainstorm#requisitos-elicitados)|
|US40	|Eu, como usuário, desejo realizar solicitação de inscrição em torneios públicos.|[ENT08](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) [OBS03](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/obs)|
|US41	|Eu, como moderador, desejo aceitar ou rejeitar solicitações de possíveis participantes, para inscrever jogadores.|[ENT08](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) [ENT09](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) [OBS05](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/obs) [OBS06](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/obs)|
|US42	|Eu, como moderador, desejo cancelar um torneio antes do início, caso não queira mais fazer o torneio.|[ENT08](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista) [ENT09](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/entrevista)|
|US43	|Eu, como moderador, desejo aceitar todas as solicitações com apenas um clique, para inscrever jogadores.|[OBS06](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/obs)|
|US44	|Eu, como usuário, desejo que aplicação tenha uma interface intuitiva, para obter uma boa usabilidade.|[OBS09](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/obs)|
|US45	|Eu, como usuário, desejo visualizar dados dos torneios, como tabela, participantes, chaves, fases, para manter atualizado.|[OBS10](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/obs) [OBS11](https://unbarqdsw.github.io/2020.1_G7_TCM/docs/base/obs)|


## Conclusão

<p align = "justify">
O product backlog é uma ferramenta fundamental para reunir as atividades a serem feitas em um único lugar. Ao invés de procurar em documentos de requisitos, temos uma noção geral de tudo que precisamos no backlog. Destaca-se que o product backlog é um artefato que constantemente será revisado e atualizado, de acordo com a evolução natural do projeto.
</p>

## Referências

> SEDANO, T.; RALPH, P.; PÉRAIRE, C. The Product Backlog. 2019 IEEE/ACM 41st International Conference on Software Engineering (ICSE), Montreal, August, 2019.

> What is a Product Backlog? Disponível em https://www.scrum.org/resources/what-is-a-product-backlog?gclid=CjwKCAjwtNf6BRAwEiwAkt6UQg6ikw-ya4spm2U89MSjqUcZJxFaaCfuGafKHfxAh_F9Liex2Ew7hBoCZnkQAvD_BwE Acesso em 06/09/20

## Autor(es)

| Data | Versão | Descrição | Autor(es) |
| -- | -- | -- | -- |
| 06/09/20 | 1.0 | Criação do documento | Lucas Alexandre, Matheus Estanislau e Renan Cristyan | 
| 07/09/20 | 1.1 | Adição de metodologia, conclusão e referências | Lucas Alexandre, Matheus Estanislau e Renan Cristyan | 
|09/09/20 | 1.2| Criação da tabela de histórias de usuário e rastros| João Pedro, Lucas Alexandre e Moacir Mascarenha|
|10/09/20 | 1.3 | Criação de novas histórias de usuário | João Pedro, Lucas Alexandre, Matheus Estanislau, Moacir Mascarenha e Renan Cristyan |
|10/09/20 | 2.0 | Adição do backlog versão 2 | João Pedro, Lucas Alexandre, Matheus Estanislau, Moacir Mascarenha e Renan Cristyan |
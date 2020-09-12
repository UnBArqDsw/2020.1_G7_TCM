---
id: léxicos
title: Léxico
---
## Introdução
 
<p align = "justify">
O LAL (Léxico Ampliado da Linguagem) é uma técnica usada para auxiliar a comunicação entre desenvolvedores e clientes, onde as palavras, frases e tópicos importantes do projeto são definidas e clarificadas. Essa técnica procura identificar as palavras ou frases próprias do meio social da aplicação, partindo da ideia que "existindo mais do que uma cultura existe também uma linguagem  própria diferente para cada uma delas" (BREITMAN, 1999).
</p>
 
## Metodologia
 
<p align = "justify">
Neste documento foram compilados alguns termos e palavras corriqueiros ao projeto, e eles foram classificados como verbo, objeto ou estado. Existe também uma descrição da noção do símbolo, que é seu significado, e seu impacto no projeto. Cada léxico foi organizado em uma tabela onde é possível acessar o requisito que o originou, a fim de manter a rastreabilidade.
|Tag|Título|
|--|--|
|Classificação|--|
|Noção|--|
|Impacto|--|
|Rastro|--|
|Data|--|
</p>
 
## Léxicos
 
### Versão 1.0
 
### L01 - Criar conta

|L01|Criar conta|
|--|--|
|Classificação|Verbo|
|Noção|A primeira ação que um novo usuário deverá tomar será criar uma conta <br> O usuário deverá informar email e criar uma nova senha <br>|
|Impacto|Após criar a conta e fazer login, o usuário poderá as funcionalidades da aplicação|
|Rastro|[BS01](./Brainstorm.md)|
|Data|02/09/2020|
<br>
 
### L02 - Fazer login

|L02|Fazer login|
|--|--|
|Classificação|Verbo|
|Noção|Inserir email e senha válidos <br> Feito após criar uma conta|
|Impacto|O usuário agora pode usar as funcionalidades da aplicação, editar seu perfil, procurar torneios, entre outras ações <br> Caso o usuário esqueça a senha, ele poderá redefini-la|
|Rastro|[BS02](./Brainstorm.md)|
|Data|02/09/2020|
<br>
 
### L03 - Usuário

|L03|Usuário|
|--|--|
|Classificação|Sujeito|
|Noção|Atletas, esportistas e jogadores de tênis <br> Podem ser profissionais ou casuais|
|Impacto|Os usuários que irão, de fato, jogar tênis <br> Poderão procurar torneios ou partidas amadoras para participar|
|Rastro|[BS01](./Brainstorm.md)|
|Data|02/09/2020|
<br>
 
### L04 - Moderador

|L04|Moderador|
|--|--|
|Classificação|Sujeito|
|Noção|Este é o termo para o usuário que cria e administra torneios <br> Pode também criar partidas casuais <br>|
|Impacto|O moderador pode criar partidas, torneios, campeonatos e escolher / personalizar as regras <br> É de sua responsabilidade manter os placares e pontuações dos torneios atualizados|
|Rastro|[BS03](./Brainstorm.md)|
|Data|02/09/2020|
<br>
 
### L05 - Partida amistosa

|L05|Partida amistosa|
|--|--|
|Classificação|Objeto|
|Noção|Uma partida divertida de tênis sem compromisso|
|Impacto|Não tem impacto em estatísticas <br> Não impacta outros torneios do jogador <br>|
|Rastro|[BS03](./Brainstorm.md)|
|Data|02/09/2020|
<br>
 
### L06 - Torneio

|L06|Torneio|
|--|--|
|Classificação|Objeto|
|Noção|Uma série de partidas onde as pontuações e os eventos são registrados <br> Pode utilizar regras oficiais do tênis ou pode ser personalizado|
|Impacto|Impacta diretamente nas estatísticas dos jogadores <br> O moderador é responsável pelos detalhes, por exemplo, custo de inscrição ou premiação para os campeões (apesar de alguns aspectos serem opcionais)|
|Rastro|[BS05](./Brainstorm.md)|
|Data|02/09/2020|
<br>
 
### L07 - Torneio público / privado

|L07|Torneio público / privado|
|--|--|
|Classificação|Estado|
|Noção|Forma de organizar o torneio <br> Nos torneios públicos, qualquer jogador pode solicitar inscrição <br> Nos torneios privados, apenas convidados pelo moderador podem participar|
|Impacto|Cria uma organização melhor para o moderado que quer fazer um torneio com amigos <br> Ou então o moderador pode criar uma competição pública com custos de inscrição e premiações (caso queira), tudo de sua responsabilidade <br> Pode também criar competições públicas gratuitas|
|Rastro|[BS07](./Brainstorm.md)|
|Data|02/09/2020|
<br>
 
### L08 - Solicitar inscrição no torneio

|L08|Solicitar inscrição no torneio|
|--|--|
|Classificação|Verbo|
|Noção|Forma do usuário entrar nos torneios públicos que estiver interessado|
|Impacto|O moderador (organizador) irá receber uma lista de solicitações e poderá aceitar os jogadores <br> Só será possível solicitar inscrição em torneios que ainda tem vagas|
|Rastro|[BS08](./Brainstorm.md)|
|Data|02/09/2020|
<br>
 
### L09 - Pré-visualizar regras do torneio

|L09|Pré-visualizar regras do torneio|
|--|--|
|Classificação|Verbo|
|Noção|Forma do usuário se certificar se está de acordo com as regras antes de se inscrever|
|Impacto|Além de regras, poderá ver o número de vagas restantes e informações do moderador|
|Rastro|[BS10](./Brainstorm.md)|
|Data|02/09/2020|
<br>
 
### L10 - Organizar e gerenciar torneios

|L10|Organizar e gerenciar torneios|
|--|--|
|Classificação|Verbo|
|Noção|A função que o moderador deve exercer sobre os torneios de tênis|
|Impacto|O moderador deve definir regras para o torneio e assim poder ter um melhor gerenciamento durante o torneio|
|Rastro|[5w2h](./5w2h.md)|
|Data|07/09/2020|
<br>
 
### L11 - Torneio Liga (Pontos corridos)

|L11|Torneio Liga (Pontos corridos)|
|--|--|
|Classificação|Objeto|
|Noção|Sistema todos os integrantes de um grupo ou tabela se enfrentam obrigatoriamente em até dois turnos|
|Impacto|Todos os atletas irão se enfrentar e o maior vencedor será o campeão do torneio|
|Rastro|[ENT01](./entrevista.md)|
|Data|07/09/2020|
<br>
 
### L12 - Torneio eliminatório (Mata-Mata)

|L12|Torneio eliminatório (Mata-Mata)|
|--|--|
|Classificação|Objeto|
|Noção|Um sorteio acontece entre os participantes de forma que 2 deles se enfrentam, o vencedor da partida continua no torneio e o perdedor está automaticamente desclassificado|
|Impacto|Os atletas irão enfrentando os vencedores até que o atleta que mais vencer as partidas será o campeão do torneio|
|Rastro|[ENT02](./entrevista.md)|
|Data|07/09/2020|
<br>
 
### L13 - Torneio barragem

|L13|Torneio barragem|
|--|--|
|Classificação|Objeto|
|Noção|A  barragem é composta por jogadores, temporadas , divisões e confrontos. Os jogadores são adicionados pelo administrador, a temporada é o período de tempo em que os confrontos são realizados, a divisão representa o nível de cada grupo de jogadores dentro da barragem, Os confrontos são gerados automaticamente|
|Impacto|Os atletas deverão ser inseridos pelos moderadores do campeonato e assim sempre poder jogar com atletas de níveis parecido|
Rastro|[ENT03](./entrevista.md)|
|Data|07/09/2020|
<br>
 
### L14 - Sistema de ranking

|L14|Sistema de ranking|
|--|--|
|Classificação|Objeto|
|Noção|É um sistema de posicionamento de atletas de acordo com a pontuação do atleta na competição|
|Impacto|O atleta após vencer a partida terá um acréscimo a sua pontuação e assim aumentará sua posição no ranking|
|Rastro|[ENT12](./entrevista.md)|
|Data|07/09/2020|
<br>
 
### L15 - Network de atletas

|L15| Network de atletas|
|--|--|
|Classificação|Verbo|
|Noção|Forma do atleta conhecer outros atletas|
|Impacto|O atleta através de torneios pode conhecer outros atletas e assim aumentar sua rede de contatos no esporte|
|Rastro|[ENT14](./entrevista.md)|
|Data|07/09/2020|
<br>
 
### L16 - Categorizar torneio

|L16| Categorizar torneio|
|--|--|
|Classificação|Verbo|
|Noção|O processo pelo qual o moderador deve reconhecer, diferenciar e classificar os atletas partir do perfil destes |
|Impacto|O moderador nas regras pode definir critérios de aprovação de atletas como: idade, experiência entre outros|
|Rastro|[ENT16](./entrevista.md)|
|Data|07/09/2020|
<br>
 
## Conclusão

<p align = "justify">
Utilizando a técnica do Léxico Ampliado da Linguagem foi possível trazer uma maior clareza para a equipe, pois alguns termos eram usados de forma errada ou confusa. Também é interessante para pessoas de fora do projeto, que poderão ter uma noção dos aspectos importantes e poderão também utilizar os rastros para ver outros documentos.
</p>
 
## Referências

> BREITMAN, K. K.; LEITE, J. C. S. P.; FINKELSTEIN, A. The world’s a stage: a survey on requirements engineering using a real life case study”. Journal of the Brazilian Computer Society, vol.6 n.1, Campinas, July, 1999.
> Léxico Ampliado da Linguagem (Resumo). Disponível em: http://www-di.inf.puc-rio.br/~julio/lal.pdf Acesso em: 02/09/20
> Funcionamento da Barragem de tênis. Disponível em:: http://www.barragemdetenis.com.br/

## Autor(es)

| Data | Versão | Descrição | Autor(es) |
| -- | -- | -- | -- |
| 02/09/20 | 1.0 | Criação do documento | Renan Cristyan |
| 07/09/20 | 2.0 | Adicionado lexicos: L10 à L16 | João Pedro |
| 08/09/20 | 2.1 | Ajustes no documento | João Pedro |
| 08/09/20 | 2.2 | Ajustes no documento | Renan Cristyan |

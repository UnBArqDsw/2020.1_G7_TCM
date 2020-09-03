# Léxico Ampliado da Linguagem

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

<br>

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
|Noção|Inseriri email e senha válidos <br> Feito após criar uma conta|
|Impacto|O usuário agora pode usar as funcionalidades da aplicação, editar seu perfil, procurar torneios, entre outras ações <br> Caso o usuário esqueça a senha, ele poderá redefini-la|
|Rastro|[BS02](./Brainstorm.md)|
|Data|02/09/2020|

<br>

### L03 - Usuário

|L03|Usuário|
|--|--|
|Classificação|Objeto|
|Noção|Atletas, esportistas e jogadores de tênis <br> Podem ser profissionais ou casuais|
|Impacto|Os usuários que irão, de fato, jogar tênis <br> Poderão procurar torneios ou partidas amadoras para participar|
|Rastro|[BS01](./Brainstorm.md)|
|Data|02/09/2020|

<br>

### L04 - Moderador

|L04|Moderador|
|--|--|
|Classificação|Objeto|
|Noção|Este é o termo para o usuário que cria e administra torneios <br> Pode também criar partidas casuais <br>|
|Impacto|O moderador pode criar partidas, torneios, campeonatos e escolher / personalizar as regras <br> É de sua responsabilidade manter os placares e pontuações dos torneios atualizados|
|Rastro|[BS03](./Brainstorm.md)|
|Data|02/09/2020|

<br>

### L05 - Partida Amistosa

|L05|Partida Amistosa|
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
|Impacto|Impacta diretamente nas estatísticas dos jogadoree <br> O moderador é responsável pelos detalhes, por exemplo, custo de inscrição ou premiação para os campeões (apesar de alguns aspectos serem opcionais)|
|Rastro|[BS05](./Brainstorm.md)|
|Data|02/09/2020|

<br>

### L07 - Torneio público / privado

|L07|Torneio público / privado|
|--|--|
|Classificação|Estado|
|Noção|Forma de orgaziar o torneio <br> Nos torneios públicos, qualquer jogador pode solicitar inscrição <br> Nos torneios privados, apenas convidados pelo moderador podem participar|
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

## Conclusão
<p align = "justify">
Utilizando a técnica do Léxico Ampliado da Linguagem foi possível trazer uma maior clareza para a equipe, pois alguns termos eram usados de forma errada ou confusa. Também é interessante para pessoas de fora do projeto, que poderão ter uma noção dos aspectos importantes e poderão também utilizar os rastros para ver outros documentos.
</p>
 
## Referências

> BREITMAN, K. K.; LEITE, J. C. S. P.; FINKELSTEIN, A. The world’s a stage: a survey on requirements engineering using a real life case study”. Journal of the Brazilian Computer Society, vol.6 n.1, Campinas, July, 1999.

> Léxico Ampliado da Linguagem (Resumo). Disponível em: http://www-di.inf.puc-rio.br/~julio/lal.pdf Acesso em: 02/09/20

## Autor(es)
| Data | Versão | Descrição | Autor(es) |
| -- | -- | -- | -- |
| 02/09/20 | 1.0 | Criação do documento | Renan Cristyan | 
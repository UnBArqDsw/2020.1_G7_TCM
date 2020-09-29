---
id: plano_de_gcs
title: Plano de GCS
---
 
 
## Introdução
 
<p align = "justify">
O Plano de Gerenciamento de Configuração detalha o planejamento de atividade a ser executada durante o ciclo de vida do projeto, as responsabilidades designadas, recursos necessários para o projeto e padronização das ferramentas, de forma a assegurar um processo de desenvolvimento e evolução sistemático e rastreável.
</p>
 
## Metodologia
 
<p align = "justify">
O documento é dividido em  Políticas de Commits, Políticas de Branches e Política de Aprovação. Para a produção deste artefato usamos informações de referência e também a experiência da equipe com os temas. Além disso, foi utilizado o Google Hangouts para videoconferência e Visual Studio Code / Live Share para elaboração da documentação.
</p>
 
### Versão 1.0
 
### Políticas
 
<br/>
 
- **Políticas de Commits**
 
<p align = "justify">
Os <i>commits</i> devem ser escritos de maneira simples e também devem ser atômicos. O texto dos commits deve descrever o que foi produzido, de forma resumida, sem acentuação, com o tempo verbal no particípio. Além disso, deve conter o número de sua <i>issue</i> correspondente, no seguinte formato:
</p>
 
**Repositorio de Documentação**
 
```[#<id da issue>] <Texto com verbo no particípio>.```
 
**Exemplo:**
 
```[#01] Criado Documento```
 
**Outos Repositorios**
 
```[<Tag da issue>] <Texto com verbo no particípio>.```
 
**Exemplo:**
 
```[US00] Criada funcionalidade.```
 
<br/>
 
- **Políticas de Branches**
 [![Branches](../assets/diagrama_gcs/branchs.png)](../assets/diagrama_gcs/branchs.png)
 
*Imagem retirada da referência [2]*
 
O repositório do projeto terá uma branch master, sendo ela a branch estável.
 
Nenhum membro será autorizado a fazer commits diretamente na master. Cada atividade deve ter uma branch auxiliar própria, criada a partir da master. Os membros devem solicitar via pull requests atualizações na master.
 
``` <Identificador da atividade>-<Nome issue associada a atividade>```
 
**Exemplos:**
 
```US01-fazer-login```
 
Após o fim do desenvolvimento nas branches auxiliares elas devem ser incorporadas a master por meio de pull request.
 
 
- **Política de Aprovação**
 
Para a aprovação do código, o pull request deve ser revisado por pelo menos 1 membro da equipe que não esteja envolvido na tarefa, as branches e os commits devem estar de acordo com o definido, a build não pode apresentar erros, e assim a tarefa será aprovada.
 
- **Uso de Issues**
 
<p align = "justify">As issues serão criadas com o objetivo de descrever e rastrear as tarefas desenvolvidas pela equipe durante o projeto.</p>
 
<p align = "justify">As issues vão conter identificadores, para que se possa indicar de qual tarefa se trata. Os identificadores definidos para o projeto serão:</p>
 
* **[DOC]** - Utilizado para as issues que representam Documentos.
* **[EPIC]** - Utilizado para as issues que representam Épicos.
* **[FT]** - Utilizado para as issues que representam <i>Features</i>.
* **[US]** - Utilizado para as issues que representam Histórias de Usuário.
* **[BUG]** - Utilizado para as issues que representam correção de <i>Bugs</i>.
 
- Formato padrão das issues:
 
[![Template de Issues](../assets/diagrama_gcs/template_issue.png)](../assets/diagrama_gcs/template_issue.png)
 
## Ferramentas
 
| Ferramenta | Descrição |
|:----:|:---------:|
| Git | Versionamento |
| GitHub | Hospedagem de repositórios |
| ZenHub | Gerenciamento de equipe |
| React | Software de criação de interface de usuário |
| NodeJS | Criação de API's |
| Docker | Virtualização e configuração de ambiente por meio de containers |
| Docker Compose | Gerenciamento de containers Docker |
| Github Actions | Integração contínua |
| VS Code | Edição de código fonte |
| Slack e Whatsapp | Comunicação do grupo |
 
## Conclusão
 
<p align = "justify">
O artefato serve como padronização de algumas técnicas que serão usadas pela equipe durante o processo de desenvolvimento de software. Através das medidas estabelecidos poderemos padronizar melhor outras partes do projeto e manter uma organização visando qualidade e eficiência.
</p>
 
## Referências
 
> [1] Semantic Versioning 2.0.0 . Semantic Versioning Specification (SemVer). Disponível em <http://semver.org/>
 
> [2] https://mikedecr.github.io/teaching/computing-811/slides/08_git/08_git-intro.html#1
 
> [3] PMI®. PMBOK®: Um Guia do Conhecimento em Gerenciamento de Projetos (Guia PMBOK)/Project Management Institute.Sexta. Pensilvânia 19073-3299 EUA

## Autor(es)
 
| Data | Versão | Descrição | Autor(es) |
| -- | -- | -- | -- |
| 25/10/20 | 1.0 | Criação do documento | João Pedro e Lucas Alexandre |
| 27/10/20 | 1.1 | Adicionados topicos: Uso de issues, ferramentas e conclusão | João Pedro e Lucas Alexandre |
| 28/10/20 | 1.2 | Ajustes no texto | Renan Cristyan |

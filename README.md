<div align="center">

  <img alt="Logo" src="src/imagens/logo.png" style="height: 200px;">

  # **Espectro:** _A rede social que conecta vivências com o TEA!_
  
  <br>

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" style="height: 40px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" style="height: 40px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style="height: 40px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" style="height: 40px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="Node.js" style="height: 40px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest" style="height: 40px;"/> 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style="height: 40px;"/> 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" style="height: 40px;"/>

  <br/><br/>

  **Status do Projeto:** Concluído ✅ <br/><br/>
    
  A rede social *Espectro* pode ser visitada [aqui](https://brunalimxst.github.io/espectro-social-network/)!
</div>

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Definição de produto](#3-definição-de-produto)
* [4. Histórias de Usuário ](#4-histórias-de-usuário)
* [5. Protótipo de Alta Fidelidade, UX e UI](#5-protótipo-de-alta-fidelidade-ux-e-ui)
* [6. Desenvolvedoras](#6-desenvolvedoras)
* [7. Considerações técnicas](#7-considerações-técnicas)
* [8. Objetivos de Aprendizagem](#8-objetivos-de-aprendizagem)
***

## 1. Prefácio
**Rede social** é uma estrutura social composta por pessoas ou organizações, conectadas por um ou vários tipos de relações, que compartilham valores e objetivos comuns. Como exemplo, temos o Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. É um fato que as redes sociais hoje, atuam além de uma plataforma de entretenimento, a possibilidade de conectar-se com outras pessoas, histórias, produtos, informações cria uma rede de negócio. Passou a atribuir valor e credibilidade para uma marca, o bom uso de um perfil no instagram, por exemplo. 

<div align='center'>
<img alt="imagem-redes-sociais" src="src/imagens/redes-sociaiss.svg" style="height: 500px;"><br/><br/>
</div>

## 2. Resumo do projeto
Dado contexto, foi desenvolvido pelo nosso trio, uma Single Page Application (SPA) voltada para pessoas que vivem no Transtorno do Espectro Autista (TEA), a fim de impactar a vida dessas pessoas positivamente atráves de informação e rede apoio para pais, familiares e amigos. Essa rede social tem como objetivo criar um espaço de acolhimento, trocas, relatos entre pessoas que, de alguma forma, tem vivência com o TEA. Na rede Espectro, apostamos em um layout limpo, simples e intuitivo. Nossos usuários vão deparar-se com a tela de login e a opção de criar uma conta, assim que acessar a página. Após criar uma conta, nossos usuários terão um perfil com acesso ao feed, onde poderão criar postagens, curtir, descurtir e comentar postagens de outros usuários.

A rede Espectro veio como necessidade de ser desenvolvida, a partir de dores pessoais ao deparar-se com o diagnóstico de alguém próximo e não ter muitos canais informativos como respaldo neste primeiro momento. Em suma, esse rede social tem como meta alcançar familiares e amigos que buscam uma rede de apoio após um recém diagnóstico, mas também tem o intuito de trazer artigos, matérias e informações mais assertivas sobre o tema, partindo do ideal que a informação é um presente e pode impactar na qualidade de vida e no desenvolvimento cognitivo de pessoas no espectro autista, uma vez que essas estarão cercadas por familiares e amigos informados. 


<div align='center'><br/><br/>
  <img src='src/imagens/espectro-rr.png' style="height: 300px;"><br/><br/>
</div>

## 3. Definição de produto
A partir de um [formulário](https://docs.google.com/forms/d/e/1FAIpQLScen5FTO1-LLcTDpTtDH3oMjBpC3NO8kGkmqbdb4q_ntTqDuA/viewform) com o intuito de coletar dados de nossos potenciais usuários para entender o processo desde o diagnóstico de alguém próximo no TEA, até a vivência diária, entendemos que a falta de informações e de redes de apoio é uma necessidade para auxiliar familiares e amigos de pessoas que vivem no espectro autista, e também que esse acesso à informação impacta diretamente na qualidade de vida de quem vive no TEA. Dado contexto, definimos alguns pontos principais para a construção dessa rede social: 

  * Criação de uma conta e login com um perfil exclusivo para acessar a rede
  * Um feed para compartilhar histórias, informações, criar publicações, ler outras, curtir, descurtir e comentar
  * Opção de "deslogar" da conta
  * Um aba "about us" contando brevemente o intuito da rede social e apresentando brevemente as desenvolvedoras
  * Possibilidade de editar o próprio perfil com foto
 
 ## 4. Histórias de Usuário 
 A primeira história de usuário foi definida pensando numa pessoa que foi diagnosticada tardiamente e está no espectro autista de nível 1:
 
<div align='center'>
  <img alt="História de Usuário 1" src="src/imagens/historia1.svg" style="height: 500px;"><br/>
</div>
 
 A partir dessa história, foi definido os critérios de aceitação voltado ao processo de encontrar uma rede social e se cadastrar. 
*Critérios de aceitação:* Ao entrar na primeira página da rede social, o usuário poderá escolher dinamicamente entre se logar diretamente caso já tenha uma conta, ou se cadastrar. Na página "Cadastre-se", deverá inserir nome completo, nome de usuário, e-mail e senha, e clicar no botão "Cadastrar". Além disso, o usuário deve conseguir escolher entre criar uma nova conta ou se logar por meio de uma conta Google, associado a um Gmail.

A definição de pronto foi estabelecida a partir de recursos mínimos e obrigatórios que o usuário precisa conseguir fazer pautado nessa primeira história de usuário.

*Definição de pronto:* O usuário só conseguirá se cadastrar se preencher todos os campos corretamente com nome completo, e-mail e senha.
<br>
A segunda história de usuário foi definida pensando em pais que tiveram o diagnóstico do filho pequeno recentemente e estão aflitos, buscando informações e uma rede de apoio para que possam entender melhor todo o contexto: 

<div align='center'>
  <img alt="História de Usuário 2" src="src/imagens/historia2.svg" style="height: 500px;"><br/>
</div>

A partir dessa segunda história de usuário, foi definido os critérios de aceitação pautado numa rede social já existente em que o usuário crie sua conta e tenha acesso ao feed da rede, a qual terão publicações de outros usuários que também vivem próximos a realidade do espectro autista e utilizam aquele espaço para trocas em geral, sejam de teor informativo, desabafos pessoais, relato de algum acontecimento recente e todos guiados pelo desejo de se apoiarem e se informarem. 

A definição de pronto foi estabelecida pensando no recursos essenciais para retratar a funcionalidade de uma rede social.

*Definição de pronto:* O usuário só terá a opção de editar e deletar uma postagem se o mesmo tiver criado a publicação. O usuário poderá criar publicações, curtir e comentar outras desde que tenha uma conta criada na rede _Espectro_.

*Critérios de aceitação:* Ao cadastrar/logar na rede social, o usuário terá acesso à página principal no modelo "feed" ao qual o possibilitará de criar publicações, ler relatos de outros usuários, curtir postagens e comentar postagens. Além disso, o usuário deve ter a possbilidade de editar e deletar as suas próprias postagens. Deve também ter a opção de incluir uma foto de perfil para seu usuário e conseguir deslogar da página a qualquer momento desejado.

## 5. Protótipo de Alta Fidelidade, UX e UI
Após teste de usabilidade, implementamos algumas alterações finais no protótipo de alta fidelidade, os feedbacks recebidos foram os seguintes: 

- Tornar o botão de login com Google mais intuitivo;
- Incluir um segundo campo de input para confirmar senha; 
- Padronizar títulos de algumas páginas que estavam diferentes; 
- Inverter as cores (azul e verde) dos botões de cadastro e login;
- Incluir o texto "Ainda não tem conta?" interativo para cadastrar;

Após refinamento do prótotipo de acordo com os feedbacks recebidos, alcançamos o seguinte resultado:

<div align='center'>
  <strong>Protótipos Mobile ✨</strong><br/><br/>
  <img alt="prototipo-mobile" src="src/imagens/prototipos_mobile.png" style="height: 500px;"><br/><br/>
  <strong>Protótipos Desktop - Login e Cadastro ✨</strong><br/><br/>
  <img alt="prototipo-mobile" src="src/imagens/desktop_prototipos1.png" style="height: 350px; width:700px"><br/><br/>
  <strong>Protótipos Desktop - Homepage ✨</strong><br/><br/>
  <img alt="prototipo-mobile" src="src/imagens/protoripo-home.png" style="height: 500px;"><br/><br/>
</div>


## 6. Desenvolvedoras 
Social Network foi o terceiro projeto de Desenvolvimento Web da Laboratória e foi desenvolvido pelo trio: [Bruna Lima](https://github.com/brunalimxst), [Gabriela Sene](https://github.com/devgabrielasene) e [Gabriella Viroli](https://github.com/GabriellaViroli)

## 7. Considerações técnicas 
A lógica do projeto foi implementada somente em **JavaScript Vanilla**, **HTML e CSS**. Neste projeto não foi permitido o uso de bibliotecas e frameworks. Como serviço Back-end as a Service e banco de dados utilizamos o **Firebase**, **Jest** para os testes unitários e também usamos no back-end o **Node.js**. Foram utilizadas metodologias de **UX/UI**, testes de usabilidade e prototipagem de telas através do **Figma**. 

## 8. Objetivos de Aprendizagem 
- [x] JavaScript (tipo de dados, arrays, objetos, funções, condicionais, laços, etc)
- [x] HTML (HTML semântico);
- [x] Mobile First; 
- [x] CSS (flexbox, grid);
- [x] Manipulação dinâmica de eventos de DOM;
- [x] Routing (History API, evento hashchange, window.location);
- [x] Jest (mocks, espiões, testes unitários e assíncronos);
- [x] Módulos de ECMAScript (ES modules);
- [x] Uso de linter (ESLINT);
- [x] Callbacks e promisses;
- [x] Controle de Versões (Git e GitHub);
- [x] User-centricity;
- [x] Firebase (Firebase Auth, Firestore, etc);
- [x] CRUD;


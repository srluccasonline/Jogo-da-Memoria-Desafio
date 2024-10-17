# 🧠 Jogo da Memória - Demonstrativo Técnico (com testes unitários 🧪) 🎮

## 🌟 Visão Geral

Este projeto é um Jogo da Memória desenvolvido como demonstrativo técnico, utilizando Angular 18, TypeScript, HTML e CSS. O objetivo é apresentar um jogo da memória com funcionalidades básicas e um sistema de ranking de jogadores, onde as pontuações são armazenadas no Local Storage do navegador. Além disso, o projeto inclui testes unitários abrangentes! 😃

## 👨‍💻 Autor

- **Luccas Brandão**
- GitHub: [@srluccasonline](https://github.com/srluccasonline)

## 📜 Licença

Este projeto está licenciado sob a Licença MIT.

## 🚀 Funcionalidades

1. **Tela Inicial** 🏠: Apresenta opções para iniciar o jogo ou visualizar o ranking.
2. **Jogo da Memória** 🃏: Interface interativa onde o jogador pode virar cartas e encontrar pares.
3. **Sistema de Pontuação** ⏱️: Registra o tempo que o jogador leva para completar o jogo.
4. **Ranking** 🏆: Exibe uma lista dos melhores tempos dos jogadores.
5. **Testes Unitários** 🧪: Garante a qualidade e confiabilidade do código (Yay! 🎉)

## 🏗️ Estrutura do Projeto

O projeto é composto por três componentes principais:

1. **IntroComponent** 🚪: Tela inicial do jogo.
2. **GameComponent** 🎲: Implementação do jogo da memória.
3. **RankingComponent** 📊: Exibição do ranking de jogadores.

## 💻 Tecnologias Utilizadas

- Angular 18 🅰️
- TypeScript 📘
- HTML 🌐
- CSS 🎨
- Local Storage para armazenamento de dados 💾
- Testes Unitários com Jasmine e Karma 🧪

## 🛠️ Instalação e Execução

Para instalar e executar este projeto, siga os passos abaixo:

1. Certifique-se de ter o Node.js e o npm instalados em sua máquina.

2. Clone o repositório:
   ```
   git clone https://github.com/srluccasonline/Jogo-da-Memoria-Desafio.git
   ```

3. Navegue até o diretório do projeto:
   ```
   cd jogo-da-memoria
   ```

4. Instale as dependências:
   ```
   npm install
   ```

5. Inicie o servidor de desenvolvimento:
   ```
   ng serve
   ```

6. Abra seu navegador e acesse `http://localhost:4200`.

7. Para rodar os testes unitários:
   ```
   ng test
   ```

## 🔍 Detalhes de Implementação

### IntroComponent (src/app/intro/intro.component.ts)

Este componente representa a tela inicial do jogo. Ele utiliza o `RouterLink` do Angular para navegação e apresenta dois botões:

- "Iniciar Jogo" 🏁: Redireciona para o componente do jogo.
- "Ver Rank" 🏅: Redireciona para o componente de ranking.

O estilo é definido inline, utilizando Flexbox para centralização e estilização dos botões.

### GameComponent (src/app/game/game.component.ts)

Este é o componente principal do jogo. Ele inclui:

- Interface `Card` para representar cada carta do jogo.
- Lógica para virar cartas, verificar pares e controlar o fluxo do jogo.
- Temporizador para medir o tempo de jogo.
- Armazenamento do resultado no Local Storage.

O template utiliza diretivas estruturais do Angular como `*ngIf` e `*ngFor` para renderização condicional e repetição de elementos.

### RankingComponent (src/app/ranking/ranking.component.ts)

Este componente exibe o ranking dos jogadores. Ele:

- Recupera os dados do ranking do Local Storage.
- Exibe uma tabela com as posições, nomes e tempos dos jogadores.
- Mostra uma mensagem quando o ranking está vazio.

### Roteamento (src/app/app.routes.ts)

O arquivo de rotas define as seguintes rotas:

- '/': Redireciona para o IntroComponent.
- '/game': Carrega o GameComponent.
- '/ranking': Carrega o RankingComponent.
- '**': Redireciona para a rota padrão em caso de URL não encontrada.

## 🎉 Considerações Finais

Este projeto demonstra a utilização de conceitos fundamentais do Angular, como componentes, roteamento, binding de dados e estilização. Além disso, exemplifica o uso do Local Storage para persistência de dados no lado do cliente, uma técnica útil para aplicações que não requerem um backend complexo.

A estrutura modular e o uso de componentes standalone facilitam a manutenção e a escalabilidade do código, tornando-o um excelente exemplo para demonstrações técnicas e aprendizado.

Os testes unitários implementados garantem a robustez do código e facilitam futuras manutenções e expansões do projeto. Isso demonstra um compromisso com a qualidade e as melhores práticas de desenvolvimento! 🚀👨‍💻👩‍💻

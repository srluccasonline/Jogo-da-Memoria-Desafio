/**
 *  Jogo da Memória | Demonstrativo Técnico
 *  @author: Luccas Brandão
 *  @srluccasonline (Github) 
 *  Licenced under MIT
 * 
 *  Projeto desenvolvido com Angular 18, TypeScript, HTML e CSS.
 *  Objetivo do projeto é demonstrar um jogo da memória com funcionalidades básicas e um ranking de jogadores.
 *  Os rankings são armazenados no Local Storage do navegador.
 *  
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Card {
  emoji: string;
  flipped: boolean;
  matched: boolean;
}

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="container">
      <h2>Jogo da Memória</h2>
      <div *ngIf="!playerName" class="name-input">
        <input [(ngModel)]="inputName" placeholder="Digite seu nome">
        <button (click)="startGame()">Começar</button>
      </div>
      <div *ngIf="playerName" class="game-board">
        <div class="card" *ngFor="let card of cards; let i = index" (click)="flipCard(i)">
          <div class="card-inner" [class.flipped]="card.flipped">
            <div class="card-front">❓</div>
            <div class="card-back">{{ card.emoji }}</div>
          </div>
        </div>
      </div>
      <div *ngIf="gameFinished" class="game-finished">
        <p>Parabéns! Você completou o jogo em {{ elapsedTime }} segundos.</p>
        <button (click)="resetGame()">Jogar Novamente</button>
        <button routerLink="/ranking">Ver Ranking</button>
      </div>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      font-family: Arial, sans-serif;
    }
    .name-input {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }
    .game-board {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      max-width: 400px;
    }
    .card {
      width: 80px;
      height: 80px;
      perspective: 1000px;
      cursor: pointer;
    }
    .card-inner {
      width: 100%;
      height: 100%;
      transition: transform 0.6s;
      transform-style: preserve-3d;
    }
    .card-inner.flipped {
      transform: rotateY(180deg);
    }
    .card-front, .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .card-front {
      background-color: #3498db;
      color: white;
    }
    .card-back {
      background-color: #ecf0f1;
      transform: rotateY(180deg);
    }
    button {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      border: none;
      border-radius: 4px;
      background-color: #3498db;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s;
      margin: 0.5rem;
    }
    button:hover {
      background-color: #2980b9;
    }
    @media (max-width: 480px) {
      .game-board {
        grid-template-columns: repeat(3, 1fr);
        max-width: 300px;
      }
      .card {
        width: 70px;
        height: 70px;
      }
    }
  `]
})
export class GameComponent implements OnInit {
  playerName: string = '';
  inputName: string = '';
  cards: Card[] = [];
  gameFinished: boolean = false;
  elapsedTime: number = 0;
  startTime: number = 0;
  emojis: string[] = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];

  ngOnInit() {
    this.resetGame();
  }

  startGame() {
    if (this.inputName.trim()) {
      this.playerName = this.inputName.trim();
      this.startTime = Date.now();
    }
  }

  resetGame() {
    this.cards = [...this.emojis, ...this.emojis]
      .sort(() => Math.random() - 0.5)
      .map(emoji => ({ emoji, flipped: false, matched: false }));
    this.gameFinished = false;
    this.elapsedTime = 0;
    this.startTime = 0;
    this.playerName = '';
    this.inputName = '';
  }

  flipCard(index: number) {
    if (this.cards[index].flipped) return;
    this.cards[index].flipped = true;
    const flippedCards = this.cards.filter(card => card.flipped && !card.matched);
    if (flippedCards.length === 2) {
      if (flippedCards[0].emoji === flippedCards[1].emoji) {
        flippedCards.forEach(card => card.matched = true);
        if (this.cards.every(card => card.matched)) {
          this.finishGame();
        }
      } else {
        setTimeout(() => {
          this.cards.forEach(card => {
            if (!card.matched) card.flipped = false;
          });
        }, 1000);
      }
    }
  }

  finishGame() {
    this.gameFinished = true;
    this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
    const rankings: { name: string, time: number }[] = JSON.parse(localStorage.getItem('memoryGameRankings') || '[]');
    rankings.push({ name: this.playerName, time: this.elapsedTime });
    rankings.sort((a, b) => a.time - b.time);
    localStorage.setItem('memoryGameRankings', JSON.stringify(rankings.slice(0, 10)));
  }
}

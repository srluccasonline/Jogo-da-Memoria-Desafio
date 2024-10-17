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

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container">
      <h1>Jogo da Memória</h1>
      <div class="button-container">
        <button routerLink="/game">Iniciar Jogo</button>
        <button routerLink="/ranking">Ver Rank</button>
      </div>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      font-family: Arial, sans-serif;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
    .button-container {
      display: flex;
      gap: 1rem;
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
    }
    button:hover {
      background-color: #2980b9;
    }
  `]
})
export class IntroComponent {}

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
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container">
      <h2>Ranking</h2>
      <div *ngIf="rankings.length === 0" class="empty-ranking">
        <p>O ranking está vazio.</p>
      </div>
      <table *ngIf="rankings.length > 0">
        <thead>
          <tr>
            <th>Posição</th>
            <th>Nome</th>
            <th>Tempo</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let rank of rankings; let i = index">
            <td>{{ i + 1 }}</td>
            <td>{{ rank.name }}</td>
            <td>{{ rank.time }} segundos</td>
          </tr>
        </tbody>
      </table>
      <button routerLink="/">Voltar</button>
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
    table {
      border-collapse: collapse;
      margin-bottom: 2rem;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 0.5rem 1rem;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
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
    .empty-ranking {
      margin-bottom: 2rem;
    }
  `]
})
export class RankingComponent implements OnInit {
  rankings: { name: string, time: number }[] = [];

  ngOnInit() {
    this.rankings = JSON.parse(localStorage.getItem('memoryGameRankings') || '[]');
  }
}

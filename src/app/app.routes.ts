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

import { Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { GameComponent } from './game/game.component';
import { RankingComponent } from './ranking/ranking.component';

export const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'game', component: GameComponent },
  { path: 'ranking', component: RankingComponent },
  { path: '**', redirectTo: '' }
];

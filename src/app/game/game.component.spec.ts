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

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameComponent, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve iniciar com playerName vazio', () => {
    expect(component.playerName).toBe('');
  });

  it('deve iniciar com 16 cartas', () => {
    expect(component.cards.length).toBe(16);
  });

  it('deve iniciar o jogo quando o nome do jogador é inserido', () => {
    component.inputName = 'Jogador Teste';
    component.startGame();
    expect(component.playerName).toBe('Jogador Teste');
    expect(component.startTime).toBeGreaterThan(0);
  });

  it('deve virar uma carta quando clicada', () => {
    component.flipCard(0);
    expect(component.cards[0].flipped).toBeTrue();
  });

  it('deve resetar o jogo', () => {
    component.resetGame();
    expect(component.playerName).toBe('');
    expect(component.gameFinished).toBeFalse();
    expect(component.elapsedTime).toBe(0);
  });
});

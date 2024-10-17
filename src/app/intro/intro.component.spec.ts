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
import { provideRouter } from '@angular/router';
import { IntroComponent } from './intro.component';

describe('IntroComponent', () => {
  let component: IntroComponent;
  let fixture: ComponentFixture<IntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve renderizar o título "Jogo da Memória"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Jogo da Memória');
  });

  it('deve ter dois botões', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(2);
  });

  it('deve ter um botão "Iniciar Jogo"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button[routerLink="/game"]');
    expect(button?.textContent).toContain('Iniciar Jogo');
  });

  it('deve ter um botão "Ver Rank"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button[routerLink="/ranking"]');
    expect(button?.textContent).toContain('Ver Rank');
  });
});

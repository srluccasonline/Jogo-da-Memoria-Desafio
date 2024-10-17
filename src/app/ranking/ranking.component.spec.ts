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
import { RankingComponent } from './ranking.component';

describe('RankingComponent', () => {
  let component: RankingComponent;
  let fixture: ComponentFixture<RankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(RankingComponent);
    component = fixture.componentInstance;
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar rankings como um array vazio', () => {
    expect(component.rankings).toEqual([]);
  });

  it('deve carregar rankings do localStorage', () => {
    const mockRankings = [
      { name: 'Jogador 1', time: 30 },
      { name: 'Jogador 2', time: 45 },
    ];
    localStorage.setItem('memoryGameRankings', JSON.stringify(mockRankings));
    
    fixture.detectChanges(); // Isso chama ngOnInit

    expect(component.rankings).toEqual(mockRankings);
  });

  it('deve exibir mensagem quando o ranking está vazio', () => {
    localStorage.removeItem('memoryGameRankings');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.empty-ranking')?.textContent).toContain('O ranking está vazio.');
  });

  it('deve exibir a tabela de rankings quando há dados', () => {
    const mockRankings = [
      { name: 'Jogador 1', time: 30 },
      { name: 'Jogador 2', time: 45 },
    ];
    localStorage.setItem('memoryGameRankings', JSON.stringify(mockRankings));
    
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const tableRows = compiled.querySelectorAll('tbody tr');
    expect(tableRows.length).toBe(2);
  });

  it('deve ter um botão para voltar', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button');
    expect(button?.textContent).toContain('Voltar');
  });
});

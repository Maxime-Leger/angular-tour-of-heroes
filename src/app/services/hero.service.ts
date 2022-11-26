import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.addMessage('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(hero => hero.id === id)!;
    this.messageService.addMessage(`HeroService: fetched hero id=${id}`)
    return of(hero);
  }
}

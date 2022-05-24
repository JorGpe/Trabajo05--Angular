import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    // this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  addHero(hero: Hero): Observable<Hero[]> {
    hero.id = HEROES.length +1;
    HEROES.push(hero);
    this.sortHero();
    return of(HEROES);
  }

  sortHero(): Observable<Hero[]> {
    HEROES.sort(function (a, b) {
      if (a.point > b.point) {
        return -1;
      }
      if (a.point < b.point) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });
    return of(HEROES);
  }
}

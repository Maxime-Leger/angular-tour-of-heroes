import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../../services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  //selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }
  /*
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.addMessage(`HeroesComponent: Selected hero id=${hero.id}`);
    /*
    if (this.selectedHero !== hero) {
      this.selectedHero = hero;
    } else {
      this.selectedHero = undefined;
    }
    
  }
  */
}

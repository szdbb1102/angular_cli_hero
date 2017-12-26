// 模拟数据
// 引入模拟数据
// 点击事件html
// 常用语法：类名、for循环、ngIf

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
  })
  export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;


  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

// 使用service
// 1. import
// 2. 放到constructor
// 3. 引用形式this.heroService.getHeroes();

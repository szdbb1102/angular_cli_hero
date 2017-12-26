// 模拟数据
// 引入模拟数据
// 点击事件html
// 常用语法：类名、for循环、ngIf

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
  })
  export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero: Hero;


  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

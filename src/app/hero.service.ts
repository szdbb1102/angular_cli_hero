import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }

}

//  创建service
//  1. 命令行 ng generate service hero --module=app
//  2. AppModule导入, 放到provider.


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 引入FormsModule，在@NgModul 中 imports加入FormsModule，则可以双向绑定
import { FormsModule } from '@angular/forms';

// Every component must be declared in exactly one NgModule.
// 命令行生成组件时这个工作已经帮我们做好了，具体就是在app.module引入，在declarations中加入
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

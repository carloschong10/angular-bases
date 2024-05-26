import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;
  private flag: boolean = true;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(value: string): void {
    if(value){
      this.name = 'spiderman';
    }else {
      this.name = this.flag ? 'vandhelzin' : 'ironman';
      this.flag = !this.flag;
    }
  }

  changeAge(): void {
    this.age = this.flag ? 28 : 45;
    this.flag = !this.flag;
  }


}

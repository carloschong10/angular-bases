import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  // templateUrl: './counter.component.html',
  template: `
    <h3>Contador: {{ counter }}</h3>
    <button (click)="increaseBy(1)"> +1 </button>
    <button (click)="increaseBy(-1)"> -1 </button>
    <button (click)="resetCounter()">Resetear</button>
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public counter: number = 0;

  ngOnInit() {

  }

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 0;
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Chacaracter } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Chacaracter[] = [
    {
      name: ' Trunks',
      power: 9000
    }
  ]

  //onDelete = Index value: number //solo va a emitir el indice
  @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter(); //tambien podemos hacer que typescript lo infiera con: onDelete = new EventEmitter();
  public onDelete: EventEmitter<string> = new EventEmitter();

  //eliminando por index
  // onDeleteCharacter(index: number): void {
  //TODO: Emitir el index del Personaje
  //   console.log(`eliminar index emitido: `, {index});

  //   this.onDelete.emit(index);
  // }

  //mejro es eliminar por el id
  onDeleteCharacter(id?: string): void {
    //TODO: Emitir el ID del Personaje

    if (!id) return;
    console.log(`eliminar index emitido: `, { id });

    this.onDelete.emit(id);
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { Chacaracter } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Chacaracter> = new EventEmitter();

  public character: Chacaracter = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    // debugger; //para debugear en angular
    console.log('emitiendo: ', this.character);

    if (this.character.name.length === 0 || this.character.power < 0) return;

    this.onNewCharacter.emit(this.character);

    // this.character.name = '';
    // this.character.power = 0;

    //tambien se podria inicializar desestructurando el objeto
    this.character = { name: '', power: 0 };
  }
}

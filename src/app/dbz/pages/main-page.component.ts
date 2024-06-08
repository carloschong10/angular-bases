import { Component } from '@angular/core';
import { Chacaracter } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class DbzComponent {
    // constructor(public dbzService: DbzService) { } //por buenas practicas es recomendable ponerlo private
    constructor(private dbzService: DbzService) { }

    public title: string = this.dbzService.title;

    get characters(): Chacaracter[] {
        return [...this.dbzService.chacaracters];
    }

    onDeleteCharacter(id: string): void {
        this.dbzService.onDeleteById(id);
    }

    onNewCharacter(character: Chacaracter): void {
        this.dbzService.onNewCharacterPadre(character);
    }
}
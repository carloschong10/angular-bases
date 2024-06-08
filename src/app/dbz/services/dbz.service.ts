import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";

import { Chacaracter } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
    constructor() { }

    public title: string = 'DBZ Personajes';
    public chacaracters: Chacaracter[] = [
        {
            id: uuid(),
            name: 'Krillin',
            power: 1000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 8500
        }
    ];

    // onNewCharacterPadre(character: Chacaracter) {
    // console.log('escuchando: ', character);
    // onNewCharacterPadre({name, power}: Chacaracter) { // pero si tuvieramos bastantes propiedades por ejm 20, seria muy tedioso estarlo desestructurando, asi que mejor usamos el operador spread ( ... )
    // const newCharacter: Chacaracter = {
    //     id: uuid(),
    //     name: name,
    //     power: power
    // }
    // console.log('escuchando: ', newCharacter);

    onNewCharacterPadre(character: Chacaracter) {
        const newCharacter = { id: uuid(), ...character };

        console.log('escuchando: ', character);

        this.chacaracters.push(newCharacter);
    }

    //eliminando por index
    // onDeleteCharacterPadre(index: number) {
    //     console.log('eliminar index escuchando: ', { index });
    //     this.chacaracters.splice(index, 1);
    // }

    //mejor es eliminar por id
    onDeleteById(id: string) {
        console.log('eliminar el id escuchando: ', { id });
        this.chacaracters = this.chacaracters.filter(character => character.id !== id);
    }
}
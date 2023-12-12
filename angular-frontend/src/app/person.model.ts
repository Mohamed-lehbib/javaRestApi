// src/app/person.model.ts

export class Person {
    nni: number; // Used as the identifier
    nom: string;

    constructor(nni: number = 0, nom: string = '') {
        this.nni = nni;
        this.nom = nom;
    }
}

import { Joke } from './../../interfaces/joke.interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'joketile',
    templateUrl: './joketile.component.html',
    styleUrls: ['./joketile.component.css']
})
export class JokeTileComponent {

    @Input()
    public joke: Joke;

    @Output()
    public onToggleFavorite: EventEmitter<Joke> = new EventEmitter();

    constructor() { }

    public toggleFavorite() {
        this.onToggleFavorite.emit(this.joke);
    }

}

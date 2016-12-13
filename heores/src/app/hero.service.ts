import { Injectable } from '@angular/core'
import { HERO } from './hero';
@Injectable()

export class HeroService {
	private Heroes: HERO[] = [
		{id: 1, name: 'Danies'},
		{id: 2, name: 'Narco'},
		{id: 3, name: 'Bombasto'},
		{id: 4, name: 'Magneta'},
		{id: 5, name: 'RubberMan'},
		{id: 6, name: 'Dynama'},
		{id: 7, name: 'Dr. IQ'},
		{id: 8, name: 'Magma'},
		{id: 9, name: 'Tornado'}
	];
	getHeroes(): Promise<HERO[]>{
		return Promise.resolve(this.Heroes);
	}
	getHero(id: number): Promise<HERO> {
		return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id))
	}
}
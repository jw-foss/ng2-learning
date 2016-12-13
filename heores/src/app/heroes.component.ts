import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { HERO } from './Hero';
import { Router } from '@angular/router';

@Component({
	template: `
		<h2>My Heroes</h2>
		<ul class="heroes">
			<li *ngFor="let hero of heroes"
			[class.selected] = "hero === selectedHero"
			(click)="onSelect(hero)"
			>
				<span class="badge">{{hero.id}}</span>
				{{hero.name}}
			</li>
		</ul>
 		<br />
 		<div *ngIf="selectedHero">
 			<h2>
 			{{selectedHero.name | uppercase}} is my hero
 			</h2>
 			<button (click)="gotoDetail()">View Details</button>
 		</div>
	`,
	styles: [
	`.selected {
	background: #CFD8DC !important;
	color: white;
}

.heroes {
	margin: 0 0 2em 0;
	list-style: none;
	padding: 0;
	width: 15em;
}

.heroes li {
	cursor: pointer;
	position: relative;
	left: 0;
	background-color: #eee;
	margin: .5em;
	padding: .3em 0;
	height: 1.6em;
	border-radius:4px;
}
.heroes li.selected:hover {
	background-color: #bbd8dc !important;
	color: white;
}

.heroes li:hover {
	color: #607db8;
	background: #ddd;
	left: .1em;
}

.heroes .badge {
	display: inline-block;
	font-size: small;
	color: white;
	padding: .8em .7em 0 .7em;
	background: #607d88;
	line-height: 1em;
	position: relative;
	left: -1px;
	top: -4px;
	height: 1.8em;
	margin-right: .8em;
	border-radius: 4px 0 0 4px;
}`
	]
	
})
export class HeroesComponent implements OnInit {
  selectedHero: HERO;
  heroes: HERO[];
  constructor(private heroService: HeroService,
  	private router: Router) {}
  	getHero(): void {
  		this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }
  ngOnInit() {
  	this.getHero();
  }
  onSelect(hero: HERO): void {
  	this.selectedHero = hero;
  }
  gotoDetail(): void {
  	this.router.navigate(['/detail', this.selectedHero.id])
  }
}
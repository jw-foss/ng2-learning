import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './hero.service';
import { HERO } from './hero';
import 'rxjs/add/operator/switchMap';
@Component({
	selector: 'my-hero-detail',
	template: `
		<div *ngIf="hero">
			<h2>{{hero.name}} details!</h2>
			<div><label>id: </label>
			{{hero.id}}
			</div>
			<div>
			<label>name: </label>
			<input [(ngModel)]="hero.name" placeholder="name" />
			</div>
			<button (click)="goBack()">Back</button>
		</div>
	`,
	styles: [
		`
		label {
			display: inline-block;
			width: 3em;
			margin: .5em 0;
			color: #607d9b;
			font-weight: bold;
		}
		input {
			height: 2em;
			font-size: 1em;
			padding-left: .4em;
		}
		button {
			margin-top: 20px;
			font-family: Arial;
			background-color: #eee;
			border: none;
			padding: 5px 10px;
			border-radius: 4px;
			cursor: pointer; cursor: hand;
		}
		button:hover {
			background-color: #cfd8dc;
		}
		button:disabled {
			background-color: #eee;
			color: #ccc;
			cursor: auto;
		}
		`
	]
})

export class HeroDetailsComponent implements OnInit{
 @Input()	
 hero: HERO;
 constructor(private heroService: HeroService,
 	private route: ActivatedRoute,
 	private location: Location
 	) {}
 ngOnInit(): void {
 	this.route.params
 	.switchMap((params: Params) => this.heroService.getHero(+params['id']))
 	.subscribe( hero => this.hero = hero);
 }
 goBack(): void {
 	this.location.back();
 }
}
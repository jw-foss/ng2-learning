import { Component, OnInit } from '@angular/core';
import { Danmu } from './danmu';
import { DanmuService } from './danmu.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title: string = 'Shoot your danmu!';
  danmus: Danmu[] = [];
  color: string = 'black';
  position: '';
  constructor(private danmuService: DanmuService){}
  addDanmu(target): void {
  	if(!target.value) {
  		return
  	}
  	this.danmus.push({
  		text:target.value,
  		color: this.color,
  	});
  	target.value = '';
  	if (this.danmus.length === 20){
  		this.killDanmu();
  	}
  }
  killDanmu(): void{
  	//store the danmus, and empty it;
  	this.danmuService.storeDanmu(this.danmus);
  	this.danmus = [];
  }
  ngOnInit(){
  	  }

  clearScreen() {
  	this.danmus = [];
  }
}

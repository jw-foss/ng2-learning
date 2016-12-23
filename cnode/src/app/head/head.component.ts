import { Headers } from '@angular/http';
import {Component } from '@angular/core';

@Component({
    selector: 'app-head',
    templateUrl: './head.component.html' ,
    styleUrls: ['./head.component.css']
})

export class HeadComponent {
    title: string = 'Cnode By Jeremy'
}
import {Injectable } from '@angular/core';
import { Danmu } from './danmu';
@Injectable()

export class DanmuService {
	danmus: Danmu[];
	storeDanmu(arr) {
		this.danmus.push(arr);
	}
}
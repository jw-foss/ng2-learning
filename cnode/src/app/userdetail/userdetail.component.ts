import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {CnodeService} from "../services/cnode.service";
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  user: any = {};
  errMsg: string;

  constructor(private route: ActivatedRoute,
              private cnodeService: CnodeService,
              private location: Location) { }

  ngOnInit(): void {
    this.route.params
      .switchMap(
        (params: Params) => this.cnodeService.getUser(params['loginname']))
      .subscribe( user => {
          this.user = user.data;
          console.log(user.data);
        })
  }

  getDate(time): string {
    let now = Date.now();
    let created = new Date(time).getTime();
    let minus = (now - created) / 1000;
    let year = Math.floor(minus / (60 * 60 * 24 * 30 * 12));
    let month = Math.floor(minus / (60 * 60 * 24 * 30));
    let day = Math.floor(minus / (60 * 60 * 24));
    let hour = Math.floor(minus / (60 * 60));
    let min = Math.floor(minus / 60);
    return year ? year + '年前' : month ? month + '月前' : day ? day + '天前' : hour ? hour + '小时前' : min + '分钟前';
  }

}

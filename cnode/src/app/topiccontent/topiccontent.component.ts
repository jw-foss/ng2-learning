import { window } from '@angular-cli/ast-tools/node_modules/rxjs/operator/window';
import { CnodePage } from './../../../e2e/app.po';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CnodeService } from '../services/cnode.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-topiccontent',
  templateUrl: './topiccontent.component.html',
  styleUrls: ['./topiccontent.component.css']
})
export class TopiccontentComponent implements OnInit {
  content: any = {};
  constructor(
    private cnodeService: CnodeService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
      this.route.params
      .switchMap( (p: Params) =>  this.cnodeService.getTopicContent(p['id']))
      .subscribe( content => {
      console.log(content);
      this.content = content.data;
    });
  }
   getDate(time) {
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

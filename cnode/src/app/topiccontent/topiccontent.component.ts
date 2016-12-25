import { window } from '@angular-cli/ast-tools/node_modules/rxjs/operator/window';
import { CnodePage } from './../../../e2e/app.po';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CnodeService } from '../services/cnode.service';
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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.route.params
      .switchMap( (p: Params) =>  this.cnodeService.getTopicContent(p['id']))
      .subscribe( content => {
      this.content = content.data;
    });
  }
}

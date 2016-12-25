import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CnodeService } from "../services/cnode.service";
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
    private cnodeService: CnodeService) { }

  ngOnInit(): void {
    this.route.params
      .switchMap(
      (params: Params) => this.cnodeService.getUser(params['loginname']))
      .subscribe(user => {
        this.user = user.data;
      })
  }
}

import * as console from 'console';
import {CnodeService} from '../services/cnode.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-content',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title: string = 'Cnode By Jeremy';
  data: any;
  errMsg: string;
  currentPage: number = 1;
  tab: string;
  currentTab: boolean;
  pattern = /^\/\?tag=(\w+)$/ig;

  constructor(private cnodeService: CnodeService,
              private location: Location) {
  }

  ngOnInit() {
    this.tab = this.location.path(false).replace(this.pattern, '$1') || 'all';
    window.console.log(this.tab);
    this.cnodeService.getTopics(1, this.tab)
      .then(data => {
          this.data = data;
        }
      )
      .catch(err => this.errMsg = err);
    this.currentTab = this.location.isCurrentPathEqualTo('/') ? true : false
  }

  goBack() {
    this.currentPage--;
    this.cnodeService.getTopics(this.currentPage, this.tab)
      .then(data => {
          this.data = data;
        window.scrollTo(0, 0);
        }
      )
      .catch(err => this.errMsg = err)
  }

  //navigation to next page
  goNext() {
    this.currentPage++;
    this.cnodeService.getTopics(this.currentPage, this.tab)
      .then(data => {
        this.data = data;
        window.scrollTo(0, 0);
      })
      .catch(err => this.errMsg = err)
  }

  /*
   * navigate to tab
   * @tab {string} api request param;
   */
  goTab(tab) {
    this.currentPage = 1;
    this.cnodeService.getTopics(1, tab)
      .then(data => {
        this.data = data;
        this.tab = tab;
      })
      .catch(err => this.errMsg = err)
  }
}

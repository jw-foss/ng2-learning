import { Component } from '@angular/core';
import { TimesArticleService } from './times-article.service';


@Component({
  selector: 'times-article',
  template: `
  <div class="wrapper">
    <h1>Times Top 10 Ariticles</h1>
    <label for="city">Looking for where: </label>
    <input #city type="text" name="city">
    <button (click)="getArticle(city.value)" class="btn btn-info">search</button>
    <ul>
      <li *ngFor="let article of articles" class="article">
        <h2>
        <a href={{article.web_url}} target="_blank">
          {{article.headline.main}}
        </a>
        </h2>
        <p>
          {{article.lead_paragraph}}
        </p>
      </li>
    </ul>
  </div>
  `,
  styles: [
    `
    input:focus {
      outline: 2px solid rgb(102, 175, 233);
    }
    li.article{
      list-style: none;
      border-top: 1px solid #ccc;
      width: 400px;
      font-family: Consolas;
      background: rgba(0, 0, 0, .1)
    }
    .wrapper {
      width: 400px;
      margin: 0 auto;
      text-align: center;
    }
    .wrapper ul {
      padding: 0;
      width:400px;
    }
    `
  ],
  providers: [TimesArticleService],
})

export class TimesArticleComponent {
  articles: Array<{}>;
  errMsg: string;
  //inject TimesArticleService here
  constructor(private GetArticle: TimesArticleService) { }
  getArticle(address?: string) {
    this.GetArticle.getArticle(address).then(
      articles => this.articles = articles,
      error => this.errMsg = error
    )
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uet-cs-department';
  storedArticle: any[] = [];

  onArticleAdded(article: any) {
    this.storedArticle.push(article);
  }
}

import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ArticlesService } from '../article.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../article.model';

@Component({
  selector: 'app-display-article',
  templateUrl: './display-article.component.html',
  styleUrls: ['./display-article.component.css'],
})
export class DisplayArticleComponent implements OnInit{
private mode: string = 'create';
private articleId: string | undefined | null;
article: any;

constructor(public articlesService: ArticlesService, public route: ActivatedRoute) {}

ngOnInit() {
  this.route.paramMap.subscribe((paramMap: ParamMap) => {
    if (paramMap.has('articleId')) {
      this.mode = 'edit';
      this.articleId = paramMap.get('articleId');
      this.article = this.articlesService.getOneArticle(this.articleId!);
    } else {
      this.mode = 'create';
      this.articleId = "";
    }
  });
}

  onAddText(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.articlesService.addArticle(form.value.link, form.value.heading);
    form.resetForm();
  }
}
 
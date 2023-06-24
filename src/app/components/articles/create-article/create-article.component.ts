import { Component, OnDestroy, OnInit } from "@angular/core";
import { Article } from "../article.model";
import { ArticlesService } from "../article.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-create-article',
    templateUrl: './create-article.component.html',
    styleUrls: ['./create-article.component.css']
})

export class CreateArticleComponent implements OnInit, OnDestroy {
    articles: Article[] = [];
    isLoading = false;
    private articleSub: Subscription;
    constructor(public articlesService: ArticlesService){
        this.articleSub = new Subscription();
    }

    ngOnInit() {
        this.isLoading = true;
        this.articlesService.getArticle();
        this.articleSub = this.articlesService.getArticleUpdateListener().subscribe((articles:Article[])=>{
            this.isLoading = false;
            this.articles = articles
        });
    }

    onDelete(articleId: String){
        this.articlesService.deleteArticle(articleId);
    }

    ngOnDestroy() {
        this.articleSub.unsubscribe();
    }
}
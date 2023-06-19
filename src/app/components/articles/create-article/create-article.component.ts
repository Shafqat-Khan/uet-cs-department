import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-create-article',
    templateUrl: './create-article.component.html',
    styleUrls: ['./create-article.component.css']
})

export class CreateArticleComponent {
    @Input() articles: any[] = []

}
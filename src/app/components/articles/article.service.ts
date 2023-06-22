import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ArticlesService {
  private articles: Article[] = [];
  private articleUpdate = new Subject<Article[]>();

  constructor(private http: HttpClient) {}

  getArticle() {
    this.http.get<{ message: string; articles: Article[] }>('http://localhost:3000/api/article')
      .subscribe(articleData => {
        this.articles = articleData.articles;
        this.articleUpdate.next([...this.articles]);
      });
      
  }


  getArticleUpdateListener() {
    return this.articleUpdate.asObservable();
  }

  getOneArticle(id: string){
    return {...this.articles.find(article => article._id === id)}
  }

  addArticle(link: string, heading: string) {
    const article: Article = { _id: "", link: link, heading: heading };
    this.http.post<{message: string, articleId: string}>('http://localhost:3000/api/article', article)
    .subscribe(responseData=>{
      const id = responseData.articleId;
      article._id = id;
      this.articles.push(article);
      this.articleUpdate.next([...this.articles]);
    });
  }

  deleteArticle(articleId: String){
    this.http.delete("http://localhost:3000/api/article/" + articleId)
    .subscribe(()=>{
      const updatedArticles = this.articles.filter(article => article._id !== articleId);
      this.articles = updatedArticles;
      this.articleUpdate.next([...this.articles]);
    });
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateArticleComponent } from './components/articles/create-article/create-article.component';
import { DisplayArticleComponent } from './components/articles/display-article/display-article.component';

const routes: Routes = [
  { path: '', component: CreateArticleComponent},
  { path: 'create', component: DisplayArticleComponent},
  { path: 'edit/:articleId', component: DisplayArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { ArticleComponent } from './article/article.component';
import { ModalComponent } from './modal/modal.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { SinupComponent } from './sinup/sinup.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    CategoryComponent,
    HeaderComponent,
    FooterComponent,
    SummaryPipe,
    ArticleComponent,
    ModalComponent,
    AddArticleComponent,
    SinupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

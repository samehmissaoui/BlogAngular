import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  
  articles =[];

  constructor(public articleService :ArticlesService) { }

  ngOnInit(): void {
    this.articles = this.articleService.getAticles();

    setInterval(() =>{
     this.articleService.index ++;  
    }, 1000 )
  }

}

import { ExpressionStatement, SafeMethodCall } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../articles.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  title= 'List of articles';
  name="sameh" ;
  articles =[];
  view="tab1";
  isred=true;
  course={
    title: " the complete angular course L'HTML est un langage informatique utilisé sur l'internet. Ce langage est utilisé pour créer des pages web. L'acronyme signifie HyperText Markup Language, ce ...",
    rating: 4.95175,
    students: 8552854,
    prise:150.95,
    releaseDate:new Date (2020,4,20),
  }
  constructor(public articleService:ArticlesService ) { }
  ngOnInit(): void {
    this.articles = this.articleService.getAticles();
  }
  gettitle(){
    return this.title;
  }
  save(name){
    console.log("youre name is",this.name);
  }
  articleChange(event){
    console.log("badge of articals changed",event);
  }
 // change($event){
 // this.name=$event.target.value;
 //}

 
}

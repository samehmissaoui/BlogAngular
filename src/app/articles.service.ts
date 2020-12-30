import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public index=0;
  articles=[
  {
      title:"Angular course",
   content: "Développé par Google, Angular est un Framework open source écrit en JavaScript qui permet la création d'applications Web",
     imagePath: "https://via.placeholder.com/150",
   isFavorite:true
    },
    {
      title:"node js course",
      content: "Node.js est une plateforme logicielle libre en JavaScript orientée vers les applications réseau événementielles hautement concurrentes qui doivent pouvoir",
      imagePath: "https://via.placeholder.com/200",
      isFavorite:false
    },
    {
     title:"html course",
      content: "Langage de balisage utilisé pour la création de pages web, permettant notamment de définir des liens hypertextes.",
     imagePath: "https://via.placeholder.com/200",
    isFavorite:false
   },
  {
    title:"css course",
    content: "Langage de balisage utilisé pour la création de pages web, permettant notamment de définir des liens hypertextes.",
     imagePath: "https://via.placeholder.com/200",
   isFavorite:true
  }
    
  ]

  constructor() {}

  getAticles(){
    return this.articles;
    }
   
}

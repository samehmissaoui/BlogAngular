import { Component,OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
 
  @Input() article;
  @Input() text;
  badge ="New";
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.text);
  }
  changed(){
    this.badge="old";
    this.change.emit(this.article);
  }

}

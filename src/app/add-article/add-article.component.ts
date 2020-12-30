import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  categories = []
  constructor() { }

  ngOnInit() {
    
  }

  log(title) {
    console.log(title)
  }
  Submit(form){
    console.log(form);
    if(form.valid){
    console.log('form is valid');
  } else{
    console.log('form is not valid');}
  }
 

  
}

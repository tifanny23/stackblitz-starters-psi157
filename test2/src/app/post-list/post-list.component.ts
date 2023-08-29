import { Component,OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  @Input() postParent!:string;
  
  constructor(){}

  ngOnInit(): void {

  }

}

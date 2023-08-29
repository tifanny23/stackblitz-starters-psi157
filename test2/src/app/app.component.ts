import { Component, ViewChild, AfterViewInit} from '@angular/core';
import {PostComponent} from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'test2';
  parentMessage:string = 'Message Coming from parent component';
  message:string;
  fromChildOutput:string;

  @ViewChild(PostComponent) childComp: any;

  constructor(){
    console.log(this.childComp);
  }

  ngAfterViewInit(){
    console.log(this.childComp);
    this.message = this.childComp.childMessage;
  }

  reciveMessage($event: any){
    this.fromChildOutput = $event;
  }
}



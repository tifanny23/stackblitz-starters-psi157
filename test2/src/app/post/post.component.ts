import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  title:string = "List of Posts";
  messagePost:string = 'Message Post';

  postParentMessage:string = 'Parent Child';

  childMessage:string = 'From Child Component';

  outputChildMessage:string = 'Message from child via output decorator'

  @Input() fromParent!:string;

  @Output() messegeEvent = new EventEmitter<string>()

  constructor(){}

  ngOnInit(): void {

  }
  SendMessage(){
    this.messegeEvent.emit(this.outputChildMessage)
  }
}

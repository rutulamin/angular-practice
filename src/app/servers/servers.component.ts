import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowedServer = false;
  servermsg = "No Server Created";
  servername = "Server";

  constructor() {
    setTimeout(() =>{
      this.allowedServer = true;
    },2000);
   }

  ngOnInit() {
  }
  onUpdate(event: Event){ 
    this.servername = (<HTMLInputElement>event.target).value;
  }
  onCreateServer(){
    this.servermsg = "Server Created with name " + this.servername;
  }
}

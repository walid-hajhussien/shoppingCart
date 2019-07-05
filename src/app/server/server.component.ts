import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server-component.css'],
})
export class ServerComponent {
  id: number = 2;
  status: boolean = false;
  servers: any = [];

  changeStatus() {
    this.status = !this.status;
  }
}

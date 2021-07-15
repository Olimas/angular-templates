import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'todo-app',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

}

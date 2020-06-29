import { Component, OnInit } from '@angular/core';
//import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  todos: object[];
  todoTitle: string;
  todoId: number;

  constructor() { }

  ngOnInit() {
    this.todoTitle = '';
    this.todoId = 4;
    this.todos = [
      {
        'id': 1,
        'title': 'Check what TypeScript is',
      },
      {
        'id': 2,
        'title': 'Go to sleep',
      },
      {
        'id': 3,
        'title': 'Save the world',
      },
    ];
  }

  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return;
    }

    this.todos.push({
      id: this.todoId,
      title: this.todoTitle,
    })

    this.todoTitle = '';
    this.todoId++;
  }
}

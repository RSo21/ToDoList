import { Component, OnInit } from '@angular/core';
//import { Todo } from '../../interfaces/todo';
import { Status } from '../../interfaces/status';
import { Priority } from '../../interfaces/priority';

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  todos: object[];
  todoTitle: string;
  todoId: number;
  todoStatuses: Status[];
  todoDescription: string;
  todoDateTime: string;
  todoPriorities: Priority[];

  selectedValue: string;
  selectedValuePrior: string;

  constructor() { }

  ngOnInit() {
    this.todoTitle = '';
    this.todoId = 4;
    this.todoStatuses = [
      {value: 'to do', viewValue: 'to do'},
      {value: 'in progress', viewValue: 'in progress'},
      {value: 'done', viewValue: 'done'},
    ];
    this.todoDescription = '';
    this.todoDateTime = '';
    this.todoPriorities = [
      {value: 'low', viewValue: 'low'},
      {value: 'medium', viewValue: 'medium'},
      {value: 'high', viewValue: 'high'},
    ];
    this.todos = [
      {
        'id': 1,
        'title': 'Check what TypeScript is',
        'selectedValue': 'to do',
      },
      {
        'id': 2,
        'title': 'Go to sleep',
        'selectedValue': '',
      },
      {
        'id': 3,
        'title': 'Save the world',
        'selectedValue': '',
      },
    ];
  }

  addTodo(): void {
    if (this.todoTitle.trim().length === 0 
    && this.selectedValue.trim().length === 0
    && this.selectedValuePrior.trim().length === 0
    && this.todoDescription.trim().length === 0) {
      return;
    }

    this.todos.push({
      id: this.todoId,
      title: this.todoTitle,
      status: this.selectedValue,
      priority: this.selectedValuePrior,
      description: this.todoDescription,
      
    })

    this.todoTitle = '';
    this.selectedValue= '';
    this.selectedValuePrior= '';
    this.todoDescription= '';
    this.todoId++;
  }
}

import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { Status } from '../../interfaces/status';
import { Priority } from '../../interfaces/priority';

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  todos: Todo[];
  todoTitle: string;
  todoId: number;
  todoStatuses: Status[];
  todoDescription: string;
  todoDateTime: string;
  todoPriorities: Priority[];

  selectedValue: string;
  selectedValuePrior: string;

  beforeEditCache: string;
  anyRemainingModel: boolean;
  filter: string;

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
        'completed': false,
        'editing': false,
        'status': 'to do',
        'priority': 'low',
        'description': '',
      },
      {
        'id': 2,
        'title': 'Go to sleep',
        'completed': false,
        'editing': false,
        'status': 'to do',
        'priority': 'low',
        'description': '',
      },
      {
        'id': 3,
        'title': 'Save the world',
        'completed': false,
        'editing': false,
        'status': 'to do',
        'priority': 'low',
        'description': '',
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
      completed: false,
      editing: false,
      status: this.selectedValue,
      priority: this.selectedValuePrior,
      description: this.todoDescription
    })

    this.todoTitle = '';
    this.selectedValue= '';
    this.selectedValuePrior= '';
    this.todoDescription= '';
    this.todoId++;
  }

  editTodo(todo: Todo): void {
    this.beforeEditCache = todo.title;
    this.beforeEditCache = todo.status;
    todo.editing = true;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}


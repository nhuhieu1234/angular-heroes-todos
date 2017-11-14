import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    todos: Todo[] = [];
    newTodo: string = ' ';
    id: number = 0;
    todo: Todo;
    arrCompleted: Todo[] = [];
    arrIncomplete: Todo[] = [];
    selectedTodo: any;
    changeTodo: string;

    constructor(private todoDataService: TodoDataService) { }

    ngOnInit() {
        this.getAll();
    }

    getAll() {
        return this.todos;
    }

    addTodo(name: string): void {
        if(this.newTodo != ' ') {
            let todo: Todo = {
                id: ++this.id,
                name: name,
                completed: 0
            }
            this.todos.push(todo);
            this.newTodo = ' ';
        }
        else {
            console.log('error: Todo is not null');
        }
    }
    // addTodo(name: string) {
    //     this.todos  = this.todoDataService.addTodo(name);
    // }
    delTodo(todo) {
        let id = todo.id;
        this.todos = this.todos.filter(todo => todo.id != id);
    }

    completed(todo: Todo) {
        let id = todo.id;
        (todo.completed == 1) ? todo.completed = 0 :  todo.completed = 1;
    }

    listCompleted(): void {
        this.arrCompleted = this.todos.filter(todo => todo.completed != 0);
    }

    //Chua chay
    delAll() {
        this.todos = [];
    }

    selectAll() {
        this.todos = this.todos.filter(todo => todo.completed = 1);
    }

    listIncomplete(): void {
        this.arrIncomplete = this.todos.filter(todo => todo.completed != 1);
    }

    uppdateEvent(todo) {
        this.selectedTodo = todo;
        this.changeTodo = todo.name;
    }

    updateTodo(todo: Todo) {
        this.todos.filter(t => {
            if(t.id == todo.id){
                todo.name = this.changeTodo;
                t.name = this.changeTodo;
            }
        });
        this.changeTodo = '';
        this.selectedTodo = false;
    }
}

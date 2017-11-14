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

    allTodo: Todo[] = [];
    titleTodo: string = "All Todo";

    constructor(private todoDataService: TodoDataService) { }

    ngOnInit() {
        this.getAll();
    }

    getAll() {
        return this.allTodo = this.todos;
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

    callEvent(num: number) {
        if(num == 0) { 
            this.listTodo(); 
            console.log(this.allTodo);
            this.titleTodo = "All Todo" ;
        }
        else if(num == 1) { 
            this.listDoing(); 
            console.log(this.allTodo);
            this.titleTodo = "List Doing" ; 
        }
        else { 
            this.listDone(); 
            console.log(this.allTodo);
            this.titleTodo = "List Done" ; 
        }
    }

    completedEvent(todo: Todo) {
        (todo.completed == 1) ? todo.completed = 0 :  todo.completed = 1;
    }

    listTodo() {
        this.allTodo = this.todos;
    }

    listDoing() {
        this.allTodo = this.todos.filter(todo => todo.completed != 1);
    }

    listDone() {
        this.allTodo = this.todos.filter(todo => todo.completed != 0);
    }

    // addTodo(name: string) {
    //     this.todos  = this.todoDataService.addTodo(name);
    // }
    delTodo(todo) {
        let id = todo.id;
        console.log(todo)
       this.allTodo = this.allTodo.filter(todo => todo.id != id);
       this.todos = this.allTodo;
    }

    // completed(todo: Todo) {
    //     let id = todo.id;
    //     (todo.completed == 1) ? todo.completed = 0 :  todo.completed = 1;
    // }

    // listCompleted(): void {
    //     this.arrCompleted = this.todos.filter(todo => todo.completed != 0);
    // }

    // //Chua chay
    delAll() {
        this.allTodo = [];
        this.todos = this.allTodo;
    }

    selectAll() {
        this.allTodo = this.allTodo.filter(todo => todo.completed = 1);
        this.todos = this.allTodo;
    }

    // listIncomplete(): void {
    //     this.arrIncomplete = this.todos.filter(todo => todo.completed != 1);
    // }

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

import { Injectable } from '@angular/core';
import { Todo } from '../todo';

@Injectable()
export class TodoDataService {
    todos: Todo[] = [];
    id: number = 0;

    constructor() { }
    getAll() {
        return this.todos;
    }
    // addTodo(name: string): void {
    //     if(this.newTodo != ' ') {
    //         let todo: Todo = {
    //             id: ++this.id,
    //             name: name,
    //             completed: 0
    //         }
    //         this.todos.push(todo);
    //         this.newTodo = ' ';
    //     }
    //     else {
    //         console.log('error: Todo is not null');
    //     }
    // }
    addTodo(name: string) {
        let todo: Todo = {
            id: ++this.id,
            name: name,
            completed: 0
        }
        this.todos.push(todo);
        return this.todos;
    }
}

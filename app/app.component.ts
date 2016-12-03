import { Component } from '@angular/core';
//schema for todolists
interface todos {
    text: string;
    completed: boolean;
}
@Component({
    selector: 'my-app',
    template: `
    <div class="container">
    <label for="todos">Input todos:</label>
     <input type="text" name="todos" #val (keyup.enter)="handleEnter(val.value, $event)">
     <ul>
         <li *ngFor="let todo of Todos;let i = index" (click)="toggle(i)" [class.completed]="todo.completed" [class.uncompleted]="!todo.completed">
             {{todo.text}} <span class="delete" (click)="delete(i)">x</span>
         </li>
     </ul>
    <nav>
      <a href="javascript:0" (click)="filter()">Show All</a> |
      <a href="javascript:0" (click)="filter(undefined, true)">Show Completed</a> |
      <a href="javascript:0" (click)="filter(undefined, false)">Show Uncompleted</a> 
    </nav>
    </div>
  `,
    styles: [
        `
        *{
            font-family: Consolas;
        }
      .container {
         width: 50%;
         margin: 0 auto;
         text-align: center;
      }
      .container ul {
          margin: 0 auto;
          width: 200px;
      }
      .container li {
          list-style: circle;
      }
      .delete{
          cursor: pointer;
          float: right;
      }
      .completed {
          text-decoration: line-through;
      }
      .uncompleted {
          color: red;
      }
      nav a {
          text-decoration: none;
          color: orange;
          cursor: pointer;
      }
      `
    ]
})

export class AppComponent {
    Todos: todos[] = this.doItem('get') || this.doItem('set', []);
    /*
     *todo filter
     *@arg: boolean, how you want to filte;
     */
    filter(arg?: boolean) {
        if (typeof arg !== 'undefined') {
            this.Todos = this.Todos.filter(v => {
                return v.completed === arg;
            })
        }
    }
    /*
     *@method: String; get or set;
     */
    doItem(method: string, item: todos[] = this.Todos) {
        switch (method) {
            case 'get':
                return JSON.parse(localStorage.getItem('todoLists'));
            case 'set':
                localStorage.setItem('todoLists', JSON.stringify(item));
                break;
        }
    };
    /*
     *toggle completed;
     *@index: Number, index in Todos 
     */
    toggle(index: number): void {
        this.Todos[index].completed = !this.Todos[index].completed;
        this.doItem('set');
    }
    /*
     *Enter handler;
     *@value: String, value of the input;
     *@e: object, event obj;
     */
    handleEnter(value: string, e: any): void {
        if (value.trim()) {
            this.Todos.push({ text: value, completed: false });
            this.doItem('set');
            e.target.value = '';
        } else {
            e.target.value = '';
            alert('value couldn\'t be empty');
        }
    }
    /*
     * delete handler
     * @index: number
     */
    delete(index: number): void {
        this.Todos.splice(index, 1);
        this.doItem('set');
    }
}
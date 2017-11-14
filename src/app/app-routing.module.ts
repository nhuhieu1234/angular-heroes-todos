import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { TodoComponent } from './todo/todo.component';
import { TodoViewComponent } from './todo/todo-view/todo-view.component';
import { TodoActiveComponent } from './todo/todo-active/todo-active.component';
import { TodoCompletedComponent } from './todo/todo-completed/todo-completed.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'todo', component: TodoComponent,
    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      { path: 'view', component: TodoViewComponent },
      { path: 'active', component: TodoActiveComponent },
      { path: 'completed', component: TodoCompletedComponent }
    ]
  }
];
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

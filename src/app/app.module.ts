import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddItemComponent } from './todo-add-item/todo-add-item.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoEditItemComponent } from './todo-edit-item/todo-edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoAddItemComponent,
    TodoItemComponent,
    TodoAppComponent,
    TodoEditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

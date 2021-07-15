import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import '@angular/common/locales/global/ru';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {CardComponent} from './cards/card/card.component';
import {FormComponent} from './cards/form/form.component';
import {BasicsComponent} from "./cards/cards.component";
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './todo/components/header/header.component';
import { ButtonComponent } from './todo/components/button/button.component';
import { TasksComponent } from './todo/components/tasks/tasks.component';
import { TaskItemComponent } from './todo/components/task-item/task-item.component';
import { AddTaskComponent } from './todo/components/add-task/add-task.component';
import { AboutComponent } from './todo/components/about/about.component';
import { FooterComponent } from './todo/components/footer/footer.component';

const appRoutes: Routes = [
  // {path: '', component: TasksComponent},
  {path: 'about', component: AboutComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    BasicsComponent,
    TodoComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [{provide: LOCALE_ID, useValue: 'ru'}],
  bootstrap: [AppComponent],
})
export class AppModule {
}

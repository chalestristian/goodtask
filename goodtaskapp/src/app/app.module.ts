import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TasklistComponent } from './tasklist/tasklist.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TaskService } from './services/task.service';




@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }

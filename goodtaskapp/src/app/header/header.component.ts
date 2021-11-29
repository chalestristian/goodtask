import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ITask } from '../ITasks';
import { TaskModel } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { TasklistComponent } from '../tasklist/tasklist.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  task: TaskModel = new TaskModel();
  tasks: Array<any> = new Array();
  constructor(private taskService: TaskService ) { }
  ngOnInit() {
  }}
  


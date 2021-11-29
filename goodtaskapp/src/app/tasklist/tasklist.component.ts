import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  
  tasks: Array<any> = new Array();
  

  constructor(private taskService: TaskService ) { }
 
  // ngOnInit(): void {
   ngOnInit() {
     this.ListarTasks();
  }

    ListarTasks(){
      this.taskService.listarTasks().subscribe(tasks => {
          this.tasks = tasks;      
      }, err => {
        console.log('Erro ao listar', err)
      })
    }

  


}

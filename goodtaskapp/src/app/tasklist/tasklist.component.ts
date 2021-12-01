import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  task: TaskModel = new TaskModel();
  tasks: Array<any> = new Array();
  

  constructor(public taskService: TaskService ) { }
 
  // ngOnInit(): void {
   ngOnInit() {
    this.ListarTasks();// TENTAR ADICIONAR ISSO NO 
  }
    atualizar(id: number){
      this.taskService.atualizarTask(id, this.task).subscribe(task => {
        this.task = new TaskModel();
        this.ListarTasks();
        
      }, err =>{
        console.log("Erro", err) 
    })
    }
    
    remover(id: number){
      this.taskService.removerTask(id).subscribe(task => {
        this.task = new TaskModel();
        this.ListarTasks();
        }, err =>{
          console.log("Erro", err) 
      })
    }


    cadastrar(){
      this.taskService.CriarTask(this.task).subscribe(task => {
        this.task = new TaskModel();
        this.ListarTasks();
        
      }, err =>{
        console.log("Erro", err) 
    })
    }

    ListarTasks(){
      this.taskService.listarTasks().subscribe(tasks => {
          this.tasks = tasks;      
      }, err => {
        console.log('Erro ao listar', err)
      })
    }

  


}

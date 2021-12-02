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
  ngOnInit(){
    this.list();
  }

  create(){
    this.taskService.CriarTask(this.task).subscribe(task => {
      this.task = new TaskModel();
      this.list();        
    }, err =>{
      console.log("Erro ao criar task", err) 
    })
  }
  
  update(id: number){
    this.taskService.atualizarTask(id, this.task).subscribe(task => {
      this.task = new TaskModel();
      this.list();
    }, err =>{
      console.log("Erro ao atualizar task", err) 
    })
  }
  
  remover(id: number){
    this.taskService.removerTask(id).subscribe(task => {
      this.task = new TaskModel();
      this.list();
      
    }, err =>{
      console.log("Erro ao excluir task", err) 
    })
  }

  list(){
    this.taskService.listarAllTasks().subscribe(tasks => {
      this.tasks = tasks;      
    }, err => {
      console.log('Erro ao listar task', err)
    })
  }  
  
  disable(id: number){
    this.taskService.desativarTask(id, this.task).subscribe(task => {
      this.task = new TaskModel();
      this.list();
    }, err =>{
      console.log("Erro ao desativar task", err) 
    })
  } 
}

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
  checklista: TaskModel = new TaskModel();
  tasks: Array<any> = new Array();  
  masterSelected:boolean;
  checklist: Array<any> = new Array();
  checkedList: Array<TaskModel> = new Array();
  checkLista : Array<any> = new Array();
  
  taskdisable = [];

  
  constructor(public taskService: TaskService ) {
    this.masterSelected = false;
    this.getCheckedItemList();
} 

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
     this.checklist = tasks;      
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

  



checkUncheckAll() {
  for (var i = 0; i < this.checklist.length; i++) {
    this.checklist[i].isSelected = this.masterSelected;
  }
  this.getCheckedItemList();
}

// Check All Checkbox Checked
isAllSelected() {
  this.masterSelected = this.checklist.every(function(item: any) {
      return item.isSelected == true;
    })
  this.getCheckedItemList();
}

// Get List of Checked Items
getCheckedItemList(){
  this.checklista;
  for (var i = 0; i < this.checklist.length; i++) {
    if(this.checklist[i].isSelected)
    this.checklista = this.checklist[i];
    this.checkLista[i] = this.checklista.id;
    this.disabledelected(this.checklista.id)
  }
  console.log(this.checklista.id)
  delete this.checklista.id;
  console.log('aa'+this.checklista.id)
}

disabledelected(id: any){
  this.taskService.desativarTask(id, this.checklista).subscribe(task => {
    this.checklista = new TaskModel();
    this.list();
  }, err =>{
    console.log("Erro ao desativar task", err) 
  })

}
}
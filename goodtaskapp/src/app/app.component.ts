import { Component } from '@angular/core';
import { ITask } from './ITasks';
import { TaskService } from './services/task.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = 'goodtaskapp';

  // constructor(private taskService : TaskService){ }

  // obterTodos(){
  //   this.taskService.obterTodos()
  //     // .then(tasks => console.log(tasks))
  //     //   .catch(error => console.error(error))
      
    

  // }
  // ObterId(){
  //   this.taskService.ObterId(4)
  //     .then(tasks => console.log(tasks))
  //     .catch(error => console.error(error))
  //   }
  

  // CriarTask(){
  //   const task: ITask = {
  //     desc: "AHHHHHHHHHHHHHHHHHHHHH",
  //     name: "BAAAAAAAAAAAAAAAAAAAAAA"
  //   };
    
  //   this.taskService.CriarTask(task)
  //     .then(task => console.log('Adcionado'))
  //     .catch(error => console.error(error))


  // }

      
 
}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';
import { ITask } from '../ITasks';
import { TaskModel } from '../models/task.model';



@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor( private http: HttpClient) {}
  
  listarTasks() : Observable<any>{
      return this.http.get(`${API_PATH}tasks`)
    }

    CriarTask(task: ITask): Observable<any>{
      return this.http.post(`${API_PATH}tasks`, task);
    }

    ObterId(id: number){
      return this.http.get<ITask>(`${API_PATH}tasks/${id}`).toPromise();

    }

    atualizarTask(id:any, task: TaskModel) : Observable<any>{
      return this.http.put(`${API_PATH}tasks/update/`.concat(id), task);
    }

    removerTask(id: any) : Observable<any>{
      return this.http.delete(`${API_PATH}tasks/delete/`.concat(id));
    }
  
   }


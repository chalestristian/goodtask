import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';
import { ITask } from '../ITasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor( private httpClient: HttpClient) {}
  
    obterTodos(){
      return this.httpClient.get<ITask[]>(`${API_PATH}tasks`).toPromise();
    }
    ObterId(id: number){
      return this.httpClient.get<ITask>(`${API_PATH}tasks/${id}`).toPromise();

    }

    CriarTask(task: ITask){
      return this.httpClient.post<ITask>(`${API_PATH}tasks`, task).toPromise();
    }
   }


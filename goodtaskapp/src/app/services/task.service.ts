import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';
import { ITask } from '../ITasks';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor( private http: HttpClient) {}
  
  listarTasks() : Observable<any>{
      return this.http.get(`${API_PATH}tasks`)
    }
    ObterId(id: number){
      return this.http.get<ITask>(`${API_PATH}tasks/${id}`).toPromise();

    }

    CriarTask(task: ITask){
      return this.http.post<ITask>(`${API_PATH}tasks`, task).toPromise();
    }
   }


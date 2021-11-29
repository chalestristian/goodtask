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

    CriarTask(task: ITask): Observable<any>{
      return this.http.post(`${API_PATH}tasks`, task);
    }

    ObterId(id: number){
      return this.http.get<ITask>(`${API_PATH}tasks/${id}`).toPromise();

    }

  
   }


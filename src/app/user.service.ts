import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import {Employee} from './employee';
import {Task} from './task';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  HOST = "http://" + window.location.hostname + ":" + window.location.port + "/api/"
  EMPLOYEES = this.HOST + "employees"
  TASKS_BY_OWNER = this.HOST + "task-by-owner"

  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get<Employee[]>(this.EMPLOYEES)
              .pipe(
                map((data: Employee[]) => {
                  return data;
                }), catchError( error => {
                  return throwError( 'Something went wrong!' );
                })
              );
  }

  getTasksByOwner(ownerId: number){
    return this.http.get<Task[]>(this.TASKS_BY_OWNER + "/" + ownerId)
                  .pipe(
                    map((data: Task[]) => {
                      return data;
                    }), catchError( error => {
                      return throwError( 'Something went wrong!' );
                    })
                  );
  }

}

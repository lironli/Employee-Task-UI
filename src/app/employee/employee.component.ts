import { Component, Input } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import {UserService} from '../user.service'
import {Employee} from '../employee';
import {Task} from '../task';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {

  constructor(private user:UserService, router: Router){ }

  selectedEmployee: Employee = {} as Employee;
  tasks : Task[] = [];

  ngOnInit(){
    this.selectedEmployee = history.state.data;

    this.user.getTasksByOwner(this.selectedEmployee.id).subscribe(data=>{
      this.tasks = data;
    })
  }
}

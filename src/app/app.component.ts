import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import {UserService} from './user.service'
import {Employee} from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui-dev-play';

  navigatedAway = false;
  employees : Employee[] = [];

  constructor(private user:UserService, router: Router){
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.navigatedAway = event.url !== '/employee-details';
      }
    });
  }

  ngOnInit(){
    this.user.getEmployees().subscribe(data=>{
      this.employees = data;
    })
  }
}

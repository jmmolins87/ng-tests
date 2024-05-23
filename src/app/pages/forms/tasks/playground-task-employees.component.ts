import { Component } from '@angular/core';

import { ItemsTabs } from './interface/nav-tabs.interface';

@Component({
  selector: 'app-playground-task-employees',
  templateUrl: './playground-task-employees.component.html',
  styleUrls: ['./playground-task-employees.component.css']
})
export class PlaygroundTaskEmployeesComponent {

  public itemsTabs: ItemsTabs[] = [
    {
      name: 'Form Empleados',
      path: 'formEmployees'
    },
    {
      name: 'Lista Empleados',
      path: 'listEmployees'
    }
  ]

}

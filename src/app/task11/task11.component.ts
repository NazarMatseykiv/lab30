import { Component } from '@angular/core';

@Component({
  selector: 'app-task11',
  template: `
    <table>
      <tr>
        <th>Ім'я</th>
        <th>Вік</th>
      </tr>
      <tr *ngFor="let user of users">
        <ng-container *ngIf="user.name.includes('а')">
          <td>{{ user.name }}</td>
          <td>{{ user.age }}</td>
        </ng-container>
      </tr>
    </table>
  `
})
export class Task11 {
  users = [
    { name: 'Андрій', age: 25 },
    { name: 'Олександр', age: 30 },
    { name: 'Ірина', age: 28 },
    { name: 'Марія', age: 32 }
  ];
}

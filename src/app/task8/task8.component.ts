import { Component } from '@angular/core';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-task8',
  template: `
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of firstThreeUsers">
            <td>{{ user.id }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class Task8 {
  users: User[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com' },
    { id: 3, firstName: 'Mark', lastName: 'Johnson', email: 'mark@example.com' },
    // Add other users...
  ];

  get firstThreeUsers(): User[] {
    return this.users.slice(0, 3);
  }
}

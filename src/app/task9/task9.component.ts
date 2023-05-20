import { Component } from '@angular/core';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-task9',
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
          <tr *ngFor="let user of nextThreeUsers">
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
export class Task9 {
  users: User[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com' },
    { id: 3, firstName: 'Mark', lastName: 'Johnson', email: 'mark@example.com' },
    { id: 4, firstName: 'Sarah', lastName: 'Williams', email: 'sarah@example.com' },
    { id: 5, firstName: 'Michael', lastName: 'Brown', email: 'michael@example.com' },
    { id: 6, firstName: 'Emily', lastName: 'Davis', email: 'emily@example.com' },
    // Add other users...
  ];

  get nextThreeUsers(): User[] {
    return this.users.slice(3, 6);
  }
}

import { Component } from '@angular/core';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
}

@Component({
  selector: 'app-task4',
  template: `
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Ім'я</th>
          <th>Прізвище</th>
          <th>Email</th>
          <th>Дата народження</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of sortedUsers">
          <td>{{ user.id }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.birthDate | date:'dd.MM.yyyy' }}</td>
        </tr>
      </tbody>
    </table>
  `,
})
export class Task4 {
  users: User[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', birthDate: new Date(1990, 5, 15) },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', birthDate: new Date(1985, 8, 21) },
    // Add other users...
  ];

  get sortedUsers(): User[] {
    return this.users.sort((a, b) => a.birthDate.getTime() - b.birthDate.getTime());
  }
}

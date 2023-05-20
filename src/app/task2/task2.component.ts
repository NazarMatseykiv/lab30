import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  template: `
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
        <tr *ngFor="let user of users">
          <td>{{ user.id }}</td>
          <td>{{ user.firstName | lowercase }}</td>
          <td>{{ user.lastName | lowercase }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  `,
})
export class Task2 {
  users = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com' },
    // Додайте інші користувачі...
  ];
}

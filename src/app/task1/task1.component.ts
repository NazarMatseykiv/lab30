import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
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
          <td>{{ user.firstName | uppercase }}</td>
          <td>{{ user.lastName | uppercase }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  `,
})
export class Task1 implements OnInit {
  users!: any[]; // замініть any[] на відповідний тип даних користувачів

  ngOnInit() {
    // Заповніть дані про користувачів
    this.users = [
      { id: 1, firstName: 'Іван', lastName: 'Петров', email: 'ivan@example.com' },
      { id: 2, firstName: 'Марія', lastName: 'Сидоренко', email: 'maria@example.com' },
      { id: 3, firstName: 'Олександр', lastName: 'Коваль', email: 'oleksandr@example.com' }
    ];
  }
}

import { Component } from '@angular/core';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
}

@Component({
  selector: 'app-task5',
  template: `
    <table>
      <thead>
        <tr>
          <th>Ім'я</th>
          <th>Вік</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of sortedUsers">
          <td>{{ user.firstName }} {{ user.lastName }}</td>
          <td>{{ calculateAge(user.birthDate) }}</td>
        </tr>
      </tbody>
    </table>
  `,
})
export class Task5 {
  users: User[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', birthDate: new Date(1990, 5, 15) },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', birthDate: new Date(1985, 8, 21) },
    // Add other users...
  ];

  get sortedUsers(): User[] {
    return this.users.sort((a, b) => b.birthDate.getTime() - a.birthDate.getTime());
  }

  calculateAge(birthDate: Date): number {
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  }
}

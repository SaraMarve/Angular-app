import { Component } from '@angular/core';
interface Students {
   id?: number;
   firstName?: string;
   lastName?:  string;
   address?: string;
   phone? : string;
   active?: boolean;
   average?: number;
  }
@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})

export class StudentsListComponent {
  students = [
    {
      id: 1,
      firstName: 'שרה',
      lastName: 'כהן',
      address: 'תאנה',
      phone: '050-1234567',
      active: true,
      average: 92
    },
    {
      id: 2,
      firstName: 'חני',
      lastName: 'לוי',
      address: 'חיטה',
      phone: '052-7654321',
      active: false,
      average: 81
    },
    {
      id: 3,
      firstName: 'רבקה',
      lastName: 'ישראלי',
      address: 'רימון',
      phone: '053-9876543',
      active: true,
      average: 88
    }
  ];

  deleteStudent(id: number) {
    this.students = this.students.filter(student => student.id !== id);
  }
}

import { Component } from '@angular/core';
 export interface Students {
   id: number | null;
   firstName?: string;
   lastName?:  string;
   address?: string;
   phone? : string;
   active?: boolean;
   average?: number;
   exitDate?: string;
  }
@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})

export class StudentsListComponent {
  students : Students [] = [
    {
      id: 1,
      firstName: 'שרה',
      lastName:  'כהן',
      address: 'תאנה',
      phone : '054844444',
      active: true,
      average: 92,
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

  selectedStudent: Students | null = null;

  editStudent(student: Students) {
    this.selectedStudent = student;
  }

  addNewStudent() {
    this.selectedStudent = {
      id: 0,
      firstName: '',
      lastName: '',
      address: '',
      phone: '',
      active: true,
      average: 0
    };
  }

  clearSelection() {
    this.selectedStudent = null;
  }

  onEditStudent(student: any) {
    this.selectedStudent = { ...student }; // Clone for editing
  }

  onAddStudent() {
    this.selectedStudent = {
      id: null,
      firstName: '',
      lastName: '',
      address: '',
      phone: '',
      active: true,
      average: 0,
      exitDate: ''
    };
  }

  onStudentSaved(newStudent: any) {
    if (newStudent.id) {
      const index = this.students.findIndex(s => s.id === newStudent.id);
      if (index !== -1) {
        this.students[index] = { ...newStudent };
      }
    } else {
      newStudent.id = this.students.length + 1;
      this.students.push(newStudent);
    }

    this.selectedStudent = null; 
  }

}

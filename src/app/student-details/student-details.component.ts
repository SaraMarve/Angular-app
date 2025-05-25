import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Students } from '../students-list/students-list.component';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  @Input() student: any = {
    id: null,
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    active: true,
    avgGrade: 0,
    exitDate: ''
  };
  @Output() saveStudent = new EventEmitter<any>();

  onSave() {
    this.saveStudent.emit(this.student);
  }
}


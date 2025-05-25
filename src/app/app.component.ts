import { Component } from '@angular/core';
import { StudentsListComponent } from './students-list/students-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'האתר שלי';
  
    getGreeting(): string {
      const hour = new Date().getHours();
  
      if (hour < 12) {
        return 'בוקר טוב';
      } else if (hour < 18) {
        return 'צהריים טובים';
      } else {
        return 'ערב טוב';
      }
    }
  }
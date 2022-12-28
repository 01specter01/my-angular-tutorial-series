import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello World';
  text = 'I am writing on behalf of Angular';

  getMin(a, b) {
    if (a < b) {
      return a;
    }

    return b;
  }
}

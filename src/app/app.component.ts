import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  page = 'admins';
  title = 'admins page'
  changePage() {
    if (this.page == 'dashboards') {
      this.page = 'admins';
      this.title = 'admins page';
    }
    else {
      this.page = 'dashboards';
      this.title = 'dashboard page';
    }
  }
}

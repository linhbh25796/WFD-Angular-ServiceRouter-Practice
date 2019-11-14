import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dictionary';

  constructor(private router: Router) {
  }

  goToTimelines() {
    this.router.navigate(['/timelines']);
  }

}

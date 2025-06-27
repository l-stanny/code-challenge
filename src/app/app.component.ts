import { Component, inject } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet],
})
export class AppComponent {
  title = 'code-challenge';
  private router: Router = inject(Router);
}

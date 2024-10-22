import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ThemeToggleDemo';
  //Usually user settings/preferences API-Which will
  //fetch the saved settings.
  //User has saved DarkThem is ture else it is false
  isDarkTheme=true;
}

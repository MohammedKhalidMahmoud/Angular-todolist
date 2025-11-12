import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './services/language.service';
import { TranslateModule } from '@ngx-translate/core';
// import { TasksPageComponent } from './features/pages/tasks-page/tasks-page.component';
// import { RouterOutlet } from "../../node_modules/@angular/router/router_module.d";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],

})
export class App {
  protected readonly title = signal('todolist');
  constructor(private languageService: LanguageService){
    this.languageService.init();
  }
}

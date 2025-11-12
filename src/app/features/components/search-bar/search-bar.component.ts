import { Component, OnInit } from '@angular/core';
import { FormControl , ReactiveFormsModule} from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TodoService } from '../../../services/todo.service';
import { AuthService } from '../../../services/auth.service';
import { LanguageService } from '../../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
@Component({
    selector: 'app-search-bar',
    standalone: true,
    templateUrl: 'search-bar.component.html',
    styleUrls: ['search-bar.component.css'],
    imports: [ReactiveFormsModule, TranslateModule]
})



export class SearchbarComponent implements OnInit {
    constructor(public todoService: TodoService, private authService: AuthService, private languageService: LanguageService) { }
    isButtonShown=false;
    ngOnInit() { 
        this.searchControl.valueChanges
      .pipe(
        debounceTime(1000),         // wait 300ms after the last keystroke
        distinctUntilChanged()     // only emit if value actually changes
      )
      .subscribe((value) => {
        console.log('Searching for:', value);
        // ✅ Call your filtering function or API here
        this.todoService.search(value!);
      });
    }

    searchControl= new FormControl('');

    logout(){
      this.authService.logout();
    }

    toggle(){
      this.isButtonShown= !this.isButtonShown;
    }
}
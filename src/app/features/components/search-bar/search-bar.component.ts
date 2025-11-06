import { Component, OnInit } from '@angular/core';
import { FormControl , ReactiveFormsModule} from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TodoServices } from '../../../services/todo.service';
@Component({
    selector: 'app-search-bar',
    standalone: true,
    templateUrl: 'search-bar.component.html',
    styleUrls: ['search-bar.component.css'],
    imports: [ReactiveFormsModule]
})

export class SearchbarComponent implements OnInit {
    constructor(public todoServices: TodoServices) { }

    ngOnInit() { 
        this.searchControl.valueChanges
      .pipe(
        debounceTime(1000),         // wait 300ms after the last keystroke
        distinctUntilChanged()     // only emit if value actually changes
      )
      .subscribe((value) => {
        console.log('Searching for:', value);
        // ✅ Call your filtering function or API here
        this.todoServices.search(value!);
      });
    }

    searchControl= new FormControl('');




}
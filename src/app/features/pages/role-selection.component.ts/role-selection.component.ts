import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-role-selection',
    standalone: true,
    templateUrl: 'role-selection.component.html',
    styleUrls: ['role-selection.component.css']
})

export class RoleSelectionComponent implements OnInit {
    constructor(private authService: AuthService) { }

    ngOnInit() { 
        const userInput=prompt("Enter your role:");
        // console.log(userInput);
        this.authService.login(userInput!);
    }
}
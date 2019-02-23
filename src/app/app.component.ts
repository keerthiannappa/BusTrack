import { Component,NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './services';
import { User } from './models';
import { MatSnackBar } from '@angular/material';

@Component({ selector: 'app', templateUrl: 'app.component.html',styleUrls:['./app.component.css'] })
export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private snackBar:MatSnackBar,
        private zone :NgZone
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
    
}
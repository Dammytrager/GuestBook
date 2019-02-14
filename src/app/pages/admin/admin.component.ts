import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {SignInComponent} from '../../components/sign-in/sign-in.component';
import {select} from '@angular-redux/store';
import {Observable, Subscription} from 'rxjs';

@Component({
    selector: 'gb-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    @select() signedIn: Observable<boolean>;
    $signedIn$;

    constructor(private router: Router) {
        this.setState();
    }

    ngOnInit() {
        this.signedIn.subscribe((data) => {
           this.$signedIn$ = data;
        });
    }

    setState() {
        this.signedIn.subscribe((data) => {
            if (!data) {
                this.router.navigate(['/admin/sign-in']);
            }
        });
    }

}

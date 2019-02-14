import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {HttpService} from '../../service/http.service';
import {NgRedux} from '@angular-redux/store';
import {CHANGE_SIGN_IN, IAppState} from '../../store/store';

@Component({
    selector: 'gb-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

    faUser = faUser;

    get username() {
        return this.signinForm.get('username');
    }

    get password() {
        return this.signinForm.get('password');
    }

    isSubmit = false;
    feedback = false;
    isValid = false;
    signInBtnText = 'Sign In';
    feedbackMessage = 'feedbackMessage';
    _url = 'https://guestbook-be.herokuapp.com?action=login';

    signinForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    constructor(private fb: FormBuilder, private http: HttpService, private ngRedux: NgRedux<IAppState>) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.isSubmit = true;
        if (this.signinForm.valid) {
            this.isValid = true;
            this.signInBtnText = 'Signing In';
            const data = this.signinForm.value;
            this.http.post(this._url, data)
                .then((res: any) => {
                    this.isValid = false;
                    this.signInBtnText = 'Sign In';
                    console.log(res);
                    if (res.status_code === 200) {
                        this.ngRedux.dispatch({type: CHANGE_SIGN_IN, signedIn: true});
                    }
                    if (res.status_code === 401) {
                        this.feedback = true;
                        this.feedbackMessage = 'Email or Password not correct';
                    }
                })
                .catch((error) => {
                    console.log(error);
                    if (error.status === 0) {
                        this.feedback = true;
                        this.feedbackMessage = 'Check your connections';
                    }
                });
        }
    }

    closeFeedback() {
        this.feedback = false;
    }

}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {patternMatch} from 'src/app/Functions/myfunction';
import {HttpService} from '../../service/http.service';

const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const num = /^0\d{10}$/;

@Component({
    selector: 'gb-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    get lastname() {
        return this.gbForm.get('lastname');
    }

    get firstname() {
        return this.gbForm.get('firstname');
    }

    get email() {
        return this.gbForm.get('email');
    }

    get location() {
        return this.gbForm.get('location');
    }

    get mobile_no() {
        return this.gbForm.get('mobile_no');
    }

    feedbackMessage = 'feedbackMessage';
    feedback = false;
    isSubmit = false;
    isValid = false;
    isSuccess = true;
    submitBtnText = 'Submit';
    _url = 'https://guestbook-be.herokuapp.com?action=register';

    gbForm = this.fb.group({
        lastname: ['', [Validators.required]],
        firstname: ['', Validators.required],
        email: ['', [Validators.required, patternMatch(regex)]],
        location: ['', Validators.required],
        mobile_no: ['', [Validators.required, patternMatch(num)]]
    });

    constructor(private fb: FormBuilder, private http: HttpService) {
    }

    ngOnInit() {
    }

    closeFeedback() {
        this.feedback = false;
    }

    onSubmit() {
        this.isSubmit = true;
        if (this.gbForm.valid) {
            this.isValid = true;
            this.submitBtnText = 'Submitting';
            const data = this.gbForm.value;
            this.http.post(this._url, data)
                .then((res: any) => {
                    console.log(res);
                    this.isValid = false;
                    this.submitBtnText = 'Submit';
                    if (res.status_code == '200') {
                        this.isSuccess = true;
                        this.feedback = true;
                        this.feedbackMessage = 'You have successfully signed my guestbook, Thank you.';
                    } else if (res.status_code == '302') {
                        this.feedback = true;
                        this.feedbackMessage = 'This Email is already registered';
                        this.isSuccess = false;
                    } else if (res.status_code == '402') {
                        this.feedback = true;
                        this.feedbackMessage = 'This Email is does not exist';
                        this.isSuccess = false;
                    }
                })
                .catch((error) => {
                    console.log(error);
                    this.isValid = false;
                    this.submitBtnText = 'Submit';
                    if (error.status == 0) {
                        this.feedback = true;
                        this.feedbackMessage = 'Please Check your connection';
                        this.isSuccess = false;
                    }
                });
        }
    }
}

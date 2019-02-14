import {Component, OnInit, AfterViewInit, AfterContentInit, ViewChild, ElementRef} from '@angular/core';
import {HttpService} from '../../service/http.service';
import {setDate} from '../../Functions/myfunction';
import {faUsers} from '@fortawesome/free-solid-svg-icons';
import {HttpErrorResponse} from '@angular/common/http';

declare let $: any;

interface IGuest {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    location: string;
    mobile_no: string;
    date: Date;
}

@Component({
    selector: 'gb-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit, AfterViewInit, AfterContentInit {


    table;
    faUsers = faUsers;
    quest = false;
    Guests;
    Guest: IGuest;
    setDate = setDate;
    private url = 'https://guestbook-be.herokuapp.com?action=guests';
    showLoader = true;
    deleteBtnText = 'Delete Guest';
    showDeleteLoader = false;
    isDelete = false;
    feedback = false;
    feedbackMessage = 'Please check your connection';

    constructor(private http: HttpService) {
        this.getGuests(this.url);
         setInterval(() => {
            this.getGuests(this.url);
         }, 1000);
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }


    ngAfterContentInit(): void {
    }

    getGuests(url: string) {
         this.http.get(url)
            .then((data: any) => {
                this.Guests = data.data;
                this.initGuests();
                this.showLoader = false;
                return true;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    onSelect(guest: IGuest) {
        this.quest = false;
        this.Guest = guest;
    }

    initGuests() {
        $(document).ready(function () {
            $('.guestsTable').dataTable();
            $('.dataTables_length').addClass('bs-select');
            $('.guests').click(function () {
                $('#guestModal').modal('show');
            });
        });
    }

    deleteGuest(id) {
        this.deleteBtnText = 'Deleting';
        this.showDeleteLoader = true;
        this.quest = false;
        this.http.delete('https://guestbook-be.herokuapp.com?action=delete&id=' + id)
            .then((data) => {
                if (data.status === 200) {
                    console.log(data);
                    this.deleteBtnText = 'Delete Guest';
                    this.quest = false;
                    this.isDelete = true;
                    this.showDeleteLoader = false;
                }
            }).catch((err: HttpErrorResponse) => {
                if (err.status === 0) {
                    this.feedback = true;
                }
        });
    }

    closeFeedback() {
        this.feedback = false;
    }
}

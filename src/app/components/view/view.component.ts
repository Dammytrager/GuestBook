import {Component, OnInit, AfterViewInit, AfterContentInit, ViewChild, ElementRef} from '@angular/core';
import {HttpService} from '../../service/http.service';
import {setDate} from '../../Functions/myfunction';
import {faUsers} from '@fortawesome/free-solid-svg-icons';

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
    quest=false;
    Guests;
    Guest: IGuest;
    setDate = setDate;
    private url = '../../../assets/dummy/guests.json';

    constructor(private http: HttpService) {
    }

    ngOnInit() {
        this.getGuests(this.url);
    }

    ngAfterViewInit() {
        $(document).ready(function () {
            $('#guestsTable').dataTable();
            $('.dataTables_length').addClass('bs-select');
            $('.guests').click(function () {
                $('#guestModal').modal('show');
            });
        });
    }


    ngAfterContentInit(): void {
    }

    async getGuests(url: string) {
        await this.http.get(url)
            .then((data: any) => {
                console.log(data);
                this.Guests = data.data;
                return true;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    onSelect(guest: IGuest) {
        this.Guest = guest;
    }

}

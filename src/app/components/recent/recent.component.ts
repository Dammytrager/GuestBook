import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../service/http.service';
import {faHistory} from '../../../../node_modules/@fortawesome/free-solid-svg-icons';
import { setDate } from '../../Functions/myfunction';

@Component({
    selector: 'gb-recent',
    templateUrl: './recent.component.html',
    styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {

    faHistory = faHistory;
    showLoader = true;

    private url: string = '../../../assets/dummy/recent.json';
    recentActivities: any = [];
    setDate=setDate

    constructor(private http: HttpService) {
    }

    ngOnInit() {
        this.getRecentActivity(this.url);
        this.setDate(1548270618410);
    }

    getRecentActivity(url: string) {
        this.http.get(url)
            .then((data: any) => {
                console.log(data);
                this.recentActivities = data.data;
                this.showLoader = false;
            });
    }
}

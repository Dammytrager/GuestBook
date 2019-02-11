import {Component, OnInit, Input, OnDestroy} from '@angular/core';

@Component({
    selector: 'gb-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
    @Input() data;
    _dataDefaults = {
        type: 1
    };

    constructor() {

    }

    ngOnInit() {
        this.data = {...this._dataDefaults, ...this.data};
    }


    ngOnDestroy() {
    }
}

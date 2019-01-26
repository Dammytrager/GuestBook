import {Component, OnInit, Input, OnDestroy} from '@angular/core';

@Component({
    selector: 'gb-loader',
    template: `
    <div class="lds-css ng-scope"><div style="width:100%;height:100%" class="lds-dual-ring"><div></div></div><style type="text/css">@keyframes lds-dual-ring {
        0% {
          -webkit-transform: rotate(0);
          transform: rotate(0);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
        }
        @-webkit-keyframes lds-dual-ring {
        0% {
          -webkit-transform: rotate(0);
          transform: rotate(0);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
        }
        .lds-dual-ring {

        }
        .lds-dual-ring div {

        width: 30px;
        height: 30px;
        margin-top:5px;
        margin-right:auto;
        margin-left:auto;
        border-radius: 50%;
        border: 3px solid #000;
        border-color: #d6cb6f transparent #d6cb6f transparent;
        -webkit-animation: lds-dual-ring 1s linear infinite;
        animation: lds-dual-ring 1s linear infinite;
        }
        .lds-dual-ring {
        -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
        transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
        }
        </style></div>
    `,
    styles: [``]
})
export class LoaderComponent implements OnInit, OnDestroy {

    constructor() {

    }

    ngOnInit() {
    }


    ngOnDestroy() {
    }
}

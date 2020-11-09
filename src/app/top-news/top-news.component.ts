import { NewsService } from './../news.service';
import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { DialogComponent, PositionDataModel } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit , OnChanges {
@Input() topNews = {};
@Input() datastatus = false;
@ViewChild('ejDialog', {static: true}) ejDialog: DialogComponent;
// Create element reference for dialog target element.
@ViewChild('container',  { static: true }) container: ElementRef;
// The Dialog shows within the target element.
targetElement: HTMLElement;
isModal: boolean = true;
visible: boolean = false;
closeOnEscape: boolean =false;
inf;
dialogAnimation: Object = { effect: 'Zoom', duration: 400, delay: 0 };
animationSettings: Object = { effect: 'Zoom', duration: 400, delay: 0 };
public dialogWidth = '300px';
public contentData = 'dialog sample';
public position: PositionDataModel = { X: 'center', Y: 'center' };
  constructor(private news: NewsService) { }
  public pageSettings: PageSettingsModel;

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.topNews);
    if (this.topNews != '') {
    this.pageSettings = { pageSize: 7 };
   }
  }

  public onOpenDialog = function(event: any) {
    this.inf = event;
    console.log(this.inf);
    this.ejDialog.show();
  };

}

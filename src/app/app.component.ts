import { NewsService } from './news.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
@ViewChild('InputSearchValue', { static: true }) InputSearchValue: ElementRef;
@ViewChild('ejDateRangePicker' , {static: true}) ejDateRangePicker: ElementRef;
response: any = [];
status = false ;
dataa;
public dateValue = new Date().toISOString().split('T')[0];
  constructor(private news: NewsService) {}

  ngOnInit() {
    console.log(this.dateValue);
  }

  onGetNews() {
    //let InputValue = this.InputSearchValue.nativeElement.value;
    //console.log(this.ejDateRangePicker.closeEventArgs.date);
    this.getData(this.dateValue , this.dateValue)
  }

  getData( start , end ) {
    let InputValue = this.InputSearchValue.nativeElement.value;
    return this.news.getNews(InputValue , start , end).subscribe( result => {
      this.response = result;
      this.status = true ;
    });
  }

  onchange(event) {
    this.getData(event.startDate.toISOString().split('T')[0], event.endDate.toISOString().split('T')[0]);
    console.log(event.startDate.toISOString().split('T')[0]);
  }
}


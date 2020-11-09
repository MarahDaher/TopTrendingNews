import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNewsComponent } from './top-news/top-news.component';
import { NewsService } from './news.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatInputModule } from '@angular/material';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import {MatCardModule} from '@angular/material/card';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TopNewsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    GridModule,
    MatCardModule,
    DialogModule,
    ButtonModule,
    DateRangePickerModule
  ],
  providers: [NewsService, DatePipe ,
              PageService, SortService, FilterService, GroupService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }

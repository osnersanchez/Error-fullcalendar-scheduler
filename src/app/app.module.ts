import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, 
         MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, 
         MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, 
         MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
         MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, 
         MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, 
         MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, 
         MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule
        } from '@angular/material';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FullCalendarModule } from 'ng-fullcalendar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileSelectDirective } from 'ng2-file-upload';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ShareButtonModule } from '@ngx-share/button';
import { AgmCoreModule } from '@agm/core';
import { NgPipesModule } from 'ngx-pipes';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { CalendarModule } from 'angular-calendar';
import { SchedulerModule } from 'angular-calendar-scheduler';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    AngularFontAwesomeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    HttpClientInMemoryWebApiModule,
    FullCalendarModule,
    ScrollToModule.forRoot(),
    NgbModule,
    NgxMaterialTimepickerModule.forRoot(),
    ShareButtonModule.forRoot(),
    AgmCoreModule.forRoot(),
    NgPipesModule,
    NgxSpinnerModule,
    NgxDaterangepickerMd,
    CalendarModule.forRoot(),
    SchedulerModule.forRoot({ locale: 'es', headerDateFormat: 'daysRange' }),
  ],
  entryComponents: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

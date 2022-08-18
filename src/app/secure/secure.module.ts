import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';

import { DashComponent } from './dash.component';
import { CoursesModule } from "./courses/courses.module";
import { NotificationsModule } from "./notifications/notifications.module";
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    DashComponent,
    FormComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    SecureRoutingModule,
    CoursesModule,
    NotificationsModule,
    BrowserAnimationsModule,



  ],
})
export class SecureModule { }
